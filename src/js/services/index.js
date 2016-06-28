import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Services
import SeriesData from './seriesData.service';
servicesModule.service('SeriesData', SeriesData);

export default servicesModule;
