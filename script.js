```javascript
document.addEventListener("DOMContentLoaded", function () {
    // Animated typing effect
    const typingElement = document.querySelector(".typing");
    const text = "Hi, I'm Medipally Shruthi 👋";
    let index = 0;

    if (typingElement) {
        typingElement.textContent = "";

        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }

        typeText();
    }

    // Reveal portfolio sections
    const sections = document.querySelectorAll(".fade");

    sections.forEach(function (section) {
        section.classList.add("show");
    });
});
```
