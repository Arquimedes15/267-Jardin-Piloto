let News = "";
    let noticias_zone = document.querySelector(".content-news")

    for (let x = 0; x < 10; x++) {
        News += `
                    <div class="news-cont">
                        <h4>Comunicado N°${x}</h4>
                        <hr>
                        <div class="content">
                            <div class="fech">
                                <p class="mes">Feb</p>
                                <p class="day">14</p>
                                <p class="year">2024</p>
                            </div>
                            <p class="content-text">
                                Hola como estan<br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                                libero
                                doloremque aspernatur eligendi vero sit aliquid ipsa? Fugiat, quae quam molestiae
                                dolorum
                                accusamus impedit voluptas, asperiores, quasi rem iusto itaque?
                            </p>
                            <img src="https://avatarfiles.alphacoders.com/119/thumb-1920-119537.jpg" alt="Noticias"
                                class="img-news">
                        </div>
                    </div>`
    }
    noticias_zone.innerHTML = News