/// <reference path="../@types/interfaces/lib.d.ts"/>
var Checker = {
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
    },
    isTokenEOL: function (token) {
        return token.type === Token.TokenType.EOL;
    },
    isTokenEOF: function (token) {
        return token.type === Token.TokenType.EOF;
    }
};
