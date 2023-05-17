const form = document.getElementById('form-cad-contatos');

const nomes = [];
const telefones = [];



let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    atualizaTotal();
   

    
});

function adicionaLinha(){

    const nomePessoa = document.getElementById('nome-pessoa');
    const telefonePessoa = document.getElementById('telefone-pessoa');

    if(nomes.includes(nomePessoa.value)){
        alert(`O contato: ${nomePessoa.value} já foi inserido!`);
        nomePessoa.focus();
  
    }else if(telefonePessoa.value.length < 14 ||telefonePessoa.value.length > 15 ){
        alert(`O telefone: ${telefonePessoa.value} deve ter no mínimo 14 Caracteres e no máximo 15. \n Tamanho atual: ${telefonePessoa.value.length}`); 
        nomePessoa.focus(); 
    }else{
   nomes.push(nomePessoa.value)
   telefones.push(parseFloat(telefonePessoa.value))

    let linha = '<tr>';
    linha += `<td>${nomePessoa.value}</td>`;
    linha += `<td>${telefonePessoa.value}</td>`;
    linha += '</tr>';
    linhas += linha;

    nomePessoa.value = '';
    telefonePessoa.value = '';
}
   
 
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizaTotal(){
const total = totalRegs(); 
document.getElementById('total-registros').innerHTML ='Total de Registros: ' + total ;
} 

function totalRegs(){
    
    return telefones.length
    
}

const valida  = (event) => {
    let input = event.target
     input.value = mascara(input.value)
    }
  
  const mascara = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

