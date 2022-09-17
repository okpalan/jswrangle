/// <reference path="../@types/interfaces/lib.d.ts"/>
import { IChecker } from "../@types/interfaces/lexer";
import Token from "../@types/interfaces/tokenizer";

var checker: IChecker = {
    isTokenIdentifier: function (token: Token.IToken): token is Token.ITokenIdentifier {
        return token.type === Token.TokenType.Identifier;
    },
    
    isTokenBang: function (token: Token.IToken): token is Token.ITokenBang {
        return token.type === Token.TokenType.Bang;
    }
    , isTokenKeyword: function (token: Token.IToken): token is Token.ITokenKeyword {
        return token.type === Token.TokenType.Keyword;
    }
    , isTokenDelimiter: function (token: Token.IToken): token is Token.ITokenDelimiter {
        return token.type === Token.TokenType.Delimiter;
    }
    , isTokenOperator: function (token: Token.IToken): token is Token.ITokenOperator {
        return token.type === Token.TokenType.Operator;
    }
    , isTokenEnd: function (token: Token.IToken): token is Token.ITokenEnd {
        return token.type === Token.TokenType.EOF || token.type === Token.TokenType.EOL;
    },
    isTokenEOL: function (token: Token.IToken): token is Token.ITokenEOL {
        return token.type === Token.TokenType.EOL;
    },
    isTokenEOF: function (token: Token.IToken): token is Token.ITokenEOF {
        return token.type === Token.TokenType.EOF;
    }
}

// class Lexer {
//     public index: number;
//     public line: number;
//     public column: number;
//     public length: number;
//     public current: any;
//     constructor(public source: string) {
//         this.source = source;
//         this.index = 0;
//         this.line = 1;
//         this.column = 1;
//         this.length = source.length;
//         this.current = null;
//         return null;
//     }
//     public next() {
//         if (this.index < this.length) {
//             this.current = this.source[this.index];
//             this.index++;
//             this.column++;
//             return this.current;
//         }
//     }
//     peek() {
//         if (this.index < this.length) {
//             return this.source[this.index];
//         }
//         return null;
//     }
//     checker: IChecker = Checker;
// }

function* Lexer(source: string) {
    for (const token of source) {
        if (checker.isTokenEOL(token)) {
            yield {
                type: Token.TokenType.EOL,
                value: Token.TokenEnd.EOL,
                line: token.line,
                column: token.column
            };
        } else if (checker.isTokenEOF(token)) {
            yield {
                type: Token.TokenType.EOF,
                value: Token.TokenEnd.EOF,
                line: token.line,
                column: token.column
            };
        } else if (checker.isTokenBang(token)) {
            yield {
                type: Token.TokenType.Bang,
                value: Token.TokenBang.SHEBANG,
                line: token.line,
                column: token.column
            };
        } else if (checker.isTokenKeyword(token)) {
            yield {
                type: Token.TokenType.Keyword,
                value: token.value,
                line: token.line,
                column: token.column
            };
        } else if (checker.isTokenDelimiter(token)) {
            yield {
                type: Token.TokenType.Delimiter,
                value: token.value,
                line: token.line,
                column: token.column
            };
        } else if (checker.isTokenOperator(token)) {
            yield {
                type: Token.TokenType.Operator,
                value: token.value,
                line: token.line,
                column: token.column
            };
        } else if (checker.isTokenIdentifier(token)) {
            yield {
                type: Token.TokenType.Identifier,
                value: token.value,
                line: token.line,
                column: token.column
            };
        }
    }
}
