
function contador(numeros, res, restar, aum){
const num = document.getElementById(numeros);
const decrecer = document.getElementById(res);
const rest = document.getElementById(restar);
const aumentar = document.getElementById(aum);
let numero = 0;
aumentar.addEventListener('click', () => {
    numero+=1;
    num.innerHTML = numero;
})

decrecer.addEventListener('click', () =>{
    numero-=1;
    num.innerHTML = numero;
})

rest.addEventListener('click', () =>{
    numero = 0;
    num.innerHTML = numero;
})
}

let contador1 = contador("numero","buttonRes","buttonRest","buttonAum");
let contador2 = contador("numero2","buttonRes2","buttonRest2","buttonAum2");





const mostrar = document.getElementById("contador2");
let show = true;

function showHide(){
    if (show){
        mostrar.style.display = 'block';
        show = false;
    }
    else{
        mostrar.style.display = 'none';
        show = true;
    }
}




