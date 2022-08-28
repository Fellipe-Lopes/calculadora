function inserir(num){
   var valor = document.querySelector(".mostrador").innerHTML;
   document.querySelector(".mostrador").innerHTML = valor + num;
}

function resultado(){
   var resultado = document.querySelector(".mostrador").innerHTML;

   if(resultado){
      document.querySelector(".mostrador").innerHTML = eval(resultado);
   }
}

