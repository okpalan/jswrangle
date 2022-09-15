// implement a lexer with expremental decorator using 
// ../@types/interfaces/lexer.d.ts and ../@types/interfaces/token.d.ts
/// <reference path="../@types/interfaces/lexer.d.ts"/>
/// <reference path="../@types/interfaces/tokenizer.d.ts"/>

var TokenChecker: Tokenizer.IChecker = {
    isTokenKeyword: function (char: string): boolean {
        return Tokenizer.TokenKeyword.hasOwnProperty(char)
    },
    isTokenIdentifier: function (char: string): boolean {
        return /[a-zA-Z]/.test(char)
    },
    isTokenOperator: function (char: string): boolean {
        return Tokenizer.TokenOperator.hasOwnProperty(char)
    },
    isTokenDelimiter: function (char: string): boolean {
        return Tokenizer.TokenDelimiter.hasOwnProperty(char)
    },
    isTokenBang: function (char: string): boolean {
        return Tokenizer.TokenBang.hasOwnProperty(char)
    },
    isTokenEnd: function (char: string): boolean {
        return Tokenizer.TokenEnd.hasOwnProperty(char)
    }
}