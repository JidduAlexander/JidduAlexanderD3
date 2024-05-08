
const svgPortfolioCfn = d3.select('#svg-portfolio-cfn')
  .attr("viewBox","15 5 75 30");

function appendRectangles(svg, data, fill) {
  return svg.append('g')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d) => d.x1)
        .attr('width', (d) => d.w1)
        .attr('y', (d) => d.y2)
        .attr('height', (d) => d.h1)
        .attr('fill', fill);
}

const textsCfn = ["RoW", "Bunker fuels", "China", "India", "USA", "EU"]
const colorsCfn = ['#3E3E3E', '#0033CC', '#E41A1C', '#138808', '#B69121', '#377EB8']
// Call the function for each data source
const rectsCfn = [
  appendRectangles(svgPortfolioCfn, dataPortfolioCfnGlobal, "#565656"), // '#3E3E3E');
  appendRectangles(svgPortfolioCfn, dataPortfolioCfnBunkers, "#565656"), // '#0033CC');
  appendRectangles(svgPortfolioCfn, dataPortfolioCfnChina, "#565656"), // '#E41A1C');
  appendRectangles(svgPortfolioCfn, dataPortfolioCfnIndia, "#565656"), // '#138808');
  appendRectangles(svgPortfolioCfn, dataPortfolioCfnUSA, '#B69121'),
  appendRectangles(svgPortfolioCfn, dataPortfolioCfnEU27, "#565656") // '#377EB8');
];
  
let currentIndex = 4;

const textCfn = svgPortfolioCfn
  .append('text')
  .text("USA")
  .attr("x", 20)
  .attr("y", 15)
  .style("text-anchor", 'left')
  .style("alignment-baseline", 'baseline') // doesn't work with path
  //.style('font-family', 'Gluten')
  .style("font-size", 3.5)
  .attr('fill', '#B69121');
  
function switchColor() {

    // Randomly select a new data source
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * colorsCfn.length);
    } while (newIndex === currentIndex);
    
  rectsCfn[currentIndex].transition("ci").duration(400).attr('fill', "#565656");
  rectsCfn[newIndex].transition("ni").duration(400).attr('fill', colorsCfn[newIndex]);
  textCfn
    .transition("t1")
    .duration(200)
    .attr("y", 16)
    .style("opacity", 0)
    .on('end', function() {
        d3.select(this)
            .attr("y", 14) // Set position to y = 7
            .text(textsCfn[newIndex])
            .attr('fill', colorsCfn[newIndex])
            .transition("t2") // Chained transition
            .duration(200) // Transition duration
            .style("opacity", 1); // Set opacity back to 1
    });
  
  currentIndex = newIndex;
}

// Call switchColor every 2 seconds
setInterval(switchColor, 3200);
