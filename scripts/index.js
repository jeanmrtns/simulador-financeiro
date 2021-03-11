// Inputs values
const valorFinanciamento = document.getElementById('value')
const prazoAnos = document.getElementById('period')
const jurosAnos = document.getElementById('interest')

// Simulate btn
const botaoSimular = document.getElementById('simulate-btn')

// Output values
const prazoMeses = document.getElementById('month-period')
const jurosMes = document.getElementById('month-interest')
const jurosAcumulados = document.getElementById('accumulated-interests')

const amortizacaoOutput = document.querySelectorAll('.amortizacao')
const jurosOutput = document.querySelectorAll('.juros')
const totalOutput = document.querySelectorAll('.total')

// Calculating
const prestacao = document.querySelectorAll('tbody > tr')
let funding = null
let dividaRestante = Number(valorFinanciamento.value)

botaoSimular.addEventListener('click', (event) => {

    event.preventDefault()

    funding = Number(prazoAnos.value) * 12
    prazoMeses.value = funding

    const jurosMesValue = Math.pow((1 + Number(jurosAnos.value)), (1 / 12)) - 1
    jurosMes.value = jurosMesValue

    let amortizacao = (Number(valorFinanciamento.value) / Number(prazoMeses.value))
    let juros = Number(valorFinanciamento.value) * Number(jurosMes.value)
    let total = amortizacao + juros

    jurosAcumulados.value = Number((Number(valorFinanciamento.value) * (1 + Number(jurosMes.value)) ** Number(prazoMeses.value)) - Number(valorFinanciamento.value))

    prestacao.forEach(p => {
        p.children[1].innerHTML = Number(amortizacao.toFixed(2))
        p.children[2].innerHTML = Number(juros.toFixed(2))
        p.children[3].innerHTML = Number(total.toFixed(2))
    })
})
