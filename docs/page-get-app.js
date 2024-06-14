
const svg = d3.select('#svg-get')
  .attr("viewBox","0 0 100 945")
  .attr('margin', "auto");

const getGhg = new GetGhg(svg, dataGetGhg, {id: "main", settings: dataSettings})


