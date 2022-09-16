import Token from "./tokenizer";

export { };
export as namespace Lexer;

export declare type IChecker = {
    isTokenBang(token: Token.IToken): token is Token.ITokenBang,
    isTokenKeyword(token: Token.IToken): token is Token.ITokenKeyword,
    isTokenDelimiter(token: Token.IToken): token is Token.ITokenDelimiter,
    isTokenOperator(token: Token.IToken): token is Token.ITokenOperator,
    isTokenEnd(token: Token.IToken): token is Token.ITokenEnd,
    isTokenEOL(token: Token.IToken): token is Token.ITokenEOL;
    isTokenEOF(token: Token.IToken): token is Token.ITokenEOF;
}


