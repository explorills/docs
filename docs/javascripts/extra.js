// Open external links in new tab
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.md-content a[href^="http"]');
  
  links.forEach(link => {
    const href = link.href;
    const currentDomain = window.location.hostname;
    
    try {
      const linkUrl = new URL(href);
      // Only open in new tab if it's a different domain
      if (linkUrl.hostname !== currentDomain && 
          !linkUrl.hostname.includes('docs.explorills.com') && 
          !linkUrl.hostname.includes('localhost') && 
          !linkUrl.hostname.includes('127.0.0.1')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    } catch (e) {
      // Invalid URL, skip
    }
  });
});
