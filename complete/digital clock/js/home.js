let hours=document.getElementById('hrs')
let minute=document.getElementById('min')
let secound=document.getElementById('sec')


function digitalclock(){
    const time=new Date()
    let hrs=time.getHours()
    let min=time.getMinutes()
    let sec=time.getSeconds()
    let am_pm='AM'

    if (hrs > 12) { 
        hrs -= 12; 
        am_pm = "PM"; 
    } 
    if (hrs == 0) { 
        hrs = 12; 
        am_pm = "AM"; 
    } 

    hrs = hrs < 10 ? "0" + hrs : hrs; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
   

    hours.innerHTML=hrs
    minute.innerHTML=min
    secound.innerHTML=sec

}
digitalclock()
setInterval(digitalclock,1000)

 

