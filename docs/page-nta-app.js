
// using d3 for convenience
var scrolly = d3.select("#scrolly-nta");
var article = scrolly.select("#d3-article-nta");
var step    = article.selectAll(".step");
var figure  = scrolly.select("#figure-nta");

// initialize the scrollama
var scroller = scrollama();

const svg = d3.select('#svg-nta')
  .attr("viewBox","0 0 100 100")
  .attr('margin', "auto");

var MARGINS = {top:20, bottom:10};
var CHART_WIDTH = 100;
var CHART_HEIGHT_M = 120; // figureHeight;
var CHART_HEIGHT = CHART_HEIGHT_M - MARGINS.top - MARGINS.bottom;

var x = d3.scaleLinear();
var y = d3.scaleLinear();

// Rcolorbrwer Set3 + 4 from chatgpt RESHUFFLED
//cr1: 251, cg1: 128, cb1: 114, cr2: 188, cg2: 128, cb2: 189, cr3: 121, cg3: 170, cb3: 204, cr4: 201, cg4: 186, cb4: 218 });
//cr1: 255, cg1: 255, cb1: 179, cr2: 255, cg2: 237, cb2: 111, cr3: 251, cg3: 128, cb3: 114, cr4: 155, cg4: 200, cb4: 241 });
//cr1: 204, cg1: 235, cb1: 197, cr2: 141, cg2: 211, cb2: 199, cr3: 253, cg3: 180, cb3: 98,  cr4: 255, cg4: 255, cb4: 179 });
//cr1: 217, cg1: 217, cb1: 217, cr2: 217, cg2: 217, cb2: 217, cr3: 217, cg3: 217, cb3: 217, cr4: 217, cg4: 217, cb4: 217 });

const blurbs1_4 = new NtaCircle(svg, dataNtaBlurb1_4, {id: 'br1_4', opacity: 0, cr1: 251, cg1: 128, cb1: 114, cr2: 188, cg2: 128, cb2: 189, cr3: 121, cg3: 170, cb3: 204, cr4: 201, cg4: 186, cb4: 218 });
const blurbs1_3 = new NtaCircle(svg, dataNtaBlurb1_3, {id: 'br1_3', opacity: 0, cr1: 255, cg1: 255, cb1: 179, cr2: 255, cg2: 237, cb2: 111, cr3: 251, cg3: 128, cb3: 114, cr4: 155, cg4: 200, cb4: 241 });
const blurbs1_2 = new NtaCircle(svg, dataNtaBlurb1_2, {id: 'br1_2', opacity: 0, cr1: 204, cg1: 235, cb1: 197, cr2: 141, cg2: 211, cb2: 199, cr3: 253, cg3: 180, cb3: 98,  cr4: 255, cg4: 255, cb4: 179 });
const blurbs1_1 = new NtaCircle(svg, dataNtaBlurb1_1, {id: 'br1_1', opacity: 0, cr1: 217, cg1: 217, cb1: 217, cr2: 217, cg2: 217, cb2: 217, cr3: 217, cg3: 217, cb3: 217, cr4: 217, cg4: 217, cb4: 217 });

const blurbs2_4 = new NtaCircle(svg, dataNtaBlurb2_4, {id: 'br2_4', opacity: 0, cr1: 251, cg1: 128, cb1: 114, cr2: 188, cg2: 128, cb2: 189, cr3: 121, cg3: 170, cb3: 204, cr4: 201, cg4: 186, cb4: 218 });
const blurbs2_3 = new NtaCircle(svg, dataNtaBlurb2_3, {id: 'br2_3', opacity: 0, cr1: 255, cg1: 255, cb1: 179, cr2: 255, cg2: 237, cb2: 111, cr3: 251, cg3: 128, cb3: 114, cr4: 155, cg4: 200, cb4: 241 });
const blurbs2_2 = new NtaCircle(svg, dataNtaBlurb2_2, {id: 'br2_2', opacity: 0, cr1: 204, cg1: 235, cb1: 197, cr2: 141, cg2: 211, cb2: 199, cr3: 253, cg3: 180, cb3: 98,  cr4: 255, cg4: 255, cb4: 179 });
const blurbs2_1 = new NtaCircle(svg, dataNtaBlurb2_1, {id: 'br2_1', opacity: 0, cr1: 217, cg1: 217, cb1: 217, cr2: 217, cg2: 217, cb2: 217, cr3: 217, cg3: 217, cb3: 217, cr4: 217, cg4: 217, cb4: 217 });

const circle4 = new NtaCircle(svg, dataNtaCircle4, {id: 'c4',   opacity: 1, cr1: 251, cg1: 128, cb1: 114, cr2: 188, cg2: 128, cb2: 189, cr3: 121, cg3: 170, cb3: 204, cr4: 201, cg4: 186, cb4: 218 });
const circle3 = new NtaCircle(svg, dataNtaCircle3, {id: 'c3',   opacity: 1, cr1: 255, cg1: 255, cb1: 179, cr2: 255, cg2: 237, cb2: 111, cr3: 251, cg3: 128, cb3: 114, cr4: 155, cg4: 200, cb4: 241 });
const circle2 = new NtaCircle(svg, dataNtaCircle2, {id: 'c2',   opacity: 1, cr1: 204, cg1: 235, cb1: 197, cr2: 141, cg2: 211, cb2: 199, cr3: 253, cg3: 180, cb3: 98,  cr4: 255, cg4: 255, cb4: 179 });
const circle1 = new NtaCircle(svg, dataNtaCircle1, {id: 'c1',   opacity: 1, cr1: 217, cg1: 217, cb1: 217, cr2: 217, cg2: 217, cb2: 217, cr3: 217, cg3: 217, cb3: 217, cr4: 217, cg4: 217, cb4: 217 });

