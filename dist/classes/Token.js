class Token {
    constructor(type, value, line, column) {
        this.type = type;
        this.value = value;
        this.line = line;
        this.column = column;
    }
}
Token.Checker;
Token.IChecker = {
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
function createToken(type, value, line, column) {
    return new Token(type, value, line, column);
}
export { Token as default, createToken };
