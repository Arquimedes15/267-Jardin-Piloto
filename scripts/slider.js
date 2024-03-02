let slider = document.querySelector(".slider")
let but = document.querySelector(".indicator-buttons");

//create IMG

let imgJson = ["https://raw.githubusercontent.com/Arquimedes15/297-Jardin-Piloto/main/img/slider/slider%20pagina%20web.jpg", "https://raw.githubusercontent.com/Arquimedes15/297-Jardin-Piloto/main/img/slider/slider%20pagina%20web.jpg"]

function loadImage() {
    for (let x = 0; x < imgJson.length; x++) {
        slider.innerHTML += `<img alt="nose" id="cal-slider-ka" src="${imgJson[x]}">`
        if (x == 0) {
            but.innerHTML += `<button class="indicator active"></button>`
        } else {
            but.innerHTML += `<button class="indicator"></button>`
        }
    }
}

loadImage();


//funcion slider
let img = slider.querySelectorAll("img")

let index = 0;

slider.style.width = `${img.length}00%`

let nextSlider = document.querySelector(".next")
let prev = document.querySelector(".prev")

let medi = 100 / img.length

nextSlider.addEventListener("click", () => {
    index++;
    if (index == img.length || index > img.length) {
        index = 0;
        slider.style.transform = `translateX(-${0}%)`
        botonSelect()
        return
    }
    slider.style.transform = `translateX(-${medi * index}%)`
    botonSelect()
})

prev.addEventListener("click", () => {
    index--;
    if (index == -1 || index < -1) {
        index = img.length - 1;
        slider.style.transform = `translateX(-${medi * (img.length - 1)}%)`
        botonSelect()
        return
    }
    slider.style.transform = `translateX(+${medi * index}%)`
    botonSelect()
})

function botonSelect(){
    but.innerHTML = ""
    for (let x = 0; x < imgJson.length; x++) {
        if (x == index) {
            but.innerHTML += `<button class="indicator active"></button>`
        } else {
            but.innerHTML += `<button class="indicator"></button>`
        }
    }
}