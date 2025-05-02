let titulo = document.getElementById('titulo')
let botao = document.getElementById('botao').addEventListener('click', ()=>{
    if (titulo.innerHTML == "Desafio 3 Manipulando com DOM"){
         titulo.innerHTML = 'Manipulei com DOM'
    }else{
        titulo.innerHTML = 'Desafio 3 Manipulando com DOM'
    }
})

// titulo.textcontent = (titulo.textcontent == 'Desafio 3 Manipulando com DOM') ? 'Manipulei com DOM' : 'Desafio 3 Manipulando com DOM'
const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});