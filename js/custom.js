const section=document.querySelectorAll('section');
const navli=document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll',()=>{
	let current='';
	section.forEach(section=> {
		const sectionTop=section.offsetTop;
		const sectionHeight=section.clientHeight;
		if(pageYOffset >= (sectionTop- 300)){
			current=section.getAttribute('id');	
		}
	})
	navli.forEach(li => {
		li.classList.remove('active');
		if(li.classList.contains(current)){
			li.classList.add('active');
		}
	})
})