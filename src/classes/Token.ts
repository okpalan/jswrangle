
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
}

export default Token;