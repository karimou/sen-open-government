import { 
    S3Client, 
    CreateMultipartUploadCommand,
    AbortMultipartUploadCommand,
    UploadPartCommand,
    CompleteMultipartUploadCommand
     
} from '@aws-sdk/client-s3';


const partSize = 6 * 1024 * 1024; //6mb; min is 5mb and max is 5gb
		
export const uploadMultipart = async (fileName: string, base64Str: string) => {
	
    const s3Client = new S3Client({
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY as string,
            secretAccessKey: process.env.AWS_SECRET_KEY as string,
        },
        region: 'eu-west-2'
    });
    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    
    let uploadId;
    
    const buffer = Buffer.from(base64Str, 'base64');


    try {

        const multipartUpload = await s3Client.send(new CreateMultipartUploadCommand({
            Bucket: bucketName,
            Key: fileName
        }));

        uploadId = multipartUpload.UploadId;

        const numParts = Math.ceil(buffer.length / partSize);

        const uploadPromises = [];

        for (let i = 0; i < numParts; i++) {
            let start = i * partSize;
            let end = start + partSize;
            uploadPromises.push(s3Client.send(new UploadPartCommand({
                Bucket: bucketName,
                Key: fileName,
                UploadId: uploadId,
                Body: buffer.subarray(start, end),
                PartNumber: i + 1
            })));

        }

        const uploadResults = await Promise.all(uploadPromises);

        return await s3Client.send(new CompleteMultipartUploadCommand({
            Bucket: bucketName,
            Key: fileName,
            UploadId: uploadId,
            MultipartUpload: {
                Parts: uploadResults.map((Etag, i) => ({
                    Etag,
                    PartNumber: i + 1
                }))
            }
        }));


    } catch (e) {
        console.log(e);
        if (!uploadId) return;
        await s3Client.send(new AbortMultipartUploadCommand({
            Bucket: bucketName,
            Key: fileName,
            UploadId: uploadId
        }));

    }
}
