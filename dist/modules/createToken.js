function createToken(type, value, line, column) {
    return {
        type: type,
        value: value,
        line: line,
        column: column
    };
}
export {};
