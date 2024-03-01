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
$(document).ready(()=>{
    theDate()
    $('.to-farenheit').click(()=>{
        convertToFarenheit($($('main input')[0]).val())
    })
    $('.to-celsius').click(()=>{
        convertToCelsius($($('main input')[1]).val())
    })
})



function convertToCelsius(temp){
    try{
        if(temp === ''){
            throw new Error('Please enter a temperature')
        }
        for(let char of temp){
            if(isNaN(char)) throw  new Error('Only numbers...')      
        }
        let tempC = (temp - 32) * (5/9)
        $($('main p')[1]).html('= ' + tempC.toFixed(1) + ' °C')
    }
    catch(e){
        $($('main p')[1]).html(e.message)
    }
        
}
function convertToFarenheit(temp){
    try{
        if(temp === ''){
            throw new Error('Please enter a temperature')
            }
        for(let char of temp){
            if(isNaN(char)){
                throw new Error('Only numbers...')
            }
        }

        let tempF = temp * (9/5) + 32
        $($('main p')[0]).html('= ' + tempF.toFixed(1) + ' °F')
    }
    catch(e){
        $($('main p')[0]).html(e.message)
    }
       
        
      
}

const theDate = ()=>{
    setInterval(()=>{
        let date = new Date()
        $('footer > div:first-child > p').html(`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Date: ${date.getDay()}/${date.getDate()}/${date.getFullYear()}`)
    }, 0)
}