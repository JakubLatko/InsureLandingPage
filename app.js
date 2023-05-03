const navList = document.querySelector(".navList")
const hamburgerButton = document.querySelector(".hamburgerButton")
const hamburgerIcon = document.querySelector(".hamburgerIcon")
hamburgerButton.addEventListener("click", ()=>{
    if(navList.ariaExpanded === "true"){
        navList.classList.add("navClosed")
        hamburgerIcon.src= "assets/images/icon-hamburger.svg"
        navList.setAttribute("aria-expanded", "false")
    } else if(navList.ariaExpanded === "false") {
        navList.classList.remove("navClosed")
        hamburgerIcon.src= "assets/images/icon-close.svg"
        navList.setAttribute("aria-expanded", "true")
    }
})