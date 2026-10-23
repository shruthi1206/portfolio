document.addEventListener("DOMContentLoaded", () => {

```
// Typing animation
const typingElement = document.querySelector(".typing");
const greeting = "Hi, I'm Medipally Shruthi 👋";

if (typingElement) {
    let index = 0;

    function typeGreeting() {
        if (index < greeting.length) {
            typingElement.textContent += greeting.charAt(index);
            index++;

            setTimeout(typeGreeting, 85);
        }
    }

    typeGreeting();
}

// Reveal sections as the visitor scrolls
const sections = document.querySelectorAll(".fade");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
} else {
    // Fallback for older browsers
    sections.forEach((section) => {
        section.classList.add("show");
    });
}
```

});
