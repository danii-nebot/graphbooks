export default class GraphCtrl {
  constructor(seriesData, $rootScope, $state, $location) {
    'ngInject';

    if(seriesData) {
      this.data = seriesData;
      this.isSeries = !!seriesData.authors.length;
      let title =  this.isSeries ? seriesData.name.name : `${seriesData.name.name}'s Bibliography`;
      this.graphData = this.createGraphOptions(seriesData.graph, title);

      // Update the title of this page
      $rootScope.setPageTitle(`GraphBooks - ${title}`);

      // for share links
      this.currentUrl = $location.absUrl();
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
        max: data.yAxisMax,
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
            <div class="tooltip-placeholder"></div>
            <img src="${this.point.data.imageUrl}/dfd"/>
          </div>
          </div>`;
        }
      }
    }

    return options;
  }

}
