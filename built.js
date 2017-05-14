"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        inherits: _babelPluginSyntaxDecorators2.default,
        visitor: _defineProperty({}, decoratableTypes.join('|'), function (path) {
            path.node.decorators = null;
        })
    };
};

var _babelPluginSyntaxDecorators = require("babel-plugin-syntax-decorators");

var _babelPluginSyntaxDecorators2 = _interopRequireDefault(_babelPluginSyntaxDecorators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var decoratableTypes = ["ArrayPattern", "AssignmentPattern", "ClassExpression", "ClassDeclaration", "ClassMethod", "ClassProperty", "Identifier", "ObjectMethod", "ObjectPattern", "ObjectProperty", "RestElement"];
