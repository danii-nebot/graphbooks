export default class SeriesDataService {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  getList() {
    return this._$http({
      method: 'GET',
      url: this._AppConstants.api + '/series',
    }).then( (res) => res.data )
  }

  get(slug) {
    // check for slug first
    if(!slug) {
      return this._$q.reject({ status: 404, statusText:'Series slug is empty' });
    }

    return this._$http({
      method: 'GET',
      url: this._AppConstants.api + '/series/' + slug,
    }).then( (res) => {
      // TODO: I'm sure this shouldn't be here
      let mockData =
      {
        info: res.data.info,
        graph :
        {
          xAxis: {
            min: res.data.graph.xAxisMin,
            max: res.data.graph.xAxisMax
          },
          yAxis: {
            min: res.data.graph.yAxisMin,
            max: 5.00,
            title: {
              text: 'Ratings'
            }
          },
          title: {
            text: res.data.info.title
          },
          series: [
            {
              type: 'line',
              name: 'Regression Line for Series',
              // this is obviously made up
              data: res.data.graph.regressionData,
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
              data: res.data.graph.data,
              marker: {
                radius: 4
              }
            }
          ]
        }
      };

      return mockData;
    })

  }
}
