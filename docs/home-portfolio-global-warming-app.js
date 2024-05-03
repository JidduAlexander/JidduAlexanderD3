
var viewBoxYmin = Math.floor(d3.min(dataAnomalies.map((d) => d.y0)))
var viewBoxYmax = Math.ceil(d3.max(dataAnomalies.map((d) => d.y0)))

const svgPortfolioGw = d3.select('#svg-portfolio-gw')
  .attr("viewBox","10 " + viewBoxYmin + " 80 " + (viewBoxYmax - viewBoxYmin))
  .attr('margin', "auto");

const svgPortfolioGwRect = svgPortfolioGw
  .append('g')
  .selectAll('rect')
  .data(dataGwPortfolioAnomalies)
  .enter()
  .append('rect')
  
svgPortfolioGwRect
  .attr('y', (d) => d.y2)
  .attr('height', (d) => d.h2)
  .attr('x', (d) => d.x0)
  .attr('width', (d) => d.w0)
  .attr('fill', (d) => d.fill)
  .attr('stroke', 'none')
  .attr('rx', (d) => d.w0 / 4)
  .attr('ry', (d) => d.w0 / 4)
  .style('opacity', (d) => d.o1);
  
svgPortfolioGw
  .on("mouseover", function() {
    svgPortfolioGwRect
      .transition(1000)
      .delay((d) => d.dd2)
      .attr('y', (d) => d.y0)
      .attr('height', (d) => d.h0);
  })
  .on("mouseout", function() {
    svgPortfolioGwRect
      .transition(1000)
      .delay((d) => d.dd2)
      .attr('y', (d) => d.y2)
      .attr('height', (d) => d.h2);
  });