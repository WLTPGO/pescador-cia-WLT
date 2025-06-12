// ATIVAR MENU MOBILE
function mostramenu() {
    $('header nav#nav-esq ul#menu-principal').css('display', 'flex');
    $('header nav#nav-esq ul#menu-principal').addClass('animate_animated animate_fadeInRight animate_slow');

    $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'none');
    $('header nav#nav-esq ul#icone-menu li#menuX').css('display', 'flex'); // <- Aqui mostra o X
}

function escondemenu() {
    $('header nav#nav-esq ul#menu-principal').css('display', 'none');

    $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'flex');
    $('header nav#nav-esq ul#icone-menu li#menuX').css('display', 'none'); // <- Aqui esconde o X
}


let controle = true;

$('nav#nav-esq ul#icone-menu').click(function () {
    if (controle === true) {
        mostramenu();
        controle = false;
    } else {
        escondemenu();
        controle = true;
    }
});

// FECHAR MENU MOBILE AO CLICAR EM UM ITEM