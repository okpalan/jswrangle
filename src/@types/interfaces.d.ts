// treat this file as a module.
export { }

declare type Token = string | number;
declare type TokenList = Token[];

declare enum TokenKeyword {
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
    WITH = 'with'
}
declare enum TokenOperator {
    PLUS = '+',
    MINUS = '-',
    ASTERISK = '*',
    SLASH = '/',
    LT = '<',
    GT = '>',
    EQ = '==',
    NOT_EQ = '!=',
    ASSIGN = '='
}
declare enum TokenDelimiter {
    COMMA = ',',
    SEMICOLON = ';',
    LPAREN = '(',
    RPAREN = ')',
    LBRACE = '{',
    RBRACE = '}',
    LBRACKET = '[',
    RBRACKET = ']'
}
declare enum TokenEOF {
    EOF = 'EOF'
}

declare enum TokenETC {
    SHEBANG = '#!',
    COMMENT = '//',
    IDENT = '\t',
    COMMENT_START = '/*',
    COMMENT_END = '*/',
}

declare enum TokenType {
    Keyword = 'TokenKeyword',
    Operator = 'TokenOperator',
    Delimiter = 'TokenDelimiter',
    ETC = 'TokenETC',
    EOF = 'TokenEOF'
}

declare interface ITokenIterable {
    [Symbol.iterator](): ITokenIterator;
    [index: number]: Token;
}

declare interface ITokenIterator {
    next(): ITokenResult;
}

declare interface ITokenResult {
    value: Token;
    done: boolean;
}

declare interface ILexer extends ITokenIterable, ITokenIterator {
    token: Token;
    pop(): Token;
    peek(): Token;
    isEmpty(): boolean;
}

declare interface ILexerConstructor {
    constructor(rules: TokenList): ILexer;
    new(rules: TokenList): ILexer;
    prototype: ILexer;
}

declare var Lexer: ILexerConstructor;
