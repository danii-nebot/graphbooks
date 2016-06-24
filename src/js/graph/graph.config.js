function GraphConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.graph', {
    url: '/graph/:slug',
    controller: 'GraphCtrl as $ctrl',
    templateUrl: 'graph/graph.html',
    title: 'Graph'
  });

};

export default GraphConfig;
