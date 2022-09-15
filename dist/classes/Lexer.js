var checker = {
    isTokenBang: function (token) {
        return token.type === Tokenizer.TokenType.Bang;
    },
    isTokenKeyword: function (token) {
        return token.type === Tokenizer.TokenType.Keyword;
    },
    isTokenIdentifier: function (token) {
        return token.type === Tokenizer.TokenType.Identifier;
    },
    isTokenOperator: function (token) {
        return token.type === Tokenizer.TokenType.Operator;
    },
    isTokenDelimiter: function (token) {
        return token.type === Tokenizer.TokenType.Delimiter;
    },
    isTokenEOL: function (token) {
        return token.type === Tokenizer.TokenType.EOL;
    },
    isTokenEOF: function (token) {
        return token.type === Tokenizer.TokenType.EOF;
    }
};
