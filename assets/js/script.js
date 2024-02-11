let modalBtn = document.getElementById("modalBtn")
let modalWindow = document.querySelector(".modalcover")
let modalClose = document.getElementById("modalClose")
let modalBcg = document.querySelector(".modalbcg")
let modalWrapper = document.querySelector(".modal")

modalBtn.addEventListener('click', () => {
    modalWindow.style.display = "flex"
    modalBcg.style.animationName = "modal-on"
    modalWrapper.style.animationName = "modal-on"
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