var toggleMenu  = document.querySelectorAll('.toggle-menu'),
    wrapper     = document.querySelector('.wrapper');
    innerContent= document.querySelector('.inner-content');

for(var i = 0; i < toggleMenu.length; i++){
    toggleMenu[i].addEventListener('click', menuAction);
    //window.addEventListener('click', menuAction);
}

innerContent.addEventListener('click', closeMenu);

function menuAction() {
    if(wrapper.classList.contains('show-menu'))
        wrapper.classList.remove('show-menu');
    else
        wrapper.classList.add('show-menu');
}

function closeMenu() {
    if(wrapper.classList.contains('show-menu'))
        wrapper.classList.remove('show-menu');
}

document.addEventListener('keyup', function(e){
    if(e.keyCode == 27)
        if(wrapper.classList.contains('show-menu'))
            menuAction();
});
