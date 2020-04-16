//"ready" para carregar este script apenas quando o documento da página estiver pronto
$(document).ready(function(){

   /* $('.parallax').parallax();*/
    
     //na tag nav quando eu passar o mouse adiciona a class nav-show, quando tirar o mouse remove a class
     $("nav").mouseover(function(){
        $(".nav-itens").addClass("nav-show");
    });
    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");
    });


 ///quando passar o mouse em cima do elemento a tooltip é executado   
    $("a.tooltip").mouseover(function (){ 
///pego o valor que está no datatooltip e acrescendo na variavel texto
        var texto = $(this).attr('data-tooltip');
///acesso o elemento filtro do data-tooltip que é o text-tool e acrescendo o texto
        $(this).children(".text_tooltip").html(texto);
///função css para exibir o elemento. anteriormente, definido no style.css, para opacity: 0
        $(this).children(".text_tooltip").css('opacity', '1');
    });

///quando eu tirar o mouse opacity fica 0 para sumir da tela
    $("a.tooltip").mouseout(function(){
        $(this).children(".text_tooltip").css('opacity', '0');
    });

//para execução do evento 
    $("a.text_tooltip").mouseover(function(e){
        e.stopPropagation();
    });

///transição mais suave entre as sections
    var page = $('html, body');
    $('a.tooltip').click(function() {
    page.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 400);
    return false;
    })


// função dispara quando o scroll seja disparado. após isso, 
//é capturado na variavel a distancia do scroll para a pagina 
$(document).scroll(function(){
    var topWindow = $(window).scrollTop();
    if (topWindow > 60){
        $("header").addClass('header_fixed');
    }else{
        $("header").removeClass('header_fixed');
    };
});
});




