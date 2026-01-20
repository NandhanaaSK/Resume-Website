(function () {
  emailjs.init("4jblMIADQjUdpxp4N"); 
})();

function toggleTheme() {
  document.body.classList.toggle("dark");
}


const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("status");
  const btn = document.getElementById("sendBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");

  
  btn.classList.add("loading");
  btnText.innerText = "Sending...";
  spinner.style.display = "inline-block";

  emailjs.sendForm(
    "service_88aozco",   
    "template_w58tfek",  
    this
  ).then(
    function () {
      status.innerText = "Message sent successfully!";
      status.className = "status success show";

      btnText.innerText = "Send Message";
      spinner.style.display = "none";
      btn.classList.remove("loading");

      setTimeout(() => {
        status.classList.remove("show");
      }, 4000);
    },
    function () {
      status.innerText = "Failed to send message. Try again.";
      status.className = "status error show";

      btnText.innerText = "Send Message";
      spinner.style.display = "none";
      btn.classList.remove("loading");
    }
  );

  this.reset();
});
