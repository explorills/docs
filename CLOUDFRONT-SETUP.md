# CloudFront Function Setup Guide

## The Problem
S3 + CloudFront with Origin Access Control (OAC) doesn't automatically serve `index.html` files for directory requests, causing "Access Denied" errors.

**Example:**
- ✅ Works: `https://docs.explorills.com/` → serves `/index.html`
- ❌ Fails: `https://docs.explorills.com/core-objectives/` → tries to access directory

---

## The Solution: CloudFront Function

This is **AWS's recommended, battle-tested solution** for static websites. It's:
- ✅ Used by millions of production sites (including AWS's own documentation)
- ✅ Official AWS best practice
- ✅ Zero cost, zero latency impact
- ✅ Works perfectly with Origin Access Control (OAC)
- ✅ Industry standard for MkDocs, Hugo, Jekyll, Gatsby, etc.

---

## Step-by-Step Deployment

### Step 1: Create CloudFront Function

1. **Open AWS Console** → **CloudFront** → **Functions**
2. Click **"Create function"**
3. **Function details:**
   - Name: `append-index-html`
   - Description: `Append index.html to directory requests for static site`
4. Click **"Create function"**

### Step 2: Add Function Code

1. In the **"Build"** tab, replace the default code with the code from `cloudfront-function.js`
2. Click **"Save changes"**
3. Click **"Test"** tab to test (optional but recommended):
   - Event type: `Viewer Request`
   - URI: `/core-objectives/`
   - Expected result: URI should be `/core-objectives/index.html`
4. Go to **"Publish"** tab
5. Click **"Publish function"**

### Step 3: Associate with CloudFront Distribution

#### For Staging (staging-all-access-docs.explorills.com):

1. **CloudFront** → **Distributions**
2. Select your staging distribution
3. Go to **"Behaviors"** tab
4. Select the default behavior (`*` pattern) → Click **"Edit"**
5. Scroll to **"Function associations"** section
6. Under **"Viewer request"**:
   - Function type: **CloudFront Functions**
   - Function ARN/Name: Select `append-index-html`
7. Click **"Save changes"**
8. Wait for deployment (Status: "Deploying" → "Deployed", ~5-10 minutes)

#### For Production (docs.explorills.com):

Repeat the same steps for your production distribution.

### Step 4: Invalidate CloudFront Cache

After deployment completes:

1. Go to **"Invalidations"** tab
2. Click **"Create invalidation"**
3. Object paths: `/*`
4. Click **"Create invalidation"**

---

## Testing

After invalidation completes (~2-5 minutes), test your links:

```bash
# Should return 200 OK
curl -I https://staging-all-access-docs.explorills.com/core-objectives/
curl -I https://staging-all-access-docs.explorills.com/distribution-framework/distribution-master-map/
curl -I https://staging-all-access-docs.explorills.com/tno-cards/tno-introduction/

# Production
curl -I https://docs.explorills.com/core-objectives/
```

All should return `200 OK` status! ✅

---

## How It Works

### Before (Without Function):
```
Request:  /core-objectives/
S3 looks for: A directory (not allowed)
Result: 403 Access Denied
```

### After (With Function):
```
Request:  /core-objectives/
CloudFront Function: /core-objectives/ → /core-objectives/index.html
S3 looks for: /core-objectives/index.html (file exists!)
Result: 200 OK
```

---

## Why This Is The Right Solution

### ✅ Professional & Battle-Tested
- Used by AWS for their own documentation sites
- Standard solution for MkDocs Material sites
- Documented in AWS best practices guides

### ✅ Performance
- Runs at CloudFront edge locations (closest to users)
- No additional latency
- No Lambda@Edge costs

### ✅ Security
- Works with Origin Access Control (OAC)
- Maintains S3 bucket security
- No public bucket access needed

### ✅ Maintainability
- Simple, single-purpose function
- Easy to update or modify
- Clear separation of concerns

---

## Alternative Solutions (Not Recommended)

### ❌ Option: Use S3 Static Website Hosting Endpoint
**Why not:**
- Requires making bucket publicly accessible
- Loses OAC security benefits
- Not recommended for production

### ❌ Option: Lambda@Edge
**Why not:**
- Same functionality as CloudFront Functions
- More expensive (Lambda invocation costs)
- Slower (runs in regions, not edge)
- More complex to maintain

### ❌ Option: Disable `use_directory_urls` in MkDocs
**Why not:**
- Breaks clean URLs (adds `.html` to everything)
- Poor SEO
- Bad user experience
- Not standard practice

---

## Deployment Workflow

After setting this up once, your workflow is simple:

1. Make documentation changes locally
2. Commit and push to GitHub
3. GitHub Actions builds and deploys to S3
4. (Optional) Create CloudFront invalidation for immediate updates

**That's it!** The CloudFront Function runs automatically for all requests.

---

## Troubleshooting

### Issue: Still getting 403 errors after deployment

**Solution:**
1. Check CloudFront distribution status is "Deployed"
2. Create invalidation for `/*`
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
4. Wait a few more minutes for global propagation

### Issue: Function not working

**Solution:**
1. Verify function is published (not just saved)
2. Check function is associated with correct distribution
3. Verify association is on "Viewer Request" (not Response)
4. Test function in CloudFront Functions console

### Issue: Works on staging but not production

**Solution:**
1. Repeat Step 3 for production distribution
2. Create separate invalidation for production
3. Both distributions need the function associated

---

## Cost Analysis

- **CloudFront Function**: FREE (included with CloudFront)
- **S3 Storage**: ~$0.023 per GB per month
- **CloudFront Data Transfer**: First 1TB/month has generous free tier
- **Total for typical docs site**: < $5/month

---

## References

- [AWS CloudFront Functions Documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html)
- [AWS Static Website Hosting Best Practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-static-website-on-aws.html)
- [MkDocs Material Deployment Guide](https://squidfunk.github.io/mkdocs-material/publishing-your-site/)

---

## Support

If you encounter issues:
1. Check CloudFront distribution status
2. Review function logs in CloudWatch (if enabled)
3. Verify S3 bucket has all required files
4. Test locally with `mkdocs serve` first
