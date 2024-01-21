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
							
							//   file.name, // file will be saved as testBucket/contacts.csv
							// 	Body: e.target.result,
							
						} catch (e) {
							
							console.log(e);

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
