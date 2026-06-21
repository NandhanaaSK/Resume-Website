// ==========================
// EmailJS Initialization
// ==========================

(function () {
    emailjs.init("YOUR_PUBLIC_KEY");
})();


// ==========================
// Dark Mode Toggle
// ==========================

function toggleTheme() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}


// Load Saved Theme
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});


// ==========================
// Smooth Scroll Animation
// ==========================

const sections = document.querySelectorAll("section");

const revealSections = () => {

    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ==========================
// Active Navbar Link
// ==========================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


// ==========================
// Typing Effect
// ==========================

const text = [
    "AI Enthusiast",
    "Data Analytics Learner",
    "Python Developer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (!typingElement) return;

    if (charIndex < text[textIndex].length) {

        typingElement.textContent += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 1500);
    }
}

function eraseText() {

    if (charIndex > 0) {

        typingElement.textContent =
            text[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

window.addEventListener("load", () => {

    if (typingElement) {
        typeText();
    }
});


// ==========================
// Contact Form
// ==========================

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const status = document.getElementById("status");

        status.innerHTML = "Sending message...";

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this
        )
        .then(() => {

            status.innerHTML =
                "✅ Message sent successfully!";

            status.style.color = "#22c55e";

            this.reset();

        })
        .catch(() => {

            status.innerHTML =
                "❌ Failed to send message.";

            status.style.color = "#ef4444";
        });
    });
}


// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ==========================
// Project Card Hover Effect
// ==========================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";
    });
});
