(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./login-controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_styles_live_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/styles/live.css */ "./vendor/symfony/ux-live-component/assets/styles/live.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            __webpack_require__.e(/*! import() */ "assets_controllers_login-controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/login-controller.js */ "./assets/controllers/login-controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/collapse.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/dropdown.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");


// loads the Bootstrap jQuery plugins







// loads the code syntax highlighting library


// Creates links to the Symfony documentation


// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


// Wraps some elements in anchor tags referencing to the Symfony documentation
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');
  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }
  ;
  function wrap(content, links) {
    return content.replace(new RegExp(Object.keys(links).join('|'), 'g'), function (token) {
      return anchor(links[token], token);
    });
  }
  ;

  // Wraps links to the Symfony documentation
  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  });

  // Wraps Symfony's attributes
  var attributes = {
    'Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    'IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    'ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    'Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-attributes-or-annotations',
    'Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-meta').each(function () {
    var src = $(this).text();
    $(this).html(wrap(src, attributes));
  });

  // Wraps Twig's tags
  $templateCode.find('.hljs-template-tag + .hljs-name').each(function () {
    var tag = $(this).text();
    if ('else' === tag || tag.match(/^end/)) {
      return;
    }
    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  });

  // Wraps Twig's functions
  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/es/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/es/languages/twig.js");



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('php', highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('twig', highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAll();

/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ default_1),
/* harmony export */   "getComponent": () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



























































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentNamedArguments = {};
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      named: currentNamedArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentNamedArguments = {};
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    var mixedArgTypesError = function mixedArgTypesError() {
      throw new Error("Normal and named arguments cannot be mixed inside \"".concat(currentActionName, "()\""));
    };
    if (currentArgumentName) {
      if (currentArguments.length > 0) {
        mixedArgTypesError();
      }
      currentNamedArguments[currentArgumentName.trim()] = currentArgumentValue;
    } else {
      if (Object.keys(currentNamedArguments).length > 0) {
        mixedArgTypesError();
      }
      currentArguments.push(currentArgumentValue.trim());
    }
    currentArgumentName = '';
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    if (Object.keys(currentNamedArguments).length > 0) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support named arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        if (_char === '=') {
          currentArgumentName = currentArgumentValue;
          currentArgumentValue = '';
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(part.split(' ')));
  });
  return finalParts;
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element);
      if (modelNameData === null) {
        return null;
      }
      var modelValue = valueStore.get(modelNameData.action);
      if (Array.isArray(modelValue)) {
        return getMultipleCheckboxValue(element, modelValue);
      }
      return element.checked ? inputValue(element) : null;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value == value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val == element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        element.checked = element.value == value;
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0 || directive.named.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0 || directive.named.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  component.getChildren().forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
function cloneElementWithNewTagName(element, newTag) {
  var originalTag = element.tagName;
  var startRX = new RegExp('^<' + originalTag, 'i');
  var endRX = new RegExp(originalTag + '>$', 'i');
  var startSubst = '<' + newTag;
  var endSubst = newTag + '>';
  var newHTML = element.outerHTML.replace(startRX, startSubst).replace(endRX, endSubst);
  return htmlToElement(newHTML);
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      currentValues.push(value);
    }
    return currentValues;
  }
  if (index > -1) {
    currentValues.splice(index, 1);
  }
  return currentValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
function setDeepData(data, propertyPath, value) {
  var _parseDeepData2 = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData2.currentLevelData,
    finalData = _parseDeepData2.finalData,
    finalKey = _parseDeepData2.finalKey,
    parts = _parseDeepData2.parts;
  if (_typeof(currentLevelData) !== 'object') {
    var lastPart = parts.pop();
    if (typeof currentLevelData === 'undefined') {
      throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not exist. Did you forget to expose \"").concat(parts[0], "\" as a LiveProp?"));
    }
    throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not appear to be an object (it's \"").concat(currentLevelData, "\"). Did you forget to add exposed={\"").concat(lastPart, "\"} to its LiveProp?"));
  }
  if (currentLevelData[finalKey] === undefined) {
    var _lastPart = parts.pop();
    if (parts.length > 0) {
      throw new Error("The model name ".concat(propertyPath, " was never initialized. Did you forget to add exposed={\"").concat(_lastPart, "\"} to its LiveProp?"));
    } else {
      throw new Error("The model name \"".concat(propertyPath, "\" was never initialized. Did you forget to expose \"").concat(_lastPart, "\" as a LiveProp? Available models values are: ").concat(Object.keys(data).length > 0 ? Object.keys(data).join(', ') : '(none)'));
    }
  }
  currentLevelData[finalKey] = value;
  return finalData;
}
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props, data) {
    _classCallCheck(this, ValueStore);
    this.updatedModels = [];
    this.props = {};
    this.data = {};
    this.props = props;
    this.data = data;
  }
  _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      var result = getDeepData(this.data, normalizedName);
      if (result !== undefined) {
        return result;
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      var currentValue = this.get(name);
      if (currentValue !== value && !this.updatedModels.includes(normalizedName)) {
        this.updatedModels.push(normalizedName);
      }
      this.data = setDeepData(this.data, normalizedName, value);
      return currentValue !== value;
    }
  }, {
    key: "all",
    value: function all() {
      return Object.assign(Object.assign({}, this.props), this.data);
    }
  }, {
    key: "reinitializeData",
    value: function reinitializeData(data) {
      this.updatedModels = [];
      this.data = data;
    }
  }, {
    key: "reinitializeProps",
    value: function reinitializeProps(props) {
      if (JSON.stringify(props) == JSON.stringify(this.props)) {
        return false;
      }
      this.props = props;
      return true;
    }
  }]);
  return ValueStore;
}();
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;

  // document-fragments dont have attributes so lets not do anything
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  // update attributes on original DOM element
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);

  // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        }
        // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },
  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0;
      // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}
