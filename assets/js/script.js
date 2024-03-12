const body = document?.querySelector("body")
let modalBtn = document?.querySelectorAll("#modalBtn")
let modalWindow = document?.querySelector(".modalcover")
let modalClose = document?.getElementById("modalClose")
let modalBcg = document?.querySelector(".modalbcg")
let modalWrapper = document?.querySelector(".modal")

modalBtn?.forEach((el) => {
    el.addEventListener('click', () => {
        modalWindow.style.display = "flex"
        modalBcg.style.animationName = "modal-on"
        modalWrapper.style.animationName = "modal-on"
        body.style.overflow = "hidden"
    })
})

modalClose?.addEventListener('click', () => {
    modalBcg.style.animationName = "modal-off"
    modalWrapper.style.animationName = "modal-off"
    setTimeout(() => {
        modalWindow.style.display = "none"
    }, 300)
    body.style.overflow = "visible"
})

modalBcg?.addEventListener('click', () => {
    modalBcg.style.animationName = "modal-off"
    modalWrapper.style.animationName = "modal-off"
    setTimeout(() => {
        modalWindow.style.display = "none"
    }, 300)
    body.style.overflow = "visible"
})

let burgerOpen = document?.getElementById("burgerBtn")
let burgerMenu = document?.querySelector(".header__menu")
let burgerList = document?.querySelector(".header__menu-list")

burgerOpen?.addEventListener('click', () => {
    burgerMenu.style.display = "flex"
    burgerMenu.style.animationName = "modal-on"
    burgerList.style.animationName = "burger-on"
    body.style.overflow = "hidden"
})

burgerMenu?.addEventListener('click', () => {
    burgerMenu.style.animationName = "modal-off"
    burgerList.style.animationName = "burger-off"
    setTimeout(() => {
        burgerMenu.style.display = "none"
    }, 300)
    body.style.overflow = "visible"
})

let header = document?.querySelector("header")

function changeBcg() {
    let i = 1
    setInterval((() => {
        if (i < 4) {
            i++
            header.style.backgroundImage = `url(./assets/media/bcg${i}.jpg)`
        }
        else if (i == 4) {
            i = 1
            header.style.backgroundImage = `url(./assets/media/bcg${i}.jpg)`
        }
    }), 5000)
}

let mainPage = document?.querySelector(".index")

if (mainPage) {
    changeBcg()
}


let upBtn = document?.querySelector(".upBtn")
upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})

const sectionsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationName = "sec-on"
            observer.unobserve(entry.target)
        }
    })
}, {})

document?.querySelectorAll('section').forEach((sec) => {
    sectionsObserver.observe(sec)
})

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
        const video = ent.target
        if (!ent.isIntersecting || ent.intersectionRatio <= 0.3) {
            video.pause()
        }
    }, {})
})

let video = document?.querySelector("video")
if (video) {
    videoObserver.observe(video)
}

const heroObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((ent) => {
        if (!ent.isIntersecting) {
            upBtn.style.bottom = "5%"
        }
        else {
            upBtn.style.bottom = "-100%"
        }
    })
})

heroObserver.observe(document.querySelector(".header"))

let loaderBcg = document?.querySelector(".loader")

setTimeout(() => {
    body.style.overflowY = "scroll"
    loaderBcg.style.zIndex = 0
}, 2500);
body.style.overflowY = "scroll"
