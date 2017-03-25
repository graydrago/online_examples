/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _init;

var _config = __webpack_require__(2);

var _core = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Button = (_dec = (0, _core.property)("string"), _dec2 = (0, _core.property)("color"), _dec3 = (0, _core.property)("number"), (_class = function () {
    function Button() {
        _classCallCheck(this, Button);

        this._caption = "";
        this._caption_dom = null;
        this._dom = null;
        this._color = "#ffffff";
        this._tabIndex = 0;
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var caption = document.createElement("span");
            caption.classList.add("caption");
            caption.innerHTML = this._caption;

            var elem = document.createElement("div");
            elem.classList.add("button");
            elem.appendChild(caption);

            this._dom = elem;
            this._caption_dom = caption;

            return this._dom;
        }
    }, {
        key: "caption",
        value: function caption(v) {
            if (v === undefined) {
                return this._caption;
            }

            this._caption = v;
            if (!!this._caption_dom) {
                this._caption_dom.innerHTML = v;
            }

            // for chaining
            return this;
        }
    }, {
        key: "color",
        value: function color(v) {
            if (v === undefined) {
                return this._color;
            }

            this._color = v;
            if (!!this._dom) {
                this._dom.style.color = v;
            }

            // for chaining
            return this;
        }
    }, {
        key: "click",
        value: function click(f) {
            var _this = this;

            this._dom.addEventListener("click", function (e) {
                f.call(_this, e);
            });
        }
    }]);

    return Button;
}(), (_applyDecoratedDescriptor(_class.prototype, "caption", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "caption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "color", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "color"), _class.prototype), _applyDecoratedDescriptor(_class, "tabIndex", [_dec3], (_init = Object.getOwnPropertyDescriptor(_class, "tabIndex"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.Button = Button;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Editor = function () {
    function Editor() {
        _classCallCheck(this, Editor);

        this._dom = null;
    }

    _createClass(Editor, [{
        key: "render",
        value: function render() {
            var editor = document.createElement("div");
            editor.classList.add("editor");

            this._dom = editor;
            return this._dom;
        }
    }, {
        key: "makePropertyList",
        value: function makePropertyList(object) {
            var meta = object.propertyList;
            var list = document.createElement("div");
            var eventType = "keyup";

            list.classList.add("list");

            var _loop = function _loop(key) {
                var line = document.createElement("div");
                var name = document.createElement("span");
                var input = document.createElement("input");

                if (meta[key].type === "color") {
                    input.type = "color";
                    eventType = "input";
                }

                line.classList.add("line");
                name.innerHTML = key;
                input.value = object[key]();

                line.appendChild(name);
                line.appendChild(input);
                list.appendChild(line);

                input.addEventListener(eventType, function (e) {
                    object[key](input.value);
                });
            };

            for (var key in meta) {
                _loop(key);
            }

            this._dom.innerHTML = "";
            this._dom.appendChild(list);
        }
    }]);

    return Editor;
}();

exports.Editor = Editor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
    function Config() {
        _classCallCheck(this, Config);

        if (Config._instance !== undefined) {
            throw new Error("[Config] Config instance should be created only once.");
        }

        this._config = {};
    }

    _createClass(Config, [{
        key: "app",
        value: function app() {
            if (Config._instance === undefined) {
                Config._instance = new Config();
            }

            return Config._instance;
        }
    }, {
        key: "add",
        value: function add(name, config) {
            this._config[name] = config;
        }
    }, {
        key: "get",
        value: function get(name) {
            return this._config[name];
        }
    }]);

    return Config;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _button = __webpack_require__(0);

var _editor = __webpack_require__(1);

window.addEventListener("load", function () {
    var button1 = new _button.Button();
    var button2 = new _button.Button();
    var editor = new _editor.Editor();

    button1.caption("Ok");
    button2.caption("Cancel");

    document.body.appendChild(button1.render());
    document.body.appendChild(button2.render());
    document.body.appendChild(editor.render());

    button1.click(function () {
        editor.makePropertyList(button1);
    });
    button2.click(function () {
        editor.makePropertyList(button2);
    });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function property(type) {
    return function (target, key, descriptor) {
        var options = {
            type: type,
            active: true
        };

        if (typeof target === "function") {
            descriptor.writable = true;
            descriptor.configurable = true;
            target.prototype[key] = function (v) {
                if (v === undefined) {
                    return this["_" + key];
                }
                this["_" + key] = v;

                // for chaining
                return this;
            };

            if (target.prototype.propertyList === undefined) {
                target.prototype.propertyList = {};
            }
            target.prototype.propertyList[key] = options;
        } else {
            if (target.propertyList === undefined) {
                target.propertyList = {};
            }
            target.propertyList[key] = options;
        }

        return descriptor;
    };
}

exports.property = property;

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map