function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = undefined;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }

    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }

          // Walk recursively
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
        }

        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }

        // update attributes on original DOM element first
        morphAttrs(fromEl, toEl);
        // optional
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;

      // walk the children
      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild);

        // walk the fromNode children all the way through
        while (curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;
          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }
          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType;

          // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
          var isCompatible = undefined;
          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes

              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.

                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                      // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }
              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true;
              // Simply update nodeValue on the original node to
              // change the text value
              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }
          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home
          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}

        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end
        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          fromEl.appendChild(matchingFromEl);
          // MORPH
          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }
            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }
            fromEl.appendChild(curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }
        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);

      // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, childComponents, findChildComponent, getKeyFromElement) {
  var childComponentMap = new Map();
  childComponents.forEach(function (childComponent) {
    childComponentMap.set(childComponent.element, childComponent);
    if (!childComponent.id) {
      throw new Error('Child is missing id.');
    }
    var childComponentToElement = findChildComponent(childComponent.id, rootToElement);
    if (childComponentToElement && childComponentToElement.tagName !== childComponent.element.tagName) {
      var newTag = cloneElementWithNewTagName(childComponentToElement, childComponent.element.tagName);
      childComponentToElement.replaceWith(newTag);
    }
  });
  morphdom(rootFromElement, rootToElement, {
    getNodeKey: function getNodeKey(node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }
      return getKeyFromElement(node);
    },
    onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
      if (fromEl === rootFromElement) {
        return true;
      }
      if (!(fromEl instanceof HTMLElement || fromEl instanceof SVGElement) || !(toEl instanceof HTMLElement || toEl instanceof SVGElement)) {
        return false;
      }
      var childComponent = childComponentMap.get(fromEl) || false;
      if (childComponent) {
        return childComponent.updateFromNewElement(toEl);
      }
      if (modifiedFieldElements.includes(fromEl)) {
        setValueOnElement(toEl, getElementValue(fromEl));
      }
      if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement && fromEl.isEqualNode(toEl)) {
        var normalizedFromEl = cloneHTMLElement(fromEl);
        normalizeAttributesForComparison(normalizedFromEl);
        var normalizedToEl = cloneHTMLElement(toEl);
        normalizeAttributesForComparison(normalizedToEl);
        if (normalizedFromEl.isEqualNode(normalizedToEl)) {
          return false;
        }
      }
      return !fromEl.hasAttribute('data-live-ignore');
    },
    onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
      if (!(node instanceof HTMLElement)) {
        return true;
      }
      return !node.hasAttribute('data-live-ignore');
    }
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
  return UnsyncedInputsTracker;
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
  return UnsyncedInputContainer;
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
  return HookManager;
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
  return BackendResponse;
}();
var ChildComponentWrapper = /*#__PURE__*/_createClass(function ChildComponentWrapper(component, modelBindings) {
  _classCallCheck(this, ChildComponentWrapper);
  this.component = component;
  this.modelBindings = modelBindings;
});
var Component = /*#__PURE__*/function () {
  function Component(element, props, data, fingerprint, id, backend, elementDriver) {
    _classCallCheck(this, Component);
    this.defaultDebounce = 150;
    this.pendingActions = [];
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.children = new Map();
    this.parent = null;
    this.element = element;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.fingerprint = fingerprint;
    this.valueStore = new ValueStore(props, data);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.onChildComponentModelUpdate = this.onChildComponentModelUpdate.bind(this);
  }
  _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var modelBindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children.set(child.id, new ChildComponentWrapper(child, modelBindings));
      child.parent = this;
      child.on('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children["delete"](child.id);
      child.parent = null;
      child.off('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = new Map();
      this.children.forEach(function (childComponent, id) {
        children.set(id, childComponent.component);
      });
      return children;
    }
  }, {
    key: "updateFromNewElement",
    value: function updateFromNewElement(toEl) {
      var props = this.elementDriver.getComponentProps(toEl);
      if (props === null) {
        return false;
      }
      var isChanged = this.valueStore.reinitializeProps(props);
      var fingerprint = toEl.dataset.liveFingerprintValue;
      if (fingerprint !== undefined) {
        this.fingerprint = fingerprint;
      }
      if (isChanged) {
        this.render();
      }
      return false;
    }
  }, {
    key: "onChildComponentModelUpdate",
    value: function onChildComponentModelUpdate(modelName, value, childComponent) {
      var _this5 = this;
      if (!childComponent.id) {
        throw new Error('Missing id');
      }
      var childWrapper = this.children.get(childComponent.id);
      if (!childWrapper) {
        throw new Error('Missing child');
      }
      childWrapper.modelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        _this5.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this6 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      this.backendRequest = this.backend.makeRequest(this.valueStore.all(), this.pendingActions, this.valueStore.updatedModels, this.getChildrenFingerprints());
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.updatedModels = [];
      this.isRequestPending = false;
      this.backendRequest.promise.then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var backendResponse, html, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                backendResponse = new BackendResponse(response);
                _context2.next = 3;
                return backendResponse.getBody();
              case 3:
                html = _context2.sent;
                headers = backendResponse.response.headers;
                if (!(headers.get('Content-Type') !== 'application/vnd.live-component+html' && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 11;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this6.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this6.renderError(html);
                }
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 11:
                _this6.processRerender(html, backendResponse);
                _this6.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this6.isRequestPending) {
                  _this6.isRequestPending = false;
                  _this6.performRequest();
                }
                return _context2.abrupt("return", response);
              case 16:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this7 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (typeof Turbo !== 'undefined') {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      this.valueStore.updatedModels.forEach(function (modelName) {
        modifiedModelValues[modelName] = _this7.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error('There was a problem with the component HTML returned:');
        throw error;
      }
      this.hooks.triggerHook('loading.state:finished', newElement);
      this.valueStore.reinitializeData(this.elementDriver.getComponentData(newElement));
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this7.valueStore);
      }, Array.from(this.getChildren().values()), this.elementDriver.findChildComponentElement, this.elementDriver.getKeyFromElement);
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this7.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this8 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this8.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.children.forEach(function (childComponent) {
        var child = childComponent.component;
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = child.fingerprint;
      });
      return fingerprints;
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this9 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this9.nextRequestPromiseResolve = resolve;
      });
    }
  }]);
  return Component;
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this10 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this10.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
  return BackendRequest;
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Backend);
    this.url = url;
    this.csrfToken = csrfToken;
  }
  _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(data, actions, updatedModels, childrenFingerprints) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html'
      };
      var hasFingerprints = Object.keys(childrenFingerprints).length > 0;
      var hasUpdatedModels = Object.keys(updatedModels).length > 0;
      if (actions.length === 0 && this.willDataFitInUrl(JSON.stringify(data), params, JSON.stringify(childrenFingerprints))) {
        params.set('data', JSON.stringify(data));
        if (hasFingerprints) {
          params.set('childrenFingerprints', JSON.stringify(childrenFingerprints));
        }
        updatedModels.forEach(function (model) {
          params.append('updatedModels[]', model);
        });
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        fetchOptions.headers['Content-Type'] = 'application/json';
        var requestData = {
          data: data
        };
        if (hasUpdatedModels) {
          requestData.updatedModels = updatedModels;
        }
        if (hasFingerprints) {
          requestData.childrenFingerprints = childrenFingerprints;
        }
        if (actions.length > 0) {
          if (this.csrfToken) {
            fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
          }
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        fetchOptions.body = JSON.stringify(requestData);
      }
      var paramsString = params.toString();
      return new BackendRequest(fetch("".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''), fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), updatedModels);
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(dataJson, params, childrenFingerprintsJson) {
      var urlEncodedJsonData = new URLSearchParams(dataJson + childrenFingerprintsJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
  return Backend;
}();
var StandardElementDriver = /*#__PURE__*/function () {
  function StandardElementDriver() {
    _classCallCheck(this, StandardElementDriver);
  }
  _createClass(StandardElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentData",
    value: function getComponentData(rootElement) {
      if (!rootElement.dataset.liveDataValue) {
        return null;
      }
      return JSON.parse(rootElement.dataset.liveDataValue);
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(rootElement) {
      if (!rootElement.dataset.livePropsValue) {
        return null;
      }
      return JSON.parse(rootElement.dataset.livePropsValue);
    }
  }, {
    key: "findChildComponentElement",
    value: function findChildComponentElement(id, element) {
      return element.querySelector("[data-live-id=".concat(id, "]"));
    }
  }, {
    key: "getKeyFromElement",
    value: function getKeyFromElement(element) {
      return element.dataset.liveId || null;
    }
  }]);
  return StandardElementDriver;
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this11 = this;
      component.on('loading.state:started', function (element, request) {
        _this11.startLoading(element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this11.finishLoading(element);
      });
      this.finishLoading(component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(targetElement, backendRequest) {
      this.handleLoadingToggle(true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(targetElement) {
      this.handleLoadingToggle(false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(isLoading, targetElement, backendRequest) {
      var _this12 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(targetElement).forEach(function (_ref4) {
        var element = _ref4.element,
          directives = _ref4.directives;
        if (isLoading) {
          _this12.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this12.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this12.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this13 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        var _a;
        if (validModifiers.has(modifier.name)) {
          var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            _this13.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this13.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this13.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this13.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(element) {
      var loadingDirectives = [];
      element.querySelectorAll('[data-loading]').forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'inline-block';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList2;
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        this.removeAttributes(element, ['class']);
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
  return LoadingPlugin;
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this14 = this;
      component.on('model:set', function (modelName) {
        _this14.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
  return ValidatedFieldsPlugin;
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this15 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this15.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this15.isConnected = true;
      });
      component.on('disconnect', function () {
        _this15.isConnected = false;
      });
    }
  }]);
  return PageUnloadingPlugin;
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this16 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref5) {
        var actionName = _ref5.actionName,
          duration = _ref5.duration;
        _this16.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this17 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this17.component.render();
        };
      } else {
        callback = function callback() {
          _this17.component.action(actionName, {}, 0);
        };
      }
      var timer = setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
  return PollingDirector;
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this18.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this18.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this18.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this19 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this19.addPoll(directive.action, duration);
      });
    }
  }]);
  return PollingPlugin;
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this20 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this20.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
  return SetValueOntoModelFieldsPlugin;
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
var ComponentRegistry = /*#__PURE__*/function () {
  function ComponentRegistry() {
    _classCallCheck(this, ComponentRegistry);
    this.components = new WeakMap();
  }
  _createClass(ComponentRegistry, [{
    key: "registerComponent",
    value: function registerComponent(element, definition) {
      this.components.set(element, definition);
    }
  }, {
    key: "unregisterComponent",
    value: function unregisterComponent(element) {
      this.components["delete"](element);
    }
  }, {
    key: "getComponent",
    value: function getComponent(element) {
      var _this21 = this;
      return new Promise(function (resolve, reject) {
        var count = 0;
        var maxCount = 10;
        var interval = setInterval(function () {
          var component = _this21.components.get(element);
          if (component) {
            resolve(component);
          }
          count++;
          if (count > maxCount) {
            clearInterval(interval);
            reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
          }
        }, 5);
      });
    }
  }]);
  return ComponentRegistry;
}();
var ComponentRegistry$1 = new ComponentRegistry();
var getComponent = function getComponent(element) {
  return ComponentRegistry$1.getComponent(element);
};
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this22;
    _classCallCheck(this, default_1);
    _this22 = _super.apply(this, arguments);
    _this22.pendingActionTriggerModelElement = null;
    _this22.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this22.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this22.handleChangeEvent(event);
      }
    }, {
      event: 'live:connect',
      callback: function callback(event) {
        return _this22.handleConnectedControllerEvent(event);
      }
    }];
    return _this22;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this23 = this;
      this.handleDisconnectedChildControllerEvent = this.handleDisconnectedChildControllerEvent.bind(this);
      var id = this.element.dataset.liveId || null;
      this.component = new Component(this.element, this.propsValue, this.dataValue, this.fingerprintValue, id, new Backend(this.urlValue, this.csrfValue), new StandardElementDriver());
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin()];
      plugins.forEach(function (plugin) {
        _this23.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this24 = this;
      this.component.connect();
      this.elementEventListeners.forEach(function (_ref6) {
        var event = _ref6.event,
          callback = _ref6.callback;
        _this24.component.element.addEventListener(event, callback);
      });
      ComponentRegistry$1.registerComponent(this.element, this.component);
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this25 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref7) {
        var event = _ref7.event,
          callback = _ref7.callback;
        _this25.component.element.removeEventListener(event, callback);
      });
      ComponentRegistry$1.unregisterComponent(this.element);
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.target)));
      }
      this.updateModelFromElementEvent(event.target, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this26 = this;
      var rawAction = event.currentTarget.dataset.actionName;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var validModifiers = new Map();
        validModifiers.set('prevent', function () {
          event.preventDefault();
        });
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? parseInt(modifier.value) : true;
        });
        directive.modifiers.forEach(function (modifier) {
          var _a;
          if (validModifiers.has(modifier.name)) {
            var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        _this26.component.action(directive.action, directive.named, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this26.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      this.component.render();
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "handleConnectedControllerEvent",
    value: function handleConnectedControllerEvent(event) {
      if (event.target === this.element) {
        return;
      }
      var childController = event.detail.controller;
      if (childController.component.getParent()) {
        return;
      }
      var modelDirectives = getAllModelDirectiveFromElements(childController.element);
      var modelBindings = modelDirectives.map(getModelBinding);
      this.component.addChild(childController.component, modelBindings);
      childController.element.addEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
    }
  }, {
    key: "handleDisconnectedChildControllerEvent",
    value: function handleDisconnectedChildControllerEvent(event) {
      var childController = event.detail.controller;
      childController.element.removeEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
      if (childController.component.getParent() !== this.component) {
        return;
      }
      this.component.removeChild(childController.component);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__.Controller);
default_1.values = {
  url: String,
  data: Object,
  props: Object,
  csrf: String,
  debounce: {
    type: Number,
    "default": 150
  },
  id: String,
  fingerprint: String
};


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/styles/live.css":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/styles/live.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-eef3d1","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap-sass_assets-dedf4f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS9VO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3MEVEOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW4tY29udHJvbGxlci5qcz82Yzk3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZG9jbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL3N0eWxlcy9saXZlLmNzcz83NTVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vbG9naW4tY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L3N0eWxlcy9saXZlLmNzcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdsaXZlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY2xhc3MgTGF6eUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltcG9ydCgnQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcbWFoZXJkZW50aXN0XFxcXGFzc2V0c1xcXFxjb250cm9sbGVyc1xcXFxsb2dpbi1jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIGxvYWRzIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbnNcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC90cmFuc2l0aW9uLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9hbGVydC5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvY29sbGFwc2UuanMnO1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2Ryb3Bkb3duLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9tb2RhbC5qcyc7XG5pbXBvcnQgJ2pxdWVyeSdcblxuLy8gbG9hZHMgdGhlIGNvZGUgc3ludGF4IGhpZ2hsaWdodGluZyBsaWJyYXJ5XG5pbXBvcnQgJy4vanMvaGlnaGxpZ2h0LmpzJztcblxuLy8gQ3JlYXRlcyBsaW5rcyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXG5pbXBvcnQgJy4vanMvZG9jbGlua3MuanMnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFdyYXBzIHNvbWUgZWxlbWVudHMgaW4gYW5jaG9yIHRhZ3MgcmVmZXJlbmNpbmcgdG8gdGhlIFN5bWZvbnkgZG9jdW1lbnRhdGlvblxuJChmdW5jdGlvbigpIHtcbiAgICB2YXIgJG1vZGFsID0gJCgnI3NvdXJjZUNvZGVNb2RhbCcpO1xuICAgIHZhciAkY29udHJvbGxlckNvZGUgPSAkbW9kYWwuZmluZCgnY29kZS5waHAnKTtcbiAgICB2YXIgJHRlbXBsYXRlQ29kZSA9ICRtb2RhbC5maW5kKCdjb2RlLnR3aWcnKTtcblxuICAgIGZ1bmN0aW9uIGFuY2hvcih1cmwsIGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuICc8YSBjbGFzcz1cImRvY2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHVybCArICdcIj4nICsgY29udGVudCArICc8L2E+JztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gd3JhcChjb250ZW50LCBsaW5rcykge1xuICAgICAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgbmV3IFJlZ0V4cChPYmplY3Qua2V5cyhsaW5rcykuam9pbignfCcpLCAnZycpLFxuICAgICAgICAgICAgdG9rZW4gPT4gYW5jaG9yKGxpbmtzW3Rva2VuXSwgdG9rZW4pXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIFdyYXBzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbiAgICAkbW9kYWwuZmluZCgnLmhsanMtY29tbWVudCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuaHRtbCgkKHRoaXMpLmh0bWwoKS5yZXBsYWNlKC9odHRwczpcXC9cXC9zeW1mb255LmNvbVxcL2RvY1xcL1tcXHcvLiMtXSsvZywgZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yKHVybCwgdXJsKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgU3ltZm9ueSdzIGF0dHJpYnV0ZXNcbiAgICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAgICAgJ0NhY2hlJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9jYWNoZS5odG1sJyxcbiAgICAgICAgJ0lzR3JhbnRlZCc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNpc2dyYW50ZWQnLFxuICAgICAgICAnUGFyYW1Db252ZXJ0ZXInOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL2NvbnZlcnRlcnMuaHRtbCcsXG4gICAgICAgICdSb3V0ZSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L3JvdXRpbmcuaHRtbCNjcmVhdGluZy1yb3V0ZXMtYXMtYXR0cmlidXRlcy1vci1hbm5vdGF0aW9ucycsXG4gICAgICAgICdTZWN1cml0eSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNzZWN1cml0eSdcbiAgICB9O1xuXG4gICAgJGNvbnRyb2xsZXJDb2RlLmZpbmQoJy5obGpzLW1ldGEnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKHdyYXAoc3JjLCBhdHRyaWJ1dGVzKSk7XG4gICAgfSk7XG5cbiAgICAvLyBXcmFwcyBUd2lnJ3MgdGFnc1xuICAgICR0ZW1wbGF0ZUNvZGUuZmluZCgnLmhsanMtdGVtcGxhdGUtdGFnICsgLmhsanMtbmFtZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0YWcgPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgICBpZiAoJ2Vsc2UnID09PSB0YWcgfHwgdGFnLm1hdGNoKC9eZW5kLykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly90d2lnLnN5bWZvbnkuY29tL2RvYy8zLngvdGFncy8nICsgdGFnICsgJy5odG1sIycgKyB0YWc7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKGFuY2hvcih1cmwsIHRhZykpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgVHdpZydzIGZ1bmN0aW9uc1xuICAgICR0ZW1wbGF0ZUNvZGUuZmluZCgnLmhsanMtdGVtcGxhdGUtdmFyaWFibGUgPiAuaGxqcy1uYW1lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L2Z1bmN0aW9ucy8nICsgZnVuYyArICcuaHRtbCMnICsgZnVuYztcblxuICAgICAgICAkKHRoaXMpLmh0bWwoYW5jaG9yKHVybCwgZnVuYykpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xuaW1wb3J0IHBocCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAnO1xuaW1wb3J0IHR3aWcgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHdpZyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgncGhwJywgcGhwKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgndHdpZycsIHR3aWcpO1xuXG5obGpzLmhpZ2hsaWdodEFsbCgpO1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgIGxldCBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbmFtZWQ6IGN1cnJlbnROYW1lZEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50cyA9IHt9O1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1peGVkQXJnVHlwZXNFcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm9ybWFsIGFuZCBuYW1lZCBhcmd1bWVudHMgY2Fubm90IGJlIG1peGVkIGluc2lkZSBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcImApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50TmFtZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5hbWVkQXJndW1lbnRzW2N1cnJlbnRBcmd1bWVudE5hbWUudHJpbSgpXSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudE5hbWVkQXJndW1lbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG5hbWVkIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgc3RhdGUgPSAnYWN0aW9uJztcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gY29udGVudFtpXTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhZnRlcl9hcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi5wYXJ0LnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKCddJywgJycpO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcuJykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAobW9kZWxOYW1lRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQgPyBpbnB1dFZhbHVlKGVsZW1lbnQpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx1ZTtcbiAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50LmRhdGFzZXQubW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5tb2RlbCk7XG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDAgfHwgZGlyZWN0aXZlLm5hbWVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2VsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShkaXJlY3RpdmUuYWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhyb3dPbk1pc3NpbmcgPSB0cnVlKSB7XG4gICAgY29uc3QgZGF0YU1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpO1xuICAgIGlmIChkYXRhTW9kZWxEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGFNb2RlbERpcmVjdGl2ZXNbMF07XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGlmIChmb3JtRWxlbWVudCAmJiAnbW9kZWwnIGluIGZvcm1FbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbCB8fCAnKicpO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1swXTtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7Zm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRocm93T25NaXNzaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgdGhlIG1vZGVsIG5hbWUgZm9yIFwiJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfVwiOiB0aGUgZWxlbWVudCBtdXN0IGVpdGhlciBoYXZlIGEgXCJkYXRhLW1vZGVsXCIgKG9yIFwibmFtZVwiIGF0dHJpYnV0ZSBsaXZpbmcgaW5zaWRlIGEgPGZvcm0gZGF0YS1tb2RlbD1cIipcIj4pLmApO1xufVxuZnVuY3Rpb24gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgICBjb21wb25lbnQuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoZm91bmRDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50IHx8IGNoaWxkQ29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGZvdW5kQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICFmb3VuZENoaWxkQ29tcG9uZW50O1xufVxuZnVuY3Rpb24gY2xvbmVIVE1MRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgY2xvbmUgZWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBpZiAodGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgSFRNTCBjb250YWlucyAke3RlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnR9IGVsZW1lbnRzLCBidXQgb25seSAxIHJvb3QgZWxlbWVudCBpcyBhbGxvd2VkLmApO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZCA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENyZWF0ZWQgZWxlbWVudCBpcyBub3QgYW4gSFRNTEVsZW1lbnQ6ICR7aHRtbC50cmltKCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhOZXdUYWdOYW1lKGVsZW1lbnQsIG5ld1RhZykge1xuICAgIGNvbnN0IG9yaWdpbmFsVGFnID0gZWxlbWVudC50YWdOYW1lO1xuICAgIGNvbnN0IHN0YXJ0UlggPSBuZXcgUmVnRXhwKCdePCcgKyBvcmlnaW5hbFRhZywgJ2knKTtcbiAgICBjb25zdCBlbmRSWCA9IG5ldyBSZWdFeHAob3JpZ2luYWxUYWcgKyAnPiQnLCAnaScpO1xuICAgIGNvbnN0IHN0YXJ0U3Vic3QgPSAnPCcgKyBuZXdUYWc7XG4gICAgY29uc3QgZW5kU3Vic3QgPSBuZXdUYWcgKyAnPic7XG4gICAgY29uc3QgbmV3SFRNTCA9IGVsZW1lbnQub3V0ZXJIVE1MLnJlcGxhY2Uoc3RhcnRSWCwgc3RhcnRTdWJzdCkucmVwbGFjZShlbmRSWCwgZW5kU3Vic3QpO1xuICAgIHJldHVybiBodG1sVG9FbGVtZW50KG5ld0hUTUwpO1xufVxuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgID8gZWxlbWVudC5vdXRlckhUTUwuc2xpY2UoMCwgZWxlbWVudC5vdXRlckhUTUwuaW5kZXhPZihlbGVtZW50LmlubmVySFRNTCkpXG4gICAgICAgIDogZWxlbWVudC5vdXRlckhUTUw7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY3VycmVudFZhbHVlcykge1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50VmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjdXJyZW50VmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VmFsdWVzO1xufTtcbmNvbnN0IGlucHV0VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xufTtcblxuZnVuY3Rpb24gZ2V0RGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmIChjdXJyZW50TGV2ZWxEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldO1xufVxuY29uc3QgcGFyc2VEZWVwRGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCBmaW5hbERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcbiAgICBjb25zdCBwYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEgPSBjdXJyZW50TGV2ZWxEYXRhW3BhcnRzW2ldXTtcbiAgICB9XG4gICAgY29uc3QgZmluYWxLZXkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhLFxuICAgICAgICBmaW5hbERhdGEsXG4gICAgICAgIGZpbmFsS2V5LFxuICAgICAgICBwYXJ0cyxcbiAgICB9O1xufTtcbmZ1bmN0aW9uIHNldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCwgdmFsdWUpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsRGF0YSwgZmluYWxLZXksIHBhcnRzIH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50TGV2ZWxEYXRhICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHBhcnRzLnBvcCgpO1xuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRMZXZlbERhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZXQgZGF0YS1tb2RlbD1cIiR7cHJvcGVydHlQYXRofVwiLiBUaGUgcGFyZW50IFwiJHtwYXJ0cy5qb2luKCcuJyl9XCIgZGF0YSBkb2VzIG5vdCBleGlzdC4gRGlkIHlvdSBmb3JnZXQgdG8gZXhwb3NlIFwiJHtwYXJ0c1swXX1cIiBhcyBhIExpdmVQcm9wP2ApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNldCBkYXRhLW1vZGVsPVwiJHtwcm9wZXJ0eVBhdGh9XCIuIFRoZSBwYXJlbnQgXCIke3BhcnRzLmpvaW4oJy4nKX1cIiBkYXRhIGRvZXMgbm90IGFwcGVhciB0byBiZSBhbiBvYmplY3QgKGl0J3MgXCIke2N1cnJlbnRMZXZlbERhdGF9XCIpLiBEaWQgeW91IGZvcmdldCB0byBhZGQgZXhwb3NlZD17XCIke2xhc3RQYXJ0fVwifSB0byBpdHMgTGl2ZVByb3A/YCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGxhc3RQYXJ0ID0gcGFydHMucG9wKCk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RlbCBuYW1lICR7cHJvcGVydHlQYXRofSB3YXMgbmV2ZXIgaW5pdGlhbGl6ZWQuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBleHBvc2VkPXtcIiR7bGFzdFBhcnR9XCJ9IHRvIGl0cyBMaXZlUHJvcD9gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1vZGVsIG5hbWUgXCIke3Byb3BlcnR5UGF0aH1cIiB3YXMgbmV2ZXIgaW5pdGlhbGl6ZWQuIERpZCB5b3UgZm9yZ2V0IHRvIGV4cG9zZSBcIiR7bGFzdFBhcnR9XCIgYXMgYSBMaXZlUHJvcD8gQXZhaWxhYmxlIG1vZGVscyB2YWx1ZXMgYXJlOiAke09iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDAgPyBPYmplY3Qua2V5cyhkYXRhKS5qb2luKCcsICcpIDogJyhub25lKSd9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudExldmVsRGF0YVtmaW5hbEtleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gZmluYWxEYXRhO1xufVxuXG5jbGFzcyBWYWx1ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgZGF0YSkge1xuICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0RGVlcERhdGEodGhpcy5kYXRhLCBub3JtYWxpemVkTmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUgJiYgIXRoaXMudXBkYXRlZE1vZGVscy5pbmNsdWRlcyhub3JtYWxpemVkTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZE1vZGVscy5wdXNoKG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGEgPSBzZXREZWVwRGF0YSh0aGlzLmRhdGEsIG5vcm1hbGl6ZWROYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT09IHZhbHVlO1xuICAgIH1cbiAgICBhbGwoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZWluaXRpYWxpemVEYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJlaW5pdGlhbGl6ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcm9wcykgPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSAxMTtcblxuZnVuY3Rpb24gbW9ycGhBdHRycyhmcm9tTm9kZSwgdG9Ob2RlKSB7XG4gICAgdmFyIHRvTm9kZUF0dHJzID0gdG9Ob2RlLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGF0dHI7XG4gICAgdmFyIGF0dHJOYW1lO1xuICAgIHZhciBhdHRyTmFtZXNwYWNlVVJJO1xuICAgIHZhciBhdHRyVmFsdWU7XG4gICAgdmFyIGZyb21WYWx1ZTtcblxuICAgIC8vIGRvY3VtZW50LWZyYWdtZW50cyBkb250IGhhdmUgYXR0cmlidXRlcyBzbyBsZXRzIG5vdCBkbyBhbnl0aGluZ1xuICAgIGlmICh0b05vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHwgZnJvbU5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSB0b05vZGVBdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhdHRyID0gdG9Ob2RlQXR0cnNbaV07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgIGF0dHJWYWx1ZSA9IGF0dHIudmFsdWU7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyLnByZWZpeCA9PT0gJ3htbG5zJyl7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lOyAvLyBJdCdzIG5vdCBhbGxvd2VkIHRvIHNldCBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgWE1MTlMgbmFtZXNwYWNlIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgYHhtbG5zYCBwcmVmaXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXRcbiAgICAvLyB3ZXJlbid0IGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICB2YXIgZnJvbU5vZGVBdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKHZhciBkID0gZnJvbU5vZGVBdHRycy5sZW5ndGggLSAxOyBkID49IDA7IGQtLSkge1xuICAgICAgICBhdHRyID0gZnJvbU5vZGVBdHRyc1tkXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcblxuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciByYW5nZTsgLy8gQ3JlYXRlIGEgcmFuZ2Ugb2JqZWN0IGZvciBlZmZpY2VudGx5IHJlbmRlcmluZyBzdHJpbmdzIHRvIGVsZW1lbnRzLlxudmFyIE5TX1hIVE1MID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuXG52YXIgZG9jID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xudmFyIEhBU19URU1QTEFURV9TVVBQT1JUID0gISFkb2MgJiYgJ2NvbnRlbnQnIGluIGRvYy5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudmFyIEhBU19SQU5HRV9TVVBQT1JUID0gISFkb2MgJiYgZG9jLmNyZWF0ZVJhbmdlICYmICdjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQnIGluIGRvYy5jcmVhdGVSYW5nZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKSB7XG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgICByYW5nZSA9IGRvYy5jcmVhdGVSYW5nZSgpO1xuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKGRvYy5ib2R5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnQgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyKTtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpIHtcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnYm9keScpO1xuICAgIGZyYWdtZW50LmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGFib3V0IHRoZSBzYW1lXG4gKiB2YXIgaHRtbCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gKiByZXR1cm4gaHRtbC5ib2R5LmZpcnN0Q2hpbGQ7XG4gKlxuICogQG1ldGhvZCB0b0VsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqL1xuZnVuY3Rpb24gdG9FbGVtZW50KHN0cikge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgaWYgKEhBU19URU1QTEFURV9TVVBQT1JUKSB7XG4gICAgICAvLyBhdm9pZCByZXN0cmljdGlvbnMgb24gY29udGVudCBmb3IgdGhpbmdzIGxpa2UgYDx0cj48dGg+SGk8L3RoPjwvdHI+YCB3aGljaFxuICAgICAgLy8gY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgLy8gPHRlbXBsYXRlPiBzdXBwb3J0IG5vdCBhdmFpbGFibGUgaW4gSUVcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpO1xuICAgIH0gZWxzZSBpZiAoSEFTX1JBTkdFX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHR3byBub2RlJ3MgbmFtZXMgYXJlIHRoZSBzYW1lLlxuICpcbiAqIE5PVEU6IFdlIGRvbid0IGJvdGhlciBjaGVja2luZyBgbmFtZXNwYWNlVVJJYCBiZWNhdXNlIHlvdSB3aWxsIG5ldmVyIGZpbmQgdHdvIEhUTUwgZWxlbWVudHMgd2l0aCB0aGUgc2FtZVxuICogICAgICAgbm9kZU5hbWUgYW5kIGRpZmZlcmVudCBuYW1lc3BhY2UgVVJJcy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAqIEBwYXJhbSB7RWxlbWVudH0gYiBUaGUgdGFyZ2V0IGVsZW1lbnRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVOb2RlTmFtZXMoZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGZyb21Ob2RlTmFtZSA9IGZyb21FbC5ub2RlTmFtZTtcbiAgICB2YXIgdG9Ob2RlTmFtZSA9IHRvRWwubm9kZU5hbWU7XG4gICAgdmFyIGZyb21Db2RlU3RhcnQsIHRvQ29kZVN0YXJ0O1xuXG4gICAgaWYgKGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmcm9tQ29kZVN0YXJ0ID0gZnJvbU5vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG4gICAgdG9Db2RlU3RhcnQgPSB0b05vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSB2aXJ0dWFsIERPTSBub2RlIG9yIFNWRyBub2RlIHRoZW4gd2UgbWF5XG4gICAgLy8gbmVlZCB0byBub3JtYWxpemUgdGhlIHRhZyBuYW1lIGJlZm9yZSBjb21wYXJpbmcuIE5vcm1hbCBIVE1MIGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgLy8gaW4gdGhlIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiXG4gICAgLy8gYXJlIGNvbnZlcnRlZCB0byB1cHBlciBjYXNlXG4gICAgaWYgKGZyb21Db2RlU3RhcnQgPD0gOTAgJiYgdG9Db2RlU3RhcnQgPj0gOTcpIHsgLy8gZnJvbSBpcyB1cHBlciBhbmQgdG8gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSBpZiAodG9Db2RlU3RhcnQgPD0gOTAgJiYgZnJvbUNvZGVTdGFydCA+PSA5NykgeyAvLyB0byBpcyB1cHBlciBhbmQgZnJvbSBpcyBsb3dlclxuICAgICAgICByZXR1cm4gdG9Ob2RlTmFtZSA9PT0gZnJvbU5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZWxlbWVudCwgb3B0aW9uYWxseSB3aXRoIGEga25vd24gbmFtZXNwYWNlIFVSSS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgZWxlbWVudCBuYW1lLCBlLmcuICdkaXYnIG9yICdzdmcnXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZVVSSV0gdGhlIGVsZW1lbnQncyBuYW1lc3BhY2UgVVJJLCBpLmUuIHRoZSB2YWx1ZSBvZlxuICogaXRzIGB4bWxuc2AgYXR0cmlidXRlIG9yIGl0cyBpbmZlcnJlZCBuYW1lc3BhY2UuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWUsIG5hbWVzcGFjZVVSSSkge1xuICAgIHJldHVybiAhbmFtZXNwYWNlVVJJIHx8IG5hbWVzcGFjZVVSSSA9PT0gTlNfWEhUTUwgP1xuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudChuYW1lKSA6XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIGNoaWxkcmVuIG9mIG9uZSBET00gZWxlbWVudCB0byBhbm90aGVyIERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1vdmVDaGlsZHJlbihmcm9tRWwsIHRvRWwpIHtcbiAgICB2YXIgY3VyQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB0b0VsLmFwcGVuZENoaWxkKGN1ckNoaWxkKTtcbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB0b0VsO1xufVxuXG5mdW5jdGlvbiBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgbmFtZSkge1xuICAgIGlmIChmcm9tRWxbbmFtZV0gIT09IHRvRWxbbmFtZV0pIHtcbiAgICAgICAgZnJvbUVsW25hbWVdID0gdG9FbFtuYW1lXTtcbiAgICAgICAgaWYgKGZyb21FbFtuYW1lXSkge1xuICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgc3BlY2lhbEVsSGFuZGxlcnMgPSB7XG4gICAgT1BUSU9OOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBmcm9tRWwucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnROYW1lID0gcGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHBhcmVudE5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIHBhcmVudE5hbWUgPSBwYXJlbnROb2RlICYmIHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnU0VMRUNUJyAmJiAhcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAmJiAhdG9FbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBNUyBFZGdlIGJ1ZyB3aGVyZSB0aGUgJ3NlbGVjdGVkJyBhdHRyaWJ1dGUgY2FuIG9ubHkgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlZCBpZiBzZXQgdG8gYSBub24tZW1wdHkgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEyMDg3Njc5L1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc2V0IHNlbGVjdCBlbGVtZW50J3Mgc2VsZWN0ZWRJbmRleCB0byAtMSwgb3RoZXJ3aXNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAvLyBmcm9tRWwuc2VsZWN0ZWQgdXNpbmcgdGhlIHN5bmNCb29sZWFuQXR0clByb3AgYmVsb3cgaGFzIG5vIGVmZmVjdC5cbiAgICAgICAgICAgICAgICAvLyBUaGUgY29ycmVjdCBzZWxlY3RlZEluZGV4IHdpbGwgYmUgc2V0IGluIHRoZSBTRUxFQ1Qgc3BlY2lhbCBoYW5kbGVyIGJlbG93LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnc2VsZWN0ZWQnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBcInZhbHVlXCIgYXR0cmlidXRlIGlzIHNwZWNpYWwgZm9yIHRoZSA8aW5wdXQ+IGVsZW1lbnQgc2luY2UgaXQgc2V0c1xuICAgICAqIHRoZSBpbml0aWFsIHZhbHVlLiBDaGFuZ2luZyB0aGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSB3aXRob3V0IGNoYW5naW5nIHRoZVxuICAgICAqIFwidmFsdWVcIiBwcm9wZXJ0eSB3aWxsIGhhdmUgbm8gZWZmZWN0IHNpbmNlIGl0IGlzIG9ubHkgdXNlZCB0byB0aGUgc2V0IHRoZVxuICAgICAqIGluaXRpYWwgdmFsdWUuICBTaW1pbGFyIGZvciB0aGUgXCJjaGVja2VkXCIgYXR0cmlidXRlLCBhbmQgXCJkaXNhYmxlZFwiLlxuICAgICAqL1xuICAgIElOUFVUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdjaGVja2VkJyk7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnZGlzYWJsZWQnKTtcblxuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSB0b0VsLnZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBURVhUQVJFQTogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdENoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBOZWVkZWQgZm9yIElFLiBBcHBhcmVudGx5IElFIHNldHMgdGhlIHBsYWNlaG9sZGVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gbm9kZSB2YWx1ZSBhbmQgdmlzZSB2ZXJzYS4gVGhpcyBpZ25vcmVzIGFuIGVtcHR5IHVwZGF0ZS5cbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IGZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT0gbmV3VmFsdWUgfHwgKCFuZXdWYWx1ZSAmJiBvbGRWYWx1ZSA9PSBmcm9tRWwucGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaXJzdENoaWxkLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBTRUxFQ1Q6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBpZiAoIXRvRWwuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBsb29wIHRocm91Z2ggY2hpbGRyZW4gb2YgZnJvbUVsLCBub3QgdG9FbCBzaW5jZSBub2RlcyBjYW4gYmUgbW92ZWRcbiAgICAgICAgICAgIC8vIGZyb20gdG9FbCB0byBmcm9tRWwgZGlyZWN0bHkgd2hlbiBtb3JwaGluZy5cbiAgICAgICAgICAgIC8vIEF0IHRoZSB0aW1lIHRoaXMgc3BlY2lhbCBoYW5kbGVyIGlzIGludm9rZWQsIGFsbCBjaGlsZHJlbiBoYXZlIGFscmVhZHkgYmVlbiBtb3JwaGVkXG4gICAgICAgICAgICAvLyBhbmQgYXBwZW5kZWQgdG8gLyByZW1vdmVkIGZyb20gZnJvbUVsLCBzbyB1c2luZyBmcm9tRWwgaGVyZSBpcyBzYWZlIGFuZCBjb3JyZWN0LlxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb3B0Z3JvdXA7XG4gICAgICAgICAgICB2YXIgbm9kZU5hbWU7XG4gICAgICAgICAgICB3aGlsZShjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gY3VyQ2hpbGQubm9kZU5hbWUgJiYgY3VyQ2hpbGQubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBjdXJDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJDaGlsZC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1ckNoaWxkICYmIG9wdGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG9wdGdyb3VwLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcm9tRWwuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgRUxFTUVOVF9OT0RFID0gMTtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEgPSAxMTtcbnZhciBURVhUX05PREUgPSAzO1xudmFyIENPTU1FTlRfTk9ERSA9IDg7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Tm9kZUtleShub2RlKSB7XG4gIGlmIChub2RlKSB7XG4gICAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKSB8fCBub2RlLmlkO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vcnBoZG9tRmFjdG9yeShtb3JwaEF0dHJzKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbW9ycGhkb20oZnJvbU5vZGUsIHRvTm9kZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGZyb21Ob2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50JyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGZyb21Ob2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9Ob2RlSHRtbCA9IHRvTm9kZTtcbiAgICAgICAgICAgICAgICB0b05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgICAgICAgICAgICAgIHRvTm9kZS5pbm5lckhUTUwgPSB0b05vZGVIdG1sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b05vZGUgPSB0b0VsZW1lbnQodG9Ob2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBnZXROb2RlS2V5ID0gb3B0aW9ucy5nZXROb2RlS2V5IHx8IGRlZmF1bHRHZXROb2RlS2V5O1xuICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbk5vZGVBZGRlZCA9IG9wdGlvbnMub25Ob2RlQWRkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uQmVmb3JlRWxVcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsVXBkYXRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25FbFVwZGF0ZWQgPSBvcHRpb25zLm9uRWxVcGRhdGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZU5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25Ob2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbk5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgPSBvcHRpb25zLm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIGNoaWxkcmVuT25seSA9IG9wdGlvbnMuY2hpbGRyZW5Pbmx5ID09PSB0cnVlO1xuXG4gICAgICAgIC8vIFRoaXMgb2JqZWN0IGlzIHVzZWQgYXMgYSBsb29rdXAgdG8gcXVpY2tseSBmaW5kIGFsbCBrZXllZCBlbGVtZW50cyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgICAgIHZhciBmcm9tTm9kZXNMb29rdXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIga2V5ZWRSZW1vdmFsTGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEtleWVkUmVtb3ZhbChrZXkpIHtcbiAgICAgICAgICAgIGtleWVkUmVtb3ZhbExpc3QucHVzaChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcEtleWVkTm9kZXMgJiYgKGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHNraXBwaW5nIGtleWVkIG5vZGVzIHRoZW4gd2UgYWRkIHRoZSBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbGlzdCBzbyB0aGF0IGl0IGNhbiBiZSBoYW5kbGVkIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSByZXBvcnQgdGhlIG5vZGUgYXMgZGlzY2FyZGVkIGlmIGl0IGlzIG5vdCBrZXllZC4gV2UgZG8gdGhpcyBiZWNhdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdCB0aGUgZW5kIHdlIGxvb3AgdGhyb3VnaCBhbGwga2V5ZWQgZWxlbWVudHMgdGhhdCB3ZXJlIHVubWF0Y2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gZGlzY2FyZCB0aGVtIGluIG9uZSBmaW5hbCBwYXNzLlxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJDaGlsZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMoY3VyQ2hpbGQsIHNraXBLZXllZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBET00gbm9kZSBvdXQgb2YgdGhlIG9yaWdpbmFsIERPTVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICAgICAgICAgKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnROb2RlIFRoZSBub2RlcyBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtICB7Qm9vbGVhbn0gc2tpcEtleWVkTm9kZXMgSWYgdHJ1ZSB0aGVuIGVsZW1lbnRzIHdpdGgga2V5cyB3aWxsIGJlIHNraXBwZWQgYW5kIG5vdCBkaXNjYXJkZWQuXG4gICAgICAgICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgcGFyZW50Tm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChub2RlKTtcbiAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC8vIFRyZWVXYWxrZXIgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShyb290KSB7XG4gICAgICAgIC8vICAgICB2YXIgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgIC8vICAgICAgICAgcm9vdCxcbiAgICAgICAgLy8gICAgICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgZWw7XG4gICAgICAgIC8vICAgICB3aGlsZSgoZWwgPSB0cmVlV2Fsa2VyLm5leHROb2RlKCkpKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoZWwpO1xuICAgICAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAvLyBOb2RlSXRlcmF0b3IgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICAgIC8vICAgICB2YXIgbm9kZUl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAgICAgLy8gICAgIHZhciBlbDtcbiAgICAgICAgLy8gICAgIHdoaWxlKChlbCA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICAgICAgICAgIGluZGV4VHJlZShjdXJDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleFRyZWUoZnJvbU5vZGUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU5vZGVBZGRlZChlbCkge1xuICAgICAgICAgICAgb25Ob2RlQWRkZWQoZWwpO1xuXG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdW5tYXRjaGVkRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2tleV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGZpbmQgYSBkdXBsaWNhdGUgI2lkIG5vZGUgaW4gY2FjaGUsIHJlcGxhY2UgYGVsYCB3aXRoIGNhY2hlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtb3JwaCBpdCB0byB0aGUgY2hpbGQgbm9kZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVubWF0Y2hlZEZyb21FbCAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckNoaWxkLCB1bm1hdGNoZWRGcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyByZWN1cnNpdmVseSBjYWxsIGZvciBjdXJDaGlsZCBhbmQgaXQncyBjaGlsZHJlbiB0byBzZWUgaWYgd2UgZmluZCBzb21ldGhpbmcgaW5cbiAgICAgICAgICAgICAgICAgIC8vIGZyb21Ob2Rlc0xvb2t1cFxuICAgICAgICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIFwidG8gbm9kZXNcIi4gSWYgY3VyRnJvbU5vZGVDaGlsZCBpc1xuICAgICAgICAgICAgLy8gbm9uLW51bGwgdGhlbiB3ZSBzdGlsbCBoYXZlIHNvbWUgZnJvbSBub2RlcyBsZWZ0IG92ZXIgdGhhdCBuZWVkXG4gICAgICAgICAgICAvLyB0byBiZSByZW1vdmVkXG4gICAgICAgICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmICgoY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoRWwoZnJvbUVsLCB0b0VsLCBjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIHZhciB0b0VsS2V5ID0gZ2V0Tm9kZUtleSh0b0VsKTtcblxuICAgICAgICAgICAgaWYgKHRvRWxLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbiBlbGVtZW50IHdpdGggYW4gSUQgaXMgYmVpbmcgbW9ycGhlZCB0aGVuIGl0IHdpbGwgYmUgaW4gdGhlIGZpbmFsXG4gICAgICAgICAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmcm9tTm9kZXNMb29rdXBbdG9FbEtleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVFbFVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVzIG9uIG9yaWdpbmFsIERPTSBlbGVtZW50IGZpcnN0XG4gICAgICAgICAgICAgICAgbW9ycGhBdHRycyhmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgb25FbFVwZGF0ZWQoZnJvbUVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3BlY2lhbEVsSGFuZGxlcnMuVEVYVEFSRUEoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIGN1clRvTm9kZUtleTtcbiAgICAgICAgICAgIHZhciBjdXJGcm9tTm9kZUtleTtcblxuICAgICAgICAgICAgdmFyIGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgdmFyIG1hdGNoaW5nRnJvbUVsO1xuXG4gICAgICAgICAgICAvLyB3YWxrIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgb3V0ZXI6IHdoaWxlIChjdXJUb05vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRvTmV4dFNpYmxpbmcgPSBjdXJUb05vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBjdXJUb05vZGVLZXkgPSBnZXROb2RlS2V5KGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgIC8vIHdhbGsgdGhlIGZyb21Ob2RlIGNoaWxkcmVuIGFsbCB0aGUgd2F5IHRocm91Z2hcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlICYmIGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIGlmIHRoZSBjdXJGcm9tTm9kZUNoaWxkIGRvZXNudCBoYXZlIGEgbWF0Y2ggd2l0aCB0aGUgY3VyVG9Ob2RlQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgRWxlbWVudCBub2Rlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdGFyZ2V0IG5vZGUgaGFzIGEga2V5IHNvIHdlIHdhbnQgdG8gbWF0Y2ggaXQgdXAgd2l0aCB0aGUgY29ycmVjdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5ICE9PSBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nIGtleSBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgY2hlY2sgb3VyIGxvb2t1cCB0byBzZWUgaWYgdGhlcmUgaXMgYSBtYXRjaGluZyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbU5leHRTaWJsaW5nID09PSBtYXRjaGluZ0Zyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHNpbmdsZSBlbGVtZW50IHJlbW92YWxzLiBUbyBhdm9pZCByZW1vdmluZyB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIG5vZGUgb3V0IG9mIHRoZSB0cmVlIChzaW5jZSB0aGF0IGNhbiBicmVhayBDU1MgdHJhbnNpdGlvbnMsIGV0Yy4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGluc3RlYWQgZGlzY2FyZCB0aGUgY3VycmVudCBub2RlIGFuZCB3YWl0IHVudGlsIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiB0byBwcm9wZXJseSBtYXRjaCB1cCB0aGUga2V5ZWQgdGFyZ2V0IGVsZW1lbnQgd2l0aCBpdHMgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGtleWVkIGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3MgbW92ZSB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgaW50byB0aGUgY3VycmVudCBwb3NpdGlvbiBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogV2UgdXNlIGluc2VydEJlZm9yZSBpbnN0ZWFkIG9mIHJlcGxhY2VDaGlsZCBiZWNhdXNlIHdlIHdhbnQgdG8gZ28gdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYHJlbW92ZU5vZGUoKWAgZnVuY3Rpb24gZm9yIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgZGlzY2FyZGVkIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIGxpZmVjeWNsZSBob29rcyBhcmUgY29ycmVjdGx5IGludm9rZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEJlZm9yZShtYXRjaGluZ0Zyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IG1hdGNoaW5nRnJvbUVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG5vZGVzIGFyZSBub3QgY29tcGF0aWJsZSBzaW5jZSB0aGUgXCJ0b1wiIG5vZGUgaGFzIGEga2V5IGFuZCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIG5vIG1hdGNoaW5nIGtleWVkIG5vZGUgaW4gdGhlIHNvdXJjZSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBvcmlnaW5hbCBoYXMgYSBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gaXNDb21wYXRpYmxlICE9PSBmYWxzZSAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzIHNvIHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBcImZyb21cIiBub2RlIHRvIG1hdGNoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldCBET00gbm9kZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IGN1ckZyb21Ob2RlVHlwZSA9PSBDT01NRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBUZXh0IG9yIENvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXBseSB1cGRhdGUgbm9kZVZhbHVlIG9uIHRoZSBvcmlnaW5hbCBub2RlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlICE9PSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIGJvdGggdGhlIFwidG9cIiBjaGlsZCBhbmQgdGhlIFwiZnJvbVwiIGNoaWxkIHNpbmNlIHdlIGZvdW5kIGEgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgZWxzZSB0byBkbyBhcyB3ZSBhbHJlYWR5IHJlY3Vyc2l2ZWx5IGNhbGxlZCBtb3JwaENoaWxkcmVuIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmcgdG8gZmluZCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIGluIHRoZSBvcmlnaW5hbCBET00uIEhvd2V2ZXIsIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgZnJvbSBub2RlIGlzIG5vdCBrZXllZFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBpcyBwb3NzaWJsZSB0aGF0IGEga2V5ZWQgbm9kZSBtaWdodCBtYXRjaCB1cCB3aXRoIGEgbm9kZSBzb21ld2hlcmUgZWxzZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IHRyZWUgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzY2FyZCBpdCBqdXN0IHlldCBzaW5jZSBpdCBzdGlsbCBtaWdodCBmaW5kIGFcbiAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSBpbiB0aGUgZmluYWwgRE9NIHRyZWUuIEFmdGVyIGV2ZXJ5dGhpbmcgaXMgZG9uZSB3ZSB3aWxsIHJlbW92ZSBhbnkga2V5ZWQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBkaWRuJ3QgZmluZCBhIGhvbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfSAvLyBFTkQ6IHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHt9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB3ZSBkaWQgbm90IGZpbmQgYSBjYW5kaWRhdGUgbWF0Y2ggZm9yXG4gICAgICAgICAgICAgICAgLy8gb3VyIFwidG8gbm9kZVwiIGFuZCB3ZSBleGhhdXN0ZWQgYWxsIG9mIHRoZSBjaGlsZHJlbiBcImZyb21cIlxuICAgICAgICAgICAgICAgIC8vIG5vZGVzLiBUaGVyZWZvcmUsIHdlIHdpbGwganVzdCBhcHBlbmQgdGhlIGN1cnJlbnQgXCJ0b1wiIG5vZGVcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgZW5kXG4gICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAmJiAobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkgJiYgY29tcGFyZU5vZGVOYW1lcyhtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChtYXRjaGluZ0Zyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoRWwobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgPSBvbkJlZm9yZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IGN1clRvTm9kZUNoaWxkLmFjdHVhbGl6ZShmcm9tRWwub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmFwcGVuZENoaWxkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KTtcblxuICAgICAgICAgICAgdmFyIHNwZWNpYWxFbEhhbmRsZXIgPSBzcGVjaWFsRWxIYW5kbGVyc1tmcm9tRWwubm9kZU5hbWVdO1xuICAgICAgICAgICAgaWYgKHNwZWNpYWxFbEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsRWxIYW5kbGVyKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRU5EOiBtb3JwaENoaWxkcmVuKC4uLilcblxuICAgICAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICAgICAgdmFyIG1vcnBoZWROb2RlVHlwZSA9IG1vcnBoZWROb2RlLm5vZGVUeXBlO1xuICAgICAgICB2YXIgdG9Ob2RlVHlwZSA9IHRvTm9kZS5ub2RlVHlwZTtcblxuICAgICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGFyZSBnaXZlbiB0d28gRE9NIG5vZGVzIHRoYXQgYXJlIG5vdFxuICAgICAgICAgICAgLy8gY29tcGF0aWJsZSAoZS5nLiA8ZGl2PiAtLT4gPHNwYW4+IG9yIDxkaXY+IC0tPiBURVhUKVxuICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBhcmVOb2RlTmFtZXMoZnJvbU5vZGUsIHRvTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZSA9IG1vdmVDaGlsZHJlbihmcm9tTm9kZSwgY3JlYXRlRWxlbWVudE5TKHRvTm9kZS5ub2RlTmFtZSwgdG9Ob2RlLm5hbWVzcGFjZVVSSSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR29pbmcgZnJvbSBhbiBlbGVtZW50IG5vZGUgdG8gYSB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBtb3JwaGVkTm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkgeyAvLyBUZXh0IG9yIGNvbW1lbnQgbm9kZVxuICAgICAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSBtb3JwaGVkTm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlLm5vZGVWYWx1ZSAhPT0gdG9Ob2RlLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUubm9kZVZhbHVlID0gdG9Ob2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IG5vZGUgdG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vcnBoZWROb2RlID09PSB0b05vZGUpIHtcbiAgICAgICAgICAgIC8vIFRoZSBcInRvIG5vZGVcIiB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgXCJmcm9tIG5vZGVcIiBzbyB3ZSBoYWQgdG9cbiAgICAgICAgICAgIC8vIHRvc3Mgb3V0IHRoZSBcImZyb20gbm9kZVwiIGFuZCB1c2UgdGhlIFwidG8gbm9kZVwiXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvTm9kZS5pc1NhbWVOb2RlICYmIHRvTm9kZS5pc1NhbWVOb2RlKG1vcnBoZWROb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9ycGhFbChtb3JwaGVkTm9kZSwgdG9Ob2RlLCBjaGlsZHJlbk9ubHkpO1xuXG4gICAgICAgICAgICAvLyBXZSBub3cgbmVlZCB0byBsb29wIG92ZXIgYW55IGtleWVkIG5vZGVzIHRoYXQgbWlnaHQgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gcmVtb3ZlZC4gV2Ugb25seSBkbyB0aGUgcmVtb3ZhbCBpZiB3ZSBrbm93IHRoYXQgdGhlIGtleWVkIG5vZGVcbiAgICAgICAgICAgIC8vIG5ldmVyIGZvdW5kIGEgbWF0Y2guIFdoZW4gYSBrZXllZCBub2RlIGlzIG1hdGNoZWQgdXAgd2UgcmVtb3ZlXG4gICAgICAgICAgICAvLyBpdCBvdXQgb2YgZnJvbU5vZGVzTG9va3VwIGFuZCB3ZSB1c2UgZnJvbU5vZGVzTG9va3VwIHRvIGRldGVybWluZVxuICAgICAgICAgICAgLy8gaWYgYSBrZXllZCBub2RlIGhhcyBiZWVuIG1hdGNoZWQgdXAgb3Igbm90XG4gICAgICAgICAgICBpZiAoa2V5ZWRSZW1vdmFsTGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuPWtleWVkUmVtb3ZhbExpc3QubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFRvUmVtb3ZlID0gZnJvbU5vZGVzTG9va3VwW2tleWVkUmVtb3ZhbExpc3RbaV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShlbFRvUmVtb3ZlLCBlbFRvUmVtb3ZlLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hpbGRyZW5Pbmx5ICYmIG1vcnBoZWROb2RlICE9PSBmcm9tTm9kZSAmJiBmcm9tTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZiAobW9ycGhlZE5vZGUuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3JwaGVkTm9kZS5hY3R1YWxpemUoZnJvbU5vZGUub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2UgaGFkIHRvIHN3YXAgb3V0IHRoZSBmcm9tIG5vZGUgd2l0aCBhIG5ldyBub2RlIGJlY2F1c2UgdGhlIG9sZFxuICAgICAgICAgICAgLy8gbm9kZSB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdGFyZ2V0IG5vZGUgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBvbGQgRE9NIG5vZGUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLiBUaGlzIGlzIG9ubHlcbiAgICAgICAgICAgIC8vIHBvc3NpYmxlIGlmIHRoZSBvcmlnaW5hbCBET00gbm9kZSB3YXMgcGFydCBvZiBhIERPTSB0cmVlIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZSBrbm93IGlzIHRoZSBjYXNlIGlmIGl0IGhhcyBhIHBhcmVudCBub2RlLlxuICAgICAgICAgICAgZnJvbU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobW9ycGhlZE5vZGUsIGZyb21Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICB9O1xufVxuXG52YXIgbW9ycGhkb20gPSBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpc0ZpbGVJbnB1dCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIGlmICghaXNGaWxlSW5wdXQpIHtcbiAgICAgICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZU1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgbW9kaWZpZWRGaWVsZEVsZW1lbnRzLCBnZXRFbGVtZW50VmFsdWUsIGNoaWxkQ29tcG9uZW50cywgZmluZENoaWxkQ29tcG9uZW50LCBnZXRLZXlGcm9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIGNoaWxkQ29tcG9uZW50cy5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICBjaGlsZENvbXBvbmVudE1hcC5zZXQoY2hpbGRDb21wb25lbnQuZWxlbWVudCwgY2hpbGRDb21wb25lbnQpO1xuICAgICAgICBpZiAoIWNoaWxkQ29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkIGlzIG1pc3NpbmcgaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnRUb0VsZW1lbnQgPSBmaW5kQ2hpbGRDb21wb25lbnQoY2hpbGRDb21wb25lbnQuaWQsIHJvb3RUb0VsZW1lbnQpO1xuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnRUb0VsZW1lbnQgJiYgY2hpbGRDb21wb25lbnRUb0VsZW1lbnQudGFnTmFtZSAhPT0gY2hpbGRDb21wb25lbnQuZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYWcgPSBjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZShjaGlsZENvbXBvbmVudFRvRWxlbWVudCwgY2hpbGRDb21wb25lbnQuZWxlbWVudC50YWdOYW1lKTtcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50VG9FbGVtZW50LnJlcGxhY2VXaXRoKG5ld1RhZyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIHtcbiAgICAgICAgZ2V0Tm9kZUtleTogKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0S2V5RnJvbUVsZW1lbnQobm9kZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlRWxVcGRhdGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGZyb21FbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHx8XG4gICAgICAgICAgICAgICAgISh0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdG9FbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSBjaGlsZENvbXBvbmVudE1hcC5nZXQoZnJvbUVsKSB8fCBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZENvbXBvbmVudC51cGRhdGVGcm9tTmV3RWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RpZmllZEZpZWxkRWxlbWVudHMuaW5jbHVkZXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZnJvbUVsLmlzRXF1YWxOb2RlKHRvRWwpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZyb21FbCA9IGNsb25lSFRNTEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkVG9FbCA9IGNsb25lSFRNTEVsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZFRvRWwpO1xuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIFVuc3luY2VkSW5wdXRzVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEVsZW1lbnRSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bnN5bmNlZElucHV0cy5nZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3luY2VkSW5wdXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuc2V0KG1vZGVsTmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGxVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMsIC4uLnRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy52YWx1ZXMoKV07XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcbiAgICB9XG59XG5cbmNsYXNzIEhvb2tNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsQmluZGluZ3MgPSBtb2RlbEJpbmRpbmdzO1xuICAgIH1cbn1cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJvcHMsIGRhdGEsIGZpbmdlcnByaW50LCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuICAgICAgICB0aGlzLmRlZmF1bHREZWJvdW5jZSA9IDE1MDtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMsIGRhdGEpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUgPSB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdkaXNjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ21vZGVsOnNldCcsIG1vZGVsLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0RGF0YShtb2RlbCkge1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBhY3Rpb24obmFtZSwgYXJncyA9IHt9LCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgYWRkQ2hpbGQoY2hpbGQsIG1vZGVsQmluZGluZ3MgPSBbXSkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc2V0KGNoaWxkLmlkLCBuZXcgQ2hpbGRDb21wb25lbnRXcmFwcGVyKGNoaWxkLCBtb2RlbEJpbmRpbmdzKSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gY29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5kZWxldGUoY2hpbGQuaWQpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgICAgICBjaGlsZC5vZmYoJ21vZGVsOnNldCcsIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKTtcbiAgICB9XG4gICAgZ2V0UGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuICAgIGdldENoaWxkcmVuKCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZENvbXBvbmVudCwgaWQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnNldChpZCwgY2hpbGRDb21wb25lbnQuY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5ld0VsZW1lbnQodG9FbCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcyh0b0VsKTtcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZVByb3BzKHByb3BzKTtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSB0b0VsLmRhdGFzZXQubGl2ZUZpbmdlcnByaW50VmFsdWU7XG4gICAgICAgIGlmIChmaW5nZXJwcmludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZShtb2RlbE5hbWUsIHZhbHVlLCBjaGlsZENvbXBvbmVudCkge1xuICAgICAgICBpZiAoIWNoaWxkQ29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgaWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZFdyYXBwZXIgPSB0aGlzLmNoaWxkcmVuLmdldChjaGlsZENvbXBvbmVudC5pZCk7XG4gICAgICAgIGlmICghY2hpbGRXcmFwcGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2hpbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFdyYXBwZXIubW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwZXJmb3JtUmVxdWVzdCgpIHtcbiAgICAgICAgY29uc3QgdGhpc1Byb21pc2VSZXNvbHZlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QodGhpcy52YWx1ZVN0b3JlLmFsbCgpLCB0aGlzLnBlbmRpbmdBY3Rpb25zLCB0aGlzLnZhbHVlU3RvcmUudXBkYXRlZE1vZGVscywgdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgdGhpcy5lbGVtZW50LCB0aGlzLmJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUudXBkYXRlZE1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgaWYgKGhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJyAmJiAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBzaG91bGRSZW5kZXI6IHRydWUgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOnN0YXJ0ZWQnLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKCFjb250cm9scy5zaG91bGRSZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFR1cmJvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUudXBkYXRlZE1vZGVscy5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOicpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIG5ld0VsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplRGF0YSh0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50RGF0YShuZXdFbGVtZW50KSk7XG4gICAgICAgIGV4ZWN1dGVNb3JwaGRvbSh0aGlzLmVsZW1lbnQsIG5ld0VsZW1lbnQsIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkSW5wdXRzKCksIChlbGVtZW50KSA9PiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWVTdG9yZSksIEFycmF5LmZyb20odGhpcy5nZXRDaGlsZHJlbigpLnZhbHVlcygpKSwgdGhpcy5lbGVtZW50RHJpdmVyLmZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQsIHRoaXMuZWxlbWVudERyaXZlci5nZXRLZXlGcm9tRWxlbWVudCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRDb21wb25lbnQuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IGNoaWxkLmZpbmdlcnByaW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgcmVzZXRQcm9taXNlKCkge1xuICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QoZGF0YSwgYWN0aW9ucywgdXBkYXRlZE1vZGVscywgY2hpbGRyZW5GaW5nZXJwcmludHMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuRmluZ2VycHJpbnRzKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBoYXNVcGRhdGVkTW9kZWxzID0gT2JqZWN0LmtleXModXBkYXRlZE1vZGVscykubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLndpbGxEYXRhRml0SW5VcmwoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW5GaW5nZXJwcmludHMpKSkge1xuICAgICAgICAgICAgcGFyYW1zLnNldCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdjaGlsZHJlbkZpbmdlcnByaW50cycsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuRmluZ2VycHJpbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVkTW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgndXBkYXRlZE1vZGVsc1tdJywgbW9kZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IGRhdGEgfTtcbiAgICAgICAgICAgIGlmIChoYXNVcGRhdGVkTW9kZWxzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEudXBkYXRlZE1vZGVscyA9IHVwZGF0ZWRNb2RlbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW5GaW5nZXJwcmludHMgPSBjaGlsZHJlbkZpbmdlcnByaW50cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gYC8ke2VuY29kZVVSSUNvbXBvbmVudChhY3Rpb25zWzBdLm5hbWUpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJy9fYmF0Y2gnO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaChgJHt1cmx9JHtwYXJhbXNTdHJpbmcubGVuZ3RoID4gMCA/IGA/JHtwYXJhbXNTdHJpbmd9YCA6ICcnfWAsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCB1cGRhdGVkTW9kZWxzKTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChkYXRhSnNvbiwgcGFyYW1zLCBjaGlsZHJlbkZpbmdlcnByaW50c0pzb24pIHtcbiAgICAgICAgY29uc3QgdXJsRW5jb2RlZEpzb25EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhSnNvbiArIGNoaWxkcmVuRmluZ2VycHJpbnRzSnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIFN0YW5kYXJkRWxlbWVudERyaXZlciB7XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50RGF0YShyb290RWxlbWVudCkge1xuICAgICAgICBpZiAoIXJvb3RFbGVtZW50LmRhdGFzZXQubGl2ZURhdGFWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uocm9vdEVsZW1lbnQuZGF0YXNldC5saXZlRGF0YVZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFyb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKTtcbiAgICB9XG4gICAgZmluZENoaWxkQ29tcG9uZW50RWxlbWVudChpZCwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXZlLWlkPSR7aWR9XWApO1xuICAgIH1cbiAgICBnZXRLZXlGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQubGl2ZUlkIHx8IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZSh0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgfVxuICAgIGZpbmlzaExvYWRpbmcodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyh0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnYWN0aW9uJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ21vZGVsJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRNb2RlbHMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpLmZvckVhY2goKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24sIGlzTG9hZGluZykge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGVsXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZWxlbWVudCB1c2luZyBkYXRhLW1vZGVsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmICFlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZGVsQmluZGluZyAobW9kZWxEaXJlY3RpdmUpIHtcbiAgICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICBsZXQgdGFyZ2V0RXZlbnROYW1lID0gbnVsbDtcbiAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICBtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2lucHV0JywgJ2NoYW5nZSddLmluY2x1ZGVzKG1vZGlmaWVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gb25seSBhY2NlcHRzIHRoZSBhcmd1bWVudHMgXCJpbnB1dFwiIG9yIFwiY2hhbmdlXCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50TmFtZSA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9yZW5kZXInOlxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVib3VuY2UnOlxuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWVcbiAgICB9O1xufVxuXG5jb25zdCBDb21wb25lbnRSZWdpc3RyeSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnQoZWxlbWVudCwgZGVmaW5pdGlvbikge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KGVsZW1lbnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyQ29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IDEwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmdldChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudmFyIENvbXBvbmVudFJlZ2lzdHJ5JDEgPSBuZXcgQ29tcG9uZW50UmVnaXN0cnkoKTtcblxuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IENvbXBvbmVudFJlZ2lzdHJ5JDEuZ2V0Q29tcG9uZW50KGVsZW1lbnQpO1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICAgICAgeyBldmVudDogJ2xpdmU6Y29ubmVjdCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50ID0gdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLnByb3BzVmFsdWUsIHRoaXMuZGF0YVZhbHVlLCB0aGlzLmZpbmdlcnByaW50VmFsdWUsIGlkLCBuZXcgQmFja2VuZCh0aGlzLnVybFZhbHVlLCB0aGlzLmNzcmZWYWx1ZSksIG5ldyBTdGFuZGFyZEVsZW1lbnREcml2ZXIoKSk7XG4gICAgICAgIHRoaXMucHJveGllZENvbXBvbmVudCA9IHByb3hpZnlDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuX19jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVnaW5zID0gW1xuICAgICAgICAgICAgbmV3IExvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgIF07XG4gICAgICAgIHBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRQbHVnaW4ocGx1Z2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBDb21wb25lbnRSZWdpc3RyeSQxLnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIENvbXBvbmVudFJlZ2lzdHJ5JDEudW5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgdXBkYXRlKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnaW5wdXQnIHx8IGV2ZW50LnR5cGUgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNpbmNlIExpdmVDb21wb25lbnRzIDIuMywgeW91IG5vIGxvbmdlciBuZWVkIGRhdGEtYWN0aW9uPVwibGl2ZSN1cGRhdGVcIiBvbiBmb3JtIGVsZW1lbnRzLiBGb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQudGFyZ2V0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC50YXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3QWN0aW9uKTtcbiAgICAgICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgncHJldmVudCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3N0b3AnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc2VsZicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVib3VuY2UnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gKF9hID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBkaXJlY3RpdmUubmFtZWQsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIsIGRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbGxlciA9IGV2ZW50LmRldGFpbC5jb250cm9sbGVyO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGNoaWxkQ29udHJvbGxlci5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0TW9kZWxCaW5kaW5nKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkQ2hpbGQoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudCwgbW9kZWxCaW5kaW5ncyk7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgIH1cbiAgICBoYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgY2hpbGRDb250cm9sbGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGl2ZTpkaXNjb25uZWN0JywgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCk7XG4gICAgICAgIGlmIChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LmdldFBhcmVudCgpICE9PSB0aGlzLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlbW92ZUNoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIGRldGFpbCA9IHt9LCBjYW5CdWJibGUgPSB0cnVlLCBjYW5jZWxhYmxlID0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlsLmNvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICBkZXRhaWwuY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdsaXZlJywgY2FuY2VsYWJsZSwgYnViYmxlczogY2FuQnViYmxlIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdXJsOiBTdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIHByb3BzOiBPYmplY3QsXG4gICAgY3NyZjogU3RyaW5nLFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBmaW5nZXJwcmludDogU3RyaW5nLFxufTtcblxuZXhwb3J0IHsgQ29tcG9uZW50LCBkZWZhdWx0XzEgYXMgZGVmYXVsdCwgZ2V0Q29tcG9uZW50IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiJCIsIiRtb2RhbCIsIiRjb250cm9sbGVyQ29kZSIsImZpbmQiLCIkdGVtcGxhdGVDb2RlIiwiYW5jaG9yIiwidXJsIiwiY29udGVudCIsIndyYXAiLCJsaW5rcyIsInJlcGxhY2UiLCJSZWdFeHAiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInRva2VuIiwiZWFjaCIsImh0bWwiLCJhdHRyaWJ1dGVzIiwic3JjIiwidGV4dCIsInRhZyIsIm1hdGNoIiwiZnVuYyIsImhsanMiLCJwaHAiLCJ0d2lnIiwicmVnaXN0ZXJMYW5ndWFnZSIsImhpZ2hsaWdodEFsbCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpc0FycmF5IiwibGVuIiwiYXJyMiIsIkNvbnRyb2xsZXIiLCJwYXJzZURpcmVjdGl2ZXMiLCJkaXJlY3RpdmVzIiwiY3VycmVudEFjdGlvbk5hbWUiLCJjdXJyZW50QXJndW1lbnROYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE5hbWVkQXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsImdldExhc3RBY3Rpb25OYW1lIiwiYWN0aW9uIiwicHVzaEluc3RydWN0aW9uIiwibmFtZWQiLCJtb2RpZmllcnMiLCJnZXRTdHJpbmciLCJwdXNoQXJndW1lbnQiLCJtaXhlZEFyZ1R5cGVzRXJyb3IiLCJjb25jYXQiLCJ0cmltIiwicHVzaE1vZGlmaWVyIiwiY2hhciIsImNvbWJpbmVTcGFjZWRBcnJheSIsInBhcnRzIiwiZmluYWxQYXJ0cyIsInBhcnQiLCJzcGxpdCIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwibWFwIiwicyIsImdldFZhbHVlRnJvbUVsZW1lbnQiLCJlbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250YWlucyIsImZvdW5kQ2hpbGRDb21wb25lbnQiLCJnZXRDaGlsZHJlbiIsImNoaWxkQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsb25lRWxlbWVudFdpdGhOZXdUYWdOYW1lIiwibmV3VGFnIiwib3JpZ2luYWxUYWciLCJ0YWdOYW1lIiwic3RhcnRSWCIsImVuZFJYIiwic3RhcnRTdWJzdCIsImVuZFN1YnN0IiwibmV3SFRNTCIsIm91dGVySFRNTCIsImluZGV4T2YiLCJjdXJyZW50VmFsdWVzIiwiaW5kZXgiLCJzcGxpY2UiLCJnZXREZWVwRGF0YSIsImRhdGEiLCJwcm9wZXJ0eVBhdGgiLCJfcGFyc2VEZWVwRGF0YSIsInBhcnNlRGVlcERhdGEiLCJjdXJyZW50TGV2ZWxEYXRhIiwiZmluYWxLZXkiLCJmaW5hbERhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXREZWVwRGF0YSIsIl9wYXJzZURlZXBEYXRhMiIsImxhc3RQYXJ0IiwiVmFsdWVTdG9yZSIsInVwZGF0ZWRNb2RlbHMiLCJub3JtYWxpemVkTmFtZSIsImhhcyIsInNldCIsImN1cnJlbnRWYWx1ZSIsImFsbCIsImFzc2lnbiIsInJlaW5pdGlhbGl6ZURhdGEiLCJyZWluaXRpYWxpemVQcm9wcyIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJtb3JwaEF0dHJzIiwiZnJvbU5vZGUiLCJ0b05vZGUiLCJ0b05vZGVBdHRycyIsImF0dHIiLCJhdHRyTmFtZSIsImF0dHJOYW1lc3BhY2VVUkkiLCJhdHRyVmFsdWUiLCJmcm9tVmFsdWUiLCJub2RlVHlwZSIsIm5hbWVzcGFjZVVSSSIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZU5TIiwicHJlZml4Iiwic2V0QXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGUiLCJmcm9tTm9kZUF0dHJzIiwiZCIsImhhc0F0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyYW5nZSIsIk5TX1hIVE1MIiwiZG9jIiwiSEFTX1RFTVBMQVRFX1NVUFBPUlQiLCJIQVNfUkFOR0VfU1VQUE9SVCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUiLCJzdHIiLCJjaGlsZE5vZGVzIiwiY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2UiLCJzZWxlY3ROb2RlIiwiYm9keSIsImZyYWdtZW50IiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiY3JlYXRlRnJhZ21lbnRGcm9tV3JhcCIsInRvRWxlbWVudCIsImNvbXBhcmVOb2RlTmFtZXMiLCJmcm9tRWwiLCJ0b0VsIiwiZnJvbU5vZGVOYW1lIiwibm9kZU5hbWUiLCJ0b05vZGVOYW1lIiwiZnJvbUNvZGVTdGFydCIsInRvQ29kZVN0YXJ0IiwiY2hhckNvZGVBdCIsInRvVXBwZXJDYXNlIiwiY3JlYXRlRWxlbWVudE5TIiwibW92ZUNoaWxkcmVuIiwiY3VyQ2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dENoaWxkIiwibmV4dFNpYmxpbmciLCJhcHBlbmRDaGlsZCIsInN5bmNCb29sZWFuQXR0clByb3AiLCJzcGVjaWFsRWxIYW5kbGVycyIsIk9QVElPTiIsInBhcmVudE5vZGUiLCJwYXJlbnROYW1lIiwic2VsZWN0ZWRJbmRleCIsIklOUFVUIiwiVEVYVEFSRUEiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwibm9kZVZhbHVlIiwicGxhY2Vob2xkZXIiLCJTRUxFQ1QiLCJvcHRncm91cCIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSIsIlRFWFRfTk9ERSIsIkNPTU1FTlRfTk9ERSIsIm5vb3AiLCJkZWZhdWx0R2V0Tm9kZUtleSIsIm5vZGUiLCJpZCIsIm1vcnBoZG9tRmFjdG9yeSIsIm1vcnBoZG9tIiwidG9Ob2RlSHRtbCIsImdldE5vZGVLZXkiLCJvbkJlZm9yZU5vZGVBZGRlZCIsIm9uTm9kZUFkZGVkIiwib25CZWZvcmVFbFVwZGF0ZWQiLCJvbkVsVXBkYXRlZCIsIm9uQmVmb3JlTm9kZURpc2NhcmRlZCIsIm9uTm9kZURpc2NhcmRlZCIsIm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQiLCJjaGlsZHJlbk9ubHkiLCJmcm9tTm9kZXNMb29rdXAiLCJrZXllZFJlbW92YWxMaXN0IiwiYWRkS2V5ZWRSZW1vdmFsIiwid2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMiLCJza2lwS2V5ZWROb2RlcyIsInJlbW92ZU5vZGUiLCJyZW1vdmVDaGlsZCIsImluZGV4VHJlZSIsImhhbmRsZU5vZGVBZGRlZCIsInVubWF0Y2hlZEZyb21FbCIsInJlcGxhY2VDaGlsZCIsIm1vcnBoRWwiLCJjbGVhbnVwRnJvbUVsIiwiY3VyRnJvbU5vZGVDaGlsZCIsImN1ckZyb21Ob2RlS2V5IiwiZnJvbU5leHRTaWJsaW5nIiwidG9FbEtleSIsIm1vcnBoQ2hpbGRyZW4iLCJjdXJUb05vZGVDaGlsZCIsImN1clRvTm9kZUtleSIsInRvTmV4dFNpYmxpbmciLCJtYXRjaGluZ0Zyb21FbCIsIm91dGVyIiwiaXNTYW1lTm9kZSIsImN1ckZyb21Ob2RlVHlwZSIsImlzQ29tcGF0aWJsZSIsImluc2VydEJlZm9yZSIsIm9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0IiwiYWN0dWFsaXplIiwib3duZXJEb2N1bWVudCIsInNwZWNpYWxFbEhhbmRsZXIiLCJtb3JwaGVkTm9kZSIsIm1vcnBoZWROb2RlVHlwZSIsInRvTm9kZVR5cGUiLCJlbFRvUmVtb3ZlIiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJpc0ZpbGVJbnB1dCIsImNoaWxkcmVuIiwiZXhlY3V0ZU1vcnBoZG9tIiwicm9vdEZyb21FbGVtZW50Iiwicm9vdFRvRWxlbWVudCIsIm1vZGlmaWVkRmllbGRFbGVtZW50cyIsImdldEVsZW1lbnRWYWx1ZSIsImNoaWxkQ29tcG9uZW50cyIsImZpbmRDaGlsZENvbXBvbmVudCIsImdldEtleUZyb21FbGVtZW50IiwiY2hpbGRDb21wb25lbnRNYXAiLCJNYXAiLCJjaGlsZENvbXBvbmVudFRvRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiU1ZHRWxlbWVudCIsInVwZGF0ZUZyb21OZXdFbGVtZW50IiwiaXNFcXVhbE5vZGUiLCJub3JtYWxpemVkRnJvbUVsIiwibm9ybWFsaXplZFRvRWwiLCJVbnN5bmNlZElucHV0c1RyYWNrZXIiLCJtb2RlbEVsZW1lbnRSZXNvbHZlciIsIl90aGlzIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiZXZlbnQiLCJjYWxsYmFjayIsImhhbmRsZUlucHV0RXZlbnQiLCJ1bnN5bmNlZElucHV0cyIsIlVuc3luY2VkSW5wdXRDb250YWluZXIiLCJhY3RpdmF0ZSIsIl90aGlzMiIsIl9yZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsIl9yZWYyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImFkZCIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsInRyaWdnZXJIb29rIiwiX2xlbiIsIl9rZXkiLCJCYWNrZW5kUmVzcG9uc2UiLCJyZXNwb25zZSIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRCb2R5IiwiQ2hpbGRDb21wb25lbnRXcmFwcGVyIiwibW9kZWxCaW5kaW5ncyIsIkNvbXBvbmVudCIsImZpbmdlcnByaW50IiwiYmFja2VuZCIsImVsZW1lbnREcml2ZXIiLCJkZWZhdWx0RGVib3VuY2UiLCJwZW5kaW5nQWN0aW9ucyIsImlzUmVxdWVzdFBlbmRpbmciLCJyZXF1ZXN0RGVib3VuY2VUaW1lb3V0IiwicGFyZW50IiwidW5zeW5jZWRJbnB1dHNUcmFja2VyIiwicmVzZXRQcm9taXNlIiwib25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlIiwiYmluZCIsImFkZFBsdWdpbiIsInBsdWdpbiIsImF0dGFjaFRvQ29tcG9uZW50IiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJwcm9taXNlIiwibmV4dFJlcXVlc3RQcm9taXNlIiwiaXNDaGFuZ2VkIiwiZGVib3VuY2VkU3RhcnRSZXF1ZXN0IiwiZ2V0RGF0YSIsInJlbmRlciIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImFkZENoaWxkIiwiZ2V0UGFyZW50IiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJsaXZlRmluZ2VycHJpbnRWYWx1ZSIsIl90aGlzNSIsImNoaWxkV3JhcHBlciIsIm1vZGVsQmluZGluZyIsImNoaWxkTW9kZWxOYW1lIiwiaW5uZXJNb2RlbE5hbWUiLCJzaG91bGRSZW5kZXIiLCJiYWNrZW5kUmVxdWVzdCIsInBlcmZvcm1SZXF1ZXN0IiwiX3RoaXM2IiwidGhpc1Byb21pc2VSZXNvbHZlIiwibmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSIsIm1ha2VSZXF1ZXN0IiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJfcmVmMyIsIl9jYWxsZWUyIiwiYmFja2VuZFJlc3BvbnNlIiwiaGVhZGVycyIsImNvbnRyb2xzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJfeCIsIl90aGlzNyIsIlR1cmJvIiwidmlzaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtb2RpZmllZE1vZGVsVmFsdWVzIiwibWF0Y2hlcyIsImNvbnNvbGUiLCJnZXRDb21wb25lbnREYXRhIiwiZmluZENoaWxkQ29tcG9uZW50RWxlbWVudCIsImNhbGN1bGF0ZURlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiX3RoaXM4Iiwic2V0VGltZW91dCIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaWZyYW1lIiwiYm9yZGVyUmFkaXVzIiwiZmxleEdyb3ciLCJwcmVwZW5kIiwib3ZlcmZsb3ciLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZSIsImZvY3VzIiwiZmluZ2VycHJpbnRzIiwiX3RoaXM5IiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJwcm9wZXJ0eSIsIkJhY2tlbmRSZXF1ZXN0IiwiYWN0aW9ucyIsInVwZGF0ZU1vZGVscyIsIl90aGlzMTAiLCJpc1Jlc29sdmVkIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJmaWx0ZXIiLCJhcmVBbnlNb2RlbHNVcGRhdGVkIiwidGFyZ2V0ZWRNb2RlbHMiLCJCYWNrZW5kIiwiY3NyZlRva2VuIiwiY2hpbGRyZW5GaW5nZXJwcmludHMiLCJzcGxpdFVybCIsIl9zcGxpdFVybCIsIl9zbGljZWRUb0FycmF5IiwiX3NwbGl0VXJsMiIsInF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2hPcHRpb25zIiwiQWNjZXB0IiwiaGFzRmluZ2VycHJpbnRzIiwiaGFzVXBkYXRlZE1vZGVscyIsIndpbGxEYXRhRml0SW5VcmwiLCJhcHBlbmQiLCJyZXF1ZXN0RGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBhcmFtc1N0cmluZyIsImZldGNoIiwiYmFja2VuZEFjdGlvbiIsImRhdGFKc29uIiwiY2hpbGRyZW5GaW5nZXJwcmludHNKc29uIiwidXJsRW5jb2RlZEpzb25EYXRhIiwiU3RhbmRhcmRFbGVtZW50RHJpdmVyIiwibW9kZWxEaXJlY3RpdmUiLCJyb290RWxlbWVudCIsImxpdmVEYXRhVmFsdWUiLCJsaXZlUHJvcHNWYWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJsaXZlSWQiLCJMb2FkaW5nUGx1Z2luIiwiX3RoaXMxMSIsInJlcXVlc3QiLCJzdGFydExvYWRpbmciLCJmaW5pc2hMb2FkaW5nIiwidGFyZ2V0RWxlbWVudCIsImhhbmRsZUxvYWRpbmdUb2dnbGUiLCJpc0xvYWRpbmciLCJfdGhpczEyIiwiYWRkQXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZXMiLCJnZXRMb2FkaW5nRGlyZWN0aXZlcyIsIl9yZWY0IiwiaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZSIsIl90aGlzMTMiLCJmaW5hbEFjdGlvbiIsInBhcnNlTG9hZGluZ0FjdGlvbiIsImRlbGF5IiwidmFsaWRNb2RpZmllcnMiLCJtb2RpZmllciIsInBhcnNlSW50IiwiX2EiLCJsb2FkaW5nRGlyZWN0aXZlIiwic2hvd0VsZW1lbnQiLCJoaWRlRWxlbWVudCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsb2FkaW5nRGlyZWN0aXZlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2FkaW5nIiwiY2xhc3NlcyIsIl9lbGVtZW50JGNsYXNzTGlzdCIsImNsYXNzTGlzdCIsIl9lbGVtZW50JGNsYXNzTGlzdDIiLCJyZW1vdmUiLCJhdHRyaWJ1dGUiLCJWYWxpZGF0ZWRGaWVsZHNQbHVnaW4iLCJfdGhpczE0IiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJQYWdlVW5sb2FkaW5nUGx1Z2luIiwiaXNDb25uZWN0ZWQiLCJfdGhpczE1IiwiUG9sbGluZ0RpcmVjdG9yIiwiaXNQb2xsaW5nQWN0aXZlIiwicG9sbGluZ0ludGVydmFscyIsImFkZFBvbGwiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsInN0YXJ0QWxsUG9sbGluZyIsIl90aGlzMTYiLCJfcmVmNSIsInN0b3BBbGxQb2xsaW5nIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xlYXJQb2xsaW5nIiwiX3RoaXMxNyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJQb2xsaW5nUGx1Z2luIiwiX3RoaXMxOCIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMxOSIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyMCIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsIkNvbXBvbmVudFJlZ2lzdHJ5IiwiY29tcG9uZW50cyIsIldlYWtNYXAiLCJyZWdpc3RlckNvbXBvbmVudCIsImRlZmluaXRpb24iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwiX3RoaXMyMSIsImNvdW50IiwibWF4Q291bnQiLCJDb21wb25lbnRSZWdpc3RyeSQxIiwiZGVmYXVsdF8xIiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpczIyIiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudCIsImluaXRpYWxpemUiLCJfdGhpczIzIiwiaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQiLCJwcm9wc1ZhbHVlIiwiZGF0YVZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZSIsInVybFZhbHVlIiwiY3NyZlZhbHVlIiwicHJveGllZENvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiaGFzRGVib3VuY2VWYWx1ZSIsImRlYm91bmNlVmFsdWUiLCJwbHVnaW5zIiwiX3RoaXMyNCIsIl9yZWY2IiwiZGlzcGF0Y2hFdmVudCIsIl90aGlzMjUiLCJfcmVmNyIsInVwZGF0ZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCIsIl90aGlzMjYiLCJyYXdBY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkcmVuZGVyIiwiJHVwZGF0ZU1vZGVsIiwiZXZlbnROYW1lIiwiZmluYWxWYWx1ZSIsImNoaWxkQ29udHJvbGxlciIsImRldGFpbCIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZXMiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJidWJibGVzIiwiY3NyZiIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9