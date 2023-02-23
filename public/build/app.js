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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS9VO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3MEVEOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW4tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY2xpbmtzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oaWdobGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9zdHlsZXMvbGl2ZS5jc3M/NzU1ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2xvZ2luLWNvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9sb2dpbi1jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0ICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9zdHlsZXMvbGl2ZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNsYXNzIExhenlDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbi5jb250cm9sbGVycy5maW5kKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuaWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyICYmIGNvbnRyb2xsZXIuX19zdGltdWx1c0xhenlDb250cm9sbGVyO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbXBvcnQoJ0M6XFxcXGxhcmFnb25cXFxcd3d3XFxcXG1haGVyZGVudGlzdFxcXFxhc3NldHNcXFxcY29udHJvbGxlcnNcXFxcbG9naW4tY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLnJlZ2lzdGVyKHRoaXMuaWRlbnRpZmllciwgY29udHJvbGxlci5kZWZhdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcbmV4cG9ydCB7IGNvbnRyb2xsZXIgYXMgZGVmYXVsdCB9OyIsImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBsb2FkcyB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW5zXG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvdHJhbnNpdGlvbi5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvYWxlcnQuanMnO1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2NvbGxhcHNlLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9kcm9wZG93bi5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvbW9kYWwuanMnO1xuaW1wb3J0ICdqcXVlcnknXG5cbi8vIGxvYWRzIHRoZSBjb2RlIHN5bnRheCBoaWdobGlnaHRpbmcgbGlicmFyeVxuaW1wb3J0ICcuL2pzL2hpZ2hsaWdodC5qcyc7XG5cbi8vIENyZWF0ZXMgbGlua3MgdG8gdGhlIFN5bWZvbnkgZG9jdW1lbnRhdGlvblxuaW1wb3J0ICcuL2pzL2RvY2xpbmtzLmpzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBXcmFwcyBzb21lIGVsZW1lbnRzIGluIGFuY2hvciB0YWdzIHJlZmVyZW5jaW5nIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbiQoZnVuY3Rpb24oKSB7XG4gICAgdmFyICRtb2RhbCA9ICQoJyNzb3VyY2VDb2RlTW9kYWwnKTtcbiAgICB2YXIgJGNvbnRyb2xsZXJDb2RlID0gJG1vZGFsLmZpbmQoJ2NvZGUucGhwJyk7XG4gICAgdmFyICR0ZW1wbGF0ZUNvZGUgPSAkbW9kYWwuZmluZCgnY29kZS50d2lnJyk7XG5cbiAgICBmdW5jdGlvbiBhbmNob3IodXJsLCBjb250ZW50KSB7XG4gICAgICAgIHJldHVybiAnPGEgY2xhc3M9XCJkb2NsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgKyB1cmwgKyAnXCI+JyArIGNvbnRlbnQgKyAnPC9hPic7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHdyYXAoY29udGVudCwgbGlua3MpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgIG5ldyBSZWdFeHAoT2JqZWN0LmtleXMobGlua3MpLmpvaW4oJ3wnKSwgJ2cnKSxcbiAgICAgICAgICAgIHRva2VuID0+IGFuY2hvcihsaW5rc1t0b2tlbl0sIHRva2VuKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvLyBXcmFwcyBsaW5rcyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXG4gICAgJG1vZGFsLmZpbmQoJy5obGpzLWNvbW1lbnQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmh0bWwoJCh0aGlzKS5odG1sKCkucmVwbGFjZSgvaHR0cHM6XFwvXFwvc3ltZm9ueS5jb21cXC9kb2NcXC9bXFx3Ly4jLV0rL2csIGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIGFuY2hvcih1cmwsIHVybCk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIC8vIFdyYXBzIFN5bWZvbnkncyBhdHRyaWJ1dGVzXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICdDYWNoZSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvY2FjaGUuaHRtbCcsXG4gICAgICAgICdJc0dyYW50ZWQnOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL3NlY3VyaXR5Lmh0bWwjaXNncmFudGVkJyxcbiAgICAgICAgJ1BhcmFtQ29udmVydGVyJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9jb252ZXJ0ZXJzLmh0bWwnLFxuICAgICAgICAnUm91dGUnOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9yb3V0aW5nLmh0bWwjY3JlYXRpbmctcm91dGVzLWFzLWF0dHJpYnV0ZXMtb3ItYW5ub3RhdGlvbnMnLFxuICAgICAgICAnU2VjdXJpdHknOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL3NlY3VyaXR5Lmh0bWwjc2VjdXJpdHknXG4gICAgfTtcblxuICAgICRjb250cm9sbGVyQ29kZS5maW5kKCcuaGxqcy1tZXRhJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykudGV4dCgpO1xuXG4gICAgICAgICQodGhpcykuaHRtbCh3cmFwKHNyYywgYXR0cmlidXRlcykpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgVHdpZydzIHRhZ3NcbiAgICAkdGVtcGxhdGVDb2RlLmZpbmQoJy5obGpzLXRlbXBsYXRlLXRhZyArIC5obGpzLW5hbWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGFnID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgaWYgKCdlbHNlJyA9PT0gdGFnIHx8IHRhZy5tYXRjaCgvXmVuZC8pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L3RhZ3MvJyArIHRhZyArICcuaHRtbCMnICsgdGFnO1xuXG4gICAgICAgICQodGhpcykuaHRtbChhbmNob3IodXJsLCB0YWcpKTtcbiAgICB9KTtcblxuICAgIC8vIFdyYXBzIFR3aWcncyBmdW5jdGlvbnNcbiAgICAkdGVtcGxhdGVDb2RlLmZpbmQoJy5obGpzLXRlbXBsYXRlLXZhcmlhYmxlID4gLmhsanMtbmFtZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmdW5jID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3R3aWcuc3ltZm9ueS5jb20vZG9jLzMueC9mdW5jdGlvbnMvJyArIGZ1bmMgKyAnLmh0bWwjJyArIGZ1bmM7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKGFuY2hvcih1cmwsIGZ1bmMpKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcbmltcG9ydCBwaHAgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwJztcbmltcG9ydCB0d2lnIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R3aWcnO1xuXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BocCcsIHBocCk7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3R3aWcnLCB0d2lnKTtcblxuaGxqcy5oaWdobGlnaHRBbGwoKTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE5hbWVkQXJndW1lbnRzID0ge307XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG5hbWVkOiBjdXJyZW50TmFtZWRBcmd1bWVudHMsXG4gICAgICAgICAgICBtb2RpZmllcnM6IGN1cnJlbnRNb2RpZmllcnMsXG4gICAgICAgICAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtaXhlZEFyZ1R5cGVzRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vcm1hbCBhbmQgbmFtZWQgYXJndW1lbnRzIGNhbm5vdCBiZSBtaXhlZCBpbnNpZGUgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCJgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50c1tjdXJyZW50QXJndW1lbnROYW1lLnRyaW0oKV0gPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50TmFtZWRBcmd1bWVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBuYW1lZCBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzcGFjZSBhZnRlciAke2dldExhc3RBY3Rpb25OYW1lKCl9KClgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGEgY2xvc2luZyBcIilcIiBhZnRlciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9XCI/YCk7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lU3BhY2VkQXJyYXkocGFydHMpIHtcbiAgICBjb25zdCBmaW5hbFBhcnRzID0gW107XG4gICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICBmaW5hbFBhcnRzLnB1c2goLi4ucGFydC5zcGxpdCgnICcpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWxQYXJ0cztcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgnXScsICcnKTtcbiAgICB9KVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB2YWx1ZVN0b3JlLmdldChtb2RlbE5hbWVEYXRhLmFjdGlvbik7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gaW5wdXRWYWx1ZShlbGVtZW50KSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZUZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgY29tcG9uZW50LmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZShlbGVtZW50LCBuZXdUYWcpIHtcbiAgICBjb25zdCBvcmlnaW5hbFRhZyA9IGVsZW1lbnQudGFnTmFtZTtcbiAgICBjb25zdCBzdGFydFJYID0gbmV3IFJlZ0V4cCgnXjwnICsgb3JpZ2luYWxUYWcsICdpJyk7XG4gICAgY29uc3QgZW5kUlggPSBuZXcgUmVnRXhwKG9yaWdpbmFsVGFnICsgJz4kJywgJ2knKTtcbiAgICBjb25zdCBzdGFydFN1YnN0ID0gJzwnICsgbmV3VGFnO1xuICAgIGNvbnN0IGVuZFN1YnN0ID0gbmV3VGFnICsgJz4nO1xuICAgIGNvbnN0IG5ld0hUTUwgPSBlbGVtZW50Lm91dGVySFRNTC5yZXBsYWNlKHN0YXJ0UlgsIHN0YXJ0U3Vic3QpLnJlcGxhY2UoZW5kUlgsIGVuZFN1YnN0KTtcbiAgICByZXR1cm4gaHRtbFRvRWxlbWVudChuZXdIVE1MKTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlcztcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY3VycmVudFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlID8gZWxlbWVudC5kYXRhc2V0LnZhbHVlIDogZWxlbWVudC52YWx1ZTtcbn07XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5mdW5jdGlvbiBzZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgsIHZhbHVlKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbERhdGEsIGZpbmFsS2V5LCBwYXJ0cyB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmICh0eXBlb2YgY3VycmVudExldmVsRGF0YSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGFzdFBhcnQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50TGV2ZWxEYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2V0IGRhdGEtbW9kZWw9XCIke3Byb3BlcnR5UGF0aH1cIi4gVGhlIHBhcmVudCBcIiR7cGFydHMuam9pbignLicpfVwiIGRhdGEgZG9lcyBub3QgZXhpc3QuIERpZCB5b3UgZm9yZ2V0IHRvIGV4cG9zZSBcIiR7cGFydHNbMF19XCIgYXMgYSBMaXZlUHJvcD9gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZXQgZGF0YS1tb2RlbD1cIiR7cHJvcGVydHlQYXRofVwiLiBUaGUgcGFyZW50IFwiJHtwYXJ0cy5qb2luKCcuJyl9XCIgZGF0YSBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgYW4gb2JqZWN0IChpdCdzIFwiJHtjdXJyZW50TGV2ZWxEYXRhfVwiKS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGV4cG9zZWQ9e1wiJHtsYXN0UGFydH1cIn0gdG8gaXRzIExpdmVQcm9wP2ApO1xuICAgIH1cbiAgICBpZiAoY3VycmVudExldmVsRGF0YVtmaW5hbEtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHBhcnRzLnBvcCgpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kZWwgbmFtZSAke3Byb3BlcnR5UGF0aH0gd2FzIG5ldmVyIGluaXRpYWxpemVkLiBEaWQgeW91IGZvcmdldCB0byBhZGQgZXhwb3NlZD17XCIke2xhc3RQYXJ0fVwifSB0byBpdHMgTGl2ZVByb3A/YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RlbCBuYW1lIFwiJHtwcm9wZXJ0eVBhdGh9XCIgd2FzIG5ldmVyIGluaXRpYWxpemVkLiBEaWQgeW91IGZvcmdldCB0byBleHBvc2UgXCIke2xhc3RQYXJ0fVwiIGFzIGEgTGl2ZVByb3A/IEF2YWlsYWJsZSBtb2RlbHMgdmFsdWVzIGFyZTogJHtPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwID8gT2JqZWN0LmtleXMoZGF0YSkuam9pbignLCAnKSA6ICcobm9uZSknfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcbn1cblxuY2xhc3MgVmFsdWVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gW107XG4gICAgICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdldERlZXBEYXRhKHRoaXMuZGF0YSwgbm9ybWFsaXplZE5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldERlZXBEYXRhKHRoaXMucHJvcHMsIG5vcm1hbGl6ZWROYW1lKTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlICYmICF0aGlzLnVwZGF0ZWRNb2RlbHMuaW5jbHVkZXMobm9ybWFsaXplZE5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMucHVzaChub3JtYWxpemVkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhID0gc2V0RGVlcERhdGEodGhpcy5kYXRhLCBub3JtYWxpemVkTmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlICE9PSB2YWx1ZTtcbiAgICB9XG4gICAgYWxsKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmVpbml0aWFsaXplRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZWluaXRpYWxpemVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJvcHMpID09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbmZ1bmN0aW9uIG1vcnBoQXR0cnMoZnJvbU5vZGUsIHRvTm9kZSkge1xuICAgIHZhciB0b05vZGVBdHRycyA9IHRvTm9kZS5hdHRyaWJ1dGVzO1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBhdHRyTmFtZTtcbiAgICB2YXIgYXR0ck5hbWVzcGFjZVVSSTtcbiAgICB2YXIgYXR0clZhbHVlO1xuICAgIHZhciBmcm9tVmFsdWU7XG5cbiAgICAvLyBkb2N1bWVudC1mcmFnbWVudHMgZG9udCBoYXZlIGF0dHJpYnV0ZXMgc28gbGV0cyBub3QgZG8gYW55dGhpbmdcbiAgICBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IGZyb21Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gdG9Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IHRvTm9kZUF0dHJzW2ldO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5wcmVmaXggPT09ICd4bWxucycpe1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTsgLy8gSXQncyBub3QgYWxsb3dlZCB0byBzZXQgYW4gYXR0cmlidXRlIHdpdGggdGhlIFhNTE5TIG5hbWVzcGFjZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGB4bWxuc2AgcHJlZml4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBleHRyYSBhdHRyaWJ1dGVzIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudCB0aGF0XG4gICAgLy8gd2VyZW4ndCBmb3VuZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgdmFyIGZyb21Ob2RlQXR0cnMgPSBmcm9tTm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yICh2YXIgZCA9IGZyb21Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgYXR0ciA9IGZyb21Ob2RlQXR0cnNbZF07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcmFuZ2U7IC8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciBOU19YSFRNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcblxudmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbnZhciBIQVNfVEVNUExBVEVfU1VQUE9SVCA9ICEhZG9jICYmICdjb250ZW50JyBpbiBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnZhciBIQVNfUkFOR0VfU1VQUE9SVCA9ICEhZG9jICYmIGRvYy5jcmVhdGVSYW5nZSAmJiAnY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50JyBpbiBkb2MuY3JlYXRlUmFuZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cikge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSBkb2MuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2MuYm9keSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cik7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbi8qKlxuICogVGhpcyBpcyBhYm91dCB0aGUgc2FtZVxuICogdmFyIGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICogcmV0dXJuIGh0bWwuYm9keS5maXJzdENoaWxkO1xuICpcbiAqIEBtZXRob2QgdG9FbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKi9cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGlmIChIQVNfVEVNUExBVEVfU1VQUE9SVCkge1xuICAgICAgLy8gYXZvaWQgcmVzdHJpY3Rpb25zIG9uIGNvbnRlbnQgZm9yIHRoaW5ncyBsaWtlIGA8dHI+PHRoPkhpPC90aD48L3RyPmAgd2hpY2hcbiAgICAgIC8vIGNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCBkb2Vzbid0IHN1cHBvcnRcbiAgICAgIC8vIDx0ZW1wbGF0ZT4gc3VwcG9ydCBub3QgYXZhaWxhYmxlIGluIElFXG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKTtcbiAgICB9IGVsc2UgaWYgKEhBU19SQU5HRV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0d28gbm9kZSdzIG5hbWVzIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBOT1RFOiBXZSBkb24ndCBib3RoZXIgY2hlY2tpbmcgYG5hbWVzcGFjZVVSSWAgYmVjYXVzZSB5b3Ugd2lsbCBuZXZlciBmaW5kIHR3byBIVE1MIGVsZW1lbnRzIHdpdGggdGhlIHNhbWVcbiAqICAgICAgIG5vZGVOYW1lIGFuZCBkaWZmZXJlbnQgbmFtZXNwYWNlIFVSSXMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGIgVGhlIHRhcmdldCBlbGVtZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb21wYXJlTm9kZU5hbWVzKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBmcm9tTm9kZU5hbWUgPSBmcm9tRWwubm9kZU5hbWU7XG4gICAgdmFyIHRvTm9kZU5hbWUgPSB0b0VsLm5vZGVOYW1lO1xuICAgIHZhciBmcm9tQ29kZVN0YXJ0LCB0b0NvZGVTdGFydDtcblxuICAgIGlmIChmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnJvbUNvZGVTdGFydCA9IGZyb21Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuICAgIHRvQ29kZVN0YXJ0ID0gdG9Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgdmlydHVhbCBET00gbm9kZSBvciBTVkcgbm9kZSB0aGVuIHdlIG1heVxuICAgIC8vIG5lZWQgdG8gbm9ybWFsaXplIHRoZSB0YWcgbmFtZSBiZWZvcmUgY29tcGFyaW5nLiBOb3JtYWwgSFRNTCBlbGVtZW50cyB0aGF0IGFyZVxuICAgIC8vIGluIHRoZSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgIC8vIGFyZSBjb252ZXJ0ZWQgdG8gdXBwZXIgY2FzZVxuICAgIGlmIChmcm9tQ29kZVN0YXJ0IDw9IDkwICYmIHRvQ29kZVN0YXJ0ID49IDk3KSB7IC8vIGZyb20gaXMgdXBwZXIgYW5kIHRvIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiBmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRvQ29kZVN0YXJ0IDw9IDkwICYmIGZyb21Db2RlU3RhcnQgPj0gOTcpIHsgLy8gdG8gaXMgdXBwZXIgYW5kIGZyb20gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIHRvTm9kZU5hbWUgPT09IGZyb21Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQsIG9wdGlvbmFsbHkgd2l0aCBhIGtub3duIG5hbWVzcGFjZSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGVsZW1lbnQgbmFtZSwgZS5nLiAnZGl2JyBvciAnc3ZnJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VVUkldIHRoZSBlbGVtZW50J3MgbmFtZXNwYWNlIFVSSSwgaS5lLiB0aGUgdmFsdWUgb2ZcbiAqIGl0cyBgeG1sbnNgIGF0dHJpYnV0ZSBvciBpdHMgaW5mZXJyZWQgbmFtZXNwYWNlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBuYW1lc3BhY2VVUkkpIHtcbiAgICByZXR1cm4gIW5hbWVzcGFjZVVSSSB8fCBuYW1lc3BhY2VVUkkgPT09IE5TX1hIVE1MID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQobmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgbmFtZSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsIG5hbWUpIHtcbiAgICBpZiAoZnJvbUVsW25hbWVdICE9PSB0b0VsW25hbWVdKSB7XG4gICAgICAgIGZyb21FbFtuYW1lXSA9IHRvRWxbbmFtZV07XG4gICAgICAgIGlmIChmcm9tRWxbbmFtZV0pIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHNwZWNpYWxFbEhhbmRsZXJzID0ge1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZnJvbUVsLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBwYXJlbnROYW1lID0gcGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ1NFTEVDVCcgJiYgIXBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgJiYgIXRvRWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgTVMgRWRnZSBidWcgd2hlcmUgdGhlICdzZWxlY3RlZCcgYXR0cmlidXRlIGNhbiBvbmx5IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgaWYgc2V0IHRvIGEgbm9uLWVtcHR5IHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjA4NzY3OS9cbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXNldCBzZWxlY3QgZWxlbWVudCdzIHNlbGVjdGVkSW5kZXggdG8gLTEsIG90aGVyd2lzZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gZnJvbUVsLnNlbGVjdGVkIHVzaW5nIHRoZSBzeW5jQm9vbGVhbkF0dHJQcm9wIGJlbG93IGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGNvcnJlY3Qgc2VsZWN0ZWRJbmRleCB3aWxsIGJlIHNldCBpbiB0aGUgU0VMRUNUIHNwZWNpYWwgaGFuZGxlciBiZWxvdy5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ3NlbGVjdGVkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50IHNpbmNlIGl0IHNldHNcbiAgICAgKiB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgd2l0aG91dCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdCBzaW5jZSBpdCBpcyBvbmx5IHVzZWQgdG8gdGhlIHNldCB0aGVcbiAgICAgKiBpbml0aWFsIHZhbHVlLiAgU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZSwgYW5kIFwiZGlzYWJsZWRcIi5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnY2hlY2tlZCcpO1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVEVYVEFSRUE6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBzZXRzIHRoZSBwbGFjZWhvbGRlciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG5vZGUgdmFsdWUgYW5kIHZpc2UgdmVyc2EuIFRoaXMgaWdub3JlcyBhbiBlbXB0eSB1cGRhdGUuXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBmaXJzdENoaWxkLm5vZGVWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09IG5ld1ZhbHVlIHx8ICghbmV3VmFsdWUgJiYgb2xkVmFsdWUgPT0gZnJvbUVsLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU0VMRUNUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbG9vcCB0aHJvdWdoIGNoaWxkcmVuIG9mIGZyb21FbCwgbm90IHRvRWwgc2luY2Ugbm9kZXMgY2FuIGJlIG1vdmVkXG4gICAgICAgICAgICAvLyBmcm9tIHRvRWwgdG8gZnJvbUVsIGRpcmVjdGx5IHdoZW4gbW9ycGhpbmcuXG4gICAgICAgICAgICAvLyBBdCB0aGUgdGltZSB0aGlzIHNwZWNpYWwgaGFuZGxlciBpcyBpbnZva2VkLCBhbGwgY2hpbGRyZW4gaGF2ZSBhbHJlYWR5IGJlZW4gbW9ycGhlZFxuICAgICAgICAgICAgLy8gYW5kIGFwcGVuZGVkIHRvIC8gcmVtb3ZlZCBmcm9tIGZyb21FbCwgc28gdXNpbmcgZnJvbUVsIGhlcmUgaXMgc2FmZSBhbmQgY29ycmVjdC5cbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9wdGdyb3VwO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9IGN1ckNoaWxkLm5vZGVOYW1lICYmIGN1ckNoaWxkLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJDaGlsZCAmJiBvcHRncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxID0gMTE7XG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSkgfHwgbm9kZS5pZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycykge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRvTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdIVE1MJyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvTm9kZUh0bWwgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICAgICAgICAgICAgICB0b05vZGUuaW5uZXJIVE1MID0gdG9Ob2RlSHRtbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0Tm9kZUtleSA9IG9wdGlvbnMuZ2V0Tm9kZUtleSB8fCBkZWZhdWx0R2V0Tm9kZUtleTtcbiAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVBZGRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25Ob2RlQWRkZWQgPSBvcHRpb25zLm9uTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uRWxVcGRhdGVkID0gb3B0aW9ucy5vbkVsVXBkYXRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcblxuICAgICAgICAvLyBUaGlzIG9iamVjdCBpcyB1c2VkIGFzIGEgbG9va3VwIHRvIHF1aWNrbHkgZmluZCBhbGwga2V5ZWQgZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgICAgICB2YXIgZnJvbU5vZGVzTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIGtleWVkUmVtb3ZhbExpc3QgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBhZGRLZXllZFJlbW92YWwoa2V5KSB7XG4gICAgICAgICAgICBrZXllZFJlbW92YWxMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBLZXllZE5vZGVzICYmIChrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBza2lwcGluZyBrZXllZCBub2RlcyB0aGVuIHdlIGFkZCB0aGUga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIGxpc3Qgc28gdGhhdCBpdCBjYW4gYmUgaGFuZGxlZCBhdCB0aGUgdmVyeSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVwb3J0IHRoZSBub2RlIGFzIGRpc2NhcmRlZCBpZiBpdCBpcyBub3Qga2V5ZWQuIFdlIGRvIHRoaXMgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXQgdGhlIGVuZCB3ZSBsb29wIHRocm91Z2ggYWxsIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSB1bm1hdGNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIGRpc2NhcmQgdGhlbSBpbiBvbmUgZmluYWwgcGFzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGEgRE9NIG5vZGUgb3V0IG9mIHRoZSBvcmlnaW5hbCBET01cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZXMgcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNraXBLZXllZE5vZGVzIElmIHRydWUgdGhlbiBlbGVtZW50cyB3aXRoIGtleXMgd2lsbCBiZSBza2lwcGVkIGFuZCBub3QgZGlzY2FyZGVkLlxuICAgICAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHBhcmVudE5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAvLyBUcmVlV2Fsa2VyIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUocm9vdCkge1xuICAgICAgICAvLyAgICAgdmFyIHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICAvLyAgICAgICAgIHJvb3QsXG4gICAgICAgIC8vICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIGVsO1xuICAgICAgICAvLyAgICAgd2hpbGUoKGVsID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLy8gTm9kZUl0ZXJhdG9yIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvL1xuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgICAgICAvLyAgICAgdmFyIG5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgICAgIC8vICAgICB2YXIgZWw7XG4gICAgICAgIC8vICAgICB3aGlsZSgoZWwgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGN1ckNoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2FsayByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgICAgICBpbmRleFRyZWUoY3VyQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhUcmVlKGZyb21Ob2RlKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVOb2RlQWRkZWQoZWwpIHtcbiAgICAgICAgICAgIG9uTm9kZUFkZGVkKGVsKTtcblxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U2libGluZyA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVubWF0Y2hlZEZyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBmaW5kIGEgZHVwbGljYXRlICNpZCBub2RlIGluIGNhY2hlLCByZXBsYWNlIGBlbGAgd2l0aCBjYWNoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbW9ycGggaXQgdG8gdGhlIGNoaWxkIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bm1hdGNoZWRGcm9tRWwgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJDaGlsZCwgdW5tYXRjaGVkRnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gcmVjdXJzaXZlbHkgY2FsbCBmb3IgY3VyQ2hpbGQgYW5kIGl0J3MgY2hpbGRyZW4gdG8gc2VlIGlmIHdlIGZpbmQgc29tZXRoaW5nIGluXG4gICAgICAgICAgICAgICAgICAvLyBmcm9tTm9kZXNMb29rdXBcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBcInRvIG5vZGVzXCIuIElmIGN1ckZyb21Ob2RlQ2hpbGQgaXNcbiAgICAgICAgICAgIC8vIG5vbi1udWxsIHRoZW4gd2Ugc3RpbGwgaGF2ZSBzb21lIGZyb20gbm9kZXMgbGVmdCBvdmVyIHRoYXQgbmVlZFxuICAgICAgICAgICAgLy8gdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoKGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3JwaEVsKGZyb21FbCwgdG9FbCwgY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICB2YXIgdG9FbEtleSA9IGdldE5vZGVLZXkodG9FbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0VsS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW4gZWxlbWVudCB3aXRoIGFuIElEIGlzIGJlaW5nIG1vcnBoZWQgdGhlbiBpdCB3aWxsIGJlIGluIHRoZSBmaW5hbFxuICAgICAgICAgICAgICAgIC8vIERPTSBzbyBjbGVhciBpdCBvdXQgb2YgdGhlIHNhdmVkIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICBkZWxldGUgZnJvbU5vZGVzTG9va3VwW3RvRWxLZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgaWYgKG9uQmVmb3JlRWxVcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudCBmaXJzdFxuICAgICAgICAgICAgICAgIG1vcnBoQXR0cnMoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICAgICAgICAgIG9uRWxVcGRhdGVkKGZyb21FbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwZWNpYWxFbEhhbmRsZXJzLlRFWFRBUkVBKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgICAgICAgICAgdmFyIGN1clRvTm9kZUNoaWxkID0gdG9FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBjdXJUb05vZGVLZXk7XG4gICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVLZXk7XG5cbiAgICAgICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0Zyb21FbDtcblxuICAgICAgICAgICAgLy8gd2FsayB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIG91dGVyOiB3aGlsZSAoY3VyVG9Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3YWxrIHRoZSBmcm9tTm9kZSBjaGlsZHJlbiBhbGwgdGhlIHdheSB0aHJvdWdoXG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuaXNTYW1lTm9kZSAmJiBjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlVHlwZSA9IGN1ckZyb21Ob2RlQ2hpbGQubm9kZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBtZWFucyBpZiB0aGUgY3VyRnJvbU5vZGVDaGlsZCBkb2VzbnQgaGF2ZSBhIG1hdGNoIHdpdGggdGhlIGN1clRvTm9kZUNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0NvbXBhdGlibGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRhcmdldCBub2RlIGhhcyBhIGtleSBzbyB3ZSB3YW50IHRvIG1hdGNoIGl0IHVwIHdpdGggdGhlIGNvcnJlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAhPT0gY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlIGRvZXMgbm90IGhhdmUgYSBtYXRjaGluZyBrZXkgc29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIGNoZWNrIG91ciBsb29rdXAgdG8gc2VlIGlmIHRoZXJlIGlzIGEgbWF0Y2hpbmcgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21OZXh0U2libGluZyA9PT0gbWF0Y2hpbmdGcm9tRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBzaW5nbGUgZWxlbWVudCByZW1vdmFscy4gVG8gYXZvaWQgcmVtb3ZpbmcgdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSBub2RlIG91dCBvZiB0aGUgdHJlZSAoc2luY2UgdGhhdCBjYW4gYnJlYWsgQ1NTIHRyYW5zaXRpb25zLCBldGMuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBpbnN0ZWFkIGRpc2NhcmQgdGhlIGN1cnJlbnQgbm9kZSBhbmQgd2FpdCB1bnRpbCB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gdG8gcHJvcGVybHkgbWF0Y2ggdXAgdGhlIGtleWVkIHRhcmdldCBlbGVtZW50IHdpdGggaXRzIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBtYXRjaGluZyBrZXllZCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExldCdzIG1vdmUgdGhlIG9yaWdpbmFsIERPTSBub2RlIGludG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIG1vcnBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IFdlIHVzZSBpbnNlcnRCZWZvcmUgaW5zdGVhZCBvZiByZXBsYWNlQ2hpbGQgYmVjYXVzZSB3ZSB3YW50IHRvIGdvIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGByZW1vdmVOb2RlKClgIGZ1bmN0aW9uIGZvciB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGRpc2NhcmRlZCBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNvcnJlY3RseSBpbnZva2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbnNlcnRCZWZvcmUobWF0Y2hpbmdGcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBtYXRjaGluZ0Zyb21FbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBub2RlcyBhcmUgbm90IGNvbXBhdGlibGUgc2luY2UgdGhlIFwidG9cIiBub2RlIGhhcyBhIGtleSBhbmQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBubyBtYXRjaGluZyBrZXllZCBub2RlIGluIHRoZSBzb3VyY2UgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaGFzIGEga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGlzQ29tcGF0aWJsZSAhPT0gZmFsc2UgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBjb21wYXRpYmxlIERPTSBlbGVtZW50cyBzbyB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgXCJmcm9tXCIgbm9kZSB0byBtYXRjaCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YXJnZXQgRE9NIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBjdXJGcm9tTm9kZVR5cGUgPT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgVGV4dCBvciBDb21tZW50IG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW1wbHkgdXBkYXRlIG5vZGVWYWx1ZSBvbiB0aGUgb3JpZ2luYWwgbm9kZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSAhPT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlID0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWR2YW5jZSBib3RoIHRoZSBcInRvXCIgY2hpbGQgYW5kIHRoZSBcImZyb21cIiBjaGlsZCBzaW5jZSB3ZSBmb3VuZCBhIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIGVsc2UgdG8gZG8gYXMgd2UgYWxyZWFkeSByZWN1cnNpdmVseSBjYWxsZWQgbW9ycGhDaGlsZHJlbiBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gY29tcGF0aWJsZSBtYXRjaCBzbyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIERPTSBhbmQgY29udGludWUgdHJ5aW5nIHRvIGZpbmQgYVxuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBpbiB0aGUgb3JpZ2luYWwgRE9NLiBIb3dldmVyLCB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIGZyb20gbm9kZSBpcyBub3Qga2V5ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgaXMgcG9zc2libGUgdGhhdCBhIGtleWVkIG5vZGUgbWlnaHQgbWF0Y2ggdXAgd2l0aCBhIG5vZGUgc29tZXdoZXJlIGVsc2UgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldCB0cmVlIGFuZCB3ZSBkb24ndCB3YW50IHRvIGRpc2NhcmQgaXQganVzdCB5ZXQgc2luY2UgaXQgc3RpbGwgbWlnaHQgZmluZCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIGhvbWUgaW4gdGhlIGZpbmFsIERPTSB0cmVlLiBBZnRlciBldmVyeXRoaW5nIGlzIGRvbmUgd2Ugd2lsbCByZW1vdmUgYW55IGtleWVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZGlkbid0IGZpbmQgYSBob21lXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH0gLy8gRU5EOiB3aGlsZShjdXJGcm9tTm9kZUNoaWxkKSB7fVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZ290IHRoaXMgZmFyIHRoZW4gd2UgZGlkIG5vdCBmaW5kIGEgY2FuZGlkYXRlIG1hdGNoIGZvclxuICAgICAgICAgICAgICAgIC8vIG91ciBcInRvIG5vZGVcIiBhbmQgd2UgZXhoYXVzdGVkIGFsbCBvZiB0aGUgY2hpbGRyZW4gXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAvLyBub2Rlcy4gVGhlcmVmb3JlLCB3ZSB3aWxsIGp1c3QgYXBwZW5kIHRoZSBjdXJyZW50IFwidG9cIiBub2RlXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIGVuZFxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkgJiYgKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pICYmIGNvbXBhcmVOb2RlTmFtZXMobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuYXBwZW5kQ2hpbGQobWF0Y2hpbmdGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKG1hdGNoaW5nRnJvbUVsLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ID0gb25CZWZvcmVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUoZnJvbUVsLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSk7XG5cbiAgICAgICAgICAgIHZhciBzcGVjaWFsRWxIYW5kbGVyID0gc3BlY2lhbEVsSGFuZGxlcnNbZnJvbUVsLm5vZGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbEVsSGFuZGxlcihmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIEVORDogbW9ycGhDaGlsZHJlbiguLi4pXG5cbiAgICAgICAgdmFyIG1vcnBoZWROb2RlID0gZnJvbU5vZGU7XG4gICAgICAgIHZhciBtb3JwaGVkTm9kZVR5cGUgPSBtb3JwaGVkTm9kZS5ub2RlVHlwZTtcbiAgICAgICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBhcmUgZ2l2ZW4gdHdvIERPTSBub2RlcyB0aGF0IGFyZSBub3RcbiAgICAgICAgICAgIC8vIGNvbXBhdGlibGUgKGUuZy4gPGRpdj4gLS0+IDxzcGFuPiBvciA8ZGl2PiAtLT4gVEVYVClcbiAgICAgICAgICAgIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlTm9kZU5hbWVzKGZyb21Ob2RlLCB0b05vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3ZlQ2hpbGRyZW4oZnJvbU5vZGUsIGNyZWF0ZUVsZW1lbnROUyh0b05vZGUubm9kZU5hbWUsIHRvTm9kZS5uYW1lc3BhY2VVUkkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvaW5nIGZyb20gYW4gZWxlbWVudCBub2RlIHRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBURVhUX05PREUgfHwgbW9ycGhlZE5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHsgLy8gVGV4dCBvciBjb21tZW50IG5vZGVcbiAgICAgICAgICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gbW9ycGhlZE5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3JwaGVkTm9kZS5ub2RlVmFsdWUgIT09IHRvTm9kZS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlLm5vZGVWYWx1ZSA9IHRvTm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3JwaGVkTm9kZSA9PT0gdG9Ob2RlKSB7XG4gICAgICAgICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCIgc28gd2UgaGFkIHRvXG4gICAgICAgICAgICAvLyB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b05vZGUuaXNTYW1lTm9kZSAmJiB0b05vZGUuaXNTYW1lTm9kZShtb3JwaGVkTm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgICAgICAgLy8gV2Ugbm93IG5lZWQgdG8gbG9vcCBvdmVyIGFueSBrZXllZCBub2RlcyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIHJlbW92ZWQuIFdlIG9ubHkgZG8gdGhlIHJlbW92YWwgaWYgd2Uga25vdyB0aGF0IHRoZSBrZXllZCBub2RlXG4gICAgICAgICAgICAvLyBuZXZlciBmb3VuZCBhIG1hdGNoLiBXaGVuIGEga2V5ZWQgbm9kZSBpcyBtYXRjaGVkIHVwIHdlIHJlbW92ZVxuICAgICAgICAgICAgLy8gaXQgb3V0IG9mIGZyb21Ob2Rlc0xvb2t1cCBhbmQgd2UgdXNlIGZyb21Ob2Rlc0xvb2t1cCB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIC8vIGlmIGEga2V5ZWQgbm9kZSBoYXMgYmVlbiBtYXRjaGVkIHVwIG9yIG5vdFxuICAgICAgICAgICAgaWYgKGtleWVkUmVtb3ZhbExpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTAsIGxlbj1rZXllZFJlbW92YWxMaXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb1JlbW92ZSA9IGZyb21Ob2Rlc0xvb2t1cFtrZXllZFJlbW92YWxMaXN0W2ldXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoZWxUb1JlbW92ZSwgZWxUb1JlbW92ZS5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlLmFjdHVhbGl6ZSkge1xuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW9ycGhlZE5vZGUuYWN0dWFsaXplKGZyb21Ob2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHRhcmdldCBub2RlIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgb2xkIERPTSBub2RlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS4gVGhpcyBpcyBvbmx5XG4gICAgICAgICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgICAgICAgLy8gd2Uga25vdyBpcyB0aGUgY2FzZSBpZiBpdCBoYXMgYSBwYXJlbnQgbm9kZS5cbiAgICAgICAgICAgIGZyb21Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1vcnBoZWROb2RlLCBmcm9tTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgfTtcbn1cblxudmFyIG1vcnBoZG9tID0gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBjaGlsZENvbXBvbmVudHMsIGZpbmRDaGlsZENvbXBvbmVudCwgZ2V0S2V5RnJvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudE1hcCA9IG5ldyBNYXAoKTtcbiAgICBjaGlsZENvbXBvbmVudHMuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgY2hpbGRDb21wb25lbnRNYXAuc2V0KGNoaWxkQ29tcG9uZW50LmVsZW1lbnQsIGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFjaGlsZENvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBpcyBtaXNzaW5nIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50VG9FbGVtZW50ID0gZmluZENoaWxkQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50LmlkLCByb290VG9FbGVtZW50KTtcbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50VG9FbGVtZW50ICYmIGNoaWxkQ29tcG9uZW50VG9FbGVtZW50LnRhZ05hbWUgIT09IGNoaWxkQ29tcG9uZW50LmVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFnID0gY2xvbmVFbGVtZW50V2l0aE5ld1RhZ05hbWUoY2hpbGRDb21wb25lbnRUb0VsZW1lbnQsIGNoaWxkQ29tcG9uZW50LmVsZW1lbnQudGFnTmFtZSk7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudFRvRWxlbWVudC5yZXBsYWNlV2l0aChuZXdUYWcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7XG4gICAgICAgIGdldE5vZGVLZXk6IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEtleUZyb21FbGVtZW50KG5vZGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZUVsVXBkYXRlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBmcm9tRWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB8fFxuICAgICAgICAgICAgICAgICEodG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRvRWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRDb21wb25lbnRNYXAuZ2V0KGZyb21FbCkgfHwgZmFsc2U7XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnQudXBkYXRlRnJvbU5ld0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZEZyb21FbCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEZyb21FbC5pc0VxdWFsTm9kZShub3JtYWxpemVkVG9FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5jbGFzcyBIb29rTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdHJpZ2dlckhvb2soaG9va05hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Qm9keSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGlsZENvbXBvbmVudFdyYXBwZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxCaW5kaW5ncykge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5tb2RlbEJpbmRpbmdzID0gbW9kZWxCaW5kaW5ncztcbiAgICB9XG59XG5jbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByb3BzLCBkYXRhLCBmaW5nZXJwcmludCwgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5iYWNrZW5kID0gYmFja2VuZDtcbiAgICAgICAgdGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZSA9IG5ldyBWYWx1ZVN0b3JlKHByb3BzLCBkYXRhKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIgPSBuZXcgVW5zeW5jZWRJbnB1dHNUcmFja2VyKHRoaXMsIGVsZW1lbnREcml2ZXIpO1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlID0gdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYWRkUGx1Z2luKHBsdWdpbikge1xuICAgICAgICBwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnZGlzY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICAgIG9uKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIG9mZihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy51bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNldChtb2RlbCwgdmFsdWUsIHJlUmVuZGVyID0gZmFsc2UsIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdtb2RlbDpzZXQnLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgICAgICBpZiAocmVSZW5kZXIgJiYgaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldERhdGEobW9kZWwpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgYWN0aW9uKG5hbWUsIGFyZ3MgPSB7fSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJnc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gICAgfVxuICAgIGFkZENoaWxkKGNoaWxkLCBtb2RlbEJpbmRpbmdzID0gW10pIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbiBjb21wb25lbnRzIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNldChjaGlsZC5pZCwgbmV3IENoaWxkQ29tcG9uZW50V3JhcHBlcihjaGlsZCwgbW9kZWxCaW5kaW5ncykpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICBjaGlsZC5vbignbW9kZWw6c2V0JywgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUpO1xuICAgIH1cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlKGNoaWxkLmlkKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgY2hpbGQub2ZmKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIGdldFBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQsIGlkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZHJlbi5zZXQoaWQsIGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuICAgIHVwZGF0ZUZyb21OZXdFbGVtZW50KHRvRWwpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHModG9FbCk7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5yZWluaXRpYWxpemVQcm9wcyhwcm9wcyk7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdG9FbC5kYXRhc2V0LmxpdmVGaW5nZXJwcmludFZhbHVlO1xuICAgICAgICBpZiAoZmluZ2VycHJpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUobW9kZWxOYW1lLCB2YWx1ZSwgY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFjaGlsZENvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRXcmFwcGVyID0gdGhpcy5jaGlsZHJlbi5nZXQoY2hpbGRDb21wb25lbnQuaWQpO1xuICAgICAgICBpZiAoIWNoaWxkV3JhcHBlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNoaWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRXcmFwcGVyLm1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE1vZGVsTmFtZSA9IG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCAndmFsdWUnO1xuICAgICAgICAgICAgaWYgKGNoaWxkTW9kZWxOYW1lICE9PSBtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCB2YWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGVyZm9ybVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KHRoaXMudmFsdWVTdG9yZS5hbGwoKSwgdGhpcy5wZW5kaW5nQWN0aW9ucywgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMsIHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucHJvbWlzZS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFja2VuZFJlc3BvbnNlID0gbmV3IEJhY2tlbmRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgYmFja2VuZFJlc3BvbnNlLmdldEJvZHkoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgIGlmIChoZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgIT09ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcgJiYgIWhlYWRlcnMuZ2V0KCdYLUxpdmUtUmVkaXJlY3QnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBkaXNwbGF5RXJyb3I6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXNwb25zZTplcnJvcicsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTW9kZWxWYWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0gPSB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3RWxlbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBodG1sVG9FbGVtZW50KGh0bWwpO1xuICAgICAgICAgICAgaWYgKCFuZXdFbGVtZW50Lm1hdGNoZXMoJ1tkYXRhLWNvbnRyb2xsZXJ+PWxpdmVdJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBjb21wb25lbnQgSFRNTCByZXR1cm5lZDonKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCBuZXdFbGVtZW50KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZURhdGEodGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudERhdGEobmV3RWxlbWVudCkpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCBBcnJheS5mcm9tKHRoaXMuZ2V0Q2hpbGRyZW4oKS52YWx1ZXMoKSksIHRoaXMuZWxlbWVudERyaXZlci5maW5kQ2hpbGRDb21wb25lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0S2V5RnJvbUVsZW1lbnQpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZmllZE1vZGVsVmFsdWVzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOmZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERlYm91bmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWJvdW5jZTtcbiAgICB9XG4gICAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgICB9XG4gICAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1jb21wb25lbnQtZXJyb3InKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb2RhbC5pZCA9ICdsaXZlLWNvbXBvbmVudC1lcnJvcic7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjUpJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9ICcxMDAwMDAnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5mbGV4R3JvdyA9ICcxJztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1vZGFsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuZm9jdXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50cyA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSBjaGlsZC5maW5nZXJwcmludDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaW5nZXJwcmludHM7XG4gICAgfVxuICAgIHJlc2V0UHJvbWlzZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcHJveGlmeUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KGNvbXBvbmVudCwge1xuICAgICAgICBnZXQoY29tcG9uZW50LCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjb21wb25lbnQgfHwgdHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSBjb21wb25lbnRbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxhYmxlLmFwcGx5KGNvbXBvbmVudCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldChjb21wb25lbnQsIHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuZ2V0RGF0YShwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgW3Byb3AsIGFyZ3NdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5zZXQocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBCYWNrZW5kUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IocHJvbWlzZSwgYWN0aW9ucywgdXBkYXRlTW9kZWxzKSB7XG4gICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICB0aGlzLnByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMgPSB1cGRhdGVNb2RlbHM7XG4gICAgfVxuICAgIGNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmZpbHRlcigoYWN0aW9uKSA9PiB0YXJnZXRlZEFjdGlvbnMuaW5jbHVkZXMoYWN0aW9uKSkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVkTW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHRhcmdldGVkTW9kZWxzLmluY2x1ZGVzKG1vZGVsKSkubGVuZ3RoID4gMDtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY3NyZlRva2VuID0gbnVsbCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIG1ha2VSZXF1ZXN0KGRhdGEsIGFjdGlvbnMsIHVwZGF0ZWRNb2RlbHMsIGNoaWxkcmVuRmluZ2VycHJpbnRzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbkZpbmdlcnByaW50cykubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgaGFzVXBkYXRlZE1vZGVscyA9IE9iamVjdC5rZXlzKHVwZGF0ZWRNb2RlbHMpLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy53aWxsRGF0YUZpdEluVXJsKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuRmluZ2VycHJpbnRzKSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW5GaW5nZXJwcmludHMnLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbkZpbmdlcnByaW50cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlZE1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ3VwZGF0ZWRNb2RlbHNbXScsIG1vZGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBkYXRhIH07XG4gICAgICAgICAgICBpZiAoaGFzVXBkYXRlZE1vZGVscykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLnVwZGF0ZWRNb2RlbHMgPSB1cGRhdGVkTW9kZWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuRmluZ2VycHJpbnRzID0gY2hpbGRyZW5GaW5nZXJwcmludHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IHRoaXMuY3NyZlRva2VuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBuZXcgQmFja2VuZFJlcXVlc3QoZmV0Y2goYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLCBmZXRjaE9wdGlvbnMpLCBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSwgdXBkYXRlZE1vZGVscyk7XG4gICAgfVxuICAgIHdpbGxEYXRhRml0SW5VcmwoZGF0YUpzb24sIHBhcmFtcywgY2hpbGRyZW5GaW5nZXJwcmludHNKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YUpzb24gKyBjaGlsZHJlbkZpbmdlcnByaW50c0pzb24pLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiAodXJsRW5jb2RlZEpzb25EYXRhICsgcGFyYW1zLnRvU3RyaW5nKCkpLmxlbmd0aCA8IDE1MDA7XG4gICAgfVxufVxuXG5jbGFzcyBTdGFuZGFyZEVsZW1lbnREcml2ZXIge1xuICAgIGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgfVxuICAgIGdldENvbXBvbmVudERhdGEocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFyb290RWxlbWVudC5kYXRhc2V0LmxpdmVEYXRhVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJvb3RFbGVtZW50LmRhdGFzZXQubGl2ZURhdGFWYWx1ZSk7XG4gICAgfVxuICAgIGdldENvbXBvbmVudFByb3BzKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIGlmICghcm9vdEVsZW1lbnQuZGF0YXNldC5saXZlUHJvcHNWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uocm9vdEVsZW1lbnQuZGF0YXNldC5saXZlUHJvcHNWYWx1ZSk7XG4gICAgfVxuICAgIGZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQoaWQsIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbGl2ZS1pZD0ke2lkfV1gKTtcbiAgICB9XG4gICAgZ2V0S2V5RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgTG9hZGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgKGVsZW1lbnQsIHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKGVsZW1lbnQsIHJlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQuZWxlbWVudCk7XG4gICAgfVxuICAgIHN0YXJ0TG9hZGluZyh0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUodHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGZhbHNlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ1RvZ2dsZShpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXModGFyZ2V0RWxlbWVudCkuZm9yRWFjaCgoeyBlbGVtZW50LCBkaXJlY3RpdmVzIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZmluYWxBY3Rpb24gPSBwYXJzZUxvYWRpbmdBY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgaXNMb2FkaW5nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHRhcmdldGVkTW9kZWxzID0gW107XG4gICAgICAgIGxldCBkZWxheSA9IDA7XG4gICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlbGF5JywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gKF9hID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYWRpbmdEaXJlY3RpdmU7XG4gICAgICAgIHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgIH1cbiAgICBnZXRMb2FkaW5nRGlyZWN0aXZlcyhlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9hZGluZ10nKS5mb3JFYWNoKChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRWxlbWVudCBUeXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5sb2FkaW5nIHx8ICdzaG93Jyk7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gbG9hZGluZ0RpcmVjdGl2ZXM7XG4gICAgfVxuICAgIHNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfVxuICAgIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgWydjbGFzcyddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgJycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBwYXJzZUxvYWRpbmdBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uLCBpc0xvYWRpbmcpIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdoaWRlJyA6ICdzaG93JztcbiAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xuICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyc7XG4gICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZEF0dHJpYnV0ZScgOiAncmVtb3ZlQXR0cmlidXRlJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdhZGRBdHRyaWJ1dGUnO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7YWN0aW9ufVwiYCk7XG59O1xuXG5jbGFzcyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ21vZGVsOnNldCcsIChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCBjb21wb25lbnQudmFsdWVTdG9yZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIHZhbHVlU3RvcmUpIHtcbiAgICAgICAgaWYgKHZhbHVlU3RvcmUuaGFzKCd2YWxpZGF0ZWRGaWVsZHMnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gWy4uLnZhbHVlU3RvcmUuZ2V0KCd2YWxpZGF0ZWRGaWVsZHMnKV07XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkRmllbGRzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlU3RvcmUuc2V0KCd2YWxpZGF0ZWRGaWVsZHMnLCB2YWxpZGF0ZWRGaWVsZHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBQYWdlVW5sb2FkaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6c3RhcnRlZCcsIChodG1sLCByZXNwb25zZSwgY29udHJvbHMpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ0RpcmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xscy5wdXNoKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSk7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QWxsUG9sbGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxzLmZvckVhY2goKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhclBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5wb2xscyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgIH1cbiAgICBpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgICBpZiAoYWN0aW9uTmFtZSA9PT0gJyRyZW5kZXInKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oYWN0aW9uTmFtZSwge30sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLnB1c2godGltZXIpO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50O1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3IoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemVQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmNsZWFyUG9sbGluZygpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3UG9sbENvbmZpZyB8fCAnJHJlbmRlcicpO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtbW9kZWw9XCIke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfVwiLmApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZWxOYW1lLFxuICAgICAgICBpbm5lck1vZGVsTmFtZTogaW5uZXJNb2RlbE5hbWUgfHwgbnVsbCxcbiAgICAgICAgc2hvdWxkUmVuZGVyLFxuICAgICAgICBkZWJvdW5jZSxcbiAgICAgICAgdGFyZ2V0RXZlbnROYW1lXG4gICAgfTtcbn1cblxuY29uc3QgQ29tcG9uZW50UmVnaXN0cnkgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGVsZW1lbnQsIGRlZmluaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNldChlbGVtZW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gICAgdW5yZWdpc3RlckNvbXBvbmVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICAgIGdldENvbXBvbmVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSAxMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbnZhciBDb21wb25lbnRSZWdpc3RyeSQxID0gbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCk7XG5cbmNvbnN0IGdldENvbXBvbmVudCA9IChlbGVtZW50KSA9PiBDb21wb25lbnRSZWdpc3RyeSQxLmdldENvbXBvbmVudChlbGVtZW50KTtcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgICAgICB7IGV2ZW50OiAnY2hhbmdlJywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdsaXZlOmNvbm5lY3QnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCA9IHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5saXZlSWQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmRhdGFWYWx1ZSwgdGhpcy5maW5nZXJwcmludFZhbHVlLCBpZCwgbmV3IEJhY2tlbmQodGhpcy51cmxWYWx1ZSwgdGhpcy5jc3JmVmFsdWUpLCBuZXcgU3RhbmRhcmRFbGVtZW50RHJpdmVyKCkpO1xuICAgICAgICB0aGlzLnByb3hpZWRDb21wb25lbnQgPSBwcm94aWZ5Q29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Ll9fY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuICAgICAgICBpZiAodGhpcy5oYXNEZWJvdW5jZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kZWZhdWx0RGVib3VuY2UgPSB0aGlzLmRlYm91bmNlVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtcbiAgICAgICAgICAgIG5ldyBMb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUGFnZVVubG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBvbGxpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbigpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgQ29tcG9uZW50UmVnaXN0cnkkMS5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBDb21wb25lbnRSZWdpc3RyeSQxLnVucmVnaXN0ZXJDb21wb25lbnQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LnRhcmdldCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZXZlbnQudGFyZ2V0LCBudWxsKTtcbiAgICB9XG4gICAgYWN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJhd0FjdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG4gICAgICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3ByZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IChfYSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgZGlyZWN0aXZlLm5hbWVkLCBkZWJvdW5jZSk7XG4gICAgICAgICAgICBpZiAoZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2lucHV0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdjaGFuZ2UnKTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZyA9IGdldE1vZGVsQmluZGluZyhtb2RlbERpcmVjdGl2ZSk7XG4gICAgICAgIGlmICghbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdpbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2hhbmdlJyAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2NoYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFsc2UgPT09IG1vZGVsQmluZGluZy5kZWJvdW5jZSkge1xuICAgICAgICAgICAgaWYgKG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbFZhbHVlID0gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgaWYgKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQuZ2V0UGFyZW50KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhjaGlsZENvbnRyb2xsZXIuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZ3MgPSBtb2RlbERpcmVjdGl2ZXMubWFwKGdldE1vZGVsQmluZGluZyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFkZENoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQsIG1vZGVsQmluZGluZ3MpO1xuICAgICAgICBjaGlsZENvbnRyb2xsZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsaXZlOmRpc2Nvbm5lY3QnLCB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KTtcbiAgICB9XG4gICAgaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250cm9sbGVyID0gZXZlbnQuZGV0YWlsLmNvbnRyb2xsZXI7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSAhPT0gdGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW1vdmVDaGlsZChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHVybDogU3RyaW5nLFxuICAgIGRhdGE6IE9iamVjdCxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGNzcmY6IFN0cmluZyxcbiAgICBkZWJvdW5jZTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDE1MCB9LFxuICAgIGlkOiBTdHJpbmcsXG4gICAgZmluZ2VycHJpbnQ6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgZGVmYXVsdF8xIGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIiQiLCIkbW9kYWwiLCIkY29udHJvbGxlckNvZGUiLCJmaW5kIiwiJHRlbXBsYXRlQ29kZSIsImFuY2hvciIsInVybCIsImNvbnRlbnQiLCJ3cmFwIiwibGlua3MiLCJyZXBsYWNlIiwiUmVnRXhwIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJ0b2tlbiIsImVhY2giLCJodG1sIiwiYXR0cmlidXRlcyIsInNyYyIsInRleHQiLCJ0YWciLCJtYXRjaCIsImZ1bmMiLCJobGpzIiwicGhwIiwidHdpZyIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJoaWdobGlnaHRBbGwiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsImxlbiIsImFycjIiLCJDb250cm9sbGVyIiwicGFyc2VEaXJlY3RpdmVzIiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50TmFtZSIsImN1cnJlbnRBcmd1bWVudFZhbHVlIiwiY3VycmVudEFyZ3VtZW50cyIsImN1cnJlbnROYW1lZEFyZ3VtZW50cyIsImN1cnJlbnRNb2RpZmllcnMiLCJnZXRMYXN0QWN0aW9uTmFtZSIsImFjdGlvbiIsInB1c2hJbnN0cnVjdGlvbiIsIm5hbWVkIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwibWl4ZWRBcmdUeXBlc0Vycm9yIiwiY29uY2F0IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0Iiwic3BsaXQiLCJub3JtYWxpemVNb2RlbE5hbWUiLCJtb2RlbCIsIm1hcCIsInMiLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwiZWxlbWVudCIsInZhbHVlU3RvcmUiLCJIVE1MSW5wdXRFbGVtZW50IiwibW9kZWxOYW1lRGF0YSIsImdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlIiwiY2hlY2tlZCIsImlucHV0VmFsdWUiLCJIVE1MU2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwic2VsZWN0ZWRPcHRpb25zIiwiZWwiLCJkYXRhc2V0IiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic2V0VmFsdWVPbkVsZW1lbnQiLCJ2YWx1ZUZvdW5kIiwiYXJyYXlXcmFwcGVkVmFsdWUiLCJvcHRpb25zIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJpbmNsdWRlcyIsImdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzIiwiZGlyZWN0aXZlIiwidGhyb3dPbk1pc3NpbmciLCJkYXRhTW9kZWxEaXJlY3RpdmVzIiwiZm9ybUVsZW1lbnQiLCJjbG9zZXN0IiwiZ2V0RWxlbWVudEFzVGFnVGV4dCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY29udGFpbnMiLCJmb3VuZENoaWxkQ29tcG9uZW50IiwiZ2V0Q2hpbGRyZW4iLCJjaGlsZENvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZSIsIm5ld1RhZyIsIm9yaWdpbmFsVGFnIiwidGFnTmFtZSIsInN0YXJ0UlgiLCJlbmRSWCIsInN0YXJ0U3Vic3QiLCJlbmRTdWJzdCIsIm5ld0hUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY3VycmVudFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJkYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0RGVlcERhdGEiLCJfcGFyc2VEZWVwRGF0YTIiLCJsYXN0UGFydCIsIlZhbHVlU3RvcmUiLCJ1cGRhdGVkTW9kZWxzIiwibm9ybWFsaXplZE5hbWUiLCJoYXMiLCJzZXQiLCJjdXJyZW50VmFsdWUiLCJhbGwiLCJhc3NpZ24iLCJyZWluaXRpYWxpemVEYXRhIiwicmVpbml0aWFsaXplUHJvcHMiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwibW9ycGhBdHRycyIsImZyb21Ob2RlIiwidG9Ob2RlIiwidG9Ob2RlQXR0cnMiLCJhdHRyIiwiYXR0ck5hbWUiLCJhdHRyTmFtZXNwYWNlVVJJIiwiYXR0clZhbHVlIiwiZnJvbVZhbHVlIiwibm9kZVR5cGUiLCJuYW1lc3BhY2VVUkkiLCJsb2NhbE5hbWUiLCJnZXRBdHRyaWJ1dGVOUyIsInByZWZpeCIsInNldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlIiwiZnJvbU5vZGVBdHRycyIsImQiLCJoYXNBdHRyaWJ1dGVOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlIiwicmFuZ2UiLCJOU19YSFRNTCIsImRvYyIsIkhBU19URU1QTEFURV9TVVBQT1JUIiwiSEFTX1JBTkdFX1NVUFBPUlQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlIiwic3RyIiwiY2hpbGROb2RlcyIsImNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlIiwic2VsZWN0Tm9kZSIsImJvZHkiLCJmcmFnbWVudCIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImNyZWF0ZUZyYWdtZW50RnJvbVdyYXAiLCJ0b0VsZW1lbnQiLCJjb21wYXJlTm9kZU5hbWVzIiwiZnJvbUVsIiwidG9FbCIsImZyb21Ob2RlTmFtZSIsIm5vZGVOYW1lIiwidG9Ob2RlTmFtZSIsImZyb21Db2RlU3RhcnQiLCJ0b0NvZGVTdGFydCIsImNoYXJDb2RlQXQiLCJ0b1VwcGVyQ2FzZSIsImNyZWF0ZUVsZW1lbnROUyIsIm1vdmVDaGlsZHJlbiIsImN1ckNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRDaGlsZCIsIm5leHRTaWJsaW5nIiwiYXBwZW5kQ2hpbGQiLCJzeW5jQm9vbGVhbkF0dHJQcm9wIiwic3BlY2lhbEVsSGFuZGxlcnMiLCJPUFRJT04iLCJwYXJlbnROb2RlIiwicGFyZW50TmFtZSIsInNlbGVjdGVkSW5kZXgiLCJJTlBVVCIsIlRFWFRBUkVBIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIm5vZGVWYWx1ZSIsInBsYWNlaG9sZGVyIiwiU0VMRUNUIiwib3B0Z3JvdXAiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEiLCJURVhUX05PREUiLCJDT01NRU5UX05PREUiLCJub29wIiwiZGVmYXVsdEdldE5vZGVLZXkiLCJub2RlIiwiaWQiLCJtb3JwaGRvbUZhY3RvcnkiLCJtb3JwaGRvbSIsInRvTm9kZUh0bWwiLCJnZXROb2RlS2V5Iiwib25CZWZvcmVOb2RlQWRkZWQiLCJvbk5vZGVBZGRlZCIsIm9uQmVmb3JlRWxVcGRhdGVkIiwib25FbFVwZGF0ZWQiLCJvbkJlZm9yZU5vZGVEaXNjYXJkZWQiLCJvbk5vZGVEaXNjYXJkZWQiLCJvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIiwiY2hpbGRyZW5Pbmx5IiwiZnJvbU5vZGVzTG9va3VwIiwia2V5ZWRSZW1vdmFsTGlzdCIsImFkZEtleWVkUmVtb3ZhbCIsIndhbGtEaXNjYXJkZWRDaGlsZE5vZGVzIiwic2tpcEtleWVkTm9kZXMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbmRleFRyZWUiLCJoYW5kbGVOb2RlQWRkZWQiLCJ1bm1hdGNoZWRGcm9tRWwiLCJyZXBsYWNlQ2hpbGQiLCJtb3JwaEVsIiwiY2xlYW51cEZyb21FbCIsImN1ckZyb21Ob2RlQ2hpbGQiLCJjdXJGcm9tTm9kZUtleSIsImZyb21OZXh0U2libGluZyIsInRvRWxLZXkiLCJtb3JwaENoaWxkcmVuIiwiY3VyVG9Ob2RlQ2hpbGQiLCJjdXJUb05vZGVLZXkiLCJ0b05leHRTaWJsaW5nIiwibWF0Y2hpbmdGcm9tRWwiLCJvdXRlciIsImlzU2FtZU5vZGUiLCJjdXJGcm9tTm9kZVR5cGUiLCJpc0NvbXBhdGlibGUiLCJpbnNlcnRCZWZvcmUiLCJvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCIsImFjdHVhbGl6ZSIsIm93bmVyRG9jdW1lbnQiLCJzcGVjaWFsRWxIYW5kbGVyIiwibW9ycGhlZE5vZGUiLCJtb3JwaGVkTm9kZVR5cGUiLCJ0b05vZGVUeXBlIiwiZWxUb1JlbW92ZSIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJjaGlsZHJlbiIsImV4ZWN1dGVNb3JwaGRvbSIsInJvb3RGcm9tRWxlbWVudCIsInJvb3RUb0VsZW1lbnQiLCJtb2RpZmllZEZpZWxkRWxlbWVudHMiLCJnZXRFbGVtZW50VmFsdWUiLCJjaGlsZENvbXBvbmVudHMiLCJmaW5kQ2hpbGRDb21wb25lbnQiLCJnZXRLZXlGcm9tRWxlbWVudCIsImNoaWxkQ29tcG9uZW50TWFwIiwiTWFwIiwiY2hpbGRDb21wb25lbnRUb0VsZW1lbnQiLCJyZXBsYWNlV2l0aCIsIlNWR0VsZW1lbnQiLCJ1cGRhdGVGcm9tTmV3RWxlbWVudCIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpcyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczIiLCJfcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJfcmVmMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJhZGQiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczQiLCJIb29rTWFuYWdlciIsImhvb2tzIiwicmVnaXN0ZXIiLCJob29rTmFtZSIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIl9sZW4iLCJfa2V5IiwiQmFja2VuZFJlc3BvbnNlIiwicmVzcG9uc2UiLCJfZ2V0Qm9keSIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZ2V0Qm9keSIsIkNoaWxkQ29tcG9uZW50V3JhcHBlciIsIm1vZGVsQmluZGluZ3MiLCJDb21wb25lbnQiLCJmaW5nZXJwcmludCIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiZGVmYXVsdERlYm91bmNlIiwicGVuZGluZ0FjdGlvbnMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsInBhcmVudCIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsIm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSIsImJpbmQiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImNvbm5lY3QiLCJkaXNjb25uZWN0IiwiY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0Iiwib24iLCJvZmYiLCJyZVJlbmRlciIsImRlYm91bmNlIiwicHJvbWlzZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImdldERhdGEiLCJyZW5kZXIiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJhZGRDaGlsZCIsImdldFBhcmVudCIsImdldENvbXBvbmVudFByb3BzIiwibGl2ZUZpbmdlcnByaW50VmFsdWUiLCJfdGhpczUiLCJjaGlsZFdyYXBwZXIiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsImlubmVyTW9kZWxOYW1lIiwic2hvdWxkUmVuZGVyIiwiYmFja2VuZFJlcXVlc3QiLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzNiIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJtYWtlUmVxdWVzdCIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwiX3JlZjMiLCJfY2FsbGVlMiIsImJhY2tlbmRSZXNwb25zZSIsImhlYWRlcnMiLCJjb250cm9scyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwicHJvY2Vzc1JlcmVuZGVyIiwiX3giLCJfdGhpczciLCJUdXJibyIsInZpc2l0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJjb25zb2xlIiwiZ2V0Q29tcG9uZW50RGF0YSIsImZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQiLCJjYWxjdWxhdGVEZWJvdW5jZSIsImNsZWFyVGltZW91dCIsIl90aGlzOCIsInNldFRpbWVvdXQiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY2xvc2VNb2RhbCIsImUiLCJmb2N1cyIsImZpbmdlcnByaW50cyIsIl90aGlzOSIsInByb3hpZnlDb21wb25lbnQiLCJQcm94eSIsInByb3AiLCJjYWxsYWJsZSIsIl9sZW4yIiwiX2tleTIiLCJSZWZsZWN0IiwicHJvcGVydHkiLCJCYWNrZW5kUmVxdWVzdCIsImFjdGlvbnMiLCJ1cGRhdGVNb2RlbHMiLCJfdGhpczEwIiwiaXNSZXNvbHZlZCIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiZmlsdGVyIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwiQmFja2VuZCIsImNzcmZUb2tlbiIsImNoaWxkcmVuRmluZ2VycHJpbnRzIiwic3BsaXRVcmwiLCJfc3BsaXRVcmwiLCJfc2xpY2VkVG9BcnJheSIsIl9zcGxpdFVybDIiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsIkFjY2VwdCIsImhhc0ZpbmdlcnByaW50cyIsImhhc1VwZGF0ZWRNb2RlbHMiLCJ3aWxsRGF0YUZpdEluVXJsIiwiYXBwZW5kIiwicmVxdWVzdERhdGEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwYXJhbXNTdHJpbmciLCJmZXRjaCIsImJhY2tlbmRBY3Rpb24iLCJkYXRhSnNvbiIsImNoaWxkcmVuRmluZ2VycHJpbnRzSnNvbiIsInVybEVuY29kZWRKc29uRGF0YSIsIlN0YW5kYXJkRWxlbWVudERyaXZlciIsIm1vZGVsRGlyZWN0aXZlIiwicm9vdEVsZW1lbnQiLCJsaXZlRGF0YVZhbHVlIiwibGl2ZVByb3BzVmFsdWUiLCJxdWVyeVNlbGVjdG9yIiwibGl2ZUlkIiwiTG9hZGluZ1BsdWdpbiIsIl90aGlzMTEiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxMiIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmNCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczEzIiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwibW9kaWZpZXIiLCJwYXJzZUludCIsIl9hIiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGluZyIsImNsYXNzZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QiLCJjbGFzc0xpc3QiLCJfZWxlbWVudCRjbGFzc0xpc3QyIiwicmVtb3ZlIiwiYXR0cmlidXRlIiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luIiwiX3RoaXMxNCIsImhhbmRsZU1vZGVsU2V0IiwidmFsaWRhdGVkRmllbGRzIiwiUGFnZVVubG9hZGluZ1BsdWdpbiIsImlzQ29ubmVjdGVkIiwiX3RoaXMxNSIsIlBvbGxpbmdEaXJlY3RvciIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhZGRQb2xsIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJzdGFydEFsbFBvbGxpbmciLCJfdGhpczE2IiwiX3JlZjUiLCJzdG9wQWxsUG9sbGluZyIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyUG9sbGluZyIsIl90aGlzMTciLCJ0aW1lciIsInNldEludGVydmFsIiwiUG9sbGluZ1BsdWdpbiIsIl90aGlzMTgiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMTkiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiIsIl90aGlzMjAiLCJzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyIsIkhUTUxGb3JtRWxlbWVudCIsImdldE1vZGVsQmluZGluZyIsInRhcmdldEV2ZW50TmFtZSIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbyIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbzIiLCJDb21wb25lbnRSZWdpc3RyeSIsImNvbXBvbmVudHMiLCJXZWFrTWFwIiwicmVnaXN0ZXJDb21wb25lbnQiLCJkZWZpbml0aW9uIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIl90aGlzMjEiLCJjb3VudCIsIm1heENvdW50IiwiQ29tcG9uZW50UmVnaXN0cnkkMSIsImRlZmF1bHRfMSIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMyMiIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJoYW5kbGVDb25uZWN0ZWRDb250cm9sbGVyRXZlbnQiLCJpbml0aWFsaXplIiwiX3RoaXMyMyIsImhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50IiwicHJvcHNWYWx1ZSIsImRhdGFWYWx1ZSIsImZpbmdlcnByaW50VmFsdWUiLCJ1cmxWYWx1ZSIsImNzcmZWYWx1ZSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsIl90aGlzMjQiLCJfcmVmNiIsImRpc3BhdGNoRXZlbnQiLCJfdGhpczI1IiwiX3JlZjciLCJ1cGRhdGUiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI2IiwicmF3QWN0aW9uIiwiY3VycmVudFRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJHJlbmRlciIsIiR1cGRhdGVNb2RlbCIsImV2ZW50TmFtZSIsImZpbmFsVmFsdWUiLCJjaGlsZENvbnRyb2xsZXIiLCJkZXRhaWwiLCJjb250cm9sbGVyIiwibW9kZWxEaXJlY3RpdmVzIiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoIiwiYnViYmxlcyIsImNzcmYiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==