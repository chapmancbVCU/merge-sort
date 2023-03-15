"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestElement = void 0;
/**
 * @class A class that creates an element for testing.  Each linked list node
 * will have an object that is an instance of this class as its value.  This
 * class will have two instance variables.  First is the number which we will
 * be sorting against and the second is an auxiliary value which is the
 * original position in the linked list.
 */
class TestElement {
    /**
     * Creates a new TestElement object.
     * @param key The value we will use to sort.
     * @param auxiliary The original position in the linked list.
     */
    constructor(key, auxiliary) {
        this.key = key;
        this.auxiliary = auxiliary;
    }
    /**
     * Compares the key of this element with another.
     * @param { TestElement } other The element to compare 'this' one with.
     * @returns
     */
    compareTo(other) {
        return this.key - other.key;
    }
    /**
     * This toString method returns a string containing the key and auxiliary
     * value of this instance of the TestElement class.
     * @returns A string in the form "key <auxiliary>".
     */
    toString() {
        return this.key + ' <' + this.auxiliary + '>';
    }
}
exports.TestElement = TestElement;
