
let counter =0;

document.getElementById("increace").onclick=function(){
    counter+=1;

    document.getElementById("value").innerText=counter;
}

document.getElementById("reset").onclick=function(){
    counter=0;

    document.getElementById("value").innerText=counter;
}

