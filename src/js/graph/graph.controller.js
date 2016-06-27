export default class GraphCtrl {
  constructor(GraphData, $stateParams) {
    'ngInject';

    GraphData.get($stateParams.slug).then(
      (data) => this.data = data,
      (err) => this.error = err
    )

  }
}
