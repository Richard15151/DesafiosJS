const caixa = document.getElementById('caixa')
const menuPrincipal = document.getElementById('menuprincipal')

const conteudos = {
    html: '<p>HTML é A linguagem de marcação fundamental para criar páginas web.</p>',
    css: '<p>CSS é usado para estilizar e dar aparência aos elementos HTML.</p>',
    javascript: '<p>JavaScript permite adicionar interatividade e comportamento dinâmico às páginas.</p>'
}

const classesLiAtivo = ['font-bold']
let itemativoatual = null

const mostrarConteudo = (tipo) => {
    caixa.classList.remove('hidden')
    caixa.innerHTML = conteudos[tipo] || '<p>Conteúdo não encontrado.</p>'
}

const definirEstadoAtivoItem = (item, estaativo) => {
    item.classList.toggle(...classesLiAtivo, estaativo)
    item.querySelector('.icone-ativo')?.classList.toggle('hidden', !estaativo)
}

menuPrincipal.addEventListener('click', (evento) => {
    const itemclicado = evento.target.closest('li[data-tipo]');
    if (!itemclicado || itemclicado === itemativoatual) return;
  
    if (itemativoatual) definirEstadoAtivoItem(itemativoatual, false);
  
    definirEstadoAtivoItem(itemclicado, true);
    itemativoatual = itemclicado;
  
    mostrarConteudo(itemclicado.dataset.tipo);
  });

const cardInner = document.getElementById('card-inner');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  cardInner.classList.toggle('rotate-y-180');
});