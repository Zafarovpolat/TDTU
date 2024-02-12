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
    })
})

modalClose.addEventListener('click', () => {
    modalBcg.style.animationName = "modal-off"
    modalWrapper.style.animationName = "modal-off"
    setTimeout(() => {
        modalWindow.style.display = "none"
    }, 300)
})

modalBcg.addEventListener('click', () => {
    modalBcg.style.animationName = "modal-off"
    modalWrapper.style.animationName = "modal-off"
    setTimeout(() => {
        modalWindow.style.display = "none"
    }, 300)
})

let burgerOpen = document.getElementById("burgerBtn")
let burgerMenu = document.querySelector(".header__menu")
let burgerList = document.querySelector(".header__menu-list")

burgerOpen.addEventListener('click', () => {
    burgerMenu.style.display = "flex"
    burgerMenu.style.animationName = "modal-on"
    burgerList.style.animationName = "burger-on"
})

burgerMenu.addEventListener('click', () => {
    burgerMenu.style.animationName = "modal-off"
    burgerList.style.animationName = "burger-off"
    setTimeout(() => {
        burgerMenu.style.display = "none"
    }, 300)
})