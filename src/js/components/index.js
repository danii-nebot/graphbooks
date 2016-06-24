import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import HighchartGraph from './highchart-graph.component';
componentsModule.component('highchartGraph', HighchartGraph);

export default componentsModule;
