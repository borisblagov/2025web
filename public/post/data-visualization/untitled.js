// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  line: {
    dash: 'solid', 
    color: 'rgb(0,114,189)', 
    width: 0.5
  }, 
  mode: 'lines', 
  name: '', 
  type: 'scatter', 
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  y: [0.814723686393179, 0.905791937075619, 0.126986816293506, 0.913375856139019, 0.63235924622541, 0.0975404049994095, 0.278498218867048, 0.546881519204984, 0.957506835434298, 0.964888535199277], 
  xaxis: 'x1', 
  yaxis: 'y1', 
  marker: {
    line: {width: 0.5}, 
    size: 3.6, 
    color: 'rgb(0,114,189)'
  }, 
  visible: true, 
  showlegend: false
};
data = [trace1];
layout = {
  width: 840, 
  height: 630, 
  margin: {
    b: 0, 
    l: 0, 
    r: 0, 
    t: 0, 
    pad: 0
  }, 
  scene1: {domain: {
      x: [0.13, 0.905], 
      y: [0.11, 0.925]
    }}, 
  xaxis1: {
    side: 'bottom', 
    type: 'linear', 
    range: [1, 10], 
    ticks: 'inside', 
    anchor: 'y1', 
    domain: [0.13, 0.905], 
    mirror: 'ticks', 
    ticklen: 6.51, 
    showgrid: false, 
    showline: true, 
    tickfont: {
      size: 10, 
      color: 'rgb(38,38,38)', 
      family: 'Arial, sans-serif'
    }, 
    tickmode: 'array', 
    ticktext: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 
    tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
    zeroline: false, 
    autorange: false, 
    gridcolor: 'rgba(38,38,38,0.150000)', 
    linecolor: 'rgb(38,38,38)', 
    linewidth: 1, 
    tickangle: 0, 
    tickcolor: 'rgb(38,38,38)', 
    tickwidth: 1, 
    titlefont: {
      size: 11, 
      color: 'rgb(38,38,38)', 
      family: 'Arial, sans-serif'
    }, 
    exponentformat: 'none', 
    showticklabels: true
  }, 
  yaxis1: {
    side: 'left', 
    type: 'linear', 
    range: [0, 1], 
    ticks: 'inside', 
    anchor: 'x1', 
    domain: [0.11, 0.925], 
    mirror: 'ticks', 
    ticklen: 6.51, 
    showgrid: false, 
    showline: true, 
    tickfont: {
      size: 10, 
      color: 'rgb(38,38,38)', 
      family: 'Arial, sans-serif'
    }, 
    tickmode: 'array', 
    ticktext: ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1'], 
    tickvals: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
    zeroline: false, 
    autorange: false, 
    gridcolor: 'rgba(38,38,38,0.150000)', 
    linecolor: 'rgb(38,38,38)', 
    linewidth: 1, 
    tickangle: 0, 
    tickcolor: 'rgb(38,38,38)', 
    tickwidth: 1, 
    titlefont: {
      size: 11, 
      color: 'rgb(38,38,38)', 
      family: 'Arial, sans-serif'
    }, 
    exponentformat: 'none', 
    showticklabels: true
  }, 
  autosize: false, 
  hovermode: 'closest', 
  showlegend: false, 
  annotations: [
    {
      x: 0.5175, 
      y: 0.935, 
      font: {
        size: 11, 
        color: 'rgb(0,0,0)', 
        family: 'Arial, sans-serif'
      }, 
      text: '<b><b></b></b>', 
      xref: 'paper', 
      yref: 'paper', 
      align: 'center', 
      xanchor: 'center', 
      yanchor: 'bottom', 
      borderpad: 3, 
      showarrow: false, 
      textangle: 0, 
      bordercolor: 'rgba(0,0,0,0)', 
      borderwidth: 0.5
    }
  ], 
  paper_bgcolor: 'rgb(255,255,255)'
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});