var TokenType;
(function (TokenType) {
    TokenType["Bang"] = "Bang";
    TokenType["Keyword"] = "Keyword";
    TokenType["Delimiter"] = "Delimiter";
    TokenType["Operator"] = "Operator";
    TokenType["Identifier"] = "Identifier";
    TokenType["EOL"] = "EOL";
    TokenType["EOF"] = "EOF";
})(TokenType || (TokenType = {}));

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
