
class Token implements Token.IToken {
    type: any;
    value: any;
    line: any;
    column: any;
    static Token: any;
    static IToken: any;
    static Checker: any;
    static IChecker: { isTokenIdentifier(token: Token.IToken): token is Token.ITokenIdentifier; isTokenBang(token: Token.IToken): token is Token.ITokenBang; isTokenKeyword(token: Token.IToken): token is Token.ITokenKeyword; isTokenDelimiter(token: Token.IToken): token is Token.ITokenDelimiter; isTokenOperator(token: Token.IToken): token is Token.ITokenOperator; isTokenEnd(token: Token.IToken): token is Token.ITokenEnd; isTokenEOL(token: Token.IToken): token is Token.ITokenEOL; isTokenEOF(token: Token.IToken): token is Token.ITokenEOF; };
    static TokenType: any;
    constructor(type: Token.TokenType, value: Token.ITokenResult, line: number, column: number) {
        this.type = type;
        this.value = value;
        this.line = line;
        this.column = column;
    }
}
Token.Checker : Token.IChecker = {
    isTokenIdentifier(token: Token.IToken): token is Token.ITokenIdentifier {
        return token.type === Token.TokenType.Identifier;
    },
    isTokenBang(token: Token.IToken): token is Token.ITokenBang {
        return token.type === Token.TokenType.Bang;
    }
    , isTokenKeyword(token: Token.IToken): token is Token.ITokenKeyword {
        return token.type === Token.TokenType.Keyword;
    }
    , isTokenDelimiter(token: Token.IToken): token is Token.ITokenDelimiter {
        return token.type === Token.TokenType.Delimiter;
    }
    , isTokenOperator(token: Token.IToken): token is Token.ITokenOperator {
        return token.type === Token.TokenType.Operator;
    }
    , isTokenEnd(token: Token.IToken): token is Token.ITokenEnd {
        return token.type === Token.TokenType.EOF || token.type === Token.TokenType.EOL;
    },
    isTokenEOL(token: Token.IToken): token is Token.ITokenEOL {
        return token.type === Token.TokenType.EOL;
    },
    isTokenEOF(token: Token.IToken): token is Token.ITokenEOF {
        return token.type === Token.TokenType.EOF;
    }
}
function createToken(type, value, line, column) {
    return new Token(type, value, line, column);
}
export { Token as default, createToken };