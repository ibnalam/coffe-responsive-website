/* -------------------------------------------------------------------------- */
/*                 Smooth Scrolling para los puntos de anclaje                */
/* -------------------------------------------------------------------------- */
$(document).ready(function(){
    $('a').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
    });
/* -------------------------- Fin Smooth Scrolling -------------------------- */

/* -------------------------------------------------------------------------- */
/*              Añadir o quitar clase para el cuadro de busqueda              */
/* -------------------------------------------------------------------------- */
document.querySelector('#buscar').onclick = () =>{
    document.querySelector('.searchbox').classList.toggle('activeSB');
}
/* --------------------------- Fin Añadir o quitar -------------------------- */

/* -------------------------------------------------------------------------- */
/*                          Mostrar navbar en moviles                         */
/* -------------------------------------------------------------------------- */
document.querySelector('#barsMenu').onclick = () =>{
    document.querySelector('.linksHeader').classList.toggle('linksHeaderAct');
}
/* --------------------------- Fin mostrar navbar --------------------------- */