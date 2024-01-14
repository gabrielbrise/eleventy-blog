---
title: How to host your static website with AWS S3
description: A tutorial to remind myself of the steps I took to get a static website running with AWS S3 + Custom Domain + SSL Certificate
date: 2024-01-11
tags: ["post", "tutorial"]
---

# How to host your static website on AWS S3

## Introduction

Every now and then I decide to make a website simple enough to be static. Using the buckets from AWS S3 you can "quickly" set-up your website, however, to properly set-up it with a certificate and your own domain, there are a few extra steps that I always forget how to do. Thus, I'm making this article to help me in the future and hopefully help others too.

## Create a new S3 bucket

- Go to Amazon S3 > Buckets > Create bucket
- Choose your prefered AWS Region (probably not that important since we are going to have CDN with CloudFront)
- Untick "Block all public access" at "Block Public Access settings for this bucket"
  - After unticking it, tick "I acknowledge that the current settings might result in this bucket and the objects within becoming public."
- Create bucket

## Activate the S3 static website hosting

- With your newly created bucket, go to Properties and scroll down to the end of the page
- Follow the instructions to activate the static website hosting
- Now you should have an ugly link that goes to your http static website, yeey!
- The nexts steps will be for those who want https and your custom domain, but if what we achieved so far is enough you can stop here

## Getting an AWS Certificate for your website

- Go to AWS Certificate Manager > Certificates
- For some reason, I always make the mistake to create the certificate in the closest region to me, but only N.Virginia (us-east-1) works with CloudFront. So, check the top right corner of the screen and make sure you're at us-east-1 before creating your certificate
- Follow the instructions to get your certificate and fill your domain when asked for it

## Using Route 53 to use your custom domain

- Go to AWS Route 53 > Hosted zones > Create hosted zone
- Follow the instructions and create hosted zone
- Inside there should be a Record of type NS with a bunch of AWS DNS links
- Go to your domain provider and fill those in the custom DNS configuration, this will allow AWS to route stuff for you while using your custom domain

## Create a CloudFront distribution

- Go to AWS CloudFront > Distributions > Create distribution
- At Origin > Origin domain, choose your S3 bucket
- Check the options for anything that may interested you and then click "Create distribution"
- Now you should have another link that leads to your website

## Configure your custom domain back at Route 53

- Back at your hosted zone at Route 53, click "Create record"
- Select Record Type A
- Tick "Alias", this will enable you to Route traffic to your CloudFront distribution
- Choose your distribution
- Create record
- Go make yourself a sandwich and hopefully in a few minutes you'll be able to reach your website throuh your custom domain with HTTPS
