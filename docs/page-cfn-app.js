
// using d3 for convenience
var scrolly = d3.select("#scrolly-cfn");
var article = scrolly.select("#article-cfn");
var step    = article.selectAll(".step");
var figure  = scrolly.select("#figure-cfn");

// initialize the scrollama
var scroller = scrollama();

const svgIntro = d3.select('#svg-intro-cfn')
  .attr("viewBox","0 0 100 35")
  .attr('margin', "auto");

svgIntro
  .append('g')
  .selectAll('rect')
  .data(dataCfnRectsIntro)
  .enter()
  .append('rect')
  .attr('x', (d) => d.x1)
  .attr('width', (d) => d.w1)
  .attr('y', (d) => d.y2)
  .attr('height', (d) => d.h1)
  .attr('fill', (d) =>d.fill);

const svg = d3.select('#svg-cfn')
  .attr("viewBox","0 0 100 100")
  .attr('margin', "auto");

var MARGINS = {top:20, bottom:10};
var CHART_WIDTH = 100;
var CHART_HEIGHT_M = 120; // figureHeight;
var CHART_HEIGHT = CHART_HEIGHT_M - MARGINS.top - MARGINS.bottom;

var x = d3.scaleLinear();
var y = d3.scaleLinear();

const drawingCoal = new CfnCustomDrawing(svg, dataCfnDrawingCoal, {id: 'drawingCoal', dx:-10, dy:-10});
const drawingOil  = new CfnCustomDrawing(svg, dataCfnDrawingOil,  {id: 'drawingOil',  dx:0,   dy:-10});
const drawingGas  = new CfnCustomDrawing(svg, dataCfnDrawingGas,  {id: 'drawingGas',  dx:10,  dy:-10});

const fosSource = new CfnFosSource(svg, dataCfnFosSource, {id: 'fosSource'});

const fosSourceYear  = new CfnCustomText(svg, dataCfnFosSourceYear,  {id: 'fosSourceYear',  dx:-10, dy:0});
const fosSourceLabel = new CfnCustomText(svg, dataCfnFosSourceLabel, {id: 'fosSourceLabel', dx:10,  dy:0});

const fosRectGlobal  = new CfnFosRectGlobal(svg, dataCfnFosRectGlobal,  {id: 'fosRectGlobal',  duration: 1200, barFill: '#3E3E3E'});

const fosRectEU27    = new CfnFosRectRegion(svg, dataCfnFosRectEU27,    {id: 'fosRectEU27',    duration: 1200, barFill: '#377EB8'});
const fosRectUSA     = new CfnFosRectRegion(svg, dataCfnFosRectUSA,     {id: 'fosRectUSA',     duration: 1200, barFill: '#B69121'});
const fosRectIndia   = new CfnFosRectRegion(svg, dataCfnFosRectIndia,   {id: 'fosRectIndia',   duration: 1200, barFill: '#138808'});
const fosRectChina   = new CfnFosRectRegion(svg, dataCfnFosRectChina,   {id: 'fosRectChina',   duration: 1200, barFill: '#E41A1C'});
const fosRectBunkers = new CfnFosRectRegion(svg, dataCfnFosRectBunkers, {id: 'fosRectBunkers', duration: 1200, barFill: '#0033CC'});

const fosPathEU27    = new CfnFosPathRegion(svg, dataCfnFosPathEU27,    {id: 'fosPathEU27',    duration: 1200, stroke: '#377EB8', curve: d3.curveMonotoneX });
const fosPathUSA     = new CfnFosPathRegion(svg, dataCfnFosPathUSA,     {id: 'fosPathUSA',     duration: 1200, stroke: '#B69121', curve: d3.curveMonotoneX });
const fosPathIndia   = new CfnFosPathRegion(svg, dataCfnFosPathIndia,   {id: 'fosPathIndia',   duration: 1200, stroke: '#138808', curve: d3.curveMonotoneX });
const fosPathChina   = new CfnFosPathRegion(svg, dataCfnFosPathChina,   {id: 'fosPathChina',   duration: 1200, stroke: '#E41A1C', curve: d3.curveMonotoneX });
const fosPathBunkers = new CfnFosPathRegion(svg, dataCfnFosPathBunkers, {id: 'fosPathBunkers', duration: 1200, stroke: '#0033CC', curve: d3.curveMonotoneX });
const fosPathRow     = new CfnFosPathRegion(svg, dataCfnFosPathRow,     {id: 'fosPathRow',     duration: 1200, stroke: '#3E3E3E', curve: d3.curveMonotoneX });

