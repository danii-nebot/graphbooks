export default class GraphService {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  get(series) {
    // check for slug first
    if(!series) {
      return this._$q.reject('Series slug is empty');
    }

    // TODO: wire up our own API point
    // return this._$http({
    //   method: 'GET',
    //   url: this._AppConstants.api + '/series/'+slug,
    // }).then( (res) => res.data.article )

    // mock data manually collected from relevant pages at Goodreads
    let mockData = {
        xAxis: {
            min: 1995,
            max: 2012
        },
        yAxis: {
            min: 3.98,
            title: {
              text: 'Ratings'
            }
        },
        title: {
            text: 'A Song of Fire and Ice (Game of Thrones)'
        },
        series: [{
            type: 'line',
            name: 'Regression Line for Series',
            // this is obviously made up
            data: [[1996, 4.11], [2011, 4.51]],
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
            name: 'Books in Series',
            data: [
              {x: 1996, y: 4.44, data: {title: "A Game of Thrones", numVotes: 121 }},
              {x: 1998, y: 4.39, data: {title: "A Clash of Kings", numVotes: 999 }},
              {x: 2000, y: 4.54, data: {title: "A Storm of Swords", numVotes: 11 }},
              {x: 2005, y: 4.08, data: {title: "A Feast for Crows", numVotes: 765 }},
              {x: 2011, y: 4.29, data: {title: "A Dance with Dragons", numVotes: 134 }}
            ],
            marker: {
                radius: 4
            }
          }
        ]
    };

    return mockData;
  }
}
