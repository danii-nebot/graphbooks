import angular from 'angular';
import uiselect from './uiselect';

let componentsModule = angular.module('app.components', [uiselect]);

import HighchartGraph from './highchart-graph.component';
componentsModule.component('highchartGraph', HighchartGraph);

import SearchForm from './search-form.component';
componentsModule.component('searchForm', SearchForm);

export default componentsModule;
