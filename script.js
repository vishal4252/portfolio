const navlinks = document.querySelector('.navbar')
function onToggleMenu(mn_cr_btn) {
    mn_cr_btn.name = mn_cr_btn.name === 'menu-sharp' ? 'close-sharp' : 'menu-sharp'
    navlinks.classList.toggle('top-[0%]')
}

const theme = document.getElementById("theme");
theme.onclick = function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        theme.name = "sunny-sharp";
    }
    else {
        theme.name = "moon-sharp"
    }
}

const typed = new Typed(".auto-type", {
    strings: ["Coding", "Designing"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
})