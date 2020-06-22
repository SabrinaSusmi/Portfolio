
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})


// function overlay() {
// 	var elements = document.getElementsByClassName('portfolio__picOverlay');
// 	for(i=0; i<elements.length; i++) {
//  		elements[i].className = "overlay";
//  	}
// }

// function none() {

// }

