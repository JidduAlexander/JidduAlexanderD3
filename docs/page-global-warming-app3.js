
const dataGwTemperaturesLength = dataGwTemperatures.length 

const transTemperaturesDown2Delay = d3.max(dataGwTemperatures.map((d) => d.dd2));
const transTemperaturesUp2Delay   = d3.max(dataGwTemperatures.map((d) => d.du2));
const transTemperaturesDown3Delay = d3.max(dataGwTemperatures.map((d) => d.dd3));
const transTemperaturesUp3Delay   = d3.max(dataGwTemperatures.map((d) => d.du3));

const transitionsDown = [
  {'step': 0.01, 'nextOn': 'start', 'transition': "transThermometerDown1",     'transitionFunction': transThermometerDown1,     'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn': 'start', 'transition': "transTemperaturesAxisDown1",'transitionFunction': transTemperaturesAxisDown1,'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn': 'start', 'transition': "transTemperaturesGridDown1",'transitionFunction': transTemperaturesGridDown1,'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn':   'end', 'transition': "transThermometerTextDown1", 'transitionFunction': transThermometerTextDown1, 'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn':   'end', 'transition': "transTemperaturesDown1",    'transitionFunction': transTemperaturesDown1,    'durationDefault': 1000, 'delayDefault': 100},
  {'step': 1,    'nextOn': 'start', 'transition': "transThermometerDown2",     'transitionFunction': transThermometerDown2,     'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn':   'end', 'transition': "transThermometerTextDown2", 'transitionFunction': transThermometerTextDown2, 'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': "transTemperaturesAxisDown2",'transitionFunction': transTemperaturesAxisDown2,'durationDefault': 1200, 'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': "transTemperaturesGridDown2",'transitionFunction': transTemperaturesGridDown2,'durationDefault': 1200, 'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': "transYearAxisDown1",        'transitionFunction': transYearAxisDown1,        'durationDefault': 1200, 'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': "transYearGridDown1",        'transitionFunction': transYearGridDown1,        'durationDefault': 1200, 'delayDefault': 0},
  {'step': 1,    'nextOn':   'end', 'transition': "transTemperaturesDown2",    'transitionFunction': transTemperaturesDown2,    'durationDefault': 1200, 'delayDefault': 50},
  {'step': 2,    'nextOn': 'start', 'transition': "transTemperaturesDown3",    'transitionFunction': transTemperaturesDown3,    'durationDefault': 600,  'delayDefault': 50},
  {'step': 2,    'nextOn':   'end', 'transition': "transBaselineDown1",        'transitionFunction': transBaselineDown1,        'durationDefault': 1000, 'delayDefault': 200},
  {'step': 2,    'nextOn':   'end', 'transition': "transBaselineTextDown1",    'transitionFunction': transBaselineTextDown1,    'durationDefault': 200,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transTemperaturesAxisDown3",'transitionFunction': transTemperaturesAxisDown3,'durationDefault': 600,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transTemperaturesGridDown3",'transitionFunction': transTemperaturesGridDown3,'durationDefault': 600,  'delayDefault': 0},
  {'step': 3,    'nextOn':   'end', 'transition': "transTemperaturesDown4",    'transitionFunction': transTemperaturesDown4,    'durationDefault': 500,  'delayDefault': 0},
  {'step': 3,    'nextOn':   'end', 'transition': "transBaselineTextDown2",    'transitionFunction': transBaselineTextDown2,    'durationDefault': 500,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transAnomaliesDown1",       'transitionFunction': transAnomaliesDown1,       'durationDefault': 500,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transAnomaliesGridDown1",   'transitionFunction': transAnomaliesGridDown1,   'durationDefault': 500,  'delayDefault': 200},
  {'step': 3,    'nextOn': 'start', 'transition': "transAnomaliesAxisDown1",   'transitionFunction': transAnomaliesAxisDown1,   'durationDefault': 500,  'delayDefault': 500},
  {'step': 3,    'nextOn':   'end', 'transition': "transAnomaliesDown2",       'transitionFunction': transAnomaliesDown2,       'durationDefault': 500,  'delayDefault': 200},
];

