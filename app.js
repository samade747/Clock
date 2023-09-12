const hour =document.querySelector("#hours");
const mintues =document.querySelector(".mintues");
const seconds =document.querySelector(".seconds");
const ampm =document.querySelector(".ampm");
setInterval(function (){
    const date = new Date();
      let hourElem=date.getHours();
      let minElem=date.getMinutes();
      let secElem=date.getSeconds();
    let amPmElem = "AM";
    if(hourElem >12 ){
        amPmElem="PM";
    } 
        if( hourElem > 12){
            hourElem -= 12;
        }
    
    
    if(hourElem <10){
        hourElem= "0"+ hourElem;
    }
    if(minElem<10){
        minElem= "0"+ minElem;
    }
    if(secElem<10){
        secElem= "0"+ secElem;
    }
    
  
    
    hour.innerHTML=hourElem;
    mintues.innerHTML=minElem;
    seconds.innerHTML=secElem;
    ampm.innerHTML=amPmElem;
    
},1000)



// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var amPmElem = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + amPmElem;
//     return strTime;
//   }