let gigaImg = document.querySelector(".giga-img");
let miniImg1 = document.querySelector(".item1");
let miniImg2 = document.querySelector(".item2");
let miniImg3 = document.querySelector(".item3");
let miniImg4 = document.querySelector(".item4");
// item mini-img

let piuClick = document.querySelector(".piu");
let menoClick = document.querySelector(".meno");
// indicatori + e -


let txt = document.querySelector(".txt");
// quantità


let gino = 0;

// cambio immagini on click delle mini img

    miniImg1.addEventListener("click", () => {
        gigaImg.classList.add("giga-img1");
        gigaImg.classList.remove("giga-img2" , "giga-img3", "giga-img4");
    })

    
    miniImg2.addEventListener("click", () => {
        gigaImg.classList.add("giga-img2");
        gigaImg.classList.remove("giga-img1" , "giga-img3", "giga-img4");
    })

    miniImg3.addEventListener("click", () => {
        gigaImg.classList.add("giga-img3");
        gigaImg.classList.remove("giga-img1" , "giga-img2", "giga-img4");
    })

    miniImg4.addEventListener("click", () => {
        gigaImg.classList.add("giga-img4");
        gigaImg.classList.remove("giga-img1" , "giga-img3", "giga-img2");
    })


// incremento e decremento della quantità

    piuClick.addEventListener("click", () => {
        gino++;
        txt.innerHTML = parseInt(gino);
    });

    menoClick.addEventListener("click", ()=> {
        (txt.innerHTML >0) ? gino-- :''
        txt.innerHTML= parseInt(gino);
    })
    
    





