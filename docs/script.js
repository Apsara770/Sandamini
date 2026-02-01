
document.addEventListener("DOMContentLoaded", () => {
  // Greeting update
  const greet = document.querySelector(".intro-text p");
  const hr = new Date().getHours();
  if (hr < 12) greet.textContent = "Good Morning, I'm";
  else if (hr < 18) greet.textContent = "Good Afternoon, I'm";
  else greet.textContent = "Good Evening, I'm";

  // Initialize particlesJS
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#3b71ca" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#3b71ca",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          out_mode: "bounce",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }

const roles = [
  "Associate Software Developer",
  "Full-Stack Developer",
  "QA-Aware Engineer",
  "Content Creator"
];

let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;
const typingSpeed = 100;

function type() {
  const txt = roles[i];
  if (isDeleting) {
    currentRole = txt.substring(0, j--);
  } else {
    currentRole = txt.substring(0, j++);
  }
  document.querySelector('.typing').textContent = currentRole;

  if (!isDeleting && j === txt.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000); // pause at full word
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, typingSpeed);
  }
}

type();


  // Theme toggle
  const toggle = document.getElementById("toggle");
  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("light-mode", toggle.checked);
    });
  }

  // Skill bar animations
  document.querySelectorAll(".bar .fill").forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.transition = "width 2s";
      bar.style.width = width;
    }, 100);
  });

  // Scroll navigation activation
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

 const whatsappForm = document.getElementById("whatsappForm");
const messageDiv = whatsappForm.querySelector(".form-message");
const submitBtn = whatsappForm.querySelector(".submit-btn");

whatsappForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `*New Portfolio Message*%0A
Name: ${name}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

  submitBtn.innerHTML = "Opening WhatsApp...";
  submitBtn.disabled = true;

  const phone = "94705676045"; // your number

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

  messageDiv.style.display = "block";
  messageDiv.style.background = "#dcfce7";
  messageDiv.style.color = "#166534";
  messageDiv.textContent = "✅ WhatsApp opened successfully!";
  whatsappForm.reset();

  setTimeout(() => {
    submitBtn.innerHTML = "Send WhatsApp Message";
    submitBtn.disabled = false;
  }, 3000);
});

  // Spinner CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const closeNav = document.getElementById("closeNav");

menuToggle.onclick = () => mobileNav.classList.add("active");
closeNav.onclick = () => mobileNav.classList.remove("active");

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.onclick = () => mobileNav.classList.remove("active");
});


