/// <reference path="./token.d.ts"/>
export { }
export as namespace Tokenizer;

export declare type Constructor<T> = new (...args: any[]) => T;

//  an interface for a TokenizerChecker class
export declare interface Checker {
    isKeyword(c: string): boolean;
    isIdentifier(c: string): boolean;
    isOperator(c: string): boolean;
    isDelimiter(c: string): boolean;
    isBang(c: string): boolean;
    isEOL(c: string): boolean;
    isEOF(c: string): boolean;
}

