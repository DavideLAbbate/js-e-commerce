let gigaImg = document.querySelector(".giga-img");
let miniImg1 = document.querySelector(".item1");
let miniImg2 = document.querySelector(".item2");
let miniImg3 = document.querySelector(".item3");
let miniImg4 = document.querySelector(".item4");
// item mini-img
const arrImg = ["./img/image-product-1-thumbnail.jpg", "./img/image-product-2-thumbnail.jpg", "./img/image-product-3-thumbnail.jpg", "./img/image-product-4-thumbnail.jpg"];

let miniImg = document.querySelector(".mini-img-flex");
let img1 = document.querySelector(".img-giga");

let piuClick = document.querySelector(".piu");
let menoClick = document.querySelector(".meno");
// indicatori + e -


let txt = document.querySelector(".txt");
// quantità


let gino = 0;

// cambio immagini on click delle mini img

    // miniImg1.addEventListener("click", () => {
    //     gigaImg.classList.add("giga-img1");
    //     gigaImg.classList.remove("giga-img2" , "giga-img3", "giga-img4");
    // })

    
    // miniImg2.addEventListener("click", () => {
    //     gigaImg.classList.add("giga-img2");
    //     gigaImg.classList.remove("giga-img1" , "giga-img3", "giga-img4");
    // })

    // miniImg3.addEventListener("click", () => {
    //     gigaImg.classList.add("giga-img3");
    //     gigaImg.classList.remove("giga-img1" , "giga-img2", "giga-img4");
    // })

    // miniImg4.addEventListener("click", () => {
    //     gigaImg.classList.add("giga-img4");
    //     gigaImg.classList.remove("giga-img1" , "giga-img3", "giga-img2");
    // })





// modalità dinamica

for(i=0; i<arrImg.length; i++){
    let img = document.createElement("img");
    img.src = arrImg[i];
    miniImg.append(img)
}

miniImg.childNodes.forEach((e)=>{
    e.addEventListener("click", ()=>{
        img1.src = e.src.replace("-thumbnail", "");
    })
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
    
    





