const dayE1=document.getElementById('days');
const hourE1=document.getElementById('hours');
const minE1=document.getElementById('mins');
const secE1=document.getElementById('secounds');






const newyears='23 oct 2020';
function countdown(){
    const newyeardate=new Date(newyears);
    const currentDate=new Date();
    const totalsecounds=(newyeardate-currentDate)/1000;



    const days=Math.floor(totalsecounds / 3600 / 24);
    const hour=Math.floor(totalsecounds / 3600)% 24;
    const minutes=Math.floor(totalsecounds / 60)% 60;
    const secounds=Math.floor(totalsecounds)%60;





    dayE1.innerHTML=days;
    hourE1.innerHTML=hour;
    minE1.innerHTML=minutes;
    secE1.innerHTML=secounds;
}
countdown()
setInterval(countdown,1000)