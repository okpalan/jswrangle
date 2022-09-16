/// <reference path="./tokenizer.d.ts"/>
export { };
export as namespace Checker;
export declare interface IChecker {
    isTokenBang(token: Token.IToken): token is Token.ITokenBang,
    isTokenKeyword(token: Token.IToken): token is Token.ITokenKeyword,
    isTokenDelimiter(token: Token.IToken): token is Token.ITokenDelimiter,
    isTokenOperator(token: Token.IToken): token is Token.ITokenOperator,
    isTokenEnd(token: Token.IToken): token is Token.ITokenEnd,
    isTokenEOL(token: Token.IToken): token is Token.ITokenEOL;
    isTokenEOF(token: Token.IToken): token is Token.ITokenEOF;
}


