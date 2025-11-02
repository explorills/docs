# URGENT: Manual Steps Required in AWS Console

## ⚠️ THE ISSUE
Your internal links are broken because S3 doesn't serve index.html for directories.
This is NORMAL and EXPECTED without the CloudFront Function deployed.

## ✅ THE SOLUTION (5 Minutes)

### Step 1: Copy the Function Code
Copy this code (lines 23-36 from cloudfront-function.js):

```javascript
function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }
    
    return request;
}
```

### Step 2: Go to AWS Console

1. Open: https://console.aws.amazon.com/cloudfront/v3/home#/functions
2. Click: **"Create function"**
3. Name: `append-index-html`
4. Click: **"Create function"**

### Step 3: Paste Code

1. In the **"Function code"** editor, DELETE all existing code
2. PASTE the code you copied above
3. Click: **"Save changes"** (bottom right)
4. Click: **"Publish"** tab at the top
5. Click: **"Publish function"** button

### Step 4: Associate with CloudFront Distribution

1. Go to: https://console.aws.amazon.com/cloudfront/v3/home#/distributions
2. Click on your **staging-all-access-docs.explorills.com** distribution
3. Click: **"Behaviors"** tab
4. Select the row with Path pattern `*` (default)
5. Click: **"Edit"**
6. Scroll down to **"Function associations"**
7. Under **"Viewer request"**:
   - Function type: **CloudFront Functions**
   - Function ARN: Select **append-index-html**
8. Click: **"Save changes"**

### Step 5: Wait and Test

1. Wait 5-10 minutes for deployment to complete
2. Go to: https://console.aws.amazon.com/cloudfront/v3/home#/distributions
3. Check Status = **"Deployed"** (not "Deploying")
4. Test: https://staging-all-access-docs.explorills.com/core-objectives/

**It should work now!** ✅

### Step 6: Repeat for Production

Once staging works, repeat Steps 4-5 for **docs.explorills.com** distribution.

---

## 🔍 Why This Happens

**WITHOUT CloudFront Function:**
```
Browser requests: /core-objectives/
S3 receives: /core-objectives/ (tries to access folder)
S3 response: 403 Access Denied
```

**WITH CloudFront Function:**
```
Browser requests: /core-objectives/
CloudFront Function: Changes to /core-objectives/index.html
S3 receives: /core-objectives/index.html (file exists!)
S3 response: 200 OK ✅
```

---

## ⏱️ Quick Checklist

- [ ] Copy function code
- [ ] AWS Console → CloudFront → Functions
- [ ] Create function: append-index-html
- [ ] Paste code, Save, Publish
- [ ] Go to Distributions
- [ ] Edit staging distribution Behaviors
- [ ] Associate function with Viewer Request
- [ ] Wait 5-10 minutes
- [ ] Test links

---

## 📞 If It Still Doesn't Work

1. Clear browser cache (Ctrl+Shift+R)
2. Check CloudFront distribution status = "Deployed"
3. Create invalidation: `/*`
4. Wait 5 more minutes
5. Test in incognito/private window

---

## 💡 This is Standard Practice

Every static site on CloudFront + S3 needs this:
- AWS Documentation sites use this
- GitHub Pages equivalent solution
- Netlify does this automatically
- Vercel does this automatically

We're doing it manually because we control our own CloudFront.
