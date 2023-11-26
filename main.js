let btn = document.getElementById('btn');
let btnText = document.getElementById('btnText');
let btn__moon = document.getElementById('btn__moon');
let logo = document.getElementById('logo');

btn.onclick = function(){
    document.body.classList.toggle("dark__theme");

    if (document.body.classList.contains("dark__theme")){
        btn__moon.src = "images/sun.png";
        btnText.innerHTML = "Light";
        logo.src = "images/logo-white.png";
    } else {
        btn__moon.src = "images/moon.png";
        btnText.innerHTML = "Dark";
        logo.src = "images/logo.png";
    }


}