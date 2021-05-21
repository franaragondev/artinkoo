import $ from 'jquery'

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('a.scroll-top').stop()
            $('a.scroll-top').fadeIn('slow');
        } else {
            $('a.scroll-top').stop()
            $('a.scroll-top').fadeOut('slow');
        }
    });
    $('a.scroll-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    /*Abre y oculta el menu de la cesta de compra.
    Si esta abierto el menu normal, se cierra*/
    $('#bolsaCompra').click(function () {
        $('#menu_oculto_bolsa').css('right', '0')
        $('header div#menu input').prop('checked', false)
    })

    $('#cerrar_bolsa').click(function () {
        $('#menu_oculto_bolsa').css('right', '-100%')
    })

    $('#icono_cerrar_bolsa').click(function () {
        $('#menu_oculto_bolsa').css('right', '-100%')
    })

    $('#menu').click(function () {
        $('#menu_oculto_bolsa').css('right', '-100%')
    })

    //Actualiza el número de caracteres restantes 
    var max_caracteres = 100;

    $('#restantes').html(max_caracteres);

    $('textarea#comentario').keypress(function () {
        var caracter = $(this).val().length;
        var diferencia = max_caracteres - caracter;
        $('#restantes').html(diferencia);
    });

});