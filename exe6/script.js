//opção com ternário:
const botao = document.getElementById('botao');
const paragrafo = document.getElementById('ocultar');
const textoInicio = paragrafo.innerText;

botao.addEventListener('click', () => {
  const mostrando = paragrafo.innerText !== '';
  paragrafo.innerText = mostrando ? '' : textoInicio;
  botao.innerText = mostrando ? 'Mostrar' : 'Esconder';
});

const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});
//fiz com if e else:
// const botao = document.getElementById('botao')
// const textoinicio = document.getElementById('ocultar').innerText
// botao.addEventListener('click', () => {
//     const paragrafo = document.getElementById('ocultar')

//     if (paragrafo.innerText === '') {
//         paragrafo.innerText = textoinicio
//         botao.innerText = 'Esconder'
//     } else {
//         paragrafo.innerText = ''
//         botao.innerText = 'Mostrar'
//     }
// })