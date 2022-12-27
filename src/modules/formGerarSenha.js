import geraSenha from "./geradores";

const gerarSenha = document.querySelector('.gerar-senha');
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chKMaiusculas = document.querySelector('.chk-maiusculas');
const chKMinusculas = document.querySelector('.chk-minusculas');
const chKNumeros = document.querySelector('.chk-numeros');
const chKSimbolos = document.querySelector('.chk-simbolos');

export default ()=>{
    gerarSenha.addEventListener('click', ()=>{
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(
      qtdCaracteres.value,
      chKMaiusculas.checked,
      chKMinusculas.checked,
      chKNumeros.checked,
      chKSimbolos.checked
    );
  
    return senha || 'Selecione uma opção';
  }
  