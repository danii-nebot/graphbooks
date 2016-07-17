function GraphConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.graph', {
    url: '/graph/:slug',
    controller: 'GraphCtrl as $ctrl',
    templateUrl: 'graph/graph.html',
    title: 'Graph',
    params : { isAuthor: null, },
    resolve: {
      seriesData: function (SeriesData, $state, $stateParams) {
        return SeriesData.getGraph($stateParams.slug).then(
          (data) => {
            // GraphQL will always return 200 OK
            console.log(data, "!!!");
            if(data) return data;
            $state.go('app.error.404');
          },
          (err) => {
            if(err.status === 404) {
              $state.go('app.error.404');
            } else {
              $state.go('app.error.500');
            }
          }
        );
      }
    } // end resolve
  });

};

export default GraphConfig;