const fosConsumptionAreaEU27  = new CfnFosConsumptionAreaRegion(svg, dataCfnFosConsumptionAreaEU27,  {id: 'fosConsumptionAreaEU27',  duration: 1200, fill: '#377EB8', curve: d3.curveMonotoneX });
const fosConsumptionAreaUSA   = new CfnFosConsumptionAreaRegion(svg, dataCfnFosConsumptionAreaUSA,   {id: 'fosConsumptionAreaUSA',   duration: 1200, fill: '#B69121', curve: d3.curveMonotoneX });
const fosConsumptionAreaIndia = new CfnFosConsumptionAreaRegion(svg, dataCfnFosConsumptionAreaIndia, {id: 'fosConsumptionAreaIndia', duration: 1200, fill: '#138808', curve: d3.curveMonotoneX });
const fosConsumptionAreaChina = new CfnFosConsumptionAreaRegion(svg, dataCfnFosConsumptionAreaChina, {id: 'fosConsumptionAreaChina', duration: 1200, fill: '#E41A1C', curve: d3.curveMonotoneX });

const fosPath2Australia    = new CfnFosPath2Region(svg, dataCfnFosPath2Australia,    {id: 'fosPath2Australia',    duration: 1200, stroke: '#00008B', curve: d3.curveMonotoneX });
const fosPath2UAE          = new CfnFosPath2Region(svg, dataCfnFosPath2UAE,          {id: 'fosPath2UAE',          duration: 1200, stroke: '#00732F', curve: d3.curveMonotoneX });
const fosPath2Canada       = new CfnFosPath2Region(svg, dataCfnFosPath2Canada,       {id: 'fosPath2Canada',       duration: 1200, stroke: '#FF0000', curve: d3.curveMonotoneX });
const fosPath2SaudiArabia  = new CfnFosPath2Region(svg, dataCfnFosPath2SaudiArabia,  {id: 'fosPath2SaudiArabia',  duration: 1200, stroke: '#006C35', curve: d3.curveMonotoneX });
const fosPath2UK           = new CfnFosPath2Region(svg, dataCfnFosPath2UK,           {id: 'fosPath2UK',           duration: 1200, stroke: '#00247D', curve: d3.curveMonotoneX });
const fosPath2Russia       = new CfnFosPath2Region(svg, dataCfnFosPath2Russia,       {id: 'fosPath2Russia',       duration: 1200, stroke: '#0033A0', curve: d3.curveMonotoneX });
const fosPath2Japan        = new CfnFosPath2Region(svg, dataCfnFosPath2Japan,        {id: 'fosPath2Japan',        duration: 1200, stroke: '#BC002D', curve: d3.curveMonotoneX });
const fosPath2Africa       = new CfnFosPath2Region(svg, dataCfnFosPath2Africa,       {id: 'fosPath2Africa',       duration: 1200, stroke: '#008000', curve: d3.curveMonotoneX });
const fosPath2SouthAmerica = new CfnFosPath2Region(svg, dataCfnFosPath2SouthAmerica, {id: 'fosPath2SouthAmerica', duration: 1200, stroke: '#FFD700', curve: d3.curveMonotoneX });
const fosPath2Global       = new CfnFosPath2Region(svg, dataCfnFosPath2Global,       {id: 'fosPath2Global',       duration: 1200, stroke: '#787878', curve: d3.curveMonotoneX });

