// treat as a module(node as a script)
export { };
export as namespace Token;

//declare Token type
declare type TokenType = {
    type: string;
    value: string;
    line: number;
    col: number;
};

export declare type TokenList = TokenType[];
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
export declare enum TokenEnd {
    EOL='EOL',
    EOF = 'EOF'
}

export declare enum TokenControlChar {
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

export declare enum TypeOfToken {
    Keyword = 'TokenKeyword',
    Identifier = 'TokenIdentifier',
    Operator = 'TokenOperator',
    Delimiter = 'TokenDelimiter',
    EOF = 'TokenEOF'
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

