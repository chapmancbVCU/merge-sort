"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const LinkedList_1 = require("./LinkedList");
const TestElement_1 = require("./TestElement");
const linkedList = LinkedList_1.LinkedList.fromValues(10, 20);
const element = new TestElement_1.TestElement(30, 3);
linkedList.append(element);
console.log(linkedList.toString());
const first = linkedList.getFirst();
console.log(`first: ${first.data.getKey()}`);
const last = linkedList.getLast();
console.log(`Last: ${last === null || last === void 0 ? void 0 : last.data.getKey()}`);
console.log(linkedList.size());
linkedList.removeLast();
linkedList.removeLast();
linkedList.removeLast();
console.log(linkedList.toString());
console.log(linkedList.size());
linkedList.append(element);
console.log(linkedList.toString());
console.log(linkedList.size());
