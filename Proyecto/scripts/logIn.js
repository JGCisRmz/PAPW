$(document).ready(function(){

    $("#logRestablecer").hide();

     $("input").focus(function(){
        $(this).css("background-color","rgb(132, 218, 144)");
    });

     $("input").blur(function(){
        $(this).css("background-color","white");
    });

    $(".forgot").click(function(){
        $("#LogTitulo").text("Restablecer Contraseña");
        $("#LogParrafo").text("Por favor ingrese su email y su nombre de Usuario");
        $("#logEmail").val(null);
        $("#logPassword").attr("type","text");
        $("#logPassword").attr("placeholder","Nombre de Usuario");
        $("#logPassword").val(null)
        $("#logPassword").attr("id","logUser");
        $("#LogBoton").hide();
        $("#logRestablecer").show();
        
        
    });

    $("#logRestablecer").click(function(){
        console.log("Entro 01");
        var validation = false;
        var correo = $("#logEmail").val();
        for(i=0; i< correo.length;i++){
            if(coreo.charCodeAt(i)==64){
               
                var validation =  true;
            }
        }
        
        if(validation){
            alert("A sido enviado un correo con la informacion que necesitas.");
        }else{
            alert("Por favor ingrese los datos correctamente");
        }

    });

});