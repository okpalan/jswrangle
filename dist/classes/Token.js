class Token {
    constructor(type, value, line, column) {
        this.type = type;
        this.value = value;
        this.line = line;
        this.column = column;
    }
    static isTokenType(token, type) {
        return token.type === type;
    }
    create(type, value, line, column) {
        return new Token(type, value, line, column);
    }
}
// write a function to check a token types.
export default Token;
