// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Skill animation when visible
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-fill").forEach(bar => {
    if (isInViewport(bar)) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

// Contact form message
function sendMessage(event) {
  event.preventDefault();
  alert("Message Sent Successfully!");
}