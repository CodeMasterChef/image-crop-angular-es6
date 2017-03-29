import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import cropImagePanel from './cropImagePanel/cropImagePanel';
let componentModule = angular.module('app.components', [
  Home,
  About,
  cropImagePanel
])

.name;

export default componentModule;
