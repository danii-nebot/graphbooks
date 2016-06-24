function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.about', {
    url: '/about',
    controller: 'AboutCtrl as $ctrl',
    templateUrl: 'about/about.html',
    title: 'About'
  });

};

export default AboutConfig;
