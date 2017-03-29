import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cropImagePanelComponent from './cropImagePanel.component';
// import CropImagePanelController from './cropImagePanel.controller';

let cropImagePanelModule = angular.module('cropImagePanel', [
  uiRouter
])

.component('cropImagePanel', cropImagePanelComponent)
// .controller('cropImageController' , CropImagePanelController)
.name;

export default cropImagePanelModule;
