document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Greeting Update
  const greet = document.querySelector(".intro-text p");
  if (greet) {
    const hr = new Date().getHours();
    if (hr < 12) greet.textContent = "Good Morning, I'm";
    else if (hr < 18) greet.textContent = "Good Afternoon, I'm";
    else greet.textContent = "Good Evening, I'm";
  }

  // 2️⃣ Initialize ParticlesJS
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
        move: { enable: true, speed: 2, direction: "none", out_mode: "bounce" },
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

  // 3️⃣ Typing Animation
  const roles = ["Associate Software Developer", "Full-Stack Developer", "QA-Aware Engineer", "Content Creator"];
  let i = 0, j = 0, currentRole = '', isDeleting = false;
  const typingSpeed = 100;

  function type() {
    const txt = roles[i];
    if (isDeleting) currentRole = txt.substring(0, j--);
    else currentRole = txt.substring(0, j++);
    
    const typingElem = document.querySelector('.typing');
    if (typingElem) typingElem.textContent = currentRole;

    if (!isDeleting && j === txt.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
  type();

  // 4️⃣ Mobile Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeNav = document.getElementById("closeNav");

  if (menuToggle && mobileNav && closeNav) {
    menuToggle.addEventListener("click", () => mobileNav.classList.add("active"));
    closeNav.addEventListener("click", () => mobileNav.classList.remove("active"));
    document.querySelectorAll(".mobile-nav a").forEach(link => {
      link.addEventListener("click", () => mobileNav.classList.remove("active"));
    });
  }

  // 5️⃣ Skill Bar Animation
  const skillSection = document.querySelector("#skillstec");
  const progressBars = document.querySelectorAll(".progress-bar");
  if (skillSection && progressBars.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute("data-width");
            bar.style.width = targetWidth;
          });
          observer.unobserve(skillSection);
        }
      });
    }, { threshold: 0.4 });
    observer.observe(skillSection);
  }

  // 6️⃣ Scroll Navigation Activation
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
    });
  });

  // 7️⃣ Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 8️⃣ WhatsApp Form
  const whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    const messageDiv = whatsappForm.querySelector(".form-message");
    const submitBtn = whatsappForm.querySelector(".submit-btn");

    whatsappForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      const text = `*New Portfolio Message*%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
      submitBtn.innerHTML = "Opening WhatsApp...";
      submitBtn.disabled = true;

      const phone = "94766327039";
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

      if (messageDiv) {
        messageDiv.style.display = "block";
        messageDiv.style.background = "#dcfce7";
        messageDiv.style.color = "#166534";
        messageDiv.textContent = "✅ WhatsApp opened successfully!";
      }

      whatsappForm.reset();
      setTimeout(() => {
        submitBtn.innerHTML = "Send WhatsApp Message";
        submitBtn.disabled = false;
      }, 3000);
    });
  }

  // 9️⃣ Project Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) card.style.display = 'block';
          else card.style.display = 'none';
        });
      });
    });
  }
});
