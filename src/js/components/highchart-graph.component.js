class HighchartGraphCtrl {
  constructor() {
    if(this.data) {
      let Highcharts = require('highcharts');

      // this.data, this.legend provided by bindings
      this.data.chart = this.data.chart || {};
      this.data.chart.renderTo = 'graph';

      this.data.legend = this.data.legend || {};
      this.data.legend.enabled = this.legend;

      // TODO: should this be here?
      this.data.tooltip = {
        formatter: function() {
          return '<b>'+ this.point.data.title +'</b><br/>'+
          'Year: ' + this.point.x +'<br/>'+
          'Rating:' + this.point.y + '<br/>'+
          'Votes: ' + this.point.data.numVotes + '<br/>';
        }
      }

      let chart = new Highcharts.Chart(this.data);
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
