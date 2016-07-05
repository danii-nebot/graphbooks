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
      url: `${this._AppConstants.api}/graphql?query={seriesList{title, slug}}`,
    }).then( (res) => res.data )
  }

  get(slug) {
    // check for slug first
    if(!slug) {
      return this._$q.reject({ status: 404, statusText:'Series slug is empty' });
    }

    return this._$http({
      method: 'GET',
      url: `${this._AppConstants.api}/graphql?query={series(slug:"${slug}"){title, seriesLink, authors, authorsLink, rating, numRatings, graph{xAxisMin, xAxisMax, yAxisMin, yAxisMax, data{x,y,data{title,numVotes}}, regressionData}}}`
    }).then( (res) => res.data.data.series)
  }
}
