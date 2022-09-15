/// <reference path="./token.d.ts"/>

import { TokenType } from "./token";

export { }
export as namespace Tokenizer;

// For/From 'TypeOfToken' enum
export declare function isKeyword(c: string): boolean;
export declare function isIdentifier(c: string): boolean;
export declare function isOperator(c: string): boolean;
export declare function isDelimiter(c: string): boolean;
export declare function isEOF(c: string): boolean;
export declare function isEOL(c: string): boolean;

export declare interface ITokenizer {
    [Symbol.iterator](): ITokenIterator;
    [index: number]: TokenType;
}

export declare interface ITokenIterator {
    next(): ITokenResult;
}

export declare interface ITokenResult {
    value: TokenType;
    done: boolean;
}
