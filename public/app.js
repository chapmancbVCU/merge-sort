"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const LinkedList_1 = require("./LinkedList");
const TestElement_1 = require("./TestElement");
let length = 20;
const linkedList = new LinkedList_1.LinkedList();
for (let i = 0; i < length; i++) {
    let element = new TestElement_1.TestElement(Math.floor(Math.random() * 100), i + 1);
    linkedList.append(element);
}
console.log(`Original list: ${linkedList.toString()}`);
linkedList.mergeSort(linkedList.getFirst());
console.log(`Sorted list: ${linkedList.toString()}`);
