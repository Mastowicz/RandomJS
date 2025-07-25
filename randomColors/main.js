const button = document.querySelector("button");

function colorChange() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function divchange1() {
    let div = document.getElementById("div1");
    div.style.backgroundColor = colorChange();
    setTimeout(divchange1, 1000);
}

function divchange2() {
    let div = document.getElementById("div2");
    div.style.backgroundColor = colorChange();
    setTimeout(divchange2, 1000);
}

function divchange3() {
    let div = document.getElementById("div3");
    div.style.backgroundColor = colorChange();
    setTimeout(divchange3, 1000);
}

function divchange4() {
    let div = document.getElementById("div4");
    div.style.backgroundColor = colorChange();
    setTimeout(divchange4, 1000);
}

button.addEventListener("click", () => {
    divchange1();
    divchange2();
    divchange3();
    divchange4();
})