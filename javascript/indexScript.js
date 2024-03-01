//import { htmlPages, navBarClickListener } from "C:/Users/LENOVO/Documents/Canada7Calgary/BVC/courses/Winter2024/SODV1201/assignement1/javascript/navBar.js";
const htmlPages = [
    "./index.html",
    "./html/marks.html",
    "./html/temp.html",
    "./html/staff.html"
];

function navBarClickListener (htmlPagesArray){
    let navBar = document.querySelectorAll('nav ul li')
    for(let i = 0; i < navBar.length; i++){
        navBar[i].addEventListener('click', ()=>{
            window.open(htmlPagesArray[i],'_self')
        })
}};


const profilePic = document.querySelector('main div:last-child img');
function DisplayImg(img){
        setTimeout(()=>{
            img.style.display = "inline";
        }, 10000)   
}


const theDate = ()=>{
    setInterval(()=>{
        let date = new Date()
        $('footer > div:first-child > p').html(`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Date: ${date.getDay()}/${date.getDate()}/${date.getFullYear()}`)
    }, 0)
}


$(document).ready(()=>{
    theDate()
    navBarClickListener(htmlPages)
    DisplayImg(profilePic);
    
})