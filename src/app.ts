/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { LinkedList } from "./LinkedList";
import { TestElement } from "./TestElement";

let length = 20;

const linkedList = new LinkedList();
for (let i = 0; i < length; i++) {
    let element = new TestElement(Math.floor(Math.random() * 100), i + 1);
    linkedList.append(element);
}


console.log(`Original list: ${linkedList.toString()}`);
linkedList.mergeSort(linkedList.getFirst());
console.log(`Sorted list: ${linkedList.toString()}`);