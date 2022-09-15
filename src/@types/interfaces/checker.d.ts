/// <reference path="./tokenizer.d.ts"/>
export {};
/// write a checker interface and types using ./parser.d.ts and ./tokenizer.d.ts.

export declare interface IChecker {
    isTokenBang(token:Token.IToken): token is Token.ITokenBang,    
    isTokenKeyword(token:Token.IToken): token is Token.ITokenKeyword,
    isTokenDelimiter(token:Token.IToken): token
}
