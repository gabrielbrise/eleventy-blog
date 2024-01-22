---
title: Easily deploying your static website to S3 locally
description: Learn how to easily deploy your static website project to S3 + clearing Cloudfront cache in a simple 'npm run deploy' script.
timestamp: 1705355782238
tags: ["post", "tutorial"]
layout: post
---

# Easily deploying your static website to S3 locally

## Introduction

This guide serves as a follow-up to the [How to Host Your Static Website with AWS S3 post](/aws-s3-static-website-tutorial). After configuring your website on S3 with a CloudFront CDN, you might find using the AWS web interface to upload new files and clearing the CloudFront CDN less intuitive and somewhat cumbersome.

Therefore, I will demonstrate how to create a simple JavaScript file that automates these tasks using the AWS CLI, streamlining the process for you.

## Install AWS CLI and authenticate yourself

- Install AWS CLI
  - [AWS CLI - Install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Get your credentials and authenticate
  - [AWS CLI - Quickstart](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html)

## Create a javascript file to automate the CLI

```js
const { exec } = require("child_process");
require("dotenv").config();

const bash = `aws s3 sync ${process.env.BUILD_PATH} s3://${process.env.AWS_S3_BUCKET} --acl public-read && aws cloudfront create-invalidation --distribution-id ${process.env.AWS_CLOUDFRONT_ID} --paths '/*'`;

exec(bash, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});
```

- BUILD_PATH: folder where your static website build is located
- AWS_S3_BUCKET: name of the S3 bucket
- AWS_CLOUDFRONT_ID: id of your Cloudfront project, can be found in the list of Cloudfront projects in AWS website UI.

## Add the script to your package.json

- Assuming the 'deploy.js' script is located in the same folder as your 'package.json', simply add the following script line

```js
  "scripts": {
    "deploy": "node deploy"
  },
```

- Run 'npm run deploy' and check your recently updated website going live in a few seconds

## Final considerations

This covers the basics of uploading to S3 and invalidating your cache at Cloudfront. In the future, I aim to create a more advanced guide that includes instructions on how to upload only modified files to S3 and invalidate the cache specifically for those modified files. When your project is filled with dependencies, featuring multiple folders, files, etc., invalidating the cache for everything can lead to unnecessary expenses with AWS services.
