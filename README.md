# image-crop-angular-es6
This is demo from image croping with angular + ES6 style
I use angular template with ES6: [NG6-starter](https://github.com/AngularClass/NG6-starter)

The library to crop image : [ngImgCrop](https://github.com/alexk111/ngImgCrop)

I can **not** import this library, so that I have to add export method in `ng-img-crop.js` file: 
```javascript
var ngImgCrop = crop.name;
export default ngImgCrop;
```

