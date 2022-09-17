import { IChecker } from "../@types/interfaces/lexer";
import Token from "../@types/interfaces/tokenizer";

export var checker: IChecker = {
    isTokenIdentifier(token: Token.IToken): token is Token.ITokenIdentifier {
        return token.type === Token.TokenType.Identifier;
    },
    isTokenBang(token: Token.IToken): token is Token.ITokenBang {
        return token.type === Token.TokenType.Bang;
    }
    , isTokenKeyword(token: Token.IToken): token is Token.ITokenKeyword {
        return token.type === Token.TokenType.Keyword;
    }
    , isTokenDelimiter(token: Token.IToken): token is Token.ITokenDelimiter {
        return token.type === Token.TokenType.Delimiter;
    }
    , isTokenOperator(token: Token.IToken): token is Token.ITokenOperator {
        return token.type === Token.TokenType.Operator;
    }
    , isTokenEnd(token: Token.IToken): token is Token.ITokenEnd {
        return token.type === Token.TokenType.EOF || token.type === Token.TokenType.EOL;
    },
    isTokenEOL(token: Token.IToken): token is Token.ITokenEOL {
        return token.type === Token.TokenType.EOL;
    },
    isTokenEOF(token: Token.IToken): token is Token.ITokenEOF {
        return token.type === Token.TokenType.EOF;
    }
}
