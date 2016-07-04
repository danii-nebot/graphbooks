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
      url: this._AppConstants.api + 'graphql?query={seriesList{title}}',
    }).then( (res) => res.data )
  }

  // this is still pretty much a mock
  get(id) {
    // check for slug first
    if(!id) {
      return this._$q.reject({ status: 404, statusText:'Series slug is empty' });
    }

    return this._$http({
      method: 'GET',
      url: this._AppConstants.api +
      'graphql?query={series(id:0){title, seriesLink, authors, authorsLink, rating, numRatings, graph{xAxisMin, xAxisMax, yAxisMin, yAxisMax, data{x,y,data{title,numVotes}}, regressionData}}}'
    }).then( (res) => res.data.data.series)
  }
}
