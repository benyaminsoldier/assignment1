const htmlPages = [
    "../index.html",
    "../html/marks.html",
    "../html/temp.html",
    "../html/staff.html"
];
function navBarClickListener (htmlPagesArray){
    let navBar = document.querySelectorAll('nav ul li')
    for(let i = 0; i < navBar.length; i++){
        navBar[i].addEventListener('click', ()=>{
            window.open(htmlPagesArray[i],'_self')
        })
}};
navBarClickListener(htmlPages)
/*
import { htmlPages, navBarClickListener } from "./navBar.js";
navBarClickListener(htmlPages);
*/
$(document).ready(()=>{
    theDate()
    $($('main > div')[0]).append($('<button>Convert</button>').click(()=>{ 
        try{

         if($('main > div input').val() === '')
            throw new Error ('Please enter a mark')
         for(let char of $('main > div input').val()){
            if(isNaN(char))
                throw new Error ('Only numbers...')
         }
        
         if($('main > div input').val() > 50){
                if($('main > div input').val() > 70){
                    if($('main > div input').val() > 80){
                        if($('main > div input').val() > 90){
                            $('p').html('A')
                        }else{
                            $('main p').html('B')
                        }
                    }else{
                        $('main p').html('C')
                    }
                }else{
                    $('main p').html('D')
                }
            }else{
                $('main p').html('F')
            }
            
        }
        catch(e){
            $('main p').html(e.message)
        }
    }))})
         
    const theDate = ()=>{
        setInterval(()=>{
            let date = new Date()
            $('footer > div:first-child > p').html(`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Date: ${date.getDay()}/${date.getDate()}/${date.getFullYear()}`)
        }, 0)
    }
