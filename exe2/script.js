const botao = document.querySelector('#botao').addEventListener('click', ()=>{
    const nome = prompt("Qual o seu nome?")
    nome ? alert (`Saudação ${nome}!`) : alert("Saudação visitante!")
})

// "nome ?" é um operador ternário, que verifica se nome existe

// por cadeia lógica: nome && alert(`Bem vindo ${nome}`) consulta se nome existe, se não existir nem continua a linha
const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});
