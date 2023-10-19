let h = document.getElementById('hour');
let m = document.getElementById('minute');
let s = document.getElementById('second');

function setRotaion(){
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    h.style.transform = `rotate(${hh*30 + mm/2}deg)`;
    m.style.transform = `rotate(${mm*6}deg)`;
    s.style.transform = `rotate(${ss*6}deg)`;
}

setInterval(setRotaion,1000);