function GraphConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.graph', {
    url: '/graph/:slug',
    controller: 'GraphCtrl as $ctrl',
    templateUrl: 'graph/graph.html',
    title: 'Graph',
    resolve: {
      seriesData: function (SeriesData, $state, $stateParams) {
        return SeriesData.get($stateParams.slug).then(
          (data) => data,
          (err) => {
            if(err.status === 404) {
              $state.go('app.error.404');
            } else {
              $state.go('app.error.500');
            }
          }
        )
      }
    } // end resolve
  });

};

export default GraphConfig;
