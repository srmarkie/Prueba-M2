$(function(){

    $("#correo").tooltip({     
      title:"Al hacer click en el boton se enviara el correo"
    })

    $("#correo").click(function(){
        alert("El correo se envio correctamente")
    })

    $(".card-title").click(function(){
        $(".card-text").fadeToggle()
    })

});