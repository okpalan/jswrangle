// treat as a module(node as a script)
export { };
export as namespace Token;
export declare type TokenList = TokenType[];
// All the Valid types of token
export declare enum TokenType {
    Keyword = 'Keyword',
    Delimiter = 'Delimiter',
    Operator = 'Operator',
    Identifier = 'Identifier',
    Bang = 'Bang',
    EOL = 'EOL',
    EOF = 'EOF'
}
export declare enum TokenKeyword {
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
}
export declare enum TokenUnaryOperator {
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
export declare enum TokenEnd {
    EOL = 'EOL',
    EOF = 'EOF'
}

export declare enum TokenControlCharacter {
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

export declare enum TokenComment {
    COMMENT = '//',
    COMMENT_START = '/*',
    COMMENT_END = '*/',
}

export declare enum TokenBang {
    SHEBANG = '#!',
}

export declare enum TokenString {
    SINGLE_QUOTE = '\'',
    DOUBLE_QUOTE = '"',
    BACK_TICK = '`',
}

//interfaces to check enumcast.

export declare interface IToken {
    type: TokenType;
    value: string;
    line: number;
    column: number;
}
export declare interface ITokenBang extends IToken {
    type: TokenType.Bang
    value: TokenBang
}

export declare interface ITokenKeyword extends IToken {
    type: TokenType.Keyword;
    value: TokenKeyword;
}

export declare interface ITokenIdentifier extends IToken {
    type: TokenType.Identifier;
    value: string;
}

export declare interface ITokenOperator extends IToken {
    type: TokenType.Operator;
    value: TokenBinaryOperator | TokenOperator | TokenUnaryOperator;
}

export declare interface ITokenDelimiter extends IToken {
    type: TokenType.Delimiter;
    value: TokenDelimiter;
}

export declare interface ITokenEnd extends IToken {
    type: TokenType.EOF | TokenType.EOL,
    value: TokenEnd
}

export declare interface ITokenEOL extends IToken {
    type: TokenType.EOL;
    value: TokenEnd.EOL;
}

export declare interface ITokenEOF extends IToken {
    type: TokenType.EOF;
    value: TokenEnd.EOF;
}

export declare interface ITokenIterable {
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

