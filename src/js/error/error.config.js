function ErrorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.error', {
    abstract: true,
    url: '/error',
    templateUrl: 'error/error.html',
  })
  .state('app.error.404', {
    url: '/404',
    templateUrl: 'error/not-found.html',
    title: 'oops'
  })
  .state('app.error.500', {
    url: '/500',
    templateUrl: 'error/server-error.html',
    title: 'oops'
  });


};

export default ErrorConfig;
