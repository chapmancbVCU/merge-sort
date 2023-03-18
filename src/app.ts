/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { LinkedList } from "./LinkedList";
import { TestElement } from "./TestElement";



const linkedList = LinkedList.fromValues(50, 40, 30, 20, 10, 0);


console.log(linkedList.toString());
linkedList.mergeSort(linkedList.getFirst());
console.log(linkedList.toString());