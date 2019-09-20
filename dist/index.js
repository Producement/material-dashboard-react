"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

var _Admin = require("./layouts/Admin.js");

var _Admin2 = _interopRequireDefault(_Admin);

var _RTL = require("./layouts/RTL.js");

var _RTL2 = _interopRequireDefault(_RTL);

require("assets/css/material-dashboard-react.css?v=1.8.0");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hist = (0, _history.createBrowserHistory)();

// core components
/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.Router,
  { history: hist },
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: "/admin", component: _Admin2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: "/rtl", component: _RTL2.default }),
    _react2.default.createElement(_reactRouterDom.Redirect, { from: "/", to: "/admin/dashboard" })
  )
), document.getElementById("root"));