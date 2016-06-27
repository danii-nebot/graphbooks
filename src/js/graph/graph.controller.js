export default class GraphCtrl {
  constructor(GraphData, $stateParams) {
    'ngInject';

    GraphData.get($stateParams.slug).then(
      (data) => {
        this.data = data;
        if(!this.data) {
          this.error = "Data not available";
        }
      },
      (err) => this.error = err
    )

  }
}
