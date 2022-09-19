const createToken = require('../dist/modules/tokens');
const {assert} = require('chai');

describe("createToken", () => {
    it("should return an Token.ITokenEnd", () => {
        const token = createToken(
            Token.TokenType.EOL,
            Token.TokenEnd.EOL,
            1,
            2
        );
        assert.ok(checker.isTokenEnd(token));
    });
    it("should return an Token.ITokenEOF", () => {
        const token = createToken(
            Token.TokenType.EOF,
            Token.TokenEnd.EOF,
            1,
            2
        );
        assert.ok(checker.isTokenEOF(token));
    });
    it("should return an Token.ITokenEOL", () => {
        const token = createToken(
            Token.TokenType.EOL,
            Token.TokenEnd.EOL,
            1,
            2
        );
        assert.ok(checker.isTokenEOL(token));
    });
    it("should return an Token.ITokenIdentifier", () => {
        const token = createToken(
            Token.TokenType.Identifier,
            "test",
            1,
            2
        );
        assert.ok(checker.isTokenIdentifier(token));
    });
    it("should return an Token.ITokenKeyword", () => {
        const token = createToken(
            Token.TokenType.Keyword,
            Token.TokenKeyword.FUNCTION,
            1,
            2
        );
        assert.ok(checker.isTokenKeyword(token));
    });
    it("should return an Token.ITokenOperator", () => {
        const token = createToken(
            Token.TokenType.Operator,
            Token.TokenOperator.PLUS,
            1,
            2
        );
        assert.ok(checker.isTokenOperator(token));
    });
    it("should return an Token.ITokenDelimiter", () => {
        const token = createToken(
            Token.TokenType.Delimiter,
            Token.TokenDelimiter.COMMA,
            1,
            2
        );
        assert.ok(checker.isTokenDelimiter(token));
    });
    it("should return an Token.ITokenBang", () => {
        const token = createToken(
            Token.TokenType.Bang,
            Token.TokenBang.SHEBANG,
            1,
            2
        );
        assert.ok(checker.isTokenBang(token));
    });
});