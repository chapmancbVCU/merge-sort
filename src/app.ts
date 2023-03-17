/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { LinkedList } from "./LinkedList";
import { TestElement } from "./TestElement";



const linkedList = LinkedList.fromValues(10, 20);
const element = new TestElement(30, 3);
linkedList.append(element);
console.log(linkedList.toString());