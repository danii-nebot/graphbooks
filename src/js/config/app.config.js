function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  // remove html5mode for now, until we can modify the server htaccess
  // per: http://stackoverflow.com/questions/16569841/reloading-the-page-gives-wrong-get-request-with-angularjs-html5-mode
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html',
    resolve: {
      seriesData: function (SeriesData, $state, $stateParams) {
        return SeriesData.getList().then(
          (data) => data,
          (err) =>  $state.go('app.error.500')
        )
      }
    } // end resolve
  });

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
