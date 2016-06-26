import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Services
import GraphData from './graphData.service';
servicesModule.service('GraphData', GraphData);

export default servicesModule;
