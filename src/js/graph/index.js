import angular from 'angular';

// Create the module where our functionality can attach to
let graphModule = angular.module('app.graph', []);

// Include our UI-Router config settings
import GraphConfig from './graph.config';
graphModule.config(GraphConfig);

// Controllers
import GraphCtrl from './graph.controller';
graphModule.controller('GraphCtrl', GraphCtrl);

export default graphModule;
