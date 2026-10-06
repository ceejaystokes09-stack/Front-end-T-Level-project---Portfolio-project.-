// this is the code to handle the opening of the double header, only when on small screens,
// this was stolen from my github link = https://github.com/ceejaystokes09-stack/template-css-html/blob/main/index.html



const b = document.querySelector(".toggle-header")
const open = document.querySelector(".top-nav .burger")
const close = document.querySelector(".top-nav .mega-close")
const nav = document.querySelector(".top-nav .double-header-mega")
b.addEventListener("click", () => {
    const isVisible = nav.classList.toggle("is-visible")
    open.ariaDisabled = isVisible ? "true" : "false"
    close.ariaDisabled = isVisible ? "false" : "true"
})

const mobileScreen = window.matchMedia("(max-width: 500px)")
mobileScreen.addEventListener("change", (event) => {
    if (!event.matches) {
        nav.classList.remove("is-visible")
        open.ariaDisabled = "false"
        close.ariaDisabled = "true"
    }
})