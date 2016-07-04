export default class GraphCtrl {
  constructor(seriesData, $rootScope, $state) {
    'ngInject';

    // Update the title of this page
    if(seriesData) {
      this.series = seriesData;
      $rootScope.setPageTitle('Graph ' + this.series.title);
    }
  }
}
