/// <reference path="../@types/index.d.ts" />

export var Checker: IChecker = {
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
    }
}