const transitionsUp = [
  {'step': 3,    'nextOn': 'start', 'transition': "transAnomaliesUp2",       'transitionFunction': transAnomaliesUp2,       'durationDefault': 500,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transAnomaliesGridUp1",   'transitionFunction': transAnomaliesGridUp1,   'durationDefault': 500,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transAnomaliesAxisUp1",   'transitionFunction': transAnomaliesAxisUp1,   'durationDefault': 500,  'delayDefault': 0},
  {'step': 3,    'nextOn':   'end', 'transition': "transAnomaliesUp1",       'transitionFunction': transAnomaliesUp1,       'durationDefault': 500,  'delayDefault': 200},
  {'step': 3,    'nextOn':   'end', 'transition': 'transBaselineTextUp2',    'transitionFunction': transBaselineTextUp2,    'durationDefault': 600,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transTemperaturesAxisUp3",'transitionFunction': transTemperaturesAxisUp3,'durationDefault': 600,  'delayDefault': 0},
  {'step': 3,    'nextOn': 'start', 'transition': "transTemperaturesGridUp3",'transitionFunction': transTemperaturesGridUp3,'durationDefault': 600,  'delayDefault': 0},
  {'step': 3,    'nextOn':   'end', 'transition': 'transTemperaturesUp4',    'transitionFunction': transTemperaturesUp4,    'durationDefault': 600,  'delayDefault': 0},  
  {'step': 2,    'nextOn': 'start', 'transition': "transBaselineTextUp1",    'transitionFunction': transBaselineTextUp1,    'durationDefault': 200,  'delayDefault': 0},
  {'step': 2,    'nextOn':   'end', 'transition': 'transBaselineUp1',        'transitionFunction': transBaselineUp1,        'durationDefault': 600,  'delayDefault': 0},
  {'step': 2,    'nextOn':   'end', 'transition': 'transTemperaturesUp3',    'transitionFunction': transTemperaturesUp3,    'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': 'transTemperaturesGridUp2','transitionFunction': transTemperaturesGridUp2,'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': 'transTemperaturesAxisUp2','transitionFunction': transTemperaturesAxisUp2,'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': 'transYearAxisUp1',        'transitionFunction': transYearAxisUp1,        'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': 'transYearGridUp1',        'transitionFunction': transYearGridUp1,        'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn':   'end', 'transition': 'transTemperaturesUp2',    'transitionFunction': transTemperaturesUp2,    'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn': 'start', 'transition': 'transThermometerTextUp2', 'transitionFunction': transThermometerTextUp2, 'durationDefault': 600,  'delayDefault': 0},
  {'step': 1,    'nextOn':   'end', 'transition': 'transThermometerUp2',     'transitionFunction': transThermometerUp2,     'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn':   'end', 'transition': 'transTemperaturesUp1',    'transitionFunction': transTemperaturesUp1,    'durationDefault': 400,  'delayDefault': 0},
  {'step': 0.01, 'nextOn':   'end', 'transition': 'transThermometerTextUp1', 'transitionFunction': transThermometerTextUp1, 'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn': 'start', 'transition': 'transTemperaturesGridUp1','transitionFunction': transTemperaturesGridUp1,'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn': 'start', 'transition': 'transTemperaturesAxisUp1','transitionFunction': transTemperaturesAxisUp1,'durationDefault': 600,  'delayDefault': 0},
  {'step': 0.01, 'nextOn':   'end', 'transition': 'transThermometerUp1',     'transitionFunction': transThermometerUp1,     'durationDefault': 600,  'delayDefault': 0},
];

// Thermometer

// An initial function
function transThermometerDown0() {
  return gThermometer
    .style('opacity', 0)
    .attr('d', (d) => d.path)
    .attr('fill', (d) => d.fill)
    .attr('stroke', (d) => d.stroke)
    .attr('stroke-width', (d) => d.strokeWidth);
}

function transThermometerDown1(transition, duration, delay, speedUp) {
  return gThermometer
    .transition(transition)
    .delay(delay)
    .duration(duration)
    .style('opacity', 1);
}

function transThermometerUp1(transition, duration, delay, speedUp) {
  return gThermometer
    .transition(transition)
    .delay(delay)
    .duration(duration)
    .style('opacity', 0);
}

function transThermometerDown2(transition, duration, delay, speedUp) {
  return transThermometerUp1(transition, duration, delay, speedUp)
}

function transThermometerUp2(transition, duration, delay, speedUp) {
  return transThermometerDown1(transition, duration, delay, speedUp)
}

function transThermometerTextDown0() {
  return gThermometerText
    .text((d) => d.text)
    .attr('fill', (d) => d.fill)
    .attr('font-size', (d) => d.fs)
    .attr('x', (d) => d.x0)
    .attr('y', (d) => d.y0)
    .attr("dominant-baseline", "central");
}

function transThermometerTextDown1(transition, duration, delay, speedUp) {
  return gThermometerText
    .transition(transition)
    .delay(delay)
    .duration(duration)
    .attr('x', (d) => d.x1)
    .attr('y', (d) => d.y1);
}

function transThermometerTextUp1(transition, duration, delay, speedUp) {
  return gThermometerText
    .transition(transition)
    .delay(delay)
    .duration(duration)
    .attr('x', (d) => d.x0)
    .attr('y', (d) => d.y0);
}

function transThermometerTextDown2(transition, duration, delay, speedUp) {
  return transThermometerTextUp1(transition, duration, delay)
}

function transThermometerTextUp2(transition, duration, delay, speedUp) {
  return transThermometerTextDown1(transition, duration, delay, speedUp)
}

function transTemperaturesAxisDown0() {
  return gTemperaturesAxis
    .text((d) => d.text)
    .attr('y', (d) => d.y)
    .attr('fill', (d) => d.fill)
    .attr('font-size', (d) => d.fs)
    .attr('dominant-baseline', 'central')
    .attr('text-anchor', 'end')
    .attr('x', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}


function transTemperaturesAxisDown1(transition, duration, delay, speedUp) {
  return gTemperaturesAxis
    .transition(transition)
    .delay((d) => delay + d.dd1 / speedUp) 
    .duration(duration) 
    .attr('x', (d) => d.x1)
    .style('opacity', (d) => d.o1);
}


function transTemperaturesAxisUp1(transition, duration, delay, speedUp) {
  return gTemperaturesAxis
    .transition(transition)
    .delay(delay)
    .duration(duration) 
    .attr('x', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}


function transTemperaturesAxisDown2(transition, duration, delay, speedUp) {
  return gTemperaturesAxis
    .transition(transition)
    .delay((d) => delay + d.dd2 / speedUp)
    .duration(duration) 
    .attr('x', (d) => d.x2)
    .style('opacity', (d) => d.o2);
}


function transTemperaturesAxisUp2(transition, duration, delay, speedUp) {
  return gTemperaturesAxis
    .transition(transition)
    .delay((d) => delay + d.dd2 / speedUp)
    .duration(duration) 
    .attr('x', (d) => d.x1)
    .style('opacity', (d) => d.o1);
}


function transTemperaturesAxisDown3(transition, duration, delay, speedUp) {
  return gTemperaturesAxis
    .transition(transition)
    .delay(delay) 
    .duration(duration) 
    .style('opacity', (d) => d.o3);
}


function transTemperaturesAxisUp3(transition, duration, delay, speedUp) {
  return gTemperaturesAxis
    .transition(transition)
    .delay(delay) 
    .duration(duration)
    .style('opacity', (d) => d.o2);
}

function transTemperaturesGridDown0() {
  return gTemperaturesGrid
    .attr('stroke', (d) => d.s)
    .attr('stroke-width', (d) => d.sw0)
    .attr('stroke-dasharray', (d) => d.sd0)
    .attr('y1', (d) => d.y)
    .attr('y2', (d) => d.y)
    .attr('x1', (d) => d.xs0)
    .attr('x2', (d) => d.xe0)
    .style('opacity', (d) => d.o0);
}


function transTemperaturesGridDown1(transition, duration, delay, speedUp) {
  return gTemperaturesGrid
    .transition(transition)
    .delay((d) => delay + d.dd1 / speedUp) 
    .duration(duration) 
    .style('opacity', (d) => d.o1);
}


function transTemperaturesGridUp1(transition, duration, delay, speedUp) {
  return gTemperaturesGrid
    .transition(transition)
    .delay(delay)
    .duration(duration) 
    .style('opacity', (d) => d.o0);
}


function transTemperaturesGridDown2(transition, duration, delay, speedUp) {
  return gTemperaturesGrid
    .transition(transition)
    .delay((d) => delay + d.dd2 / speedUp)
    .duration(duration) 
    .attr('x1', (d) => d.xs2)
    .attr('x2', (d) => d.xe2)
    .attr('stroke-width', (d) => d.sw2)
    .attr('stroke-dasharray', (d) => d.sd2)
    .style('opacity', (d) => d.o2);
}


function transTemperaturesGridUp2(transition, duration, delay, speedUp) {
  return gTemperaturesGrid
    .transition(transition)
    .delay((d) => delay + d.dd2 / speedUp)
    .duration(duration) 
    .attr('x1', (d) => d.xs0)
    .attr('x2', (d) => d.xe0)
    .attr('stroke-width', (d) => d.sw0)
    .attr('stroke-dasharray', (d) => d.sd0)
    .style('opacity', (d) => d.o1);
}


function transTemperaturesGridDown3(transition, duration, delay, speedUp) {
  return gTemperaturesGrid
    .transition(transition)
    .delay(delay) 
    .duration(duration) 
    .style('opacity', (d) => d.o3);
}


function transTemperaturesGridUp3(transition, duration, delay, speedUp) {
  return gTemperaturesGrid
    .transition(transition)
    .delay(delay) 
    .duration(duration)
    .style('opacity', (d) => d.o2);
}


function transYearAxisDown0() {
  return gYearAxis
    .text((d) => d.text)
    .attr('y', (d) => d.y)
    .attr('fill', (d) => d.fill)
    .attr('font-size', (d) => d.fs)
    .attr('dominant-baseline', 'hanging')
    .attr('text-anchor', 'middle')
    .attr('x', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}


function transYearAxisDown1(transition, duration, delay, speedUp) {
  return gYearAxis
    .transition(transition)
    .delay((d) => delay + d.dd1 / speedUp) 
    .duration(duration) 
    .attr('x', (d) => d.x1)
    .style('opacity', (d) => d.o1);
}


function transYearAxisUp1(transition, duration, delay, speedUp) {
  return gYearAxis
    .transition(transition)
    .delay((d) => delay + d.du1 / speedUp)
    .duration(duration) 
    .attr('x', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}


function transYearGridDown0() {
  return gYearGrid
    .attr('stroke', (d) => d.s)
    .attr('stroke-width', (d) => d.sw0)
    .attr('stroke-dasharray', (d) => d.sd0)
    .attr('y1', (d) => d.ys0)
    .attr('y2', (d) => d.ye0)
    .attr('x1', (d) => d.x0)
    .attr('x2', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}


function transYearGridDown1(transition, duration, delay, speedUp) {
  return gYearGrid
    .transition(transition)
    .delay((d) => delay + d.dd1 / speedUp) 
    .duration(duration) 
    .attr('x1', (d) => d.x1)
    .attr('x2', (d) => d.x1)
    .style('opacity', (d) => d.o1);
}


function transYearGridUp1(transition, duration, delay, speedUp) {
  return gYearGrid
    .transition(transition)
    .delay((d) => delay + d.du1 / speedUp) 
    .duration(duration) 
    .attr('x1', (d) => d.x0)
    .attr('x2', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}


function transTemperaturesDown0() {
  return gTemperatures
    .attr('x', (d) => d.x1)
    .attr('width', (d) => d.w1)
    .attr('y', (d) => d.y1)
    .attr('height', 0)
    .attr('fill', '#d95f02')
    .attr('stroke', 'none')
    .attr('rx', (d) => d.w1 / 4)
    .attr('ry', (d) => d.w1 / 4);
}

function transTemperaturesDown1(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay(delay) 
    .duration(duration) 
    .attr('y', (d) => d.y2)
    .attr('height', (d) => d.h2)
    .attr('x', (d) => d.x1)
    .attr('width', (d) => d.w1)
    .ease(d3.easeBackOut);
}

function transTemperaturesUp1(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay(delay) 
    .duration(duration) 
    .attr('y', (d) => d.y1)
    .attr('height', 0)
    .attr('x', (d) => d.x1)
    .attr('width', (d) => d.w1);
}

function transTemperaturesDown2(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay((d) => delay + d.dd2 / speedUp)
    .duration(duration) 
    .attr('y', (d) => d.y3)
    .attr('height', (d) => d.h3)
    .attr('x', (d) => d.x2)
    .attr('width', (d) => d.w2)
    .ease(d3.easeSinInOut);
}

function transTemperaturesUp2(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay((d) => delay + d.du2 / speedUp) // d.nrev * delay)
    .duration(duration)
    .attr('y', (d) => d.y2)
    .attr('height', (d) => d.h2)
    .attr('x', (d) => d.x1)
    .attr('width', (d) => d.w1)
    .ease(d3.easeSinInOut);
}

function transTemperaturesDown3(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay((d) => delay + d.dd3 / speedUp)
    .duration(duration) 
    .style('opacity', (d) => d.o4)
    .attr('y', (d) => d.y3)
    .attr('height', (d) => d.h3)
    .attr('x', (d) => d.x2)
    .attr('width', (d) => d.w2);
}

function transTemperaturesUp3(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay((d) => delay + d.du3 / speedUp)
    .duration(duration) 
    .style('opacity', 1)
    .attr('y', (d) => d.y3)
    .attr('height', (d) => d.h3)
    .attr('x', (d) => d.x2)
    .attr('width', (d) => d.w2);
}

function transTemperaturesDown4(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay((d) => delay)
    .duration(duration) 
    .style('opacity', (d) => d.o5)
    .attr('y', (d) => d.y3)
    .attr('height', (d) => d.h3)
    .attr('x', (d) => d.x2)
    .attr('width', (d) => d.w2);
}

function transTemperaturesUp4(transition, duration, delay, speedUp) {
  return gTemperatures
    .transition(transition)
    .delay((d) => delay)
    .duration(duration) 
    .style('opacity', (d) => d.o4);
}

function transBaselineDown0() {
  return gBaseline
    .attr("y1", (d) => d.y)
    .attr("x1", (d) => d.x1)
    .attr("y2", (d) => d.y)
    .attr("x2", (d) => d.x1)
    .attr('stroke', (d) => d.stroke) 
    .attr('stroke-width', (d) => d.sw1)
    .style('opacity', (d) => d.o0);
    //.attr("stroke-dasharray", (d) => d.strokeDashArray);
}

function transBaselineDown1(transition, duration, delay, speedUp) {
  return gBaseline
    .transition(transition)
    .duration(duration)
    .delay((d) => delay + d.dd1 / speedUp)
    .attr("x2", (d) => d.x2)
    .attr('stroke-width', (d) => d.sw0)
    .transition(transition + '2')
    .duration(duration * 0.6)
    .attr("x2", (d) => d.x3) 
    .attr('stroke-width', (d) => d.sw1)
    .style('opacity', (d) => d.o1);
}

function transBaselineUp1(transition, duration, delay, speedUp) {
  return gBaseline
    .transition(transition)
    .duration(duration)
    .delay(delay)
    .attr("x2", (d) => d.x1)
    .style('opacity', (d) => d.o0);
    //.attr('stroke-width', (d) => d.strokeWidth0);
}

function transBaselineTextDown0() {
  return gBaselineText
    .text((d) => d.text)
    .attr('y', (d) => d.y)
    .attr('x', (d) => d.x0)
    .attr('fill', (d) => d.fill)
    .attr('font-size', (d) => d.fs0)
    .attr('dominant-baseline', 'central')
    .attr('text-anchor', (d) => d.ta)
    .style('opacity', (d) => d.o0);
}

function transBaselineTextDown1(transition, duration, delay, speedUp) {
  return gBaselineText
    .transition(transition)
    .duration(duration)
    .delay(delay)
    .attr('x', (d) => d.x1)
    .style('opacity', (d) => d.o1);
}

function transBaselineTextUp1(transition, duration, delay, speedUp) {
  return gBaselineText
    .transition(transition)
    .duration(duration)
    .delay(delay)
    .attr('x', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}

function transBaselineTextDown2(transition, duration, delay, speedUp) {
  return gBaselineText
    .transition(transition)
    .duration(duration)
    .delay(delay)
    .attr('font-size', (d) => d.fs2)
    .attr('x', (d) => d.x2)
    .style('opacity', (d) => d.o2);
}

function transBaselineTextUp2(transition, duration, delay, speedUp) {
  return gBaselineText
    .transition(transition)
    .duration(duration)
    .delay(delay)
    .attr('font-size', (d) => d.fs0)
    .attr('x', (d) => d.x1)
    .style('opacity', (d) => d.o1);
}

function transAnomaliesGridDown0() {
  return gAnomaliesGrid
    .attr("y1", (d) => d.y)
    .attr("x1", (d) => d.xs0)
    .attr("y2", (d) => d.y)
    .attr("x2", (d) => d.xe0)
    .attr('stroke', (d) => d.s) 
    .attr('stroke-width', (d) => d.sw0)
    .attr('stroke-dasharray', (d) => d.sd0)
    .style('opacity', (d) => d.o0);
    //.attr("stroke-dasharray", (d) => d.strokeDashArray);
}

function transAnomaliesGridDown1(transition, duration, delay, speedUp) {
  return gAnomaliesGrid
    .transition(transition)
    .duration(duration)
    .delay((d) => delay + d.dd1 / speedUp)
    .attr("x2", (d) => d.xe1) 
    .style('opacity', (d) => d.o1);
}

function transAnomaliesGridUp1(transition, duration, delay, speedUp) {
  return gAnomaliesGrid
    .transition(transition)
    .duration(duration)
    .delay(delay)
    .attr("x2", (d) => d.xe0)
    .style('opacity', (d) => d.o0);
    //.attr('stroke-width', (d) => d.strokeWidth0);
}

function transAnomaliesAxisDown0() {
  return gAnomaliesAxis
    .text((d) => d.text)
    .attr('y', (d) => d.y)
    .attr('fill', (d) => d.fill)
    .attr('font-size', (d) => d.fs)
    .attr('dominant-baseline', 'central')
    .attr('text-anchor', 'start')
    .attr('x', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}


function transAnomaliesAxisDown1(transition, duration, delay, speedUp) {
  return gAnomaliesAxis
    .transition(transition)
    .delay(delay) 
    .duration(duration) 
    .attr('x', (d) => d.x1)
    .style('opacity', (d) => d.o1);
}


function transAnomaliesAxisUp1(transition, duration, delay, speedUp) {
  return gAnomaliesAxis
    .transition(transition)
    .delay(delay)
    .duration(duration) 
    .attr('x', (d) => d.x0)
    .style('opacity', (d) => d.o0);
}

function transAnomaliesDown0() {
  return gAnomalies
    .attr('y', (d) => d.y0)
    .attr('height', (d) => d.h0)
    .attr('x', (d) => d.x0)
    .attr('width', (d) => d.w0)
    .attr('fill', (d) => d.fill)
    .attr('stroke', 'none')
    .attr('rx', (d) => d.w0 / 4)
    .attr('ry', (d) => d.w0 / 4)
    .style('opacity', (d) => d.o0);
}

function transAnomaliesDown1(transition, duration, delay, speedUp) {
  return gAnomalies
    .transition(transition)
    .duration(duration)
    .delay((d) => delay + d.dd1)
    .style('opacity', (d) => d.o1);
}

function transAnomaliesUp1(transition, duration, delay, speedUp) {
  return gAnomalies
    .transition(transition)
    .duration(duration)
    .delay((d) => delay + d.du1)
    .style('opacity', (d) => d.o0);
}

function transAnomaliesDown2(transition, duration, delay, speedUp) {
  return gAnomalies
    .transition(transition)
    .duration(duration)
    .delay((d) => delay + d.dd2)
    .attr('y', (d) => d.y2)
    .attr('height', (d) => d.h2);
}

function transAnomaliesUp2(transition, duration, delay, speedUp) {
  return gAnomalies
    .transition(transition)
    .duration(duration)
    .delay((d) => delay + d.du2)
    .attr('y', (d) => d.y0)
    .attr('height', (d) => d.h0);
}


// using d3 for convenience
var scrolly = d3.select("#scrolly");
var article = scrolly.select("article");
var step    = article.selectAll(".step");
var figure  = scrolly.select("figure");

// initialize the scrollama
var scroller = scrollama();

var responseCurrent  = {'index':-1, 'progress': 0};
var responseCurrentStep = -1;
var responsePrevious = {'index':-1, 'progress': 0};
var responsePreviousStep = -1;

var figureHeight      = 0;

var isTransitioning = false;
var nextTransition;
var transitionQueue = [];
var lastctr;
var nthPush = 1;

function handleStepProgress(response) {
  responseCurrent = response;
  responsePreviousStep = responsePrevious.index + responsePrevious.progress;
  responseCurrentStep  = responseCurrent.index + responseCurrent.progress;
  
  var transitionsResponse;
  var direction;
  
  if (responsePrevious.index == -1) {
    // Initially any scroll is considered to go down, in case the page is loaded in the middle and someone scrolls up
    direction = 'down';
  } else {
    direction = responseCurrent.direction;
  }
  
	if (direction === 'down') {
	  transitionsResponse = transitionsDown
	    .filter((row) => row.step >= responsePreviousStep)
	    .filter((row) => row.step <  responseCurrentStep);
	} else if (direction === 'up') {
	  transitionsResponse = transitionsUp
	    .filter((row) => row.step <= responsePreviousStep)
	    .filter((row) => row.step >  responseCurrentStep);
	}

	//console.log(responseCurrent.direction);
	//console.log(transitionsResponse.length);
	//console.log(responsePreviousStep);
	//console.log(responseCurrentStep);
	
	responsePrevious = response;
	
	if (transitionsResponse.length >= 1) {
	  
	  // If many items are in the transition queu than divide the duration and delay
	  
	  
	  var nSteps  = [...new Set(transitionsResponse.map((d) => Math.round(d.step)) )].length;
	  var nPushes = [...new Set(transitionQueue.map((d) => Math.round(d.nthPush)) )].length;
	  
	  //console.log('ns:' + nSteps)
	  //console.log('np:' + nPushes)
	  
	  var transitionSpeedUp = nSteps + nPushes;
	  
	  // console.log('sp: ' + transitionSpeedUp)
	  
	  transitionsResponse = transitionsResponse
	    .map((row) => ({
	      ...row, 
	      duration: row.durationDefault / transitionSpeedUp, 
	      delay: row.delayDefault / transitionSpeedUp,
	      speedUp: transitionSpeedUp,
	      nthPush: nthPush
	    }));
	  
	  nthPush++;
	  
	  //console.warn("Remove unnecessary delay data")
	  //console.warn("Add an argument that reduces the data delay, ie. if the transition is sped up than the internal delay also needs to speed up")
	    //.map((row, index, array) => {
	    //  // Take the cumulative sum of all the default delays, including it's own line
      //  const cumulativeDelayDefault = array.slice(0, index + 1).reduce((sum, current) => sum + current.delayDefault, 0);
      //  // Take the cumulative sum of all the previous delayData, not itself because we don't want to add it's 'internal data delay' to 
      //  // itself, but only to the next steps. Since delayData is not always defined we use 'or zero': || 0
      //  const cumulativeDelayData = array.slice(0, index).reduce((sum, current) => sum + (current.delayData || 0), 0);
      //  return { ...row, delay: cumulativeDelayDefault + cumulativeDelayData};
      //  //return { ...row, cumulativeDelayDefault: cumulativeDelayDefault, cumulativeDelayData: cumulativeDelayData};
      //})
	    //.map((row) => ({
	    //  ...row, 
	    //  duration: row.durationDefault / (transitionQueueLength + 1), 
	    //  delay: row.delay / (transitionQueueLength + 1)
	    //}));
	  
	  transitionsResponse.forEach(function(transition) { transitionQueue.push(transition); });
	  
	  if (!isTransitioning) {
	    runTransitionQueu();
	  }
	}
}

async function runTransitionQueu() {
  let nTransition;
  
  isTransitioning = true;
  
  while (transitionQueue.length > 0) {
    nTransition = transitionQueue.shift(); // get the next transition from the queue
    
    // console.warn("Add logic that checks if transitions can be removed from the queu because there is duplication of going up and down. Should that be here or where transitions are pushed up?");
    
    if (nTransition.nextOn === 'end') {
      await nTransition.transitionFunction(transition = nTransition.transition, duration = nTransition.duration, delay = nTransition.delay, speedUp = nTransition.speedUp).end();
    } else {
      nTransition.transitionFunction(transition = nTransition.transition, duration = nTransition.duration, delay = nTransition.delay, speedUp = nTransition.speedUp);
    }
  }
  
  isTransitioning = false;
}



// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  
  var stepH = Math.max(500, Math.floor(window.innerHeight * 0.6));
  step.style("height", stepH + "px");
  
  figureHeight = window.innerHeight * 0.95;
  // figureHeight has to be between 300 and 600
  figureHeight = Math.max(300, figureHeight)
  figureHeight = Math.min(1200, figureHeight)
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  // In case window height is too small for figure make sure figureMarginTop is not negative
  figureMarginTop = Math.max(5, figureMarginTop)
  
  figure
  .style("height", figureHeight + "px")
  .style("top", figureMarginTop + "px");
  
  svg
    .attr("width", document.getElementById('figure-gw').clientWidth)
    //.attr("height", document.getElementById('figure-gw').clientWidth);
    .attr("height", figureHeight);
    
  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

function init() {
    
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

	// 2. setup the scroller with the bare-bones settings
	// this will also initialize trigger observations
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller
		.setup({
			step: "#scrolly-gw .d3-article .step",
			progress: true,
			//debug: true,
			offset: 0.35,
		})
		.onStepProgress(handleStepProgress);
}



const svg = d3.select('.svg-sticky-right')
  .attr("viewBox","0 0 100 100")
  .attr('margin', "auto");

var MARGINS = {top:20, bottom:10};
var CHART_WIDTH = 100;
var CHART_HEIGHT_M = 120; // figureHeight;
var CHART_HEIGHT = CHART_HEIGHT_M - MARGINS.top - MARGINS.bottom;

var x = d3.scaleLinear();
var y = d3.scaleLinear();


const gThermometer = svg
  .append('g')
  .selectAll('pathThermometer')
  .data(dataGwThermometer)
  .enter()
  .append('path');

const gThermometerText = svg
  .append('g')
  .selectAll('thermometerText')
  .data(dataGwThermometerText)
  .enter()
  .append('text');

const gTemperaturesAxis = svg
  .append('g')
  .selectAll('temperaturesAxis')
  .data(dataGwTemperaturesAxis)
  .enter()
  .append('text');
  
const gTemperaturesGrid = svg
  .append('g')
  .selectAll('temperaturesGrid')
  .data(dataGwTemperaturesGrid)
  .enter()
  .append('line');
  
const gYearAxis = svg
  .append('g')
  .selectAll('yearAxis')
  .data(dataGwYearAxis)
  .enter()
  .append('text');
  
const gYearGrid = svg
  .append('g')
  .selectAll('yearGrid')
  .data(dataGwYearGrid)
  .enter()
  .append('line');
 
const gTemperatures = svg
  .append('g')
  .selectAll('temperatures')
  .data(dataGwTemperatures)
  .enter()
  .append('rect');

const gAnomaliesGrid = svg
  .append('g')
  .selectAll('anomaliesGrid')
  .data(dataGwAnomaliesGrid)
  .enter()
  .append('line');
  
const gAnomaliesAxis = svg
  .append('g')
  .selectAll('anomaliesAxis')
  .data(dataGwAnomaliesAxis)
  .enter()
  .append('text');

const gAnomalies = svg
  .append('g')
  .selectAll('anomalies')
  .data(dataGwAnomalies)
  .enter()
  .append('rect');
  
const gBaseline = svg
  .append('g')
  .selectAll('baseline')
  .data(dataGwBaseline)
  .enter()
  .append('line');
  
const gBaselineText = svg
  .append('g')
  .selectAll('baselineText')
  .data(dataGwBaselineText)
  .enter()
  .append('text');

function handleOrientationAndWidth() {
  if (window.matchMedia("(orientation: portrait)").matches && window.innerWidth < 768) {
    // Device is in portrait mode and screen width is below 768 pixels
    alert("Flipping your device to landscape mode will likely give a better experience.");
  }
}

// Function to handle the first scroll event
function handleFirstScroll() {
  // Call handleOrientationAndWidth
  handleOrientationAndWidth();

  // Remove the event listener to prevent multiple executions
  window.removeEventListener('scroll', handleFirstScroll);
}

  
// kick things off
init();

window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleFirstScroll);

x.range([0, CHART_WIDTH]);
y.range([CHART_HEIGHT, 0]);

x.domain([0, 100]);
y.domain([0, 100]);



// Initial transitions 
transThermometerDown0();
transThermometerTextDown0();
transTemperaturesAxisDown0();
transTemperaturesGridDown0();
transYearAxisDown0();
transYearGridDown0();
transTemperaturesDown0();
transBaselineDown0();
transBaselineTextDown0();
transAnomaliesGridDown0();
transAnomaliesAxisDown0();
transAnomaliesDown0();


