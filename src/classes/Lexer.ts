import Tokenizer from "../@types/interfaces/tokenizer";
import createToken from "../modules/createToken";
import { checker } from "../modules/checkToken";
import Token from "./Token";

function* Lexer(source: string): Generator<Tokenizer.IToken, void, void> {
    for (const token of source) {
        if (checker.isTokenEOL(token)) {
            yield new Token(
                Tokenizer.TokenType.EOL,
                Tokenizer.TokenEnd.EOL,
                token.line,
                token.column
            );
        } else if (checker.isTokenEOF(token)) {
            yield new Token(
                Tokenizer.TokenType.EOF,
                Tokenizer.TokenEnd.EOF,
                token.line,
                token.column
            );
        } else if (checker.isTokenBang(token)) {
            yield new Token(
                Tokenizer.TokenType.Bang,
                Tokenizer.TokenBang.SHEBANG,
                token.line,
                token.column
            );
        } else if (checker.isTokenKeyword(token)) {
            yield new Token(
                Tokenizer.TokenType.Keyword,
                token.value,
                token.line,
                token.column
            );
        } else if (checker.isTokenDelimiter(token)) {
            yield createToken(
                Tokenizer.TokenType.Delimiter,
                token.value,
                token.line,
                token.column
            );
        } else if (checker.isTokenOperator(token)) {
            yield new Token(
                Tokenizer.TokenType.Operator,
                token.value,
                token.line,
                token.column
            );
        } else if (checker.isTokenIdentifier(token)) {
            yield new Token(
                Tokenizer.TokenType.Identifier,
                token.value,
                token.line,
                token.column
            );
        }
    }
}

export default Lexer;