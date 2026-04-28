const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

const text = "Hi, I'm Medipally Shruthi 👋";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();