"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checker = void 0;
var tokenizer_1 = __importDefault(require("../@types/interfaces/tokenizer"));
exports.checker = {
    isTokenIdentifier: function (token) {
        return token.type === tokenizer_1.default.TokenType.Identifier;
    },
    isTokenBang: function (token) {
        return token.type === tokenizer_1.default.TokenType.Bang;
    },
    isTokenKeyword: function (token) {
        return token.type === tokenizer_1.default.TokenType.Keyword;
    },
    isTokenDelimiter: function (token) {
        return token.type === tokenizer_1.default.TokenType.Delimiter;
    },
    isTokenOperator: function (token) {
        return token.type === tokenizer_1.default.TokenType.Operator;
    },
    isTokenEnd: function (token) {
        return token.type === tokenizer_1.default.TokenType.EOF || token.type === tokenizer_1.default.TokenType.EOL;
    },
    isTokenEOL: function (token) {
        return token.type === tokenizer_1.default.TokenType.EOL;
    },
    isTokenEOF: function (token) {
        return token.type === tokenizer_1.default.TokenType.EOF;
    }
};
