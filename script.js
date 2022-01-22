function bgChanger() {
    if(this.scrollY > this.innerHeight / 1.5) {
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll", bgChanger);

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.nav-item');