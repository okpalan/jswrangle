function createToken(type, value, line, column) {
    return new Token(type, value, line, column);
}
export = createToken;