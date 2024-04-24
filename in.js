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
