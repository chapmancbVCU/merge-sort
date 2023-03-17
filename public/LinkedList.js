"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const TestElement_1 = require("./TestElement");
/**
 * @class Implementation of the LinkedList class.
 * @author Chad Chapman
 */
class LinkedList {
    /**
     * Default constructor that sets head to null and length to 0.
     */
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(element) {
        // Simply prepend if length is 0.
        if (this.length === 0) {
            return this.prepend(element);
        }
        // Check if last node is null.
        const last = this.at(this.length - 1);
        if (last == null) {
            return null;
        }
        last.next = new LinkedListNode(element, last.next);
        this.length++;
    }
    /**
     * Returns the node at a given index.
     * @param { number} index The index for the node we want to retrieve.
     * @returns The node at the given index.
     */
    at(index) {
        // If index greater than list length or less than 0.
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    /**
     * Getter function for the first element of the linked list which is
     * called head.
     * @returns The first element of the linked list.
     */
    getFirst() {
        return this.head;
    }
    /**
     * Getter function for the tail of this linked list.
     * @returns Returns the tail of the linked list.
     */
    getLast() {
        if (this.head == null) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < this.length - 1; i++) {
            current = current.next;
        }
        return current;
    }
    /**
     * Addes element to front of the linked list.
     * @param { TestElement} element The element we want to add to a
     * LinkListNode of this LinkedList.
     */
    prepend(element) {
        const newNode = new LinkedListNode(element, this.head);
        this.head = newNode;
        this.length++;
    }
    /**
     * Returns the value for the length of the LinkedList.
     * @returns The length of the LinkedList.
     */
    size() {
        return this.length;
    }
    /**
     * Returns as a string, the contents of the LinkedList.
     * @returns The linked list.
     */
    toString() {
        let output = '';
        let current = this.head;
        while (current) {
            output = `${output}${current.data.toString()} => `;
            current = current.next;
        }
        return `${output}null`;
    }
}
exports.LinkedList = LinkedList;
/**
 * Creates a LinkedList whose elements key instance variable is set to the
 * values passed in the function call.
 * @param { number } values An array of values we want to give to each
 * element in a linked list.
 * @returns LinkedList with the elements whose data corresponds to values
 * passed in as an array.
 */
LinkedList.fromValues = function (...values) {
    const linkedList = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        const element = new TestElement_1.TestElement(values[i], i + 1);
        linkedList.prepend(element);
    }
    return linkedList;
};
/**
 * @class The LinkedListNode class represents each node in a linked list.
 * Each node contains an object of the Test Element class.
 * @author Chad Chapman
 */
class LinkedListNode {
    /**
     * Constructor for creating a new LinkedListNode.  It accepts the data
     * that will be stored in this node and the next node.
     * @param { TestElement } data The test element object is the data that is
     * associated with a node.
     * @param { LinkedListNode } next The next element after this node.
     */
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
