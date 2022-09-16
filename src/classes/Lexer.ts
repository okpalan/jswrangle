/// <reference path="../@types/interfaces/lib.d.ts"/>
import Token from "../@types/interfaces/tokenizer";

var Checker: IChecker = {
    isTokenBang: function (token: Token.IToken): token is Token.ITokenBang {
        return token.type === Token.TokenType.Bang;
    }
    , isTokenKeyword: function (token: Token.IToken): token is Token.ITokenKeyword {
        return token.type === Token.TokenType.Keyword;
    }
    , isTokenDelimiter: function (token: Token.IToken): token is Token.ITokenDelimiter {
        return token.type === Token.TokenType.Delimiter;
    }
    , isTokenOperator: function (token: Token.IToken): token is Token.ITokenOperator {
        return token.type === Token.TokenType.Operator;
    }
    , isTokenEnd: function (token: Token.IToken): token is Token.ITokenEnd {
        return token.type === Token.TokenType.EOF || token.type === Token.TokenType.EOL;
    },
    isTokenEOL: function (token: Token.IToken): token is Token.ITokenEOL {
        return token.type === Token.TokenType.EOL;
    },
    isTokenEOF: function (token: Token.IToken): token is Token.ITokenEOF {
        return token.type === Token.TokenType.EOF;
    }
}

function* Lexer(source: string) {
    this.source = source;
    this.index = 0;
    this.line = 1;
    this.column = 1;
    this.length = source.length;
    this.current = null;
    this.next = function () {
        if (this.index < this.length) {
            this.current = this.source[this.index];
            this.index++;
            this.column++;
            return this.current;
        }
        return null;
    }
    this.peek = function () {
        if (this.index < this.length) {
            return this.source[this.index];
        }
        return null;
    }
}

export default Lexer;

