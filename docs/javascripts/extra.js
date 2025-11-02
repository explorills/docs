// Open external links in new tab
// Battle-tested practice: External links from documentation sites open in new tabs
// to prevent users from losing their place in the documentation
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Skip if href is empty or starts with # (anchor links)
    if (!href || href.startsWith('#')) {
      return;
    }
    
    // Skip relative links (documentation navigation) - these should always stay in same tab
    if (!href.startsWith('http://') && !href.startsWith('https://')) {
      return;
    }
    
    // Skip mailto and tel links
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }
    
    try {
      const linkUrl = new URL(href);
      const hostname = linkUrl.hostname;
      const currentHostname = window.location.hostname;
      
      // Check if link is to the same domain as current page
      const isInternalDomain = hostname === currentHostname || 
                               hostname === 'docs.explorills.com' || 
                               hostname === 'staging-all-access-docs.explorills.com';
      
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

