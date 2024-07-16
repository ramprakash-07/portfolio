var slides = document.querySelectorAll(".slides img")
let slideindex = 0;
var a =null;

document.addEventListener("DOMContentLoaded",initilizer);

function initilizer(){
    slides[slideindex].classList.add("displayslide")
    a = setInterval(nextSlide,3000)
}
function showslide(index){
    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displayslide")
    })
    slides[slideindex].classList.add("displayslide")
}
function nextSlide(){
    
    slideindex++;
    showslide(slideindex);
}
function prevSlide(){
    clearInterval(a)
    slideindex--;
    showslide(slideindex);
}

let light = document.querySelector(".light");

light.addEventListener("click",()=>{
    document.documentElement.style.setProperty('--bgcolor','#2E3440 ');
    document.documentElement.style.setProperty('--textcolor','white');
    document.documentElement.style.setProperty('--header','#D08770');

    document.querySelector(".abtimg1").style.display="none"
    document.querySelector(".abtimg2").style.display="block"
    document.querySelector(".abtimg3").style.display="none"
    
    document.querySelector(".dark").style.display="none"
    document.querySelector(".light").style.display="none"
    document.querySelector(".green").style.display="block"


})

document.querySelector(".dark").addEventListener("click",()=>{
    document.documentElement.style.setProperty('--bgcolor','black');
    document.documentElement.style.setProperty('--textcolor','white');
    document.documentElement.style.setProperty('--header','rgb(188, 60, 60)');

    document.querySelector(".abtimg1").style.display="block"
    document.querySelector(".abtimg2").style.display="none"
    document.querySelector(".abtimg3").style.display="none"
    
    document.querySelector(".dark").style.display="none"
    document.querySelector(".light").style.display="block   "
    document.querySelector(".green").style.display="none"


})
document.querySelector(".green").addEventListener("click",()=>{
    document.documentElement.style.setProperty('--bgcolor','rgb(51, 51, 51)');
    document.documentElement.style.setProperty('--textcolor','white');
    document.documentElement.style.setProperty('--header','rgb(31, 190, 31)');

    document.querySelector(".abtimg1").style.display="none"
    document.querySelector(".abtimg2").style.display="none"
    document.querySelector(".abtimg3").style.display="block"
    
    document.querySelector(".dark").style.display="block"
    document.querySelector(".light").style.display="none"
    document.querySelector(".green").style.display="none"


})
