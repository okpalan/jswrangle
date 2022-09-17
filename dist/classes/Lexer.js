import Token from "../@types/interfaces/tokenizer";
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
class Lexer {
    constructor(source) {
        this.source = source;
        this.index = 0;
        this.line = 1;
        this.column = 1;
        this.length = source.length;
        this.current = null;
        return null;
    }
    next() {
        if (this.index < this.length) {
            this.current = this.source[this.index];
            this.index++;
            this.column++;
            return this.current;
        }
    }
    peek() {
        if (this.index < this.length) {
            return this.source[this.index];
        }
        return null;
    }
}
