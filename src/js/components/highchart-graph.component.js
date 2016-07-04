class HighchartGraphCtrl {
  constructor() {
    if(this.data) {
      let Highcharts = require('highcharts');

      let graphOptions = this.createGraphOptions(this.data);

      // this.data, this.legend provided by bindings
      graphOptions.chart = graphOptions.chart || {};
      graphOptions.chart.renderTo = 'graph';

      graphOptions.legend = graphOptions.legend || {};
      graphOptions.legend.enabled = this.legend;

      // TODO: should this be here?
      graphOptions.tooltip = {
        formatter: function() {
          return '<b>'+ this.point.data.title +'</b><br/>'+
          'Year: ' + this.point.x +'<br/>'+
          'Rating:' + this.point.y + '<br/>'+
          'Votes: ' + this.point.data.numVotes + '<br/>';
        }
      }

      let chart = new Highcharts.Chart(graphOptions);
    }
  }

  createGraphOptions(data) {
    let options = {
      xAxis: {
        min: data.xAxisMin,
        max: data.xAxisMax
      },
      yAxis: {
        min: data.yAxisMin,
        max: 5.00,
        title: {
          text: 'Ratings'
        }
      },
      title: {
        text: data.title
      },
      series: [
        {
          type: 'line',
          name: 'Regression Line for Series',
          data: data.regressionData,
          marker: {
            enabled: false
          },
          states: {
            hover: {
              lineWidth: 0
            }
          },
          enableMouseTracking: false
        },
        {
          type: 'scatter',
          name: 'Books in Series',
          data: data.data,
          marker: {
            radius: 4
          }
        }
      ]
    }
    return options;
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
