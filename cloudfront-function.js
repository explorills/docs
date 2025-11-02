/**
 * CloudFront Function: Append index.html to directory requests
 * 
 * AWS Best Practice for serving static websites from S3 via CloudFront
 * This is the standard, battle-tested solution used by millions of production sites
 * 
 * Purpose:
 * - Rewrites requests from /path/ to /path/index.html
 * - Enables clean URLs without .html extensions
 * - Works seamlessly with Origin Access Control (OAC)
 * 
 * Deploy Instructions:
 * 1. AWS Console → CloudFront → Functions
 * 2. Create function: "append-index-html"
 * 3. Copy this code and publish
 * 4. Associate with your CloudFront distribution (Viewer Request)
 * 
 * Cost: Free (no additional charges)
 * Performance: Zero latency impact (runs at edge locations)
 */

function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // If URI ends with /, append index.html
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    // If URI has no file extension, append /index.html
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }
    
    return request;
}
