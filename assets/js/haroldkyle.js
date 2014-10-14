// disqus
if( document.getElementById( 'disqus_thread' ) ){
	var disqus_shortname = 'haroldkyle'; 
	(function() {
	    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	})();
}
// menu
(function(document) {
	var toggle = document.querySelector('.sidebar-toggle');
	var sidebar = document.querySelector('#sidebar');
	var checkbox = document.querySelector('#sidebar-checkbox');

	document.addEventListener('click', function(e) {
	  var target = e.target;

	  if(!checkbox.checked ||
	     sidebar.contains(target) ||
	     (target === checkbox || target === toggle)) return;

	  checkbox.checked = false;
	}, false);
})(document);