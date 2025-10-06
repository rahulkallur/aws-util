
// list.js
const { S3Client, ListBucketsCommand, GetBucketLocationCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({
  region:"ap-south-1"
});

async function main() {
  let command = new ListBucketsCommand()

  let data = await client.send(command)
  console.log("Data:",data)
}

main()
