const { exec } = require("child_process");
require("dotenv").config();

const bash = `aws s3 sync dist/ s3://${process.env.AWS_S3_BUCKET} --acl public-read && aws cloudfront create-invalidation --distribution-id ${process.env.AWS_CLOUDFRONT_ID} --paths '/*'`;

exec(bash, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});