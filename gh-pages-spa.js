// This script is injected into the HTML during build to handle GitHub Pages SPA routing
// It's based on https://github.com/rafgraph/spa-github-pages
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(
      null, 
      null,
      l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))
