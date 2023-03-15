"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestElement = void 0;
class TestElement {
    constructor(key, auxiliary) {
        this.key = key;
        this.auxiliary = auxiliary;
    }
    compareTo(other) {
        return this.key - other.key;
    }
    getKey() {
        return this.key;
    }
}
exports.TestElement = TestElement;
