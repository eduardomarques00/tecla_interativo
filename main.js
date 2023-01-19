function tocaSom (idElementoAudio) {

document.querySelector(idElementoAudio).play()
}

const ListaDeTeclas= document.querySelectorAll('.tecla')



for(let contador=0; contador< ListaDeTeclas.length; contador++){

   const teclas = ListaDeTeclas[contador];
   const instrumento = teclas.classList[1];
//template string
   const idAudio = `#som_${instrumento}`

   teclas.onclick= function(){
      tocaSom(idAudio)
   } 
   
}
