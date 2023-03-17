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
