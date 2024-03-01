export const htmlPages = [
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/index.html",
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/html/gradeToMark.html",
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/html/tempConverter.html",
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/html/staff.html"
];
export function navBarClickListener (htmlPagesArray){
    let navBar = document.querySelectorAll('nav ul li')
    for(let i = 0; i < navBar.length; i++){
        navBar[i].addEventListener('click', ()=>{
            window.open(htmlPagesArray[i],'_self')
        })
}};





