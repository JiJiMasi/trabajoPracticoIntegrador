console.log ("Clase 7 ok");
console.log (inputNombre);

const nombre= document.getElementById("inputNombre");

const apellido= document.getElementById("inputApellido");

const email= document.getElementById("inputCorreo");

const cantEntradas= document.getElementById("inputCantidad");

const mensajeNombre=document.getElementById("mensajeNombre");

const mensajeEmail=document.getElementById("mensajeEmail");

const mensajeCantidad= document.getElementById("mensajeCantidad");

const totalAPagar=document.getElementById("totalAPagar");

const categEntradas= document.getElementById("inputCategoria");

const resumen=document.getElementById("botonResumen");

const borrador=document.getElementById("botonBorrar");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

resumen.addEventListener("click", validarNombre);

resumen.addEventListener("click", validarApellido);

resumen.addEventListener("click", validarEmail);

resumen.addEventListener("click", validarCantidad);

resumen.addEventListener("click", calcularTotal);

borrador.addEventListener("click", borrarTodo);

// function abreModal(){
//     modal.classList.add('modal--show)');
// }

function validarNombre(){
    if (nombre.value.length < 3){
        //mensajeNombre.innerHTML = "Nombre inválido";
        alert("El nombre ingresado es incorrecto");
    }
}

function validarApellido(){
    if (apellido.value.length<2){
        //mensajeApellido.innerHTML = "Apellido inválido";
        alert("El apellido ingresado es incorrecto");
    }
}

function validarEmail(){
    if (!expRegular.test(email.value)){
        //mensajeEmail.innerHTML= "Email inválido";
        alert("El email ingresado es incorrecto");
    }
}

function validarCantidad(){
    if (cantEntradas.value<1){
        //mensajeCantidad.innerHTML = "Cantidad inválida";
        alert("La cantidad debe ser mayor a cero");
    }
}

function calcularTotal(){
    if (categEntradas.value==0){
        alert("Por favor ingrese una categoría");
        totalAPagar.innerHTML= "Total a Pagar: $ "; 
    }else if (categEntradas.value==1){
        cuenta=200;
        totalAPagar.innerHTML= "Total a Pagar: $ "+ cuenta ;
        console.log(cuenta);
    }else if (categEntradas.value==2){
            cuenta=cantEntradas.value*(200*0.20)
            totalAPagar.innerHTML= "Total a Pagar: $ "+ cuenta ;
            console.log(cuenta);
    }else if (categEntradas.value==3){
            cuenta=cantEntradas.value*(200*0.50)
            totalAPagar.innerHTML= "Total a Pagar: $ "+ cuenta ;
            console.log(cuenta);
    }else if (categEntradas.value==4){
            cuenta=cantEntradas.value*(200*0.85)
            totalAPagar.innerHTML= "Total a Pagar: $ "+ cuenta ;
            console.log(cuenta);
    }
}

function borrarTodo(){
    totalAPagar.innerHTML= "Total a Pagar: $ "; 
}