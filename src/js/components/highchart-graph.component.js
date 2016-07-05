class HighchartGraphCtrl {
  constructor() {
    if(this.data) {
      let Highcharts = require('highcharts');

      let graphOptions = this.data;

      // this.data, this.legend provided by bindings
      graphOptions.chart = graphOptions.chart || {};
      graphOptions.chart.renderTo = 'graph';

      graphOptions.legend = graphOptions.legend || {};
      graphOptions.legend.enabled = this.legend;

      let chart = new Highcharts.Chart(graphOptions);
    }
  }
};

let HighchartGraph = {
  bindings: {
    data: '<',
    legend: '<'
  },
  controller: HighchartGraphCtrl,
  templateUrl: 'components/highchart-graph.html'
};

export default HighchartGraph;
