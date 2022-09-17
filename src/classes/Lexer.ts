/// <reference path="../@types/interfaces/lib.d.ts"/>
import Token, { makeToken } from "../@types/interfaces/tokenizer";
import createToken from "../modules/createToken";
import { checker } from "../modules/checker";
function* Lexer(source: string): IterableIterator<Token.IToken> {
    for (const token of source) {
        if (checker.isTokenEOL(token)) {
            yield createToken(
                Token.TokenType.EOL,
                Token.TokenEnd.EOL,
                token.line,
                token.column
            );
        } else if (checker.isTokenEOF(token)) {
            yield createToken(
                Token.TokenType.EOF,
                Token.TokenEnd.EOF,
                token.line,
                token.column
            );
        } else if (checker.isTokenBang(token)) {
            yield createToken(
                Token.TokenType.Bang,
                Token.TokenBang.SHEBANG,
                token.line,
                token.column
            );
        } else if (checker.isTokenKeyword(token)) {
            yield createToken(
                Token.TokenType.Keyword,
                token.value,
                token.line,
                token.column
            );
        } else if (checker.isTokenDelimiter(token)) {
            yield createToken(
                Token.TokenType.Delimiter,
                token.value,
                token.line,
                token.column
            );
        } else if (checker.isTokenOperator(token)) {
            yield createToken(
                Token.TokenType.Operator,
                token.value,
                token.line,
                token.column
            );
        } else if (checker.isTokenIdentifier(token)) {
            yield createToken(
                Token.TokenType.Identifier,
                token.value,
                token.line,
                token.column
            );
        }
    }
}

export = Lexer;