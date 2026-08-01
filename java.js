'user scrict'


const botaoCadastrar = document.getElementById ('cadastrar')
let contadorCodigo = 1

 function cadastrarProduto (){
    const tabela = document.getElementById('tabela')
    const caixaProduto = document.getElementById('nome-produto')
    const caixaQtd = document.getElementById ('qtd-produto')
    const caixaPreco = document.getElementById('preco-produto')


    const novaLinha = document.createElement ('tr') // uma nova linha, invisivel

    const tdNome = document.createElement ('td') //bloco
    tdNome.textContent = caixaProduto.value

    const tdCodigo = document.createElement('td')
    tdCodigo.textContent = contadorCodigo++

    const tdQtd = document.createElement ('td') //bloco
    tdQtd.textContent = caixaQtd.value

    const tdPreco = document.createElement ('td') //bloco
    tdPreco.textContent = caixaProduto.value


    novaLinha.append(tdCodigo)
    novaLinha.append(tdNome)
    novaLinha.append(tdQtd)
    novaLinha.append(tdPreco)

    tabela.append(novaLinha)

    console.log(caixaProduto)
} 


botaoCadastrar.addEventListener('click', cadastrarProduto)
