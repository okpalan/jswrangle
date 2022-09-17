"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/// <reference path="../@types/interfaces/lib.d.ts"/>
var tokenizer_1 = __importDefault(require("../@types/interfaces/tokenizer"));
var createToken_1 = __importDefault(require("../modules/createToken"));
function Lexer(source) {
    var _i, source_1, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, source_1 = source;
                _a.label = 1;
            case 1:
                if (!(_i < source_1.length)) return [3 /*break*/, 16];
                token = source_1[_i];
                if (!checker.isTokenEOL(token)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, createToken_1.default)(tokenizer_1.default.TokenType.EOL, tokenizer_1.default.TokenEnd.EOL, token.line, token.column)];
            case 2:
                _a.sent();
                return [3 /*break*/, 15];
            case 3:
                if (!checker.isTokenEOF(token)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, createToken_1.default)(tokenizer_1.default.TokenType.EOF, tokenizer_1.default.TokenEnd.EOF, token.line, token.column)];
            case 4:
                _a.sent();
                return [3 /*break*/, 15];
            case 5:
                if (!checker.isTokenBang(token)) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, createToken_1.default)(tokenizer_1.default.TokenType.Bang, tokenizer_1.default.TokenBang.SHEBANG, token.line, token.column)];
            case 6:
                _a.sent();
                return [3 /*break*/, 15];
            case 7:
                if (!checker.isTokenKeyword(token)) return [3 /*break*/, 9];
                return [4 /*yield*/, (0, createToken_1.default)(tokenizer_1.default.TokenType.Keyword, token.value, token.line, token.column)];
            case 8:
                _a.sent();
                return [3 /*break*/, 15];
            case 9:
                if (!checker.isTokenDelimiter(token)) return [3 /*break*/, 11];
                return [4 /*yield*/, (0, createToken_1.default)(tokenizer_1.default.TokenType.Delimiter, token.value, token.line, token.column)];
            case 10:
                _a.sent();
                return [3 /*break*/, 15];
            case 11:
                if (!checker.isTokenOperator(token)) return [3 /*break*/, 13];
                return [4 /*yield*/, (0, createToken_1.default)(tokenizer_1.default.TokenType.Operator, token.value, token.line, token.column)];
            case 12:
                _a.sent();
                return [3 /*break*/, 15];
            case 13:
                if (!checker.isTokenIdentifier(token)) return [3 /*break*/, 15];
                return [4 /*yield*/, (0, createToken_1.default)(tokenizer_1.default.TokenType.Identifier, token.value, token.line, token.column)];
            case 14:
                _a.sent();
                _a.label = 15;
            case 15:
                _i++;
                return [3 /*break*/, 1];
            case 16: return [2 /*return*/];
        }
    });
}
module.exports = Lexer;