const fosArea2Australia   = new CfnFosConsumptionAreaRegion(svg, dataCfnFosArea2Australia,   {id: 'fosArea2Australia',   duration:1200, fill: '#00008B', curve: d3.curveMonotoneX });
const fosArea2UAE         = new CfnFosConsumptionAreaRegion(svg, dataCfnFosArea2UAE,         {id: 'fosArea2UAE',         duration:1200, fill: '#00732F', curve: d3.curveMonotoneX });
const fosArea2Canada      = new CfnFosConsumptionAreaRegion(svg, dataCfnFosArea2Canada,      {id: 'fosArea2Canada',      duration:1200, fill: '#FF0000', curve: d3.curveMonotoneX });
const fosArea2SaudiArabia = new CfnFosConsumptionAreaRegion(svg, dataCfnFosArea2SaudiArabia, {id: 'fosArea2SaudiArabia', duration:1200, fill: '#006C35', curve: d3.curveMonotoneX });
const fosArea2UK          = new CfnFosConsumptionAreaRegion(svg, dataCfnFosArea2UK,          {id: 'fosArea2UK',          duration:1200, fill: '#00247D', curve: d3.curveMonotoneX });
const fosArea2Russia      = new CfnFosConsumptionAreaRegion(svg, dataCfnFosArea2Russia,      {id: 'fosArea2Russia',      duration:1200, fill: '#0033A0', curve: d3.curveMonotoneX });
const fosArea2Japan       = new CfnFosConsumptionAreaRegion(svg, dataCfnFosArea2Japan,       {id: 'fosArea2Japan',       duration:1200, fill: '#BC002D', curve: d3.curveMonotoneX });

const braceWithTextEU27Decrease      = new CfnBraceWithText(svg, dataCfnBraceWithTextEU27Decrease,     {id: 'bWTEU27Decrease',     duration: 100, fontFamily: 'Gluten', braceColor: '#377EB8'});
const braceWithTextUSADecrease       = new CfnBraceWithText(svg, dataCfnBraceWithTextUSADecrease,      {id: 'bWTUSADecrease',      duration: 100, fontFamily: 'Gluten', braceColor: '#B69121'});
const braceWithTextChinaConsumption  = new CfnBraceWithText(svg, dataCfnBraceWithTextChinaConsumption, {id: 'bWTChinaConsumption', duration: 100, fontFamily: 'Gluten', braceColor: '#E41A1C'});
const braceWithTextRow1990           = new CfnBraceWithText(svg, dataCfnBraceWithTextRow1990,          {id: 'bWTRow1990',          duration: 100, fontFamily: 'Gluten', braceColor: '#3E3E3E'});

const xAxisTicksLabels = new CfnXAxisTicksLabels(svg, dataCfnXAxisTicksLabels, {id: 'xAxisTicksLabels',  duration: 100, fontFamily: 'Gluten'});


