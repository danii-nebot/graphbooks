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

  getAuthor(slug) {
    // check for slug first
    if(!slug) {
      return this._$q.reject({ status: 404, statusText:'Author slug is empty' });
    }

    return this._$http({
      method: 'GET',
      url: `${this._AppConstants.api}/graphql?query={author(slug:"${slug}"){title, seriesUrl, imageUrl, authors{name, url}, rating, numRatings, graph{xAxisMin, xAxisMax, yAxisMin, yAxisMax, data{x,y,data{title, numVotes, imageUrl}}, regressionData}}}`
    }).then( (res) => res.data.data.series)
  }

  getSeries(slug) {
    // check for slug first
    if(!slug) {
      return this._$q.reject({ status: 404, statusText:'Series slug is empty' });
    }

    return this._$http({
      method: 'GET',
      url: `${this._AppConstants.api}/graphql?query={series(slug:"${slug}"){title, seriesUrl, imageUrl, authors{name, url}, rating, numRatings, graph{xAxisMin, xAxisMax, yAxisMin, yAxisMax, data{x,y,data{title, numVotes, imageUrl}}, regressionData}}}`
    }).then( (res) => res.data.data.series)
  }
}
