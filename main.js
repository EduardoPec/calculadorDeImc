const buttonCalIMC = document.getElementById('calcularIMCButton');
const resultIMC = document.getElementById('result');
const faixasIMC = document.querySelectorAll('.faixa');

function calcularIMC(){ 
    let nPeso   = document.getElementById('peso');
    let nAltura = document.getElementById('altura');

    if (nPeso.value !== '' && nAltura.value !== '') {
        let valPeso   = parseFloat(nPeso.value);
        let valAltura = parseFloat(nAltura.value);

        valAltura = valAltura / 100;
        let imc = valPeso / (valAltura * valAltura);

        resultIMC.value = imc.toFixed(1); 

        faixasIMC.forEach(faixa => faixa.style.background = 'none');

        if (imc < 18.5) {
          document.querySelector('.level1').style.background = '#FF5733';
        } else if (imc < 25.0) {
          document.querySelector('.level2').style.background = '#4CAF50';
        } else if (imc < 30.0) {
          document.querySelector('.level3').style.background = '#fce304';
        } else if (imc < 35.0) {
          document.querySelector('.level4').style.background = '#FF5733';
        } else if (imc < 40.0) {
          document.querySelector('.level5').style.background = '#FF5733';
        } else {
          document.querySelector('.level6').style.background = '#FF5733';
        }
    }
}

buttonCalIMC.addEventListener('click', calcularIMC);