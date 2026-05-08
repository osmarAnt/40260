let resultado=document.getElementById("resultado")
let botones =document.getElementsByTagName("button")
let r=0
let eliminar = 0
let operacion = ""
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones,key)){
    const boton =botones[key]
    if (boton.className != "operadores"){
        boton.addEventListener("click",pintar)}
    else {
        boton.addEventListener("click",pintar2)
    }

    
    }
}
function pintar(e){
    console.log(e.target.innerText)
            if (eliminar === 1){
            resultado.value=""
            eliminar = 0
        }
    resultado.value += e.target.innerText
    
}

function pintar2(e){
 console.log(e.target.innerHTML)
}


function respuesta(){
    if (operacion === "+"){
        r = eval(r + parseInt(resultado.value))
        resultado.value = r.toString()
            console.log(r)
        r=0
    }
    if (operacion === "-"){
        r = eval(r - parseInt(resultado.value))
        resultado.value = r.toString()
            console.log(r)
        r=0
    }
    if (operacion === "*"){
        r = eval(r * parseInt(resultado.value))
        resultado.value = r.toString()
            console.log(r)
        r=0
    }
    if (operacion === "/" && resultado.value!=0){
        r = eval(r / parseInt(resultado.value))
        resultado.value = r.toString()
            console.log(r)
        r=0

    }
    eliminar = 1

}
function suma(){
    // r= resultado.value
        r = eval(r + parseInt(resultado.value))
    resultado.value=""
    operacion = "+"
//  console.log(r)
}
function resta(){
    r = eval(r + parseInt(resultado.value))
    resultado.value=""
    operacion = "-"
}
function multiplicacion(){
    r = eval(r + parseInt(resultado.value))
    resultado.value=""
    operacion = "*"
}
function division(){
    r = eval(r + parseInt(resultado.value))
    resultado.value=""
    operacion = "/"
}

function borrar(){
    resultado.value=""
}
