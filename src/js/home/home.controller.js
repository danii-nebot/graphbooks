export default class HomeCtrl {
  constructor(AppConstants, $state) {
    'ngInject';
    this._$state = $state;
    this.appName = AppConstants.appName;
    this.formData = {};
  }

  goto(newState) {
    this._$state.go('app.' + newState);
  }

  submit() {
    if(this.formData.seriesName) {
      // TODO: get slug from name
      this._$state.go('app.graph', {slug:'placeholder'});
    }
  }
}
