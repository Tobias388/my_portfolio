window.addEventListener('scroll', function() {
	let header = document.getElementById('header');
	header.classList.toggle('active', window.scrollY > 125 , 'px');
});