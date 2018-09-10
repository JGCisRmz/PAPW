$(document).ready(function(){

        $("#NavLogIn").hide();
        $("#NavSigUp").hide();
       
        $("#NavSalir").click(function(){
            $("#NavAvatar").hide();
            $("#NavProducto").hide();
            $("#NavHistoria").hide();
            $("#NavCarrito").hide();
            $("#NavSalir").hide();

            $("#NavLogIn").show();
            $("#NavSigUp").show();

        });

        $("#NavLogIn").click(function(){
            $("#NavAvatar").show();
            $("#NavProducto").show();
            $("#NavHistoria").show();
            $("#NavCarrito").show();
            $("#NavSalir").show();

            $("#NavLogIn").hide();
            $("#NavSigUp").hide();

        });
    });