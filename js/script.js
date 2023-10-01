/*========================togle icon navbar===========================*/
let menuIcons=document.querySelector('#menu-icons');
let navbar=document.querySelector('.navbar');

menuIcons.onclick=()=>{
 menuIcons.classList.toggle('bx-x');
 navbar.classList.toggle('active');

};

/*========================scroll section link===========================*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
 section.forEach(sec => {
  let top =window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');

  if(top >= offset && top < offset + height){
   navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
   });
  };
 });
 /*============================ sticky navbar============================*/
 let header = document.querySelector('header');

 header.classList.toggle('sticky',window.scrollY > 100);

 /*=========remove togle icon navbar when click navbar link(scroll)==========*/
 menuIcons.classList.remove('bx-x');
 navbar.classList.remove('active');
};

 /*============================ scroll reveal============================*/
 ScrollReveal({ 
  // reset: true,
  distance:'80px',
  duration:2000,
  delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

 // typed js
const typed = new Typed('.multiple-text',{
 strings:['Frontend Web Developer' , 'Web Designer' , 'Freelancer'],
 typeSpeed:100,
 backspeed:100,
 backDelay:1000,
 loop:true
});