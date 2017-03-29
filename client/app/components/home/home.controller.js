class HomeController {
  constructor($scope , $mdPanel) {
    var vm = this;
    $scope.myImage = '';
    $scope.myCroppedImage = '';

    this.showCropImagePanel = showCropImagePanel; 
  
    function showCropImagePanel() {
       var position = $mdPanel.newPanelPosition()
      .absolute()
      .center();
       var config = {
        disableParentScroll: this.disableParentScroll,
        templateUrl: 'app/components/cropImagePanel/cropImagePanel.html',
        position: position,
        hasBackdrop: true,
        position: position,
        panelClass: 'demo-dialog-example',
        trapFocus: true,
        zIndex: 150,
        clickOutsideToClose: true,
        escapeToClose: true,
        focusOnOpen: true
      };
      $mdPanel.open(config);
    }

    var handleFileSelect = function (evt) {
      var file = evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function ($scope) {
          vm.myImage = evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
  }
}
HomeController.$inject = ['$scope' , '$mdPanel']
export default HomeController;
