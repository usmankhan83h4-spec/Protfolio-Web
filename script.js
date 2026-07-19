// ================= TYPEWRITER EFFECT =================

const words = [
    "HTML Developer",
    "CSS Developer",
    "Bootstrap Expert",
    "JavaScript Developer",
    "Frontend Developer",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing-text");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);

}

typeEffect();


// ================= ACTIVE NAVBAR =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ================= HERO CARD ANIMATION =================

const heroCard = document.querySelector(".hero-card");

heroCard.addEventListener("mousemove", (e) => {

    const rect = heroCard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroCard.style.transform =
        `rotateY(${(x - rect.width / 2) / 25}deg)
         rotateX(${-(y - rect.height / 2) / 25}deg)`;

});

heroCard.addEventListener("mouseleave", () => {

    heroCard.style.transform = "rotateY(0deg) rotateX(0deg)";

});
// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
".hero-title,.developer,.hero-text,.hero-buttons,.hero-card,.social-icons,.status"
);

function reveal(){

const windowHeight = window.innerHeight;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < windowHeight-120){

el.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

//================ COUNTER =================//

const counters = document.querySelectorAll(".counter");

const speed = 80;

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,25);

}else{

counter.innerText=target+"+";

}

}

updateCounter();

});
/*=============================
      SKILL CARD ANIMATION
==============================*/

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry,index)=>{

if(entry.isIntersecting){

setTimeout(()=>{

entry.target.classList.add("show-card");

},index*120);

}

});

},{threshold:.2});

skillCards.forEach(card=>observer.observe(card));


/*=============================
      3D TILT EFFECT
==============================*/

skillCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/18);

const rotateX=((rect.height/2-y)/18);

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0) rotateY(0)";

});

});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector("textarea").value.trim();

    // Name Validation
    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    // Email Validation
    if(email === ""){
        alert("Please enter your email.");
        return;
    }

    // Email Format Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    // Message Validation
    if(message === ""){
        alert("Please enter your message.");
        return;
    }

    // Success
    alert("🎉 Your message has been sent successfully!");

    contactForm.reset();

});
