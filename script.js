showside = document.getElementById('sidebar');

function showSide(){
    showside.style.display = 'block'
    showSide.style.animation = 'slide-left 0.9s ease-in-out'
}

function hideSide(){
    showside.style.display = 'none'
    showSide.style.animation = 'slide-left 0.9s ease-in-out'

}

const counters = document.querySelectorAll('.counter');
const section = document.getElementById('counterSection');
let started = false;

function countUp(counter) {
const target = +counter.getAttribute('data-target');
let count = 0;
const speed = target / 200;

const updateCount = () => {
 count += speed;
 if (count < target) {
   counter.innerText = Math.ceil(count);
   requestAnimationFrame(updateCount);
 } else {
   counter.innerText = target;
 }
};
updateCount();
}

function handleScroll() {
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (!started && sectionTop < windowHeight) {
 counters.forEach(counter => countUp(counter));
 started = true;
 window.removeEventListener('scroll', handleScroll);
}
}

window.addEventListener('scroll', handleScroll);

function lpt(){
 let nums = document.getElementById('nums');
 let type = document.getElementById('lptype');

  nums.style.transform = 'scale(1.1)'

  type.style.color = '#0056b3'
  type.style.borderBottom = '2px solid #0056b3'
 
}
function lptl(){
 let nums = document.getElementById('nums');
 let type = document.getElementById('lptype');

  nums.style.transform = 'scale(1)'

  type.style.color = 'black'
 
}
function lpt1(){
 let nums = document.getElementById('nums1');
 let type = document.getElementById('lptype1');

  nums.style.transform = 'scale(1.1)'

  type.style.color = '#0056b3'
  type.style.borderBottom = '2px solid #0056b3'
 
}
function lptl1(){
 let nums = document.getElementById('nums1');
 let type = document.getElementById('lptype1');

  nums.style.transform = 'scale(1)'

  type.style.color = 'black'
 
}
function lpt2(){
 let nums = document.getElementById('nums2');
 let type = document.getElementById('lptype2');

  nums.style.transform = 'scale(1.1)'

  type.style.color = '#0056b3'
  type.style.borderBottom = '2px solid #0056b3'
 
}
function lptl2(){
 let nums = document.getElementById('nums2');
 let type = document.getElementById('lptype2');

  nums.style.transform = 'scale(1)'

  type.style.color = 'black'
 
}

const navbar = document.getElementById('navbar')
const sections = document.getElementById('section')

window.addEventListener('scroll', () =>{
  const sectionTops = sections.offsetTop;
  const sectionBottom = sectionTops + sections.offsetHeight;
  const scrollPosition = window.scrollY + navbar.offsetHeight;


  if (scrollPosition > sectionTops && scrollPosition < sectionBottom){
    navbar.classList.add('navbar-hidden');
  } else{
    navbar.classList.remove('navbar-hidden');
  }
})
 
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contact-form');
            const responseDiv = document.getElementById('formResponse');

            form.addEventListener('submit', function(event){
                event.preventDefault();
                
                responseDiv.style.color = "blue";
                responseDiv.textContent = "Submitting...";

                emailjs.sendForm('service_l8pfsol', 'template_c68k5v4', form)
                    .then(() => {
                        responseDiv.style.color = "green";
                        responseDiv.textContent = "Request sent successfully!";
                        form.reset();
                        setTimeout(() => {
                        responseDiv.textContent = "";
                    }   ,2000);
                    })
                    .catch(error => {
                        responseDiv.style.color = "red";
                        responseDiv.textContent = "An error occurred. Please try again later.";
                        console.error("EmailJS Error:", error);
                        setTimeout(() => {
                        responseDiv.textContent = "";
                },         2000);
                    });
            });
        });
