let numeropc
let tentativas
let maxtentativas
let maxvalor
botaoreiniciar = document.getElementById('botaoreiniciar')

document.getElementById('botaofacil').addEventListener('click', ()=>{
    numeropc = Math.floor(Math.random() * 10) + 1
    maxtentativas = 3
    tentativas = 0
    maxvalor = 10
    document.getElementById('resultado').innerHTML = `<p class="p-2">Nível Fácil iniciado! o número secreto está entre 1 a 10 e você tem 3 tentativas!</p>`
})

document.getElementById('botaomedio').addEventListener('click', ()=>{
    numeropc = Math.floor(Math.random() * 50) + 1
    maxtentativas = 5
    tentativas = 0
    maxvalor = 50
    document.getElementById('resultado').innerHTML = `<p class="p-2">Nível Médio iniciado! o número secreto está entre 1 a 50 e você tem 5 tentativas!</p>`
})
  
document.getElementById('botaodificil').addEventListener('click', ()=>{
    numeropc = Math.floor(Math.random() * 100) + 1
    maxtentativas = 7
    tentativas = 0
    maxvalor = 100
    document.getElementById('resultado').innerHTML = `<p class="p-2">Nível Difícil iniciado! o número secreto está entre 1 a 100 e você tem 7 tentativas!</p>`
})

document.getElementById('botaojogo').addEventListener('click', ()=>{
    const numerouser = parseInt(document.getElementById('numero').value)
    console.log(numerouser)
    const caixaresultado = document.getElementById('resultado')
    if (!numeropc) {
        caixaresultado.innerHTML = `<p class="p-2">Escolha um nível primeiro!</p>`
        return;
    }
    if(!numerouser){
        caixaresultado.innerHTML = `<p class="p-2">Insira um número!</p>`
        return;
    }
    if (numerouser < 1 || numerouser > maxvalor) {
        caixaresultado.innerHTML = `<p>Digite um número entre 1 e ${maxvalor}!</p>`
        return
      }
    tentativas++

    if(numerouser === numeropc){
        caixaresultado.innerHTML = `<p class="p-2">Parabéns, você acertou em ${tentativas} tentativa(s)!</p>`
        const som = document.getElementById('ganhou');
        som.play();
        botaoreiniciar.classList.remove('hidden')
    }else if (tentativas >= maxtentativas) {
        caixaresultado.innerHTML = `<p class="p-2">Acabaram suas tentativas! O número era ${numeropc}.</p>`
        const som = document.getElementById('perdeu');
        som.play();
        botaoreiniciar.classList.remove('hidden')
    }else if(numerouser > numeropc){
        caixaresultado.innerHTML = `<p class="p-2"> Tente um número menor. Tentativas restantes: ${maxtentativas - tentativas}</p>`
    }else if(numerouser < numeropc){
        caixaresultado.innerHTML = `<p class="p-2">Tente um número maior. Tentativas restantes: ${maxtentativas - tentativas}</p>`
    }
})
document.getElementById('botaoreiniciar').addEventListener('click', ()=>{
    numeropc = null
    tentativas = 0
    maxtentativas = 0
    document.getElementById('numero').value = ''
    document.getElementById('resultado').innerHTML = "<p>Jogo reiniciado. Escolha um nível para jogar!</p>"
    botaoreiniciar.classList.add('hidden')
  })

const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});