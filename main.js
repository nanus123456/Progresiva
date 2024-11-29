//service worker
if('serviceWorker' in navigator){
    console.log('Puedes usar los serviceWorker del navegador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente',res))
                            .catch(err => console.log('serviceWorker ',err))
}else{
    console.log('No puedes usar los serviceWorker del navegador');
}

//scroll suavizado
$(document).ready(function(){
   // console.log("Hola mundo");
   $("#menu a").click(function(e){
    //cancela el evento si esta es cancelable
    e.preventDefault();
        //animate es un metodo de instancia crea una nueva animacion
        $("html, body").animate({
            //Establece el numero de pixeles en el contenido de un ele
            //ha sido desplazado
            scrollTop: $($(this).attr('href')).offset().top
        });
    return false;
   });
});