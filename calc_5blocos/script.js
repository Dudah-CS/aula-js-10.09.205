// Lógica da Calculadora de IMC
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        resultDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
        resultDiv.style.display = 'block';
        return;
    }

    const imc = weight / (height * height);
    let category = '';

    if (imc < 18.5) {
        category = 'Abaixo do peso';
    } else if (imc < 24.9) {
        category = 'Peso normal';
    } else if (imc < 29.9) {
        category = 'Sobrepeso';
    } else if (imc < 34.9) {
        category = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        category = 'Obesidade grau 2';
    } else {
        category = 'Obesidade grau 3 (mórbida)';
    }

    resultDiv.innerHTML = `Seu IMC é **${imc.toFixed(2)}**.<br> Classificação: **${category}**`;
    resultDiv.style.display = 'block';
});

// Lógica do Gerador de Cores
const generateBtn = document.getElementById('generate-btn');
const colorBoxes = document.querySelectorAll('.color-box');

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    colorBoxes.forEach(box => {
        box.style.backgroundColor = generateRandomColor();
    });
}

generateBtn.addEventListener('click', generatePalette);

// Ativar a geração de cores com a barra de espaço
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        generatePalette();
    }
});

// Gerar uma paleta inicial ao carregar a página
window.addEventListener('load', generatePalette);