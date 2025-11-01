// Open external links in new tab
document.addEventListener('DOMContentLoaded', function() {
  // Get all links
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Check if link is external (not starting with # or /)
    if (href && !href.startsWith('#') && !href.startsWith('/') && (href.startsWith('http://') || href.startsWith('https://'))) {
      // Check if it's not an internal docs link
      if (!href.includes('docs.explorills.com') && !href.includes('localhost') && !href.includes('127.0.0.1')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    }
  });
});
