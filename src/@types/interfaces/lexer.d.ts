/// <reference path="./token.d.ts"/>
export { }
export as namespace Lex;

// For/From 'TypeOfToken' enum
export declare function isKeyword(c: string): boolean;
export declare function isIdentifier(c: string): boolean;
export declare function isOperator(c: string): boolean;
export declare function isDelimiter(c: string): boolean;
export declare function isEOF(c: string): boolean;

export declare interface ILexer { 
    
}