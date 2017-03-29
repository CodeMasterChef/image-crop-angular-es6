import CropImagePanelModule from './cropImagePanel'
import CropImagePanelController from './cropImagePanel.controller';
import CropImagePanelComponent from './cropImagePanel.component';
import CropImagePanelTemplate from './cropImagePanel.html';

describe('CropImagePanel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CropImagePanelModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CropImagePanelController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CropImagePanelTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CropImagePanelComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CropImagePanelTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CropImagePanelController);
      });
  });
});
