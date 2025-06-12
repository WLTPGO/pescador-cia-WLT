//   NAVEGAÇÃO DOS MENUS  //

$(document).ready(function() {
    $('header nav#nav-esq ul#menu-principal li:eq(0)').click(function() {
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $('header nav#nav-esq ul#menu-principal li:eq(1)').click(function() {
        $('html, body').animate({
            scrollTop: $('section.produtos').offset().top
        }, 1000);
    });
});


$(document).ready(function() {
    $('header nav#nav-esq ul#menu-principal li:eq(2)').click(function() {
        $('html, body').animate({
            scrollTop: $('section.sobre').offset().top
        }, 1000);
    });
});

//  NAVEGAÇÃO DOS MENUS  FOOTER //
$('footer .nav-footer ul li:eq(0)').click(function() {
    $('html, body').animate({scrollTop: $('header').offset().top}, 1000);
});

$('footer .nav-footer ul li:eq(1)').click(function() {
    $('html, body').animate({scrollTop: $('section.sobre').offset().top}, 1000);
});

$('footer .nav-footer ul li:eq(2)').click(function() {
    $('html, body').animate({scrollTop: $('section.produtos').offset().top}, 1000);
});
