const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Desenha o primeiro círculo completamente preenchido
ctx.beginPath();
ctx.arc(100, 100, 25, 0, 2 * Math.PI);
ctx.fillStyle = "#ff7800";
ctx.fill();

// Desenha o segundo círculo com a borda e um ponto indicando 35%
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.strokeStyle = "#ff7800";
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.arc(
  100 + 50 * Math.cos(0.2 * 2 * Math.PI - 0.5 * Math.PI),
  100 + 50 * Math.sin(0.2 * 2 * Math.PI - 0.5 * Math.PI),
  7,
  0,
  2 * Math.PI
);

ctx.fillStyle = "#ff7800";
ctx.fill();
ctx.lineWidth = 0.5;
ctx.stroke();

// Desenha o terceiro círculo com a borda e um ponto indicando 2%
ctx.beginPath();
ctx.arc(100, 100, 75, 0, 2 * Math.PI);
ctx.strokeStyle = "#ff7800";
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.arc(
  100 + 75 * Math.cos(-0.02 * 2 * Math.PI - 0.5 * Math.PI),
  100 + 75 * Math.sin(-0.02 * 2 * Math.PI - 0.5 * Math.PI),
  7,
  0,
  2 * Math.PI
);

ctx.fillStyle = "#ff7800";
ctx.fill();

// Gráfico de barras Um

const barGraph = document.getElementById("barGraph");
const graph = barGraph.getContext("2d");

// define os valores das barras
const values = [9, 7, 5, 11, 12, 6, 18, 10, 8, 7];

// define o valor total das barras
const totalValue = 18;

// define a altura máxima das barras
const maxHeight = 40;

// define a largura e o espaçamento das barras
const barWidth = 5;
const barSpacing = 3;

// desenha cada barra
let x = 10;
for (let i = 0; i < values.length; i++) {
  const height = (values[i] / totalValue) * maxHeight;
  const y = barGraph.height - height - 5;
  graph.fillStyle = "#ff7800";
  graph.fillRect(x, y, barWidth, height);
  x += barWidth + barSpacing;
}

// Gráfico de barras Dois

const barGraphTwo = document.getElementById("barGraphTwo");
const graphTwo = barGraphTwo.getContext("2d");

// define os valores das barras
const valuesTwo = [9, 7, 5, 11, 12, 6, 18, 10, 8, 7];

// define o valor total das barras
const totalValueTwo = 18;

// define a largura e o espaçamento das barras
let x2 = 10;
const barWidthTwo = 5;
const barSpacingTwo = 3;

// desenha cada barra
for (let i = 0; i < valuesTwo.length; i++) {
  const height = (valuesTwo[i] / totalValueTwo) * maxHeight;
  const y = barGraphTwo.height - height - 5;
  graphTwo.fillStyle = "#ff7800";
  graphTwo.fillRect(x2, y, barWidthTwo, height);
  x2 += barWidthTwo + barSpacingTwo;
}

// Gráfico de linha suave
const smoothLineGraph = document.getElementById("lineGraph");
const graphThree = smoothLineGraph.getContext("2d");

// Configuração do gráfico
graphThree.lineWidth = 3;
graphThree.strokeStyle = "#ff7800";
graphThree.lineJoin = "round";
graphThree.lineCap = "round";

// Dados da linha
const data = [2, 4, 18, 10, 1, 4, 15, 5, -6, 2, 5, 9];

// Desenha a linha
graphThree.beginPath();
graphThree.moveTo(10, 80);

for (let i = 0; i < data.length - 1; i++) {
  const xMid = (i * 20 + (i + 3) * 20) / 2;
  const yMid = (80 - data[i] * 3 + 80 - data[i + 1] * 3) / 2;
  graphThree.quadraticCurveTo(i * 20 + 20, 80 - data[i] * 3, xMid, yMid);
}

graphThree.lineTo((data.length - 1) * 20 + 20, 80 - data[data.length - 1] * 3);
graphThree.stroke();

// Desenha o círculo final
graphThree.beginPath();
graphThree.fillStyle = "#ff7800";
graphThree.arc(240, 45, 15, 0, 2 * Math.PI);
graphThree.fill();

// Legenda
graphThree.fillStyle = "#c9c9c9";
graphThree.font = "16px Arial";
graphThree.fillText("+10%", 220, 20);

// Evento de Click nos ícones do sidebar

const icons = document.querySelectorAll(".sidebar .sidebarButton");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((otherIcon) => otherIcon.classList.remove("active"));
    icon.classList.add("active");
  });
});
