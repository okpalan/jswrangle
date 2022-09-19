declare module 'tokenzier' {
    export enum TokenType {
        Bang = 'Bang',
        Keyword = 'Keyword',
        Delimiter = 'Delimiter',
        Operator = 'Operator',
        Identifier = 'Identifier',
        EOL = 'EOL',
        EOF = 'EOF'
    }
    export enum TokenBinaryOperator {
        AMPERSAND = '&',
        BITWISE = '|',
        LSHIFT = '<<',
        RSHIFT = '>>',
        U_RSHIFT = '>>>',
    }
    export type TokenList = TokenType[];

    export interface ITokenConstructor {
        new(source: string): IToken;
        prototype: IToken;
    }
    export enum TokenKeyword {
        // Reserved Keywords
        BREAK = 'break',
        CASE = 'case',
        CATCH = 'catch',
        CLASS = 'class',
        CONST = 'const',
        CONTINUE = 'continue',
        DEBUGGER = 'debugger',
        DEFAULT = 'default',
        DELETE = 'delete',
        DO = 'do',
        ELSE = 'else',
        EXPORT = 'export',
        EXTENDS = 'extends',
        FINALLY = 'finally',
        FOR = 'for',
        FUNCTION = 'function',
        IF = 'if',
        IMPORT = 'import',
        IN = 'in',
        INSTANCEOF = 'instanceof',
        NEW = 'new',
        RETURN = 'return',
        SUPER = 'super',
        SWITCH = 'switch',
        THIS = 'this',
        THROW = 'throw',
        TRY = 'try',
        TYPEOF = 'typeof',
        VAR = 'var',
        VOID = 'void',
        WHILE = 'while',
        WITH = 'with',
        // Strict Mode
        STRICT_MODE = 'use strict'
    }
    export enum TokenOperator {
        PLUS = '+',
        MINUS = '-',
        ASTERISK = '*',
        SLASH = '/',
        LT = '<',
        GT = '>',
        EQ = '==',
        NOT_EQ = '!=',
        ASSIGN = '=',
        MODULO = '%',
        PLUS_EQUAL = '+=',
        MINUS_EQUAL = '-=',
        ASTERISK_EQUAL = '*=',
        SLASH_EQUAL = '/=',
        LT_EQUAL = '<=',
        GT_EQUAL = '>=',
        DEEP_STRICT_EQUAL = '===',
        NOT_EQUAL = '!==',
        MODULO_EQUAL = '%=',
    }
    export enum TokenUnaryOperator {
        INCREMENT = '++',
        DECREMENT = '--',
    }
    // Splitters.
    export enum TokenDelimiter {
        COMMA = ',',
        SEMICOLON = ';',
        LPAREN = '(',
        RPAREN = ')',
        LBRACE = '{',
        RBRACE = '}',
        LBRACKET = '[',
        RBRACKET = ']',
        DOT = '.'
    }
    export interface IToken {
        type: TokenType;
        value: string;
        line: number;
        column: number;
    }
    export enum TokenBang {
        SHEBANG = '#!',
    }

    export interface ITokenBang extends IToken {
        type: TokenType.Bang
        value: TokenBang
    }

    export interface ITokenKeyword extends IToken {
        type: TokenType.Keyword;
        value: TokenKeyword;
    }

    export interface ITokenIdentifier extends IToken {
        type: TokenType.Identifier;
        value: string;
    }

    export interface ITokenOperator extends IToken {
        type: TokenType.Operator;
        value: TokenBinaryOperator | TokenOperator | TokenUnaryOperator;
    }

    export interface ITokenDelimiter extends IToken {
        type: TokenType.Delimiter;
        value: TokenDelimiter;
    }



    export interface ITokenEOL extends IToken {
        type: TokenType.EOL;
        value: TokenEnd.EOL;
    }

    export interface ITokenEOF extends IToken {
        type: TokenType.EOF;
        value: TokenEnd.EOF;
    }
    export enum TokenEnd {
        EOL = 'EOL',
        EOF = 'EOF'
    }

    export class Tokenizer {
        constructor(source: string);
        tokenize(): IToken[];
    }
}
