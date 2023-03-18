"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const LinkedList_1 = require("./LinkedList");
const linkedList = LinkedList_1.LinkedList.fromValues(50, 40, 30, 20, 10, 0);
console.log(linkedList.toString());
linkedList.selectionSort();
console.log(linkedList.toString());
