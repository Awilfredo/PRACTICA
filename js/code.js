function validarDatos(){
    var nombre= document.getElementById("name");
    var apellido= document.getElementById("lastName");
    var edad= document.getElementById("edad")
    var area= document.getElementById("area");
    var numero=document.getElementById("telefono");
    var lista= document.getElementById("depart");
    var departamento= lista.selectedIndex;
    var campoVacio=false;
    mensaje= "Los siguientes campos estan vacios:";

    if(nombre.value==""){
        mensaje += "\n\rNombre"
        nombre.style="border: 1px solid red;"
    }

    if(apellido.value==""){
        mensaje += "\n\rApellido"
        apellido.style="border: 1px solid red;"
    }

    if(edad.value==""){
        mensaje += "\n\rEdad"
        edad.style="border: 1px solid red;"
    }

    if(area.value==""){
        mensaje += "\n\rArea"
        area.style="border: 1px solid red; width:30px"
    }

    if(numero.value==""){
        mensaje += "\n\rNumero"
        numero.style="border: 1px solid red;"
    }

    if (nombre.value=="" || apellido.value=="" || edad.value=="" || area.value=="" || numero.value=="") {
        alert(mensaje);
        campoVacio=true;
    }



    if(!campoVacio){
        var i;
        var x= nombre.value.length;
        
        for(i=0; i<x; i++){
            if(!isNaN(nombre.value[i])){
                alert("El campo Nombre no debe contener valores Numericos");
                nombre.style= "border: 1px solid red;";
                nombre.value="";
                break; 
            }
        }

        x=apellido.value.length;
        for(i=0; i<x; i++){
            if(!isNaN(apellido.value[i])){
                alert("El campo Apellido no debe contener valores Numericos");
                apellido.style= "border: 1px solid red;";
                apellido.value="";
                break; 
            }
        }

        x=apellido.value.length;
        for(i=0; i<x; i++){
            if(isNaN(edad.value[i])){
                alert("El campo Edad solo debe contener valores Numericos");
                edad.style= "border: 1px solid red;";
                edad.value="";
                break; 
            }
        }


            x=area.value.length;
            for(i=0; i<x; i++){
                if(isNaN(area.value[i])){
                    alert("El campo Area solo debe contener valores Numericos");
                    area.style= "border: 1px solid red;";
                    area.value="";
                    break; 
                }
            }
                
                x=numero.value.length;
                for(i=0; i<x; i++){
                    if(isNaN(numero.value[i])){
                        alert("El campo Edad solo debe contener valores Numericos");
                        numero.style= "border: 1px solid red;";
                        numero.value="";
                        break; 
                    }    
                 }

    }


}
    
