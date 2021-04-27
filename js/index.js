/*Pegando os Numbers pelo DOM*/
const zer = document.querySelector('#zero')
const um = document.querySelector('#um')
const dois = document.querySelector('#dois')
const tres = document.querySelector('#tres')
const quatro = document.querySelector('#quatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const sete = document.querySelector('#sete')
const oito = document.querySelector('#oito')
const nove = document.querySelector('#nove')

/*Pegando a tela*/
const tela = document.querySelector('#tela')

/*Variaveis nescessarias*/
let primerioValor, segundoValor, operador

/*Calculando o resultador e mostrando na tela*/
function resultado(){
    console.log(primerioValor)
    if(operador == 'somar'){
        segundoValor = Number(tela.value)
        tela.value = primerioValor + segundoValor
    }
    else if(operador == 'subtrair'){
        segundoValor = Number(tela.value)
        tela.value = primerioValor - segundoValor
    }
    else if(operador == 'multiplicar'){
        segundoValor = Number(tela.value)
        tela.value = primerioValor * segundoValor
    }
    else if(operador == 'dividir'){
        segundoValor = Number(tela.value)
        tela.value = primerioValor / segundoValor
    }
}

/*Pegando o valor da tela e armazenando no primeiroValor*/
function somar(){
    primerioValor = Number(tela.value)
    operador = 'somar'
    tela.value = " " 
}

function subtracao(){
    primerioValor = Number(tela.value)
    operador = 'subtrair'
    tela.value = " " 
}

function multiplicacao(){
    primerioValor = Number(tela.value)
    operador = 'multiplicar'
    tela.value = " " 
}

function divisao(){
    primerioValor = Number(tela.value)
    operador = 'dividir'
    tela.value = " " 
}

/*Limpando a tela*/
function clean(){
    tela.value = ''
}

/*Adicionando o clique do botão na tela*/
zer.addEventListener('click', ()=>{
    tela.value += 0
})

um.addEventListener('click', ()=>{
    tela.value += 1
})

dois.addEventListener('click', ()=>{
    tela.value += 2
})

tres.addEventListener('click', ()=>{
    tela.value += 3
})

quatro.addEventListener('click', ()=>{
    tela.value += 4
})

cinco.addEventListener('click', ()=>{
    tela.value += 5
})

seis.addEventListener('click', ()=>{
    tela.value += 6
})

sete.addEventListener('click', ()=>{
    tela.value += 7
})

oito.addEventListener('click', ()=>{
    tela.value += 8
})

nove.addEventListener('click', ()=>{
    tela.value += 9
})
