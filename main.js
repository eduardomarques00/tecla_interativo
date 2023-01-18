function tocaSom (idElementoAudio) {

document.querySelector(idElementoAudio).play()
}

const ListaDeTeclas= document.querySelectorAll('.tecla')

let contador= 0;


while(contador< ListaDeTeclas.length){

   const teclas = ListaDeTeclas[contador];

   const instrumento = teclas.classList[1];

   //template string
   const idAudio = `#som_${instrumento}`

   console.log(idAudio)

   teclas.onclick= function(){
      tocaSom(idAudio)
   }; 
   contador++
}
