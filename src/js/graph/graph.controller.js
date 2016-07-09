export default class GraphCtrl {
  constructor(seriesData, $rootScope, $state) {
    'ngInject';

    if(seriesData) {
      this.series = seriesData;
      this.graphData = this.createGraphOptions(seriesData.graph, seriesData.title);
      // Update the title of this page
      $rootScope.setPageTitle(`GraphBooks - ${this.series.title}`);
    }
  }

  createGraphOptions(data, title) {
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
        text: title
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
      ],
      tooltip: {
        useHTML: true,
        formatter: function() {
          return `<div class="tooltip-container">
          <div>
            <b>${this.point.data.title}</b><br/>
            Year: ${this.point.x}<br/>
            Rating: ${this.point.y}<br/>
            Votes: ${this.point.data.numVotes}<br/>
          </div>
          <div class="tooltip-image">
            <img src="${this.point.data.imageUrl}"/>
          </div>
          </div>`;
        }
      }
    }

    return options;
  }

}
