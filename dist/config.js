"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SECRET$NODE_ENV$NODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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