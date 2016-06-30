export default class HomeCtrl {
  constructor(AppConstants, $state, SeriesData) {
    'ngInject';
    this._$state = $state;
    this.appName = AppConstants.appName;

    // testing data is here!
    let list = SeriesData.getList();
    list.then(
      (data) => console.log(data)
    )
  }

  goto(newState) {
    this._$state.go('app.' + newState);
  }
}
