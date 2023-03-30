const seccionbotonreiniciar=document.getElementById("button-reiniciar")
const seleccionarReinicio=document.getElementById("reiniciar")
const seleccionAtaque=document.getElementById("seleccionar-ataque")
const seleccionarGallo=document.getElementById("selec")


const seccionChillon=document.getElementById("seccion")
const seccionatack=document.getElementById("seleccionar-ataque")

const selecspan=document.getElementById("J1")
const spanj2=document.getElementById("J2")
const spanv1=document.getElementById("v1")
const spanv2=document.getElementById("v2")

const creasionuno=document.getElementById("resultado") 
const creasionAtaqueJ1=document.getElementById("ataque-J1")
const creasionAtaqueJ2=document.getElementById("ataque-J2")

const creasiondos=document.getElementById("resultado")
const seleccionarManounomf=document.getElementById("piedra")
const seleccionarManodosmf=document.getElementById("papel")
const seleccionarManotresmf=document.getElementById("tijeras")
const seccionbotonreiniciarmf=document.getElementById("button-reiniciar")
const contenerdorTargetas=document.getElementById("contenedor-targetas")
const contenedorAtaques=document.getElementById("contenerdos-ataques")



let monsters=[]
let jugadorid=null
let jugador1
let jugadordos
let opcionMonstruo
let selecCA
let selecMO
let selecEM
let mounstruoJugador
let miMOstro
let ataqueMOnsters
let seleccionarManouno
let seleccionarManodos
let seleccionarManotres
let vidasjugador=3
let vidas2=3
class monstruos {
    constructor(nombre,foto,vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
        

    }
}
let CAROLINA=new monstruos(`CAROLINA`,`/criaturas/CAROLINA.jpg`,3)
let MONSE=new monstruos(`MONSE`,`criaturas/MONSE.jpg`,3)
let EMILIO=new monstruos(`EMILIO`,`criaturas/EMILIO.jpg`,3)



CAROLINA.ataques.push(
    {nombre:`piedra`,id:`piedra`} ,
    {nombre:`papel`,id:`papel`} ,
    {nombre:`tijeras`,id:`tijeras`} ,
    )

MONSE.ataques.push(
    {nombre:`piedra`,id:`piedra`},
    {nombre:`papel`,id:`papel`},
    {nombre:`tijeras`,id:`tijeras`}, 
)

EMILIO.ataques.push(
    {nombre:`piedra`,id:`piedra`},
    {nombre:`papel`,id:`papel`},
    {nombre:`tijeras`,id:`tijeras`},
)

monsters.push(CAROLINA,MONSE,EMILIO,)


function iniciarjuego(){
    
    seccionbotonreiniciar.style.display="none"
    seleccionAtaque.style.display="none"
 

    monsters.forEach((monster)=>{
    opcionMonstruo=`<input type="radio" name="NIÑOS" id=${monster.nombre}>
    <label class="tres"for=${monster.nombre}>
       <p>${monster.nombre}</p>
       <img src=${monster.foto} alt=${monster.nombre} width="90px">
    </label>`
    contenerdorTargetas.innerHTML+=opcionMonstruo

     selecCA=document.getElementById("CAROLINA")
     selecMO=document.getElementById("MONSE")
     selecEM=document.getElementById("EMILIO")

     
    })
    seleccionarGallo.addEventListener("click",seleccionargallojugador)
    seleccionarReinicio.addEventListener("click",reiniciar)
 
}
function seleccionargallojugador(){
   
seccionChillon.style.display="none" 
seleccionAtaque.style.display="none"

seleccionAtaque.style.display="flex"


if(selecCA.checked){
    selecspan.innerHTML=selecCA.id
   mounstruoJugador=selecCA.id
}else if(selecMO.checked){
    selecspan.innerHTML=selecMO.id
    mounstruoJugador=selecMO.id
}else if(selecEM.checked){
    selecspan.innerHTML=selecEM.id
    mounstruoJugador=selecEM.id
}else{
    alert("TIENES QUE SELECCIONAR UN CHILLON")
}   
  
extraerAtaques(mounstruoJugador)      
vscontrincante()

}



function extraerAtaques(mounstruoJugador){
    let ataques
    for(let i=0; i<monsters.length; i++){
        if(mounstruoJugador===monsters[i].nombre){
            ataques=monsters[i].ataques

        }
        


    }
    mostrarAtaques(ataques)
 
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataqueMOnsters = `<button id=${ataque.id} class=boton-ataque>${ataque.nombre}</button>`
        
        contenedorAtaques.innerHTML+=ataqueMOnsters

})

seleccionarManouno=document.getElementById("piedra")
seleccionarManodos=document.getElementById("papel")
seleccionarManotres=document.getElementById("tijeras")

seleccionarManouno.addEventListener("click",manoPiedra)
seleccionarManodos.addEventListener("click",manoPapel)
seleccionarManotres.addEventListener("click",manoTijeras)

}
function vscontrincante(){
    let jugadordos=aleatorio(0,monsters.length-1)
   

    
        spanj2.innerHTML=monsters[jugadordos].nombre



}
function manoPiedra(){
    jugador1="PIEDRA✊🏻"
    ataqueVscontrincante()

}
function manoPapel(){
    jugador1="PAPEL🧻"
    ataqueVscontrincante()

}
function manoTijeras(){
    jugador1="TIJERAS✂"
    ataqueVscontrincante()

}
function ataqueVscontrincante(){
    let eleccionaleatoria=aleatorio(1,3)

    if(eleccionaleatoria==1){
       jugadordos="PIEDRA✊🏻"
    }else if(eleccionaleatoria==2){
        jugadordos="PAPEL🧻"
    }else if(eleccionaleatoria==3){
        jugadordos="TIJERAS✂"
    }
 combate()
}
function combate(){
  

   if(jugador1==jugadordos){
    crearmensage("EMPATADOS")
   
}else if(jugador1=="PIEDRA✊🏻"&&jugadordos=="TIJERAS✂"){
    crearmensage("GANASTE")
     vidas2--
    spanv2.innerHTML=vidas2


}else if(jugador1=="PAPEL🧻"&&jugadordos=="PIEDRA✊🏻"){
    crearmensage("GANASTE")
    vidas2--
    spanv2.innerHTML=vidas2
    

}else if(jugador1=="TIJERAS✂"&&jugadordos=="PAPEL🧻"){
    crearmensage("GANASTE")
    vidas2--
    spanv2.innerHTML=vidas2

}else{
    crearmensage("PERDISTE")
    vidasjugador--
    spanv1.innerHTML=vidasjugador
}
  contador()
}
function contador(){
    if(vidas2== 0){
        crearmensageFinal("GANASTE🤩😁🤡🥳")
           
    
    }else if(vidasjugador==0){
      crearmensageFinal( "PERDISTE😪😖😤😭")
    
    }
}
function crearmensage(resultado){
    
creasiondos.innerHTML=resultado
    
creasionAtaqueJ1.innerHTML=jugador1 

creasionAtaqueJ2.innerHTML= jugadordos
  }
function crearmensageFinal(resultadofinal){
creasiondos.innerHTML=resultadofinal
   
seleccionarManouno.disabled=true
seleccionarManodos.disabled=true
seleccionarManotres.disabled=true
seccionbotonreiniciar.style.display="flex"
}
function reiniciar(){
    return location.reload()

}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener("load",iniciarjuego)