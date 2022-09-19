
class Token implements Token.IToken {
    type: any;
    value: any;
    line: any;
    column: any;
    constructor(type: Token.TokenType, value: Token.ITokenResult, line: number, column: number) {
        this.type = type;
        this.value = value;
        this.line = line;
        this.column = column;
    }
    static isTokenType(token: Token.IToken, type) {
        return token.type === type;
    }
    static function create(type, value, line, column) {
        return new Token(type, value, line, column);
    }
}



// write a function to check a token types.
export default Token;