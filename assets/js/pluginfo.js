$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 30
                }, 1000);
                return false;
            }
        }
    });
});


/*inputs*/
$('.field').keypress(function(e) {
    if(e.which==60 || e.which==62) return false;
});

$('#name').keypress(function(e) {
    if((e.which>47 && e.which<65)) {
        return false;
    }else {
        $(this).keyup(function() {
            this.value = this.value.toLocaleUpperCase();
        });
    }
});

$('#name').blur(function() {
    this.value = this.value.toLocaleUpperCase();
});

$('#email').blur(function() {
    this.value = this.value.toLocaleLowerCase();
});

$('#phone').keypress(function(e) {
    var input = $('#phone');
    var v = input.val();
    v = v.replace(/D/g,"");
    if(e.which!=8) {
        if(v.length==0 && e.which != 40) {
            input.val('(' + v + '');
        }
        if(v.length==3 && e.which != 41) {
            input.val(v + ') ');
        }
    }
});

$(document).ready(function() {
    window.navYPos = $("#scrollNav").offset().top;
    navFixed();
});

$(window).scroll(function() {
    navFixed();
});

function navFixed() {
    if ($(window).scrollTop() >= navYPos) {
        $('#scrollNav').css({position: 'fixed', top: '0', 'z-index': '5'});
        $('#pluginfo').css({'padding-top': '130px'});
    }
    else {
        $('#scrollNav').css('position', 'relative');
        $('#pluginfo').removeAttr('style');
    }
}

setTimeout(function() {
    $('.msg').fadeOut();
}, 6000);

function menu() {
    if ($('#menuToggle:checked').length == 0) {
        $('#menuToggle').prop('checked', false);
        return true;

    }
    else {
        $('#menuToggle').prop('checked', false);
        return false;
    }
}

$('#menu-icon').on('click', menu);

$('.menu a').on('click', function() {
    $('#menuToggle').prop('checked', false);
});

$(document).on('click', function(e) {
    target = $(e.target);
    target = target.context;
    if (target.className != 'menu-icon' && target.className!= 'menu-toggle') {
        $('#menuToggle').prop('checked', false);
    }
})