// Transition functions that are class methods have to be passed by arrow function or binding such that the context (.this) remains that of the class and not the transitionDown.
// Arrow: 'transitionFunction': (...args) => instance.method(...args)
// Bind: 'transitionFunction': instance.method.bind(instance)
const transitionsUpDownRaw = [[
  {'down':true, 'up':true, 'step': 0.01, 'stepEnd': 0.01, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSource.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.01, 'stepEnd': 0.01, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => drawingCoal.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.01, 'stepEnd': 0.01, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => drawingOil.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.01, 'stepEnd': 0.01, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => drawingGas.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.01, 'stepEnd': 0.01, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSourceYear.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.01, 'stepEnd': 0.01, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSourceLabel.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.2, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSourceYear.trans1(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.3, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSource.trans1(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSource.trans2(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.5, 'stepEnd': 0.7, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSource.trans3(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.7, 'stepEnd': 0.8, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSource.trans4(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.8, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosSourceLabel.trans1(...args),     'durationDefault': 200,  'delayDefault': 0},
],[
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.initTransform(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.4,  'stepEnd': 0.55, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosSourceYear.trans2(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.4,  'stepEnd': 0.55, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosSource.trans5(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.4,  'stepEnd': 0.55, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosSourceLabel.trans2(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.5,  'stepEnd': 0.55, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosSourceYear.trans3(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.5,  'stepEnd': 0.55, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosSourceLabel.trans3(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.7,  'stepEnd': 0.8,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.trans1(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.9,  'stepEnd': 1.1,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => drawingCoal.trans1(...args),     'durationDefault': 150,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.9,  'stepEnd': 1.1,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => drawingOil.trans1(...args),     'durationDefault': 150,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.9,  'stepEnd': 1.1,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => drawingGas.trans1(...args),     'durationDefault': 150,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 1.0,  'stepEnd': 1.0,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosSource.trans6Down(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 1.0,  'stepEnd': 1.0,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosSource.trans6Up(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.9,  'stepEnd': 1.1,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosSourceYear.trans4(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.9,  'stepEnd': 1.1,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosSourceLabel.trans4(...args),     'durationDefault': 200,  'delayDefault': 0},
],[
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => xAxisTicksLabels.initTransform(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.15, 'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.trans2(...args),     'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.3,  'stepEnd': 0.6,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.transDown3(...args),     'durationDefault': 350,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.6,  'stepEnd': 0.6,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => xAxisTicksLabels.trans1(...args),      'durationDefault': 350,  'delayDefault': 0},
], [
  {'down':true, 'up':true, 'step': 0.2,  'stepEnd': 0.7,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectGlobal.transDown4(...args),     'durationDefault': 350,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2,  'stepEnd': 0.4,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => xAxisTicksLabels.trans2(...args),      'durationDefault': 350,  'delayDefault': 0},
], [
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectEU27.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathEU27.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextEU27Decrease.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaEU27.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectEU27.transDown1(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.transDown5(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectEU27.transDown2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathEU27.transDown1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true,  'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => xAxisTicksLabels.trans3(...args),     'durationDefault': 300,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectEU27.transUp2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathEU27.transUp1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.4,  'stepEnd': 0.4,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextEU27Decrease.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.4,  'stepEnd': 0.4,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextEU27Decrease.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.9,  'stepEnd': 0.9,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextEU27Decrease.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.9,  'stepEnd': 0.9,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextEU27Decrease.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
], [
  {'down':true, 'up':false, 'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaEU27.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaEU27.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
], [
  {'down':true, 'up':false, 'step': 0.8,  'stepEnd': 0.8,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaEU27.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.8,  'stepEnd': 0.8,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaEU27.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
], [
  {'down':true, 'up':true,  'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectUSA.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathUSA.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextUSADecrease.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaUSA.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectUSA.transDown1(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.transDown6(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectUSA.transDown2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathUSA.transDown1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectUSA.transUp2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathUSA.transUp1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.4,  'stepEnd': 0.4,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextUSADecrease.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.4,  'stepEnd': 0.4,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextUSADecrease.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.65, 'stepEnd': 0.65, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextUSADecrease.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.65, 'stepEnd': 0.65, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextUSADecrease.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.7,  'stepEnd': 0.7,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaUSA.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.7,  'stepEnd': 0.7,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaUSA.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.95, 'stepEnd': 0.95, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaUSA.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.95, 'stepEnd': 0.95, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaUSA.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
], [
  {'down':true, 'up':true,  'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectIndia.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathIndia.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaIndia.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectIndia.transDown1(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.transDown7(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectIndia.transDown2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathIndia.transDown1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectIndia.transUp2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathIndia.transUp1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.5,  'stepEnd': 0.5,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaIndia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.5,  'stepEnd': 0.5,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaIndia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.95, 'stepEnd': 0.95, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaIndia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.95, 'stepEnd': 0.95, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaIndia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
], [
  {'down':true, 'up':true,  'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathChina.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectChina.initTransform(...args),     'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextChinaConsumption.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaChina.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectChina.transDown1(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1,  'stepEnd': 0.1,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.transDown8(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectChina.transDown2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathChina.transDown1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectChina.transUp2(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3,  'stepEnd': 0.3,  'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathChina.transUp1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.5,  'stepEnd': 0.5,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaChina.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.5,  'stepEnd': 0.5,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaChina.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.6,  'stepEnd': 0.6,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextChinaConsumption.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.6,  'stepEnd': 0.6,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextChinaConsumption.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.9,  'stepEnd': 0.9,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextChinaConsumption.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.9,  'stepEnd': 0.9,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextChinaConsumption.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.95, 'stepEnd': 0.95, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaChina.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.95, 'stepEnd': 0.95, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosConsumptionAreaChina.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
], [
  {'down':true, 'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectBunkers.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathBunkers.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectBunkers.transDown1(...args),    'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.transDown9(...args),     'durationDefault': 600,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectBunkers.transDown2(...args),    'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':false, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathBunkers.transDown1(...args),    'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectBunkers.transUp2(...args),      'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathBunkers.transUp1(...args),      'durationDefault': 900,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathRow.initTransform(...args),  'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextRow1990.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosRectGlobal.transDown10(...args), 'durationDefault': 900, 'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathRow.transDown1(...args),     'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosRectGlobal.transUp10(...args),   'durationDefault': 900,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathRow.transUp1(...args),       'durationDefault': 900,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextRow1990.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextRow1990.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextRow1990.trans1(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => braceWithTextRow1990.trans2(...args), 'durationDefault': 400,  'delayDefault': 0},
], [
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => xAxisTicksLabels.trans4(...args),    'durationDefault': 1000,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathEU27.transDown2(...args),     'durationDefault': 1000,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathUSA.transDown2(...args),      'durationDefault': 1000,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathIndia.transDown2(...args),    'durationDefault': 1000,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathChina.transDown2(...args),    'durationDefault': 1000,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathRow.transDown2(...args),      'durationDefault': 1000,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPathBunkers.transDown2b(...args), 'durationDefault': 500,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2Canada.initTransform(...args),      'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Canada.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2Canada.transDown1(...args),         'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2Canada.transUp1(...args),           'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Canada.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Canada.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Canada.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Canada.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.9, 'stepEnd': 1.0, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosPath2Canada.trans2(...args),            'durationDefault': 100,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2Australia.initTransform(...args),   'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Australia.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2Australia.transDown1(...args),      'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2Australia.transUp1(...args),        'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Australia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Australia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Australia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2Australia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.9, 'stepEnd': 1.0, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosPath2Australia.trans2(...args),         'durationDefault': 100,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2SaudiArabia.initTransform(...args), 'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2SaudiArabia.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2SaudiArabia.transDown1(...args),    'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2SaudiArabia.transUp1(...args),      'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2SaudiArabia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2SaudiArabia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2SaudiArabia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2SaudiArabia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.9, 'stepEnd': 1.0, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosPath2SaudiArabia.trans2(...args),       'durationDefault': 100,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2UAE.initTransform(...args), 'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0,  'stepEnd': 0.0,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2UAE.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.1,  'stepEnd': 0.9,  'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathEU27.trans3(...args),      'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.1,  'stepEnd': 0.9,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathUSA.trans3(...args),       'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.1,  'stepEnd': 0.9,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathIndia.trans3(...args),     'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.1,  'stepEnd': 0.9,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathChina.trans3(...args),     'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.1,  'stepEnd': 0.9,  'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => fosPathRow.trans3(...args),       'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.25, 'stepEnd': 0.25, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2UAE.transDown1(...args),  'durationDefault': 400,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.25, 'stepEnd': 0.25, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2UAE.transUp1(...args),    'durationDefault': 400,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5,  'stepEnd': 0.5,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2UAE.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5,  'stepEnd': 0.5,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2UAE.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.75, 'stepEnd': 0.75, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2UAE.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.75, 'stepEnd': 0.75, 'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosArea2UAE.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.8,  'stepEnd': 0.8,  'nextOnUp': 'end',   'nextOnDown': 'end',   'transitionFunction': (...args) => fosPath2UAE.trans2(...args),      'durationDefault': 100,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2UK.initTransform(...args),   'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2UK.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2UK.transDown1(...args),      'durationDefault': 800,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2UK.transUp1(...args),        'durationDefault': 800,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2UK.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2UK.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2UK.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2UK.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.9, 'stepEnd': 1.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2UK.trans2(...args),         'durationDefault': 100,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Russia.initTransform(...args),      'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Russia.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Russia.transDown1(...args),         'durationDefault': 800,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Russia.transUp1(...args),           'durationDefault': 800,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Russia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Russia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Russia.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Russia.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.9, 'stepEnd': 1.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Russia.trans2(...args),            'durationDefault': 100,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Japan.initTransform(...args), 'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Japan.initTransform(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Japan.transDown1(...args),    'durationDefault': 800,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Japan.transUp1(...args),      'durationDefault': 800,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Japan.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.5, 'stepEnd': 0.5, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Japan.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Japan.trans2(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.9, 'stepEnd': 0.9, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosArea2Japan.trans1(...args), 'durationDefault': 200,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.9, 'stepEnd': 1.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Japan.trans2(...args),       'durationDefault': 100,  'delayDefault': 0},
], [ // Section without transitions
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2SouthAmerica.initTransform(...args),      'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2SouthAmerica.transDown1(...args),         'durationDefault': 800,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2SouthAmerica.transUp1(...args),           'durationDefault': 800,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.8, 'stepEnd': 1.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2SouthAmerica.trans2(...args),            'durationDefault': 100,  'delayDefault': 0},
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Africa.initTransform(...args),   'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Africa.transDown1(...args),      'durationDefault': 800,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Africa.transUp1(...args),        'durationDefault': 800,  'delayDefault': 0},
  {'down':true,  'up':true,  'step': 0.8, 'stepEnd': 1.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Africa.trans2(...args),         'durationDefault': 100,  'delayDefault': 0},
], [
], [
  {'down':true,  'up':true,  'step': 0.0, 'stepEnd': 0.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Global.initTransform(...args),   'durationDefault': 0,    'delayDefault': 0},
  {'down':true,  'up':false, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Global.transDown1(...args),      'durationDefault': 800,  'delayDefault': 0},
  {'down':false, 'up':true,  'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Global.transUp1(...args),        'durationDefault': 800,  'delayDefault': 0},
  // {'down':true,  'up':true,  'step': 0.8, 'stepEnd': 1.0, 'nextOnUp': 'end', 'nextOnDown': 'end', 'transitionFunction': (...args) => fosPath2Global.trans2(...args),         'durationDefault': 100,  'delayDefault': 0},
]];

// Function to calculate cumulative steps
function calculateCumulativeSteps(transitions) {
  let cumulativeStep = 0;

  transitions.forEach(group => {
    group.forEach(transition => {
      transition.step    += cumulativeStep;
      transition.stepEnd += cumulativeStep;
    });
    cumulativeStep++;
  });

  return transitions.flat();
}

const transitionsUpDown = calculateCumulativeSteps(transitionsUpDownRaw).map((row, index) => ({...row, transition: `t${index + 1}`}));


function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedHandleStepProgress = debounce(handleStepProgress, 50); // Adjust the 200ms delay as needed


function init() {
    
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

	// 2. setup the scroller with the bare-bones settings
	// this will also initialize trigger observations
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller
		.setup({
			step: "#scrolly-cfn #article-cfn .step",
			progress: true,
			//debug: true,
			offset: 0.8,
		})
		.onStepProgress(debouncedHandleStepProgress);
}


// kick things off
document.addEventListener("DOMContentLoaded", function() {
  // Your initialization code here
  init(); // Call your init function here or put your init code directly here
  
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleFirstScroll);

  x.range([0, CHART_WIDTH]);
  y.range([CHART_HEIGHT, 0]);
  
  x.domain([0, 100]);
  y.domain([0, 100]);

});


// Function to handle the first scroll event
function handleFirstScroll() {
  // Call handleOrientationAndWidth
  handleOrientationAndWidth();

  // Remove the event listener to prevent multiple executions
  window.removeEventListener('scroll', handleFirstScroll);
}

  