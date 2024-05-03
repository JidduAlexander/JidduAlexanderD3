
const svgPortfolioNta = d3.select('#svg-portfolio-nta')
  .attr("viewBox","8.5 -6 69 52");

const pathsNta = [
  svgPortfolioNta.append('g').append('path'),
  svgPortfolioNta.append('g').append('path'),
  svgPortfolioNta.append('g').append('path'),
  svgPortfolioNta.append('g').append('path')
];
  
function lineNta(x, y, curve) {
  return d3.line()
    .x((d) => d[x])
    .y((d) => d[y])
    .curve(curve ? curve : d3.curveCatmullRomClosed);
} 
  
configNta = [
  {id: 'br1_1', cr1: 217, cg1: 217, cb1: 217, cr2: 217, cg2: 217, cb2: 217, cr3: 217, cg3: 217, cb3: 217, cr4: 217, cg4: 217, cb4: 217 },
  {id: 'br1_2', cr1: 204, cg1: 235, cb1: 197, cr2: 141, cg2: 211, cb2: 199, cr3: 253, cg3: 180, cb3: 98,  cr4: 255, cg4: 255, cb4: 179 },
  {id: 'br1_3', cr1: 255, cg1: 255, cb1: 179, cr2: 255, cg2: 237, cb2: 111, cr3: 251, cg3: 128, cb3: 114, cr4: 155, cg4: 200, cb4: 241 },
  {id: 'br1_4', cr1: 251, cg1: 128, cb1: 114, cr2: 188, cg2: 128, cb2: 189, cr3: 121, cg3: 170, cb3: 204, cr4: 201, cg4: 186, cb4: 218 }];

pathsNta[3]
  .datum(dataNtaPortfolio1_1)
  .attr("d", lineNta("x1", "y1"))
  .attr("stroke", "rgb(98, 98, 98)")
  .attr("stroke-width", 0.15)
  .attr("fill", "rgb(" + configNta[0].cr1 + ", " + configNta[0].cg1 + ", " + configNta[0].cb1 + ")");

pathsNta[2]
  .datum(dataNtaPortfolio1_2)
  .attr("d", lineNta("x1", "y1"))
  .attr("stroke", "rgb(98, 98, 98)")
  .attr("stroke-width", 0.15)
  .attr("fill", "rgb(" + configNta[1].cr1 + ", " + configNta[1].cg1 + ", " + configNta[1].cb1 + ")");

pathsNta[1]
  .datum(dataNtaPortfolio1_3)
  .attr("d", lineNta("x1", "y1"))
  .attr("stroke", "rgb(98, 98, 98)")
  .attr("stroke-width", 0.15)
  .attr("fill", "rgb(" + configNta[2].cr1 + ", " + configNta[2].cg1 + ", " + configNta[2].cb1 + ")");

pathsNta[0]
  .datum(dataNtaPortfolio1_4)
  .attr("d", lineNta("x1", "y1"))
  .attr("stroke", "rgb(98, 98, 98)")
  .attr("stroke-width", 0.15)
  .attr("fill", "rgb(" + configNta[3].cr1 + ", " + configNta[3].cg1 + ", " + configNta[3].cb1 + ")");

function resetPaths() {
  // Randomly select a number between 1 and 4
  const randomNumber = Math.floor(Math.random() * 4) + 1;

  for (let i = 0; i < 4; i++) {
  // Reset paths for the randomly selected number with D3 transition
    pathsNta[3 - i]
      .transition()
      .duration(800)
      .attr("d", lineNta("x" + (randomNumber), "y" + (randomNumber))) // Adjusting the x and y values dynamically
      .attr("fill", "rgb(" + configNta[i]["cr" + (randomNumber)] + ", " + configNta[i]["cg" + (randomNumber)] + ", " + configNta[i]["cb" + (randomNumber)] + ")");
  }
}

// Function to trigger random events at intervals between 0.5 and 2 seconds
function triggerRandomEvents() {
  const minInterval = 3600; // 1.2 seconds in milliseconds
  const maxInterval = 5000; // 2 seconds in milliseconds
  const interval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
  
  // Call the resetPaths function after the random interval
  setTimeout(function() {
    resetPaths();
    // Call triggerRandomEvents recursively to trigger the next event
    triggerRandomEvents();
  }, interval);
}

// Call triggerRandomEvents to start the process
triggerRandomEvents();
