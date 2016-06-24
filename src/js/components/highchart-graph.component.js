class HighchartGraphCtrl {
  constructor() {
    let Highcharts = require('highcharts');

    // this.data, this.legend provided by bindings
    this.data.chart = this.data.chart || {};
    this.data.chart.renderTo = 'graph';

    this.data.legend = this.data.legend || {};
    this.data.legend.enabled = this.legend;

    let chart = new Highcharts.Chart(this.data);
  }
}

let HighchartGraph = {
  bindings: {
    data: '<',
    legend: '<'
  },
  controller: HighchartGraphCtrl,
  templateUrl: 'components/highchart-graph.html'
};

export default HighchartGraph;
