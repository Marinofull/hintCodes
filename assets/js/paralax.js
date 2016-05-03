function scrollBanner(){
    var scrollPos;
    var headerText = document.querySelector('.header-text');
    //isso eh mt barril, essa função vê quando foi scrollado em Y =D
    scrollPos = window.scrollY;

    if (scrollPos <= 600){
        //faz o texto subir um terço da proporção que o scroll upa
        headerText.style.transform = "translateY(" + (-scrollPos/3) +"px" + ")";
        headerText.style.opacity = 1 - (scrollPos/600);
    }
}

//simplismente escuta quando um evento scroll acontece e chama a função
window.addEventListener('scroll', scrollBanner);

var i, j=1, color=999999;

function scrollOpacity(){
    var scrollPos;
    var background = document.querySelector('.first-section');
    i = window.scrollY;
    var k = i / 200;

    if (k>j){
        //faz o texto subir um terço da proporção que o scroll upa
        //background.style.transform = "translateY(" + (-scrollPos/3) +"px" + ")";
        color-=111111;
        background.style.backgroundColor = "#" + color;
        j++;
    }
}

window.addEventListener('scroll', scrollOpacity);
