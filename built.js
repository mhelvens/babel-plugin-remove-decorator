"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        visitor: _defineProperty({}, decoratableTypes.join('|'), function (path) {
            path.node.decorators = null;
        })
    };
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var decoratableTypes = ["ArrayPattern", "AssignmentPattern", "ClassExpression", "ClassDeclaration", "ClassMethod", "ClassProperty", "Identifier", "ObjectMethod", "ObjectPattern", "ObjectProperty", "RestElement"];
