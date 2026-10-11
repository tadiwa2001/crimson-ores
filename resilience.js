(function(){
 'use strict';
 window.CO_DEV=['localhost','127.0.0.1','[::1]'].includes(location.hostname);
 document.addEventListener('error',function(e){var i=e.target;if(!(i instanceof HTMLImageElement))return;if(i.dataset.fallback){i.removeAttribute('src');return;}i.dataset.fallback='true';i.src='assets/images/image-unavailable.svg';},true);
 window.addEventListener('load',function(){
 document.querySelectorAll('main .site-container,footer .site-container').forEach(function(c){var r=document.createElement('div'),col=document.createElement('div');r.className='row justify-content-center';col.className='col-12 col-lg-10 col-xl-11';if(c.classList.contains('problems-grid')){c.classList.remove('problems-grid');col.classList.add('problems-grid');}while(c.firstChild)col.appendChild(c.firstChild);r.appendChild(col);c.appendChild(r);});
 document.querySelectorAll('.focus-card').forEach(function(c){c.tabIndex=0;});
 if(!window.CrimsonOres||!Array.isArray(window.CrimsonOres.projects)){var e=document.getElementById('project-load-error');if(e)e.hidden=false;var f=document.getElementById('featured-grid');if(f)f.innerHTML='<p>Project information is currently unavailable. <a href="projects.html">View Innovations</a></p>';document.querySelectorAll('.reveal').forEach(function(n){n.classList.add('in-view');});}
 });
})();
