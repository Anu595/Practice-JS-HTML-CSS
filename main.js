let count=0;
let countEL = document.getElementById("count-el");
let saveEL= document.getElementById("save-el");
console.log(saveEL);

function increment(){
    count=count+1;
    countEL.textContent=count;
}
// let welcomeEL=document.getElementById("welcome-el");
// function( ){

// }
function save(){
    let peoCount=count + " - ";
    saveEL.textContent += peoCount;
    count=0;
    countEL.textContent=0;
    
}