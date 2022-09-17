import Token from "../@types/interfaces/tokenizer";
export var checker = {
    isTokenIdentifier(token) {
        return token.type === Token.TokenType.Identifier;
    },
    isTokenBang(token) {
        return token.type === Token.TokenType.Bang;
    },
    isTokenKeyword(token) {
        return token.type === Token.TokenType.Keyword;
    },
    isTokenDelimiter(token) {
        return token.type === Token.TokenType.Delimiter;
    },
    isTokenOperator(token) {
        return token.type === Token.TokenType.Operator;
    },
    isTokenEnd(token) {
        return token.type === Token.TokenType.EOF || token.type === Token.TokenType.EOL;
    },
    isTokenEOL(token) {
        return token.type === Token.TokenType.EOL;
    },
    isTokenEOF(token) {
        return token.type === Token.TokenType.EOF;
    }
};
