// implement a lexer with expremental decorator using 
// ../@types/interfaces/lexer.d.ts and ../@types/interfaces/token.d.ts
/// <reference path="../@types/interfaces/lexer.d.ts"/>
/// <reference path="../@types/interfaces/tokenizer.d.ts"/>

function checkTokenType(token: IToken,value: any){
    return token.type === value;
}