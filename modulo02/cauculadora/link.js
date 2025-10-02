const display = document.getElementById('call');
const numeros = document.querySelectorAll('.num');
const operacoes = document.querySelectorAll('.op');

let datela='';
let operdor='';
let donumero='';

numeros.forEach(btn => {
    btn.addEventListener('click', () => {
        datela += btn.textContent;
        display.value = datela;
    });
    
});
operacoes.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const op= btn.textContent;

         if(op==='C'){
        datela='';
        operdor='';
        donumero='';
        display.value='0';
        return;
    }
        if(op=== '='){
            if(operdor&&donumero){
                let resultado= eval(donumero+operdor+datela);
                display.value= resultado;
                datela=resultado;
                donumero='';
                operdor='';
              }  
            return
        }
        if(datela!==''){
            operdor=op;
            donumero= datela;
            datela="";
        }
    }) 
})
   