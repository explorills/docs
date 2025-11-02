// Custom JavaScript for Explorills Documentation

// Make repository link open in new tab
document.addEventListener('DOMContentLoaded', function() {
  var repoLink = document.querySelector('a[href*="github.com/explorills/docs"]');
  if (repoLink) {
    repoLink.setAttribute('target', '_blank');
    repoLink.setAttribute('rel', 'noopener noreferrer');
  }
});
