$(document).ready(function(){

    $(function Registro(){
        $("#NavAvatar").hide();
        $("#NavProducto").hide();
        $("#NavHistoria").hide();
        $("#NavCarrito").hide();
        $("#NavSalir").hide();

        $("#NavLogIn").show();
        $("#NavSigUp").show();
    });

    



    $("input").focus(function(){
        $(this).css("background-color","rgb(132, 218, 144)");
    });
    
    $("input").blur(function(){
        $(this).css("background-color","white");
    });

    $("#idUsuario").blur(function(){
        var user = $("#idUsuario").val();
        if(user.length<6){
            $(this).css("background-color", "rgb(252, 126, 126)");
        }else{
            $(this).css("background-color", "white");
        }
    });

    $("#idContraseña").blur(function(){
        var pass =  $("#idContraseña").val();
        if(pass.length>=8){
            var tamaño = true;
        }
        // a = 97  z = 122   A=65  Z=90   0=48    9=57
        console.log(pass.length)
        console.log(pass);
        for(i=0;i<pass.length;i++){
            console.log(pass.charCodeAt());
            if(pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122 ){
                var minus = true;
            }

            if(pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90 ){
                var mayus = true;
            }

                if(pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57 ){
                var number = true;
            }
            
        }

        if(tamaño && minus && mayus && number){
            console.log("Paso");
            $(this).css("background-color", "white");
        }else{
            console.log("no paso"); 
            //alert("Favor de ingresar una Contraseña correcta")
            $(this).css("background-color", "rgb(252, 126, 126)");
            
        }

        
    });

    $("#idContraseña2").blur(function(){
        var pass1 = $("#idContraseña").val();
        var pass2 = $("#idContraseña2").val();

        if(pass1 == pass2){
            //alert("Iguales")
            $(this).css("background-color", "white");
            return true;
            
        }else{
            //alert("Confirmar Contraseña")
            $(this).css("background-color", "rgb(252, 126, 126)");
            return false;
        }
        
    });

    $("#idCorreo").blur(function(){
        var check = false;
        var coreo = $("#idCorreo").val();
        console.log(coreo); 
        for(i=0;i<coreo.length; i++){
            if(coreo.charCodeAt(i)==64){
                console.log("si parece correo");
                check = true;
            }
        }

        if(check){
            $(this).css("background-color", "white");
        }else{
            $(this).css("background-color", "rgb(252, 126, 126)");
        }
    });





    /*$("#idAvatar").blur(function(){
        console.log("IMG")
        var A = $("#idAvatar").val();
        console.log(" - " + A);
        $("#idAvatarImg").attr("src", A);
        var H = $("#idAvatarImg");
        console.log(H);
        
    });
    */


});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            $(this).css("background-color", "rgb(252, 126, 126)");
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
    }, false);
})();
