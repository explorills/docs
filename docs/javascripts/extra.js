// Open external links in new tab
// Battle-tested practice: External links from documentation sites open in new tabs
// to prevent users from losing their place in the documentation
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Skip if not an http/https link (anchors, mailto, etc.)
    if (!href || (!href.startsWith('http://') && !href.startsWith('https://'))) {
      return;
    }
    
    try {
      const linkUrl = new URL(href);
      const hostname = linkUrl.hostname;
      
      // Check if link is to docs.explorills.com or staging domain
      const isInternalDomain = hostname === 'docs.explorills.com' || 
                               hostname === 'staging-all-access-docs.explorills.com' ||
                               hostname === 'localhost' ||
                               hostname === '127.0.0.1';
      
      // If NOT internal domain, open in new tab
      if (!isInternalDomain) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    } catch (e) {
      // Invalid URL, skip
      console.debug('Invalid URL:', href);
    }
  });
});

