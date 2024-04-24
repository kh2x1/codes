
// let counter =0;

// document.getElementById("increace").onclick=function(){
//     counter+=1;

//     document.getElementById("value").innerText=counter;
// }

// document.getElementById("reset").onclick=function(){
//     counter=0;

//     document.getElementById("value").innerText=counter;
// }

// Retrieve counter value from localStorage if it exists, otherwise set counter to 0
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

function updateCounter() {
    document.getElementById("value").innerText = counter;
    localStorage.setItem('counter', counter);
}

document.getElementById("increase").onclick = function() {
    counter += 1;
    updateCounter();
}

document.getElementById("reset").onclick = function() {
    counter = 0;
    updateCounter();
}

updateCounter();

