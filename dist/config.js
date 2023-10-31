"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _SECRET$NODE_ENV$NODE;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var dotenv = require('dotenv');
var path = require('path');
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});
var _default = (_SECRET$NODE_ENV$NODE = {
  SECRET: 'PATRIA',
  NODE_ENV: process.env.NODE_ENV || 'development'
}, _defineProperty(_SECRET$NODE_ENV$NODE, "NODE_ENV", process.env.NODE_ENV || 'development'), _defineProperty(_SECRET$NODE_ENV$NODE, "HOST", process.env.HOST || '127.0.0.1'), _defineProperty(_SECRET$NODE_ENV$NODE, "PORT", process.env.PORT || 3000), _SECRET$NODE_ENV$NODE);
exports["default"] = _default;