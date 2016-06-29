export default class GraphCtrl {
  constructor(SeriesData, $state, $stateParams) {
    'ngInject';

    if(!$stateParams.slug) {
      $state.go('app.error.404');
    } else {

      SeriesData.get($stateParams.slug).then(
        (data) => {
          if(!(this.series = data)) {
            $state.go('app.error.404');
          }
        },
        (err) => $state.go('app.error.500')
      )
    }


  }
}
