function ErrorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.404', {
    url: '/not-found',
    templateUrl: 'error/not-found.html',
    title: 'oops'
  })
  .state('app.500', {
    url: '/server-error',
    templateUrl: 'error/server-error.html',
    title: 'oops'
  });


};

export default ErrorConfig;
