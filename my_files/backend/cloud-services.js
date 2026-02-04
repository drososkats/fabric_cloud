const amqp =  require('amqplib');
const Minio = require('minio');

//connect with RabbitMQ
async function connectRabbitMQ(){
    try{
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();
        console.log("✅ RabbitMQ Connected successfully!");
        return channel;
    }catch (error){
        console.error("❌ RabbitMQ Connection Error:", error.message);
    }
}

//init with MinIO
const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT,
    port: parseInt(process.env.MINIO_PORT),
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});

async function initMinIO() {
    try {
        const exists = await minioClient.bucketExists(process.env.MINIO_BUCKET);
        if (!exists) {
            await minioClient.makeBucket(process.env.MINIO_BUCKET);
            console.log(`✅ MinIO Bucket '${process.env.MINIO_BUCKET}' created!`);
        } else {
            console.log("✅ MinIO Bucket already exists.");
        }
    } catch (error) {
        console.error("❌ MinIO Init Error:", error.message);
    }
}

module.exports = { connectRabbitMQ, initMinIO, minioClient };