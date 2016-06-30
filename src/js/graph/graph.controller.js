export default class GraphCtrl {
  constructor(seriesData, $rootScope, $state) {
    'ngInject';

    // Update the title of this page
    if(seriesData && seriesData.info) {
      this.series = seriesData;
      $rootScope.setPageTitle('Graph ' + this.series.info.title);
    }
  }
}
