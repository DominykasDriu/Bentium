// var slides = document.querySelectorAll(".carousel-cell").forEach(item=>{
//     item.addEventListener("mouseenter",()=>{
//         // console.log(item.children[0]);
//         // item.children[0].innerHTML = "Product"
//         item.children[0].style.color = " rgba(255, 255, 255, 1)"
//         item.children[0].style.textShadow = "2px 2px 9px #000000"
//         // let test = item.children[0];
//         // console.log(test.children);
//     })
// })


var slides = document.querySelectorAll(".carousel-cell").forEach(item=>{
    item.addEventListener("mouseenter",()=>{
        console.log(item.children[0]);
        item.children[0].style.color = " rgba(255, 255, 255, 1)"
        item.children[0].style.textShadow = "2px 2px 9px #000000"
    })
})

// NEISEINA PAIIMTI CHILDRENO IS ITEM.children[0]

var slides = document.querySelectorAll(".carousel-cell").forEach(item=>{
    item.addEventListener("mouseleave",()=>{
        // item.children[0].innerHTML = ""
        item.children[0].style.color = " rgba(255, 255, 255, 0)"
        item.children[0].style.textShadow = "2px 2px 9px rgba(0,0,0,0)"
    })
})

// Ar yra skirtumas ka naudot kai querySelectorall ir kai getelementsbyclass , for ar forEach
// Kaip parsint html collectionus?
// Ar isvis stengtis su vanilla js animuot ar tiesiog visada naudot jquery? Ar isvis css?