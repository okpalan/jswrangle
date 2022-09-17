"use strict";
function createToken(type, value, line, column) {
    return {
        type: type,
        value: value,
        line: line,
        column: column
    };
}
module.exports = createToken;
