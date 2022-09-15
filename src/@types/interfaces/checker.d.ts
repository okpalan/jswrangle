/// <reference path="./tokenizer.d.ts"/>
export {};
/// write a checker interface and types using ./parser.d.ts and ./tokenizer.d.ts.

export declare interface IChecker {
    isTokenBang(token:IToken): token is IBangToken,    
    isTokenKeyword(token:IToken): token is IKeywordToken,
}
