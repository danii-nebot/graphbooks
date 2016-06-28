import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import HighchartGraph from './highchart-graph.component';
componentsModule.component('highchartGraph', HighchartGraph);

import SearchForm from './search-form.component';
componentsModule.component('searchForm', SearchForm);

export default componentsModule;
