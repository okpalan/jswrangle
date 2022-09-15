/// <reference path="../@types/interfaces/tokenizer.d.ts"/>

var checker: Tokenizer.Checker = {
    isTokenBang(token: Tokenizer.IToken): token is Tokenizer.ITokenBang {
        return token.type === Tokenizer.TokenType.Bang;
    },
    isTokenKeyword(token: Tokenizer.IToken): token is Tokenizer.ITokenKeyword {
        return token.type === Tokenizer.TokenType.Keyword;
    },
    isTokenIdentifier(token: Tokenizer.IToken): token is Tokenizer.ITokenIdentifier {
        return token.type === Tokenizer.TokenType.Identifier;
    },
    isTokenOperator(token: Tokenizer.IToken): token is Tokenizer.ITokenOperator {
        return token.type === Tokenizer.TokenType.Operator;
    },
    isTokenDelimiter(token: Tokenizer.IToken): token is Tokenizer.ITokenDelimiter {
        return token.type === Tokenizer.TokenType.Delimiter;
    },
    isTokenEOL(token: Tokenizer.IToken): token is Tokenizer.ITokenEOL {
        return token.type === Tokenizer.TokenType.EOL;
    },
    isTokenEOF(token: Tokenizer.IToken): token is Tokenizer.ITokenEOF {
        return token.type === Tokenizer.TokenType.EOF;
    }
}
