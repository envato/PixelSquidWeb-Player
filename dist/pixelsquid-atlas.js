!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PixelSquid=t():e.PixelSquid=t()}(window,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";var n=function(){this._capabilities={allowInteractivity:!0,canvasAvailable:!1,renderToCanvas:!1,eventListener:!0,jqueryEvents:!1,jqueryAvailable:!1,isRetina:!1,isRetinaCapable:!1,windowDimensions:{width:300,height:300},resolution:"600",format:"jpeg",imagePreferences:[{resolution:"600",format:"jpeg"}],loadingSequence:null,latitudeSubset:null,loadConfigurator:!0,loadingBailouts:[],forceRefreshDuration:0};var e=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),t=navigator.userAgent.toLowerCase().indexOf("crios")>-1||navigator.userAgent.toLowerCase().indexOf("chrome")>-1;this._capabilities.allowInteractivity=!(window.ActiveXObject&&!window.XMLHttpRequest);var i=document.createElement("canvas");this._capabilities.canvasAvailable=!(!i.getContext||!i.getContext("2d")),this._capabilities.eventListener=void 0!==document.addEventListener,this._capabilities.eventListener||(this._capabilities.jqueryEvents="undefined"!=typeof jQuery),this._capabilities.jqueryAvailable="undefined"!=typeof jQuery,this._capabilities.isRetina=window.devicePixelRatio>1,this._capabilities.isRetinaCapable=window.devicePixelRatio>1,this._capabilities.canvasAvailable&&(this._capabilities.renderToCanvas=!0),e&&t&&(this._capabilities.renderToCanvas=!0),this._capabilities.isChromeiOS=e&&t,this._refreshImagePreferences()};n.getInstance=function(){return n.instance||(n.instance=new n),n.instance},n.getCapabilities=function(){return n.getInstance()._capabilities},n.mergeCapabilities=function(e){function t(e,t){return e||t}var i=this.getCapabilities();return i.allowInteractivity=t(e.allowInteractivity,i.allowInteractivity),i.renderToCanvas=t(e.renderToCanvas,i.renderToCanvas),i.isRetina=t(e.isRetina,i.isRetina),i.windowDimensions=t(e.windowDimensions,i.windowDimensions),i.resolution=t(e.resolution,i.resolution),i.format=t(e.format,i.format),i.loadingSequence=t(e.loadingSequence,i.loadingSequence),i.latitudeSubset=t(e.latitudeSubset,i.latitudeSubset),i.loadingBailouts=t(e.loadingBailouts,i.loadingBailouts),i},n.refreshImagePreferences=function(){var e=n.getInstance();return e._refreshImagePreferences(),e._capabilities},n.prototype._refreshImagePreferences=function(){this._capabilities.imagePreferences||(this._capabilities.isRetina?600===this._capabilities.windowDimensions.width?this._capabilities.imagePreferences=[{resolution:"2k",format:"jpeg"},{resolution:"600",format:"jpeg"},{resolution:"300",format:"jpeg"}]:300===this._capabilities.windowDimensions.width&&(this._capabilities.imagePreferences=[{resolution:"600",format:"jpeg"},{resolution:"300",format:"jpeg"},{resolution:"2k",format:"jpeg"}]):600===this._capabilities.windowDimensions.width?this._capabilities.imagePreferences=[{resolution:"600",format:"jpeg"},{resolution:"300",format:"jpeg"},{resolution:"2k",format:"jpeg"}]:300===this._capabilities.windowDimensions.width&&(this._capabilities.imagePreferences=[{resolution:"300",format:"jpeg"},{resolution:"600",format:"jpeg"},{resolution:"2k",format:"jpeg"}]))},t.AtlasClientCapabilities=n},function(e,t,i){"use strict";i.r(t),i.d(t,"AtlasSpriteSheetPlayer",(function(){return n})),i.d(t,"AtlasAPIAdapter",(function(){return s})),i.d(t,"AtlasSPAdapter",(function(){return o}));var n=i(2).AtlasSpriteSheetPlayer,s=i(7).AtlasAPIAdapter,o=i(8).AtlasSPAdapter},function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=i(3).AtlasControlAdapter,o=i(4).AtlasSphere,a=i(5).AtlasSpriteSheetControls,r=i(6).AtlasImageWithProgress;function l(e){function t(t,i){return t in e?e[t]:i}this.VERSION="2.5.2-elements",this.VALID_LATITUDES=["B","C","D","E","F","G","H","I","J","K","L","M","N","O"],this.VALID_LONGITUDES=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],this._elemControlArea=t("controlArea",".atlas-control-area"),this._elemViewer=t("viewer",".atlas-viewer"),this._elemEvents=t("events",".atlas-events"),this._windowSize=t("windowSize",600),this._forceBackground=t("forceBackground",!1),this._preferredImageSize=t("preferredImageSize",600),this._elemParent=t("parent",".atlas-events"),this._useCanvas=t("useCanvas",!0),this._useCanvasTranslation=t("useCanvasTranslation",!0),this._useImageSmoothing=t("useImageSmoothing",!1),this._$=e.jquery,this._applyStyles=t("applyStyles",!1),this._atlasControlAdapter=new s(e.jquery),this._atlasControls=new a(this._elemParent,this._elemControlArea,this._atlasControlAdapter,e.jquery),this._canvas=null,this._context=null,this._div=null,this._url=null,this._imageResolution=0,this._canvasResolution=0,this._loadComplete=!1;var i=this;this._$?this._$(this._elemControlArea).on("change",(function(e,t){i._onControlAreaChange(e,t)})):this.addEventListener(this._elemControlArea,"change",(function(e){var t={horizontal:e.horizontal,vertical:e.vertical};i._onControlAreaChange(e,t)}),!1)}l.prototype._onControlAreaChange=function(e,t){var i,n;void 0!==e.originalEvent&&(i=e.originalEvent.horizontal,n=e.originalEvent.vertical),void 0!==t&&(i=t.horizontal,n=t.vertical),i=i||e.horizontal||0,n=n||e.vertical||0,this.rotate(i,n)},l.prototype.addEventListener=function(e,t,i){var n=document.querySelectorAll(e);n&&n.length&&n[0].addEventListener(t,i,!1)},l.prototype.triggerEvent=function(e,t,i){if(this._$)this._$(e).trigger(t,[i]);else{var n=document.querySelectorAll(e);if(n&&n.length)if("undefined"==typeof CustomEvent){var s=document.createEvent("Event");s.initEvent(t,!0,!0),s.detail=i,n[0].dispatchEvent(s)}else n[0].dispatchEvent(new CustomEvent(t,{detail:i}))}},l.prototype._getDomElement=function(e){var t=e;return"object"!==n(t)?(t=document.querySelectorAll(e))&&t.length?t[0]:null:t},l.prototype.resizeElement=function(e,t,i){var n=this._getDomElement(e);n&&(n.setAttribute("width",t),n.setAttribute("height",t),this._applyStyles&&(n.style.width=[i,"px"].join(""),n.style.height=[i,"px"].join("")))},l.prototype.positionElement=function(e,t,i){var n=this._getDomElement(e);n&&this._applyStyles&&(n.style.position="absolute",n.style.top=[i,"px"].join(""),n.style.left=[t,"px"].join(""))},l.prototype.hide=function(e){var t=this._getDomElement(e);t&&(t.style.display="none")},l.prototype.show=function(e){var t=this._getDomElement(e);t&&(t.style.display="block")},l.prototype.append=function(e,t){var i=this._getDomElement(e),n=this._getDomElement(t);i&&n&&i.appendChild(n)},l.prototype.renderCssCell=function(e){var t=this._getDomElement(this._div);t&&(this._applyStyles&&(t.style.width=this._windowSize,t.style.height=this._windowSize),t.style["background-image"]=['url("',this._url,'")'].join(""),t.style["background-position"]=["-",e.left*this._backgroundScale,"px -",e.top*this._backgroundScale,"px"].join(""),t.style["background-size"]=[16*this._imageResolution*this._backgroundScale,"px ",this._validLatitudes.length*this._imageResolution*this._backgroundScale,"px"].join(""))},l.prototype.adjustValidLatitudes=function(e){"top_half"===e&&(this._validLatitudes=["B","C","D","E","F","G","H","I"])},l.prototype.rotate=function(e,t){if(this._currentImage){var i=this._currentImage.substring(0,1),n=this._currentImage.substring(1),s=this._validLatitudes.indexOf(i),o=this._validLongitudes.indexOf(n);s+=t,o+=e%this._atlasSphere._longitudes,s<0?s=0:s>=this._atlasSphere._latitudes&&(s=this._atlasSphere._latitudes-1),o<0?o+=this._atlasSphere._longitudes:o>=this._atlasSphere._longitudes&&(o-=this._atlasSphere._longitudes);var a=this._validLatitudes[s]+this._validLongitudes[o];this.triggerEvent(this._elemEvents,"atlas-image-changed",{currentImage:this._currentImage,nextImage:a}),this.setNextImageIndex(a)}},l.prototype.setNextImageIndex=function(e){this._currentImage=e,this.renderImage()},l.prototype.createCanvas=function(){if(!this._useCanvas)return!1;try{if(this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),!this._canvas||!this._context)throw"CANVAS IS NOT SUPPORTED"}catch(e){return this._canvas=null,this._context=null,!1}var e=(window.devicePixelRatio||1)/(this._context.webkitBackingStorePixelRatio||this._context.mozBackingStorePixelRatio||this._context.msBackingStorePixelRatio||this._context.oBackingStorePixelRatio||this._context.backingStorePixelRatio||1);return this._canvasResolution=e*this._windowSize,this.resizeElement(this._canvas,this._canvasResolution,this._windowSize),this.positionElement(this._canvas,0,0),this.hide(this._canvas),this.append(this._elemViewer,this._canvas),!0},l.prototype.createDiv=function(){this._div=document.createElement("div"),this.resizeElement(this._div,this._windowSize,this._windowSize),this.positionElement(this._div,0,0),this.hide(this._div),this.append(this._elemViewer,this._div)},l.prototype.load=function(e,t){if(this._assetId=null,this._asset=null,this._initialImage=null,this._currentImage=null,this._validLatitudes=null,this._validLongitudes=null,this._imageResolution=null,this._loadComplete=!1,this._url=null,this._atlasSphere=new o,this._atlasImage=new r,"undefined"!=typeof console&&console.log("v"+this.VERSION),!e.asset)throw"NO ASSET SPECIFIED";if(!e.asset.sprites_600&&!e.asset.sprites_300)throw"ASSET NOT A SPRITE SHEET ASSET";this._assetId=e.assetId,this._asset=e.asset,this._initialImage=e.initialImage||e.asset.initial_image||"H01",this._currentImage=this._initialImage,this._validLatitudes=this._asset.validLatitudes||this.VALID_LATITUDES,this._validLongitudes=this._asset.validLongitudes||this.VALID_LONGITUDES,this.adjustValidLatitudes(this._asset.extensions.atlas.camera_type_code||this._asset.atlas.camera_type_code);var i="sprites_"+this._preferredImageSize;this._asset[i]&&(this._imageResolution=this._preferredImageSize,this._url=this._asset[i]),this._url||(this._imageResolution=600,this._url=this._asset.sprites_600,this._url||(this._imageResolution=300,this._url=this._asset.sprites_300)),this._backgroundScale=1,this._backgroundScale=this._windowSize/this._imageResolution,this._forceBackground?this.createDiv():this.createCanvas()||this.createDiv(),this._atlasSphere.initPartial(this._validLatitudes,this._validLongitudes,!1,this._imageResolution),this.triggerEvent(this._elemEvents,"atlas-load-start");var n=this;this._atlasImage.load(this._url,(function(e,i,s){e&&(n.triggerEvent(n._elemEvents,"atlas-load-error",{error:e}),t(e,null)),!s&&i<100&&n.triggerEvent(n._elemEvents,"atlas-load-progress",{progress:i/100}),s&&i>=100&&(n._loadComplete=!0,n.renderImage(),n._canvas&&n._context?n.show(n._canvas):n.show(n._div),t&&t(null,s),n.triggerEvent(n._elemEvents,"atlas-load-interactivity"),n.triggerEvent(n._elemEvents,"atlas-load-complete",{image:s}))}))},l.prototype.cancelLoading=function(){this._atlasImage&&this._atlasImage.cancel()},l.prototype.renderImage=function(e,t){if(this._loadComplete){this._currentImage=e||this._currentImage;var i=this._atlasSphere.getSphereCellForIndex(this._currentImage);if(this._canvas&&this._context&&!t&&!this._forceBackground)if(this._useImageSmoothing?(this._context.imageSmoothingEnabled=!0,this._context.mozImageSmoothingEnabled=!0):(this._context.imageSmoothingEnabled=!1,this._context.mozImageSmoothingEnabled=!1),this._useCanvasTranslation){this._context.save();var n=this._canvasResolution/this._imageResolution;this._context.scale(n,n),this._context.translate(-i.left,-i.top),this._context.drawImage(this._atlasImage.image,0,0),this._context.restore()}else this._context.drawImage(this._atlasImage.image,i.left,i.top,this._imageResolution,this._imageResolution,0,0,this._canvasResolution,this._canvasResolution);else this.renderCssCell(i)}},l.prototype.getCurrentImageIndex=function(){return this._currentImage},l.prototype.isCanvasRender=function(){return this._canvas&&this._context},l.prototype.resizeWindow=function(e){this._windowSize=e,this._backgroundScale=this._windowSize/this._imageResolution;var t=(window.devicePixelRatio||1)/(this._context.webkitBackingStorePixelRatio||this._context.mozBackingStorePixelRatio||this._context.msBackingStorePixelRatio||this._context.oBackingStorePixelRatio||this._context.backingStorePixelRatio||1);this._canvasResolution=t*this._windowSize,this.isCanvasRender()?this.resizeElement(this._canvas,this._canvasResolution,this._windowSize):this.resizeElement(this._div,this._windowSize,this._windowSize),this.renderImage(this._currentImage,!1)},t.AtlasSpriteSheetPlayer=l},function(e,t,i){"use strict";var n=i(0).AtlasClientCapabilities;t.AtlasControlAdapter=function(e){this._dragging=!1,this._domElement=null,this._cellWidthInPixels=10,this._cellHeightInPixels=10,this._$=e,n.getCapabilities().isRetinaCapable&&(this._cellWidthInPixels/=2,this._cellHeightInPixels/=2),this._changeEvent={type:"change"},this._mouseDown={x:-1,y:-1},this._positionInCell={x:this._cellWidthInPixels/2,y:this._cellHeightInPixels/2},this._nextPositionInCell={x:0,y:0},this.reset=function(){this._positionInCell.x=this._cellWidthInPixels/2,this._positionInCell.y=this._cellHeightInPixels/2},this.begin=function(e,t){this._dragging=!0,this._mouseDown.x=e,this._mouseDown.y=t},this.end=function(e,t){if(this._dragging){this._dragging=!1;var i=e-this._mouseDown.x,n=t-this._mouseDown.y;this._nextPositionInCell.x=this._positionInCell.x+i,this._nextPositionInCell.y=this._positionInCell.y+n;var s=0;this._nextPositionInCell.x>this._cellWidthInPixels?(s=Math.floor(this._nextPositionInCell.x/this._cellWidthInPixels),this._positionInCell.x=this._nextPositionInCell.x-s*this._cellWidthInPixels):this._nextPositionInCell.x<0?(s=-1+Math.ceil(this._nextPositionInCell.x/this._cellWidthInPixels),this._positionInCell.x=this._cellWidthInPixels+this._nextPositionInCell.x%this._cellWidthInPixels):this._positionInCell.x=this._nextPositionInCell.x,s*=-1;var o=0;if(this._nextPositionInCell.y>this._cellHeightInPixels?(o=-1,this._positionInCell.y=this._nextPositionInCell.y-this._cellHeightInPixels):this._nextPositionInCell.y<0?(o=1,this._positionInCell.y=this._cellHeightInPixels+this._nextPositionInCell.y):this._positionInCell.y=this._nextPositionInCell.y,this._domElement&&(Math.abs(s)>0||Math.abs(o)>0))if(this._$)this._$(this._domElement).trigger(this._changeEvent.type,[{horizontal:s,vertical:o}]);else{var a=document.createEvent("Event");a.initEvent(this._changeEvent.type,!0,!0),a.horizontal=s,a.vertical=o,this._domElement.dispatchEvent(a)}}}}},function(e,t,i){"use strict";var n=function(){this._latitudes=0,this._availableLatitudes=[],this._longitudes=0,this._availableLongitudes=[],this._replicatePoles=!1,this._cellResolution=0,this._matrix=[],this._faceMap={}};n.prototype.init=function(e,t,i,n){this._latitudes=e,this._longitudes=t,16===this._latitudes&&16===this._longitudes&&(this._availableLatitudes=Constants.latitudeMarkers.slice(0,this._latitudes),this._availableLongitudes=Constants.longitudeMarkers.slice(0,this._longitudes),this._replicatePoles=i,this._cellResolution=n||0,this._constructSphere(i))},n.prototype.initPartial=function(e,t,i,n){this._availableLatitudes=e.slice(0),this._latitudes=e.length,this._availableLongitudes=t.slice(0),this._longitudes=t.length,this._replicatePoles=i,this._cellResolution=n||0,this._constructSphere(i)},n.prototype.getUniqueSphereCellCount=function(){return(this._replicatePoles?this._latitudes-2:this._latitudes)*this._longitudes},n.prototype.getSphereCellForIndex=function(e){var t=this._faceMap[e];return this.getSphereCellForFace(t)},n.prototype.getSphereCellForLatLon=function(e,t){return e<this._matrix.length&&t<this._matrix[e].length?this._matrix[e][t]:null},n.prototype.getSphereCellForFace=function(e){var t=Math.floor(e/this._longitudes),i=e%this._longitudes;return this.getSphereCellForLatLon(t,i)},n.prototype.getSphereCellCount=function(){return this._latitudes*this._longitudes},n.prototype.mapImageIndexToImageIndex=function(e,t){this.getSphereCellForIndex(e).imageIndex=t},n.prototype.mapFaceToImageIndex=function(e,t){this.getSphereCellForFace(e).imageIndex=t},n.prototype.getMappedImageIndex=function(e){return this.getSphereCellForIndex(e).imageIndex},n.prototype._constructSphere=function(e){for(var t=0,i=0;i<this._availableLatitudes.length;++i){for(var n=[],s=0,o=0;o<this._availableLongitudes.length;++o){var a=this._availableLatitudes[i]+this._availableLongitudes[o],r=a;16===this._availableLatitudes.length&&16===this._availableLongitudes.length&&(e&&0===i?(a=Constants.latitudeMarkers[i+1]+Constants.longitudeMarkers[o],s=0):e&&i===this._latitudes-1&&(a=Constants.latitudeMarkers[i-1]+Constants.longitudeMarkers[o],s=0)),n.push({face:i*this._longitudes+o,isPole:0===i||i===this._latitudes-1,latitude:i,longitude:o,originalImageIndex:r,imageIndex:a,left:s,top:t,right:s+this._cellResolution,bottom:t+this._cellResolution}),this._faceMap[r]=i*this._longitudes+o,s+=this._cellResolution}this._matrix.push(n),t+=this._cellResolution}},t.AtlasSphere=n},function(e,t,i){"use strict";i(0).AtlasClientCapabilities;t.AtlasSpriteSheetControls=function(e,t,i,n){this._$=n,this._parentSelector=e,this._domSelector=t,this._$?this._domElement=this._$(this._domSelector)[0]:this._domElement=document.querySelectorAll(this._domSelector)[0],this._controlAdapter=i,this._windowHalfX=300,this._windowHalfY=300,this._dragEvent={type:"canvasDrag",dragStart:"beforeDrag",dragging:"dragging",dragEnd:"finishDrag"},this._enabled=!1,this._draggin=!1;var s=this,o=window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",a=window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",r=window.navigator.msPointerEnabled?"MSPointerUp":"touchend";o=window.navigator.pointerEnabled?"pointerdown":o,a=window.navigator.pointerEnabled?"pointermove":a,r=window.navigator.pointerEnabled?"pointerup":r;function l(e){return s._windowHalfX=s._domElement.clientWidth/2,s._windowHalfY=s._domElement.clientHeight/2,e.preventDefault(),e.stopPropagation(),!(s._onBeforeMouseDown&&!s._onBeforeMouseDown(e.clientX,e.clientY))&&(!!s._enabled&&(s._dragging=!0,s._controlAdapter.begin(e.clientX,e.clientY),!1))}function h(e){return s._windowHalfX=s._domElement.clientWidth/2,s._windowHalfY=s._domElement.clientHeight/2,e.preventDefault(),e.stopPropagation(),!!s._enabled&&(!(s._onBeforeMouseUp&&!s._onBeforeMouseUp(e.clientX,e.clientY))&&(s._dragging=!1,s.reset(),!1))}function c(e){return!s._dragging||(e.preventDefault(),e.stopPropagation(),!!s._enabled&&(!(s._onBeforeMouseMove&&!s._onBeforeMouseMove(e.clientX,e.clientY))&&(s._controlAdapter.end(e.clientX,e.clientY),s._controlAdapter.begin(e.clientX,e.clientY),!1)))}function u(e){return e||(e=window.event),e.preventDefault(),e.stopPropagation(),!!s._enabled&&(!(s._onBeforeMouseOut&&!s._onBeforeMouseOut(e.clientX,e.clientY))&&(s._dragging=!1,s.reset(),!1))}function _(e){e.preventDefault(),e.stopPropagation();var t=e.originalEvent||e;if(!t.changedTouches&&t.touches&&(t.changedTouches=t.touches),t.changedTouches&&1===t.changedTouches.length||!t.changedTouches){var i=t.touches?t.touches[0].pageX:t.screenX,n=t.touches?t.touches[0].pageY:t.screenY;if(!s._enabled)return!1;var o=i-s._windowHalfX,a=n-s._windowHalfY;if(s._onBeforeTouchDown&&!s._onBeforeTouchDown(o,a))return!1;s._dragging=!0,s._controlAdapter.begin(o,a)}return!1}function d(e){if(!s._dragging)return!0;e.preventDefault(),e.stopPropagation();var t=e.originalEvent||e;if(!t.changedTouches&&t.touches&&(t.changedTouches=t.touches),t.changedTouches&&1===t.changedTouches.length||!t.changedTouches){var i=t.changedTouches?t.changedTouches[0].pageX:t.screenX,n=t.changedTouches?t.changedTouches[0].pageY:t.screenY;if(!s._enabled)return!1;var o=i-s._windowHalfX,a=n-s._windowHalfY;if(s._onBeforeTouchMove&&!s._onBeforeTouchMove(o,a))return!1;s._controlAdapter.end(o,a),s._controlAdapter.begin(o,a)}return!1}function g(e){e.preventDefault(),e.stopPropagation();var t=e.originalEvent||e;if(!t.changedTouches&&t.touches&&(t.changedTouches=t.touches),t.changedTouches&&1===t.changedTouches.length||!t.changedTouches){var i=t.changedTouches?t.changedTouches[0].pageX:t.screenX,n=t.changedTouches?t.changedTouches[0].pageY:t.screenY;if(!s._enabled)return!1;var o=i-s._windowHalfX,a=n-s._windowHalfY;if(s._onBeforeTouchEnd&&!s._onBeforeTouchEnd(o,a))return!1;s._dragging=!1,s.reset()}return!1}this._initialize=function(){this._controlAdapter&&(this._controlAdapter._domElement=this._domElement),void 0!==this._domElement.style.msTouchAction&&(this._domElement.style.msTouchAction="none"),this._windowHalfX=this._domElement.clientWidth/2,this._windowHalfY=this._domElement.clientHeight/2,this._$?(this._$(this._parentSelector).on("contextmenu.player",this._domSelector,(function(e){e.preventDefault()})),this._$(this._parentSelector).on(o+".player",this._domSelector,_),this._$(this._parentSelector).on("mousedown.player",this._domSelector,l),this._$(this._parentSelector).on("mouseup.player",this._domSelector,h),this._$(this._parentSelector).on("mousemove.player",this._domSelector,c),this._$(this._parentSelector).on("mouseout.player",this._domSelector,u),this._$(this._parentSelector).on(a+".player",this._domSelector,d),this._$(this._parentSelector).on(r+".player",this._domSelector,g)):(this._domElement.addEventListener("contextmenu",(function(e){e.preventDefault()})),this._domElement.addEventListener(o,_),this._domElement.addEventListener("mousedown",l),this._domElement.addEventListener("mouseup",h),this._domElement.addEventListener("mousemove",c),this._domElement.addEventListener("mouseout",u),this._domElement.addEventListener(a,d),this._domElement.addEventListener(r,g)),this._enabled=!0},this.reset=function(){this._controlAdapter&&this._controlAdapter.reset()},this.disable=function(){this._enabled=!1},this.enable=function(){this._enabled=!0},this.setOnBeforeMouseMove=function(e){this._onBeforeMouseMove=e},this.setOnBeforeTouchMove=function(e){this._onBeforeTouchMove=e},this.setOnBeforeMouseDown=function(e){this._onBeforeMouseDown=e},this.setOnBeforeTouchDown=function(e){this._onBeforeTouchDown=e},this.setOnBeforeMouseUp=function(e){this._onBeforeMouseUp=e},this.setOnBeforeTouchEnd=function(e){this._onBeforeTouchEnd=e},this.setOnBeforeMouseOut=function(e){this._onBeforeMouseOut=e},this.clickDrag=function(e,t){this._controlAdapter.end(e,t),this._controlAdapter.begin(e,t)},this._initialize()}},function(e,t,i){"use strict";var n=function(){this.percentComplete=0,this.image=new Image,this.cancelled=!1};n.prototype.load=function(e,t,i){this.cancelled=!1;var n=new XMLHttpRequest;if("onprogress"in n&&!i){this.percentComplete=0,n.open("GET",e,!0),n.responseType="arraybuffer";var s=this;n.onload=function(e){var i=n.getAllResponseHeaders().match(/^Content-Type\:\s*(.*?)$/im)[1]||"image/png",o=new Blob([this.response],{type:i});s.image.src=window.URL.createObjectURL(o),s.image.onload=function(){window.URL.revokeObjectURL(s.image.src),t&&t(null,100,s.image)},s.image.onerror=function(){t&&t("error loading atlas image",null,null)}},n.onprogress=function(e){if(s.cancelled)try{n.abort()}catch(e){}e.lengthComputable&&(s.percentComplete=e.loaded/e.total*100),s.percentComplete<100&&t(null,s.percentComplete,null)},n.onloadstart=function(){s.percentComplete=0,t(null,s.percentComplete,null)},n.onloadend=function(){s.percentComplete=100},n.send()}else{s=this;this.image.onload=function(){t(null,100,s.image)},this.image.src=e}},n.prototype.cancel=function(){this.cancelled=!0},t.AtlasImageWithProgress=n},function(e,t){function i(){this._asset={}}i.prototype.parseResponse=function(e){if(this._asset.productId=e.data.id,this._asset.name=e.data.attributes.name,this._asset.signature_image=e.data.attributes.search_preview_url,this._asset.signature_image){var t=this._asset.signature_image.match(/600\/(.*)\.jpg/);t&&(this._asset.initial_image=t[1])}var i=e.data.attributes;return e.included&&(i=e.included[0].attributes),this._asset.sprites_300=i.sprites_300_url,this._asset.sprites_600=i.sprites_600_url,this._asset.extensions={atlas:{camera_type_code:i.camera_type_code}},this._asset.atlas={camera_type_code:i.camera_type_code},!0},i.prototype.getAsset=function(){return this._asset},t.AtlasAPIAdapter=i},function(e,t){function i(){this._asset={}}i.prototype.parseResponse=function(e){return this._asset.productId=e.data.id,this._asset.name=e.data.name,this._asset.extensions=e.data.extensions,this._asset.atlas=e.data.atlas,this._asset.initial_image=e.data.initial_image,this._asset.signature_image=e.data.signature_image,this._asset.sprites_600=e.data.sprites_600,this._asset.sprites_300=e.data.sprites_300,!0},i.prototype.getAsset=function(){return this._asset},t.AtlasSPAdapter=i}])}));