let data_atual = new Date()
data_enem2025H = new Date(2025, 10, 9, 13, 0, 0)
data_enem2025E = new Date(2025, 10, 16, 13, 0, 0)
function calcularTempoRestante(dataFutura, dataHoje = data_atual){
    ano = dataFutura.getFullYear() - dataHoje.getFullYear()
    mes = dataFutura.getMonth() - dataHoje.getMonth()
    dia = dataFutura.getDate() - dataHoje.getDate()
    hora = dataFutura.getHours() - dataHoje.getHours()
    min = dataFutura.getMinutes() - dataHoje.getMinutes()
    sec = dataFutura.getSeconds() - dataHoje.getSeconds()
    ms = (sec * 1000) + (min * 60000) + (hora * 3600000) + (dia * 24 * 3600000) + (mes * 30 * 24 * 3600000) + (ano * 365 * 24 * 3600000)
    if(ms <= 0){
        return "A data já passou"
    }
    else{
    msAnos = 365*30*3600000
    anos = Math.floor(ms/msAnos)
    msMeses = 30*24*3600000
    ms -= (msAnos*anos)
    meses = Math.floor(ms/msMeses)
    msDias = 24*3600000
    ms -= (msMeses*meses)
    dias = Math.floor(ms/msDias)
    msHoras = 3600 * 1000
    ms -= (msDias*dias)
    horas = Math.floor(ms/msHoras)
    msMinutos = 60 * 1000
    ms -= (msHoras*horas)
    minutos = Math.floor(ms/msMinutos)
    msSegundos = 1000
    ms -= (msMinutos*minutos)
    segundos = Math.floor(ms/msSegundos)
    tempo = `${anos}/${meses}/${dias} - ${horas}:${minutos}:${segundos}`
    return tempo
    }
}
function atualizarTemporizador(){
    data_atual = new Date()
    tempoH = calcularTempoRestante(data_enem2025H)
    tempoE = calcularTempoRestante(data_enem2025E)
    console.log(`
O tempo até a prova de linguagens do enem é ${tempoH}
O tempo até a prova de exatas do enem é ${tempoE}
`)
}
setInterval(atualizarTemporizador, 1000)
// atualizarTemporizador()