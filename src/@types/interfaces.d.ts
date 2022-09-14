// treat as a module
export { };
export as namespace Lex;
declare type Token = {
    type: string;
    value: string;
    line: number;
    col: number;
};

declare type TokenList = Token[];

export declare enum TokenKeyword {
    VAR = 'var',
    LET = 'let',
    CONST = 'const',
    FUNCTION = 'function',
    TRUE = 'true',
    FALSE = 'false',
    IF = 'if',
    ELSE = 'else',
    RETURN = 'return',
    BREAK = 'break',
    CASE = 'case',
    CATCH = 'catch',
    CONTINUE = 'continue',
    DEBUGGER = 'debugger',
    DELETE = 'delete',
    DO = 'do',
    TRY = 'try',
    FINALLY = 'finally',
    IN = 'in',
    OF = 'of',
    INSTANCEOF = 'instanceof',
    NEW = 'new',
    THIS = 'this',
    WHILE = 'while',
    WITH = 'with',
    ASYNC = 'async',
    AWAIT = 'await',
    YIELD = 'yield',
    YIELD_STAR = 'yield*',
    GENERATOR_FUNCTION = 'function*',

}
export declare enum TokenOperator {
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
    INCREMENT = '++',
    DECREMENT = '--',
}
// Splitters.
export declare enum TokenDelimiter {
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
export declare enum TokenEOF {
    EOF = 'EOF'
}

export declare enum TokenCharData {
    TAB = '\t',
    NEWLINE = '\n',
    CARRIAGE_RETURN = '\r',
}


export declare enum TokenBinaryOperator {
    AMPERSAND = '&',
    BITWISE = '|',
    LSHIFT = '<<',
    RSHIFT = '>>',
    U_RSHIFT = '>>>',
}

export declare enum TokenExtra {
    SHEBANG = '#!',
    COMMENT = '//',
    COMMENT_START = '/*',
    COMMENT_END = '*/',
}

export declare enum TokenType {
    Keyword = 'TokenKeyword',
    Identifier = 'TokenIdentifier',
    Operator = 'TokenOperator',
    Delimiter = 'TokenDelimiter',
    EOF = 'TokenEOF'
}

export declare interface ILexerChecker {
    isIdentifer(c: string): boolean;
    isKeyword(c: string): boolean;
    isOperator(c: string): boolean;
    isDelimiter(c: string): boolean;
    isEOF(c: string): boolean;
}

export declare interface ITokenIterable {
    [Symbol.iterator](): ITokenIterator;
    [index: number]: Token;
}

export declare interface ITokenIterator {
    next(): ITokenResult;
}

export declare interface ITokenResult {
    value: Token;
    done: boolean;
}

export declare interface ILexer extends ITokenIterable, ITokenIterator {
    token: Token;
    Checker: ILexerChecker;
    tokens: TokenList;
    shift(): Token;
    peek(): Token;
    isEmpty(): boolean;
}

export declare interface ILexerConstructor {
    constructor(rules: TokenList): ILexer;
    new(rules: TokenList): ILexer;
    prototype: ILexer;
}

export declare var Lexer: ILexerConstructor;
