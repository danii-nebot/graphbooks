export default class SeriesDataService {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this._listData = [];
  }

  getListData() {
    return this._listData;
  }

  processList(list) {
    return list.map(function(item) {
      item.name = item.name.name;
      if(item.authors) {
        item.authors = item.authors.map(function(authors) {
          return authors.name;
        });
      }
      return item;
    });
  }

  // TODO: bootstrap this!
  getList() {
    return this._$http({
      method: 'GET',
      url: `${this._AppConstants.api}/graphql?query={list{name{name}, slug, authors{name}, keywords}}`,
    }).then((res) => {
      this._listData = this.processList(res.data.data.list);
      return res.data;
    })
  }

  getGraph(slug) {
    // check for slug first
    if(!slug) {
      return this._$q.reject({ status: 404, statusText:'Series slug is empty' });
    }

    return this._$http({
      method: 'GET',
      url: `${this._AppConstants.api}/graphql?query={graphData(slug:"${slug}"){name{name, url}, imageUrl, authors{name, url}, rating, numRatings, graph{xAxisMin, xAxisMax, yAxisMin, yAxisMax, data{x,y,data{title, numVotes, imageUrl}}, regressionData}}}`
    }).then( (res) => res.data.data.graphData )
  }
}
