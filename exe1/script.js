const botao = document.getElementById('botao').addEventListener('click',()=>alert("AAAAAAAAAAAAAAAAAHHHHH"))
//essa linha já pega o componente por id, coloca o eventlistener click e já resulta no alert com arrow function
// ()=> no lugar de function após o ('click') economiza código, não precisa identificar como função, o js já entende como função, isso é uma arrow function

const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});
