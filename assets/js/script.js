const body = document.querySelector("body")
console.log(body);
let modalBtn = document.querySelectorAll("#modalBtn")
let modalWindow = document.querySelector(".modalcover")
let modalClose = document.getElementById("modalClose")
let modalBcg = document.querySelector(".modalbcg")
let modalWrapper = document.querySelector(".modal")

modalBtn.forEach((el) => {
    el.addEventListener('click', () => {
        modalWindow.style.display = "flex"
        modalBcg.style.animationName = "modal-on"
        modalWrapper.style.animationName = "modal-on"
        body.style.overflow = "hidden"
    })
})

modalClose.addEventListener('click', () => {
    modalBcg.style.animationName = "modal-off"
    modalWrapper.style.animationName = "modal-off"
    setTimeout(() => {
        modalWindow.style.display = "none"
    }, 300)
    body.style.overflow = "visible"
})

modalBcg.addEventListener('click', () => {
    modalBcg.style.animationName = "modal-off"
    modalWrapper.style.animationName = "modal-off"
    setTimeout(() => {
        modalWindow.style.display = "none"
    }, 300)
    body.style.overflow = "visible"
})

let burgerOpen = document.getElementById("burgerBtn")
let burgerMenu = document.querySelector(".header__menu")
let burgerList = document.querySelector(".header__menu-list")

burgerOpen.addEventListener('click', () => {
    burgerMenu.style.display = "flex"
    burgerMenu.style.animationName = "modal-on"
    burgerList.style.animationName = "burger-on"
    body.style.overflow = "hidden"
})

burgerMenu.addEventListener('click', () => {
    burgerMenu.style.animationName = "modal-off"
    burgerList.style.animationName = "burger-off"
    setTimeout(() => {
        burgerMenu.style.display = "none"
    }, 300)
    body.style.overflow = "visible"
})