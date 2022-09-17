import Token from "./tokenizer";

export { };
export as namespace Lexer;

export declare type IChecker = {
    isTokenIdentifier(token: Token.ITokenIdentifier): token is Token.ITokenIdentifier;
    isTokenBang(token: Token.IToken): token is Token.ITokenBang,
    isTokenKeyword(token: Token.IToken): token is Token.ITokenKeyword,
    isTokenDelimiter(token: Token.IToken): token is Token.ITokenDelimiter,
    isTokenOperator(token: Token.IToken): token is Token.ITokenOperator,
    isTokenEnd(token: Token.IToken): token is Token.ITokenEnd,
    isTokenEOL(token: Token.IToken): token is Token.ITokenEOL;
    isTokenEOF(token: Token.IToken): token is Token.ITokenEOF;
}

export declare interface ILexer {
    index: number;
    line: number;
    column: number;
    length: number;
    current: any;
    next(): any;
    peek(): any;
}

export declare interface ILexerConstructor {
    new(source: string): ILexer;
    prototype: ILexer;
    checker: IChecker;
}
