/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function getMessage(a, b) {
	  if (typeof a === 'boolean') {
	    if (a) {
	      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
	    } else {
	      return 'Переданное GIF-изображение не анимировано';
	    }
	  } else if (typeof a === 'number') {
	    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
	  } else if ((a instanceof Array) && (b instanceof Array)) {
	    return 'Общая площадь артефактов сжатия: ' + multiplyArrays(a, b) +  ' пикселей';
	  } else if (a instanceof Array) {
	    return 'Количество красных точек во всех строчках изображения: ' + sumArray(a);
	  }
	}

	function sumArray(arr) {
	  return arr.reduce(function(sum, current) {
	    return sum + current;
	  });
	}

	function multiplyArrays(arrA, arrB) {
	  return arrA.reduce(function(res, current, index) {
	    return res + (current * arrB[index]);
	  });
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";!function(){function a(){return"function"==typeof window.getMessage?window.getMessage.apply(null,arguments):"Не найдена функция <code>getMessage</code>, которая должна быть объявлена в глобальной области видимости в файле <code>check.js</code>"}function e(){var a=["img/logo-background-1.jpg","img/logo-background-2.jpg","img/logo-background-3.jpg"],b=document.querySelector(".upload"),c=Math.round(Math.random()*(a.length-1));b.style.backgroundImage="url("+a[c]+")"}function h(a,b){var d=!1;switch(a){case c.UPLOADING:b=b||"Кексограмим&hellip;";break;case c.ERROR:d=!0,b=b||'Неподдерживаемый формат файла<br> <a href="'+document.location+'">Попробовать еще раз</a>.'}return g.querySelector(".upload-message-container").innerHTML=b,g.classList.remove("invisible"),g.classList.toggle("upload-message-error",d),g}var b={GIF:"gif",JPEG:"jpeg",PNG:"png","SVG+XML":"svg+xml"},c={ERROR:0,UPLOADING:1,CUSTOM:2},d=new RegExp("^image/("+Object.keys(b).join("|").replace("+","\\+")+")$","i"),f=document.forms["upload-select-image"],g=document.querySelector(".upload-message");f.onchange=function(e){var f=e.target;if("upload-file"===f.id){var g=f.files[0].type.match(d),i=f.files[0].name;if(g){var k,l,j=g[1];switch(h(c.UPLOADING),j.toLowerCase()){case b.GIF:i.indexOf("animated.gif")>-1?(l=a(!0,20),k="Переданное GIF-изображение анимировано и содержит 20 кадров"!==l):(l=a(!1),k="Переданное GIF-изображение не анимировано"!==l);break;case b["SVG+XML"]:l=a(100,75),k="Переданное SVG-изображение содержит 100 объектов и 300 аттрибутов"!==l;break;case b.PNG:l=a([23,11,75,88,14]),k="Количество красных точек во всех строчках изображения: 211"!==l;break;case b.JPEG:l=a([10,2,8,15],[4,20,5,3]),k="Общая площадь артефактов сжатия: 165 пикселей"!==l}h(k?c.ERROR:c.UPLOADING,l+'<br><a href="'+document.location+'">Другое изображение</a>.')}else h(c.ERROR)}},e()}();


/***/ }
/******/ ]);