export default class GraphCtrl {
  constructor() {
    // 'ngInject';

    // mock data from example at http://www.highcharts.com/demo/combo-regression/grid
    this.data = {
        legend: {
            enabled: false
        },
        xAxis: {
            min: -0.5,
            max: 5.5
        },
        yAxis: {
            min: 0
        },
        title: {
            text: 'Scatter plot with regression line'
        },
        series: [{
            type: 'line',
            name: 'Regression Line',
            data: [[0, 1.11], [5, 4.51]],
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            enableMouseTracking: false
        }, {
            type: 'scatter',
            name: 'Observations',
            data: [1, 1.5, 2.8, 3.5, 3.9, 5, 4.2],
            marker: {
                radius: 4
            }
        }]
    };

  }
}
