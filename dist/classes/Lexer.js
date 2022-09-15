var TokenChecker = {
    isTokenKeyword: function (char) {
        return Tokenizer.TokenKeyword.hasOwnProperty(char);
    },
    isTokenIdentifier: function (char) {
        return /[a-zA-Z]/.test(char);
    },
    isTokenOperator: function (char) {
        return Tokenizer.TokenOperator.hasOwnProperty(char);
    },
    isTokenDelimiter: function (char) {
        return Tokenizer.TokenDelimiter.hasOwnProperty(char);
    },
    isTokenBang: function (char) {
        return Tokenizer.TokenBang.hasOwnProperty(char);
    },
    isTokenEnd: function (char) {
        return Tokenizer.TokenEnd.hasOwnProperty(char);
    }
};
