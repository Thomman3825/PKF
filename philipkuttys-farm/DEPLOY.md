# AWS Deployment Guide for Philipkutty's Farm

## Prerequisites
- AWS CLI installed and configured (`aws configure`)
- AWS account with S3, CloudFront, Route 53, ACM, SES access

## Step 1: Build the React App

```bash
npm run build
```

Output is in the `/dist` folder.

## Step 2: Create S3 Bucket

1. Go to AWS S3 Console
2. Create bucket named: `philipkuttysfarm.com`
3. Region: `ap-south-1` (Mumbai)
4. Uncheck "Block all public access"
5. Enable Static Website Hosting:
   - Index document: `index.html`
   - Error document: `index.html` (critical for React Router)

## Step 3: Set S3 Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::philipkuttysfarm.com/*"
  }]
}
```

## Step 4: Upload Build to S3

```bash
aws s3 sync ./dist s3://philipkuttysfarm.com --delete
```

## Step 5: Request SSL Certificate (ACM)

1. Go to AWS Certificate Manager in **us-east-1** (required for CloudFront)
2. Request public certificate for: `philipkuttysfarm.com` and `*.philipkuttysfarm.com`
3. Validate via DNS (add the CNAME records to Route 53)

## Step 6: Create CloudFront Distribution

1. Go to CloudFront Console → Create Distribution
2. Origin Domain: your S3 website endpoint (e.g. `philipkuttysfarm.com.s3-website.ap-south-1.amazonaws.com`)
3. Viewer Protocol Policy: **Redirect HTTP to HTTPS**
4. Alternate domain names: `philipkuttysfarm.com`, `www.philipkuttysfarm.com`
5. SSL Certificate: select the ACM cert from Step 5
6. Default Root Object: `index.html`
7. Add Custom Error Response:
   - HTTP Error Code: `404`
   - Response Page Path: `/index.html`
   - HTTP Response Code: `200`
   *(This is essential for React Router to work)*

## Step 7: Update DNS in Route 53

1. Go to Route 53 → Hosted Zones → `philipkuttysfarm.com`
2. Edit the A record:
   - Alias: Yes
   - Route traffic to: CloudFront distribution
3. Add/edit CNAME for www:
   - Name: `www`
   - Value: your CloudFront domain (e.g. `d1234abcd.cloudfront.net`)

## Step 8: Optional — Lambda + API Gateway for Forms

1. Create Lambda function (Node.js 20.x runtime)
2. Code: receive POST body, send email via AWS SES (verify `philipkuttysfarm@gmail.com` in SES first)
3. Create API Gateway REST API:
   - `POST /contact`
   - `POST /reservation`
4. Enable CORS for `https://philipkuttysfarm.com`
5. Update `.env.production`:
   ```
   VITE_API_URL=https://your-api-id.execute-api.ap-south-1.amazonaws.com/prod
   ```

## Step 9: Invalidate CloudFront Cache After Each Deploy

```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Ongoing Deployments

```bash
npm run build && \
aws s3 sync ./dist s3://philipkuttysfarm.com --delete && \
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```
