// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(scrollY>20){
//             $(".nav").addClass("scroll_nav");
//             $(".navigation").addClass("padd");
//         }else{
//             $(".nav").removeClass("scroll_nav");
//         }
//     });
// });

let nav = document.querySelector(".nav");
let navigation = document.querySelector(".navigation");
let menuBar = document.querySelector(".hamburger_menu");
let close = document.querySelector(".close");
let menu = document.querySelector(".menu");
let cardRespons = document.querySelectorAll(".card_respons")
let cards = document.querySelector(".testimonials .cards")
let card=document.querySelectorAll(".testimonials .cards .card")
let lines=document.querySelector(".lines");
let line=document.querySelectorAll(".lines span")


window.addEventListener("scroll", function () {

    if (scrollY > 20) {
        nav.classList.add('scroll_nav');
        navigation.classList.add('padd');
    } else {
        nav.classList.remove('scroll_nav');
    }

});

menuBar.addEventListener("click", function () {
    menu.classList.add("show");
    menuBar.style.display = "none";
    close.style.display = "block"
});

close.addEventListener("click", function () {
    menu.classList.remove("show");
    close.style.display = "none";
    menuBar.style.display = "block";
})


// testimonials section=slider

// let index=0;

// function slideShow(){
//     if(index>=card.length){
//         index=0
//     }
//     if(index<0){
//         index=card.length-1;
//     }
//     for(let i=0;i<card.length;i++){
//         card[i].classList.remove("akt")
//     }
//     card[index].classList.add("akt")
// }


// for(let i=0;i<line.length;i++){
//     line[i].addEventListener("click",function(){
//         lines.querySelector(".act").classList.remove("act");
//         line[i].classList.add("act");
//         cards.querySelector(".akt").classList.remove("akt")
//         card[i].classList.add("akt");
//     })
// }


$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      250:{
        items:1,
        nav: false
      },
      500:{
        items:1,
        nav: false
      },
      1000:{
        items:2,
        nav: false
      }
    }
  });