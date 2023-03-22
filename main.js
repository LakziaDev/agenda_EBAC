const form = document.getElementById('form')
let contatos = ''
const nomes = []
const telefones = []

form.addEventListener('submit', function(e){
    e.preventDefault()
    addLinha()
    atualizaTab()
})

function addLinha() {
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')

    if (nomes.includes(nome.value)) {
        alert (`O contato ${nome.value} já foi cadastrado.`)
    } else {
        nomes.push(nome.value)
        telefones.push(telefone.value)
    
        let linha = '<tr>'
        linha += `<td> ${nome.value}</td>`
        linha += `<td> ${telefone.value}</td>`
        linha += `</tr>` 
        contatos += linha
    }

    nome.value = ''
    telefone.value = ''
}

function atualizaTab() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = contatos
}
