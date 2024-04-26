import data from "./data.json" assert { type: "json" };

let chartBarsContainer = document.querySelector(".chart__bars-container");

let values = [];

data.forEach((element) => {
  values.push(element.amount);
  chartBarsContainer.innerHTML += `
    <div class="chart__bar">
         <div class="chart__bar--label">$${element.amount}</div>
         <div class="chart__bar--day">${element.day}</div>
    </div>`;
});

console.log(values);

let alturaMaxBarpx = 150;
let maxValue = Math.max(...values);

console.log(maxValue);

let bars = document.querySelectorAll(".chart__bar");
bars = [...bars];

bars.forEach((bar) => {
  let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1));

  let alturaActualpx = (nuevoValor * alturaMaxBarpx) / maxValue;

  bar.style.height = `${alturaActualpx}px`;

  // Pintar la barra más grande de Cyan.
  if (nuevoValor == maxValue) {
    bar.style.backgroundColor = "hsl(186, 34%, 60%)";
  }

  bar.addEventListener("mouseover", (event) => {
    if (event.target.className == "chart__bar") {
      let labelElement = event.target.childNodes[1];
      labelElement.style.display = "block";
    }
  });
  bar.addEventListener("mouseout", (event) => {
    if (event.target.className == "chart__bar"){
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = "none";
    }  
  });
});
