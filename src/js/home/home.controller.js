export default class HomeCtrl {
  constructor(AppConstants, $state, SeriesData) {
    'ngInject';
    this._$state = $state;
    this.appName = AppConstants.appName;
  }

  goto(newState) {
    this._$state.go('app.' + newState);
  }
}
