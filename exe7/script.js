// document.getElementById('botao').addEventListener('click', () => {
//     const nome = document.getElementById('nome')
//     const email = document.getElementById('email')
//     const idade = document.getElementById('idade')
//     const mensagem = document.getElementById('mensagem')
//     mensagem.classList.remove('hidden');
//     if(nome.value && email.value && Number(idade.value)>0){
//         nome.value = '';
//         email.value = '';
//         idade.value = '';
//         mensagem.innerHTML = `<p class="bg-green-600 mt-3 rounded h-6 font-semibold ">Cadastro concluido!</p>`
//     }else{
//         mensagem.innerHTML = `<p class="bg-red-300 mt-3 rounded h-6 font-semibold">Preencha todos os campos!</p>`
//     }
// })

//opção com ternário:
document.getElementById('botao').addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const idade = document.getElementById('idade');
    const mensagem = document.getElementById('mensagem');
  
    mensagem.classList.remove('hidden');
  
    const camposValidos = nome.value && email.value && Number(idade.value) > 0;
  
    mensagem.innerHTML = camposValidos
      ? `<p class="bg-green-600 mt-3 rounded h-6 font-semibold">Cadastro concluído!</p>`
      : `<p class="bg-red-300 mt-3 rounded h-6 font-semibold">Preencha todos os campos!</p>`;
  
    camposValidos && [nome, email, idade].forEach(campo => campo.value = '');
  });

  const cardInner = document.getElementById('card-inner');
  const flipBtn = document.getElementById('flipBtn');
  
  flipBtn.addEventListener('click', () => {
    cardInner.classList.toggle('rotate-y-180');
  });