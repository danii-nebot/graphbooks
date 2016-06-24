class HighchartGraphCtrl {
  constructor() {
    let Highcharts = require('highcharts');

    // this.data provided by bindings
    this.data.chart.renderTo = 'graph';
    let chart = new Highcharts.Chart(this.data);
  }
}

let HighchartGraph = {
  bindings: {
    data: '<'
  },
  controller: HighchartGraphCtrl,
  templateUrl: 'components/highchart-graph.html'
};

export default HighchartGraph;
