document.addEventListener('load', () => {
    let cerr_ma = document.querySelector("#cerr-menu-a")
    let menuA_a = document.querySelector("#bar-menu-android");
    let most_menuaA = document.querySelector(".bars")

    cerr_ma.addEventListener("click", () => {
        menuA_a.style.display = "none"
    })
    most_menuaA.addEventListener("click", () => {
        menuA_a.style.display = "block"
    })
})