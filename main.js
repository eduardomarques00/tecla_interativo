function tocaSom (seletorAudio) {

const elemento= document.querySelector(seletorAudio)

if(elemento != null && elemento.localName === 'audio'){
   elemento.play()
   
}else{
   alert('Elemento não encontrado!')
}
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
   teclas.onkeydown = function(evento){

         console.log(evento.code == 'Space')

         if(evento.code == 'Space' || evento.code === 'Enter'){
            teclas.classList.add('ativa')
         }
         
   }
   teclas.onkeyup = function(){
      teclas.classList.remove('ativa')
   }
   
}
