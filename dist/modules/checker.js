"use strict";
/// <reference path="../@types/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checker = void 0;
exports.Checker = {
    isTokenBang: function (token) {
        return token.type === Token.TokenType.Bang;
    },
    isTokenKeyword: function (token) {
        return token.type === Token.TokenType.Keyword;
    },
    isTokenDelimiter: function (token) {
        return token.type === Token.TokenType.Delimiter;
    },
    isTokenOperator: function (token) {
        return token.type === Token.TokenType.Operator;
    },
    isTokenEnd: function (token) {
        return token.type === Token.TokenType.EOF || token.type === Token.TokenType.EOL;
    }
};
