import angular from 'angular';

// Create the module where our functionality can attach to
let errorModule = angular.module('app.error', []);

// Include our UI-Router config settings
import ErrorConfig from './error.config';
errorModule.config(ErrorConfig);

export default errorModule;