const provincie  = new NtaProvincie(svg, dataNtaProvincie, {id: 'pr'});
const yearLabels = new NtaLabels(svg, dataNtaYearLabels, {id: 'yl'});

// Transition functions that are class methods have to be passed by arrow function or binding such that the context (.this) remains that of the class and not the transitionDown.
// Arrow: 'transitionFunction': (...args) => instance.method(...args)
// Bind: 'transitionFunction': instance.method.bind(instance)
const transitionsUpDownRaw = [[
  {'down':true, 'up':true, 'step': 0.65, 'stepEnd': 0.7, 'nextOnUp': 'end',   'nextOnDown': 'end', 'transitionFunction': (...args) => provincie.trans1(...args), 'durationDefault': 800,  'delayDefault': 0},
  ], [
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => circle1.trans2b(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => circle2.trans2b(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => circle3.trans2b(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => circle4.trans2b(...args), 'durationDefault': 400,  'delayDefault': 0},
  ], [
  {'down':true, 'up':true, 'step': 0.00, 'stepEnd': 0.00, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => circle1.trans2c(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.00, 'stepEnd': 0.00, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => circle2.trans2c(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.00, 'stepEnd': 0.00, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => circle3.trans2c(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.00, 'stepEnd': 0.00, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => circle4.trans2c(...args), 'durationDefault': 400,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.40, 'stepEnd': 0.60, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => circle4.trans1(...args),   'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.40, 'stepEnd': 0.60, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => provincie.trans2(...args), 'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.40, 'stepEnd': 0.60, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_4.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.40, 'stepEnd': 0.60, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_4.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.45, 'stepEnd': 0.65, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => circle3.trans1(...args),   'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.45, 'stepEnd': 0.65, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_3.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.45, 'stepEnd': 0.65, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_3.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.50, 'stepEnd': 0.70, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => circle2.trans1(...args),   'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.50, 'stepEnd': 0.70, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_2.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.50, 'stepEnd': 0.70, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_2.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.55, 'stepEnd': 0.75, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => circle1.trans1(...args),   'durationDefault': 900,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.55, 'stepEnd': 0.75, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_1.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.55, 'stepEnd': 0.75, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => blurbs2_1.trans2a(...args), 'durationDefault': 0,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => provincie.trans3(...args),      'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_4.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_4.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_3.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_3.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_2.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_2.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_1.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => blurbs2_1.trans2b(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.90, 'stepEnd': 0.90, 'nextOnUp': 'end',   'nextOnDown': 'end', 'transitionFunction': (...args) => yearLabels.trans1(...args),    'durationDefault': 50,  'delayDefault': 0},
],[
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => yearLabels.trans2(...args),    'durationDefault': 100,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_1.trans3(...args),     'durationDefault': 100,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_1.trans3(...args),     'durationDefault': 100,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_2.trans3(...args),     'durationDefault': 100,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_2.trans3(...args),     'durationDefault': 100,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_3.trans3(...args),     'durationDefault': 100,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_3.trans3(...args),     'durationDefault': 100,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_4.trans3(...args),     'durationDefault': 100,  'delayDefault': 30},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.9, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => blurbs2_4.trans3(...args),     'durationDefault': 100,  'delayDefault': 30},
],[
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_1.trans4(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_1.trans4(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_2.trans4(...args),     'durationDefault': 800,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_2.trans4(...args),     'durationDefault': 800,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_3.trans4(...args),     'durationDefault': 800,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_3.trans4(...args),     'durationDefault': 800,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_4.trans4(...args),     'durationDefault': 800,  'delayDefault': 30},
  {'down':true, 'up':true, 'step': 0.3, 'stepEnd': 0.3, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => blurbs2_4.trans4(...args),     'durationDefault': 800,  'delayDefault': 30},
],[
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_1.trans5(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_1.trans5(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_2.trans5(...args),     'durationDefault': 800,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_2.trans5(...args),     'durationDefault': 800,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_3.trans5(...args),     'durationDefault': 800,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_3.trans5(...args),     'durationDefault': 800,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_4.trans5(...args),     'durationDefault': 800,  'delayDefault': 30},
  {'down':true, 'up':true, 'step': 0.2, 'stepEnd': 0.2, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => blurbs2_4.trans5(...args),     'durationDefault': 800,  'delayDefault': 30},
],[
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'end',   'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_1.trans6(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_1.trans6(...args),     'durationDefault': 800,  'delayDefault': 0},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_2.trans6(...args),     'durationDefault': 800,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_2.trans6(...args),     'durationDefault': 800,  'delayDefault': 10},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_3.trans6(...args),     'durationDefault': 800,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs2_3.trans6(...args),     'durationDefault': 800,  'delayDefault': 20},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'start', 'transitionFunction': (...args) => blurbs1_4.trans6(...args),     'durationDefault': 800,  'delayDefault': 30},
  {'down':true, 'up':true, 'step': 0.1, 'stepEnd': 0.1, 'nextOnUp': 'start', 'nextOnDown': 'end',   'transitionFunction': (...args) => blurbs2_4.trans6(...args),     'durationDefault': 800,  'delayDefault': 30},
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
			step: "#scrolly-nta #d3-article-nta .step",
			progress: true,
			//debug: true,
			offset: 0.8,
		})
		.onStepProgress(debouncedHandleStepProgress);
}

// Function to handle the first scroll event
function handleFirstScroll() {
  // Call handleOrientationAndWidth
  handleOrientationAndWidth();

  // Remove the event listener to prevent multiple executions
  window.removeEventListener('scroll', handleFirstScroll);
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





  