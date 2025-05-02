document.getElementById('botao').addEventListener('click', () =>{ const itens = document.querySelectorAll('#empresas li')
    itens.forEach(item => {
      if (item.style.color === 'red') {
        item.style.color = 'black'
      } else {
        item.style.color = 'red'
      }
    })
})

//UTILIZANDO O FOR CLÁSSICO:
// document.getElementById('botao').addEventListener('click', () => {
//   const itens = document.querySelectorAll('#empresas li');

//   for (let i = 0; i < itens.length; i++) {
//     if (itens[i].style.color === 'red') {
//       itens[i].style.color = 'black';
//     } else {
//       itens[i].style.color = 'red';
//     }
//   }
// });

//UTILIZANDO FOR OF:
// document.getElementById('botao').addEventListener('click', () => {
//   const itens = document.querySelectorAll('#empresas li');

//   for (const item of itens) {
//     if (item.style.color === 'red') {
//       item.style.color = 'black';
//     } else {
//       item.style.color = 'red';
//     }
//   }
// });

//UTILIZANDO ARRAY.FROM() E MAP:
// document.getElementById('botao').addEventListener('click', () => {
//   const itens = document.querySelectorAll('#empresas li');

//   Array.from(itens).map(item => {
//     item.style.color = item.style.color === 'red' ? 'black' : 'red';
//   });
// });

//UTILIZANDO WHILE:
// const botao = document.getElementById('botao');

// botao.addEventListener('click', () => {
//   const itens = document.querySelectorAll('#empresas li');
//   let i = 0;

//   while (i < itens.length) {
//     if (itens[i].style.color === 'red') {
//       itens[i].style.color = 'black';
//     } else {
//       itens[i].style.color = 'red';
//     }
//     i++;
//   }
// });

const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});