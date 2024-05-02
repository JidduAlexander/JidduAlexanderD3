
var viewBoxYmin = Math.floor(d3.min(dataGwAnomalies.map((d) => d.y0)))
var viewBoxYmax = Math.ceil(d3.max(dataGwAnomalies.map((d) => d.y0)))

const svgHeader = d3.select('.svg-header')
  .attr("viewBox","0 " + viewBoxYmin + " 100 " + (viewBoxYmax - viewBoxYmin))
  .attr('margin', "auto");
  
const svgHeaderRect = svgHeader
  .append('g')
  .selectAll('anomalies')
  .data(dataGwAnomalies)
  .enter()
  .append('rect')
  
svgHeaderRect
  .attr('y', (d) => d.y2)
  .attr('height', (d) => d.h2)
  .attr('x', (d) => d.x0)
  .attr('width', (d) => d.w0)
  .attr('fill', (d) => d.fill)
  .attr('stroke', 'none')
  .attr('rx', (d) => d.w0 / 4)
  .attr('ry', (d) => d.w0 / 4)
  .style('opacity', (d) => d.o1);
  
svgHeader
  .on("mouseover", function() {
    svgHeaderRect
      .transition(1000)
      .delay((d) => d.dd2)
      .attr('y', (d) => d.y0)
      .attr('height', (d) => d.h0);
  })
  .on("mouseout", function() {
    svgHeaderRect
      .transition(1000)
      .delay((d) => d.dd2)
      .attr('y', (d) => d.y2)
      .attr('height', (d) => d.h2);
  });
