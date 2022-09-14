
export declare type Token = string | number;
export declare type TokenList = Token[];

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
    ASSIGN = '=',
    MODULO = '%',
    PLUS_EQUAL= '+=',
    MINUS_EQUAL = '-=',
    ASTERISK_EQUAL = '*=',
    SLASH_EQUAL = '/=',
    LT_EQUAL = '<=',
    GT_EQUAL = '>=',
    DEEP_STRICT_EQUAL = '===',
    NOT_EQUAL = '!==',
    MODULO_EQUAL = '%='
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

declare enum TokenCharData {
    TAB = '\t',
    NEWLINE = '\n',
    CARRIAGE_RETURN = '\r',
}


declare enum TokenBinaryOperator {

}

declare enum TokenExtra {
    SHEBANG = '#!',
    COMMENT = '//',
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
declare interface ILexerChecker {
    isWhiteSpace(c: string): boolean;
    isDigit(c: string): boolean;
    isChar(c: string): boolean;

    isKeyword(c: string): boolean;
    isOperator(c: string): boolean;
    isDelimiter(c: string): boolean;
    isETC(c: string): boolean;
}

declare interface ILexer extends ITokenIterable, ITokenIterator {
    token: Token;
    tokens: TokenList;
    shift(): Token;
    peek(): Token;
    isEmpty(): boolean;
}

declare interface ILexerConstructor {
    constructor(rules: TokenList): ILexer;
    new(rules: TokenList): ILexer;
    prototype: ILexer;
}

declare var Lexer: ILexerConstructor;
