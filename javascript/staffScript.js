
const htmlPages = [
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/index.html",
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/html/marks.html",
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/html/temp.html",
    "C:/Users/LENOVO/Documents/Canada/Calgary/BVC/courses/Winter2024/SODV1201/assignement1/html/staff.html"
];

function navBarClickListener (htmlPagesArray){
    let navBar = document.querySelectorAll('nav ul li')
    for(let i = 0; i < navBar.length; i++){
        navBar[i].addEventListener('click', ()=>{
            window.open(htmlPagesArray[i],'_self')
        })
}};

const createTable = ()=>{
    $('main div:first-child > div:last-child').append($('<table></table>'))   
    let tableHeaders = [
        'Employee',
        'Position',
        'City',
        'ID',
        'Entry Date',
        'Salary'
    ]
    let firstTableRow = $('<tr></tr>')
    $('table').append(firstTableRow)
    tableHeaders.forEach(header =>{
        $('table tr:first-child').append($(`<th>${header}</th>`))
    })
    dataSet.forEach(line => {
        let newRow = $('<tr></tr>')
        $('table').append(newRow)
        line.forEach(data => {
            let newCell = $(`<td>${data}</td>`)
            $('table > tr:last-child').append(newCell)
        })
    })
}
function findName(){
    $('table tr:gt(0)').each(function(row){
            
        row = $(this).text().toLowerCase().trim()
        let employeeName = row.split(' ').slice(0,2).join(' ')
        if(employeeName.includes(nameFilter)){
            $(this).show()
        }else{
            $(this).hide()
        }    
    })
}
function sortByName(){
    if($('#datalist1').val() === '' ){
        return
    } 
    if($('#datalist1').val() === 'Descending'){
        dataSet.sort((a,b)=>{
            let name1 = a[0].toLowerCase()
            let name2 = b[0].toLowerCase()

            if(name1 > name2){
                return -1
            }
            if(name1 < name2){
                return 1
            }
            return 0;
        })
        console.log(dataSet)
        
    } else if($('#datalist1').val() === 'Ascending'){
        dataSet.sort((a,b)=>{
            let name1 = a[0].toLowerCase()
            let name2 = b[0].toLowerCase()

            if(name1 < name2){
                return -1
            }
            if(name1 > name2){
                return 1
            }
            return 0;
        })
    } 
}

function process(string){
    return string.replace(/[$,]/g, '')
}

function sortBySalary (){
    if($('#datalist2').val() === '' ){
        return
    } 
    if($('#datalist2').val() === 'Descending'){
        dataSet.sort((a,b)=>{
            
            let salary1 = parseInt(process(a[5]))           
            let salary2 = parseInt(process(b[5]))
            if(salary1 > salary2) return -1
            else if(salary1 < salary2) return 1
            else return 0
        })
    }
    else if($('#datalist2').val() === 'Ascending'){
        dataSet.sort((a,b)=>{
            let salary1 = parseInt(process(a[5]))           
            let salary2 = parseInt(process(b[5]))
            if(salary1 < salary2) return -1
            else if(salary1 > salary2) return 1
            else return 0
        })
    }

}


function sortDataSet(createTable, sortByName, sortBySalary){
    $('.to-filter').click(()=>{
    try{    
        let nameFilter = $($('label input')[0]).val().trim().toLowerCase()
        for(var char of nameFilter){
            if(!isNaN(char)) {
                throw new Error('Only names...')
            }
        }     
        
        
        if($('#datalist1').val() === '') sortBySalary()
        else sortByName()     
        $('table').remove()
        createTable()       
        
    }     
    catch(e){
        $($('label > p')).html(e.message).css('display', 'inline')
    }
    })
    
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
    createTable()
    sortDataSet(createTable, sortByName, sortBySalary)   
})


var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];