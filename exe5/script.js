document.getElementById('botao').addEventListener('click', ()=>{
    const numero = document.getElementById('numero')
    numero.innerText++

    const som = document.getElementById('som-clique');
    som.play();
})

document.getElementById('resetar').addEventListener('click', ()=>{
    const numero = document.getElementById('numero')
    numero.innerHTML = 0
})

const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});

//função inicial:
// document.getElementById('botao').addEventListener('click', ()=>{
//   let numero = document.getElementById('numero')
//   let number1 = Number(numero.innerHTML)
//   const incrementado = number1 + 1
//   numero.textContent = incrementado
// })

//segunda função:
// document.getElementById('botao').addEventListener('click', ()=>{
//     const numero = document.getElementById('numero')
//     numero.textContent = parseInt(numero.innerHTML) + 1
// })