class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;

    console.log(this.appName, 'yoyo');

  }
}

export default HomeCtrl;
