```javascript
document.addEventListener("DOMContentLoaded", function () {

    // 1. Animated typing effect for your name
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

    // 2. Make all portfolio sections visible
    const sections = document.querySelectorAll(".fade");

    sections.forEach(function (section) {
        section.classList.add("show");
    });

    // 3. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

});
```
