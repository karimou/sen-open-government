"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMultipart = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const partSize = 6 * 1024 * 1024; //6mb; min is 5mb and max is 5gb
const uploadMultipart = (fileName, buffer) => __awaiter(void 0, void 0, void 0, function* () {
    if (!buffer)
        return;
    const s3Client = new client_s3_1.S3Client({
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
        },
        region: process.env.AWS_REGION
    });
    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    let uploadId;
    try {
        const multipartUpload = yield s3Client.send(new client_s3_1.CreateMultipartUploadCommand({
            Bucket: bucketName,
            Key: fileName
        }));
        uploadId = multipartUpload.UploadId;
        const numParts = Math.ceil(buffer.length / partSize);
        const uploadPromises = [];
        for (let i = 0; i < numParts; i++) {
            let start = i * partSize;
            let end = start + partSize;
            uploadPromises.push(s3Client.send(new client_s3_1.UploadPartCommand({
                Bucket: bucketName,
                Key: fileName,
                UploadId: uploadId,
                Body: buffer.subarray(start, end),
                PartNumber: i + 1
            })));
        }
        const uploadResults = yield Promise.all(uploadPromises);
        return yield s3Client.send(new client_s3_1.CompleteMultipartUploadCommand({
            Bucket: bucketName,
            Key: fileName,
            UploadId: uploadId,
            MultipartUpload: {
                Parts: uploadResults.map(({ ETag }, i) => ({
                    ETag,
                    PartNumber: i + 1
                }))
            }
        }));
    }
    catch (e) {
        console.log(e);
        if (!uploadId)
            return;
        yield s3Client.send(new client_s3_1.AbortMultipartUploadCommand({
            Bucket: bucketName,
            Key: fileName,
            UploadId: uploadId
        }));
    }
});
exports.uploadMultipart = uploadMultipart;
