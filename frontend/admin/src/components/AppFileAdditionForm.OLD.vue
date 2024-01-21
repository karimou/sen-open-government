<template>
	<v-card>
		<v-card-title
			class="headline grey lighten-2"
			primary-title
		>
			{{ $t('addFile.title') }}
		</v-card-title>

		<v-card-text>	
            <v-form v-model="valid">
            	<v-layout row wrap>
            		<v-flex md6>
                        <v-text-field
                            v-model="alias"
                            :type="'text'"
                            :label="$t('addFile.alias')"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-form>
			<div class="drop-zone">
				<v-progress-linear v-if="uploading" v-model="progress"></v-progress-linear>
				<input type="file" @change="onFileSelected"/>
				<div class="content">
					<v-icon large>fa-arrow-down</v-icon>
					<h4>{{ $t('addFile.dropZone.title') }}</h4>
				</div>
			</div>	  		
			<ul class="text-xs-right list-unstyled">
				<li v-for="hint in $t('addFile.dropZone.hints')">{{ hint }}</li>
			</ul>
			<v-btn
				color="error"
				v-if="uploading"
				text
				@click="abortUpload()"
			>
				{{ $t('addFile.dropZone.abort') }}
			</v-btn>
		</v-card-text>
	</v-card>
</template>
<script>

	import bus from '@/services/bus.js';
	import Api from '@/services/api.js';
	//import 'vue2-dropzone/dist/vue2Dropzone.min.css';
	
	import S3 from 'aws-sdk/clients/s3';

	const AWS_S3_BUCKET = 'maad-vod-source-1cad35visps8g'
	const s3 = new S3({
		accessKeyId: 'AKIAIXHWIFQGAJX6PSFA',
		secretAccessKey: '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',
		region: 'eu-west-2'
	}); //IMPROVE THIS BY USING AN IDENTITY POOL INSTEAD OF SECRET KEYS

	export default {
		name: 'AddFile',
		data: () => ({
			fileName: '',
			alias: '',
			uploading: false,
			progress: 0
		}),
		created() {
      		let vm  = this;
		},
		methods: {
			onFileSelected(event) {
   				var f =  event.target.files[0];
      			var reader = new FileReader();
      			let vm  = this;
      			vm.uploading = true;
      			reader.onload = (function (file) {
					return function(e) {
						try {
			      			let [extension, type, mimetype] = getFileParams(getFileSignature(e.target.result));
			      			console.log([extension, type, mimetype])
			      			//if (!extension) {throw 'Type of file not supported'}
			      			if (file.size > 200000000) {throw 'File is too big'}
							let params = {
								Bucket: AWS_S3_BUCKET, // pass your bucket name
								Key: file.name, // file will be saved as testBucket/contacts.csv
								Body: e.target.result,
					  			ACL: 'public-read'
					     	};
					     	vm.request = s3.upload(params);
					     	vm.request
								.on('httpUploadProgress', event => {
									vm.progress = Math.round(event.loaded / event.total * 100);
								})
								.send((err, data) => {
									if (err) {
										vm.handleUploadComplete(err);
									} else {
										let media = {
											name: file.name, 
											alias: file.name, 
											location: data.Location, 
											mimetype: file.type,
											type: type || 'file',
											alias: vm.alias,
											extension: extension,
											size: file.size
										}
										Api.medias.save(media)
											.then(res => {
												if (res.status === 'OK') {
													vm.handleUploadComplete(res)
												} else {
													vm.handleUploadComplete(null, 'error received from server')
												}
											})
											.catch(e => vm.handleUploadComplete(null, e))
									}
								});
						} catch (e) {
							vm.handleUploadComplete(e);
						}
					};
				})(f);
      			reader.readAsArrayBuffer(f);

			},
			abortUpload() {
				if (this.request) {
					this.request.abort();
					this.handleUploadComplete('Upload aborted by user');
				}
			},
			handleUploadComplete(resp, err) {
				this.uploading = false;
				this.progress = 0;
				if (err) {
                    bus.$emit('error', err);
				} else {
					bus.$emit('refresh_medias');
                    bus.$emit('success', 'Media file added succesfully');
                    bus.$emit('file_added', resp.data);
				}
			}
		}
	}
	const getFileSignature = (file) => {
		const uint = new Uint8Array(file.slice(0, 12))
        let bytes = []
        uint.forEach((byte) => {
            bytes.push(byte.toString(16))
        })
        return bytes.join('').toUpperCase()
	}
	const containsHash = (signature, hashes) => {
		hashes = hashes || [];
		for (let i = 0; i < hashes.length; i++) {
			let hash = hashes[i]
			if (signature.includes(hash)) {
				return true
			}
		}
	};
	const getFileParams = (signature) => {
		if (containsHash(signature, ['89504E47'])) {
            
            return ['png', 'image', 'image/png']

		} else if (containsHash(signature, ['47494638'])) {
            
            return ['gif', 'image', 'image/gif']
		
		} else if (containsHash(signature, ['FFD8FFDB', 'FFD8FFE0', 'FFD8FFE1', 'FFD8FFE2', 'FFD8FFE3', 'FFD8FFE8'])) {
            
            return ['jpeg', 'image', 'image/jpeg']
		
		} else if (containsHash(signature, ['1A45DFA3'])) {
            
            return ['mkv', 'video', 'video/x-matroska']
		
		} else if (containsHash(signature, ['667479706973', '667479704D53'])) {
           	
           	return ['mp4', 'video', 'video/mp4']

		} else if (containsHash(signature, ['FFFB90', '494433'])) {
            
            return ['mp3', 'audio', 'audio/mp3']

		} else if (containsHash(signature, ['667479703367'])) {
            
            return ['3gp', 'audio', 'audio/3gp']

		} else if (containsHash(signature, ['474946383961','474946383761'])) {
            return ['gif', 'image', 'image/gif']

		} else if (containsHash(signature, ['255044462d'])) {
            return ['pdf', 'file', 'application/pdf']

		} else if (containsHash(signature, ['52494646']) && containsHash(signature, ['57415645'])) {
           	return ['wav', 'audio', 'audio/x-wav']

		} else if (containsHash(signature, ['52494646']) && containsHash(signature, ['41564920'])) {
           	return ['avi', 'video', 'video/x-msvideo']

		} else {
			return []
		}
    }
</script>

<style scoped>

	.drop-zone {
		width: 100%;
		height: 150px;
		border: 1px dashed lightgray;
		position: relative;
		margin: 15px;
	}
	.drop-zone .content {
		margin-top: 50px;
    	font-size: larger;
    	text-align: center;
	}
	.drop-zone input[type="file"] {
	    opacity: 0;
	    width: 100%;
	    position: absolute;
	    height: 100%;
	    left: 0;
	}
</style>
