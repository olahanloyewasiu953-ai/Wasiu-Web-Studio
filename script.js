/*================ LOADER ================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);


    },1500);

});





/*================ MOBILE MENU ================*/


const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");



menuBtn.addEventListener("click", () => {


    navMenu.classList.toggle("active");


});




/* Close menu when clicking a link */


document.querySelectorAll(".nav-menu a")
.forEach(link => {


    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });


});





/*================ CUSTOM CURSOR ================*/


const cursor = document.querySelector(".cursor");



document.addEventListener("mousemove",(e)=>{


    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";


});





/*================ BACK TO TOP ================*/


const backTop = document.querySelector(".back-top");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("active");


    }else{


        backTop.classList.remove("active");


    }


});

/*================ SCROLL REVEAL ================*/


const revealElements = document.querySelectorAll(
    ".section-title, .about-container, .skill-card, .stat-box, .project-card, .service-card, .why-card, .contact-container"
);



const revealOnScroll = () => {


    revealElements.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;



        if(elementTop < screenPosition){


            element.classList.add("reveal");


            setTimeout(()=>{

                element.classList.add("active");

            },100);


        }


    });


};



window.addEventListener("scroll", revealOnScroll);

revealOnScroll();





/*================ ACTIVE NAVIGATION ================*/


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");



window.addEventListener("scroll",()=>{


    let current = "";



    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;



        if(window.scrollY >= sectionTop && 
           window.scrollY < sectionTop + sectionHeight){


            current = section.getAttribute("id");


        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");



        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }


    });



});

/*================ CONTACT FORM ================*/


const contactForm = document.querySelector(".contact-form");



contactForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    const button = contactForm.querySelector("button");


    button.innerHTML = "Message Sent ✓";


    button.style.background = "#00f5ff";


    setTimeout(()=>{


        button.innerHTML = "Send Message";


        button.style.background = "";


        contactForm.reset();



    },3000);



});





/*================ BUTTON HOVER EFFECT ================*/


const buttons = document.querySelectorAll(".btn");



buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.transform="translateY(-5px)";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.transform="translateY(0)";


    });



});





/*================ IMAGE LOADING EFFECT ================*/


const images = document.querySelectorAll("img");



images.forEach(image=>{


    image.addEventListener("load",()=>{


        image.style.opacity="1";


    });


});
