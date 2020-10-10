var yourRandomGenerator=function(rangeOfDays,startHour,hourRange){
    var today = new Date(Date.now());
    return new Date(today.getYear()+1900,today.getMonth(), today.getDate()+Math.random() *rangeOfDays, Math.random()*hourRange + startHour, Math.random()*60)
}

console.log(yourRandomGenerator(2,8,2));