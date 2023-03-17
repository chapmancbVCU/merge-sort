/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { LinkedList } from "./LinkedList";
import { TestElement } from "./TestElement";



const linkedList = LinkedList.fromValues(10, 20);
const element = new TestElement(30, 3);
linkedList.append(element);
console.log(linkedList.toString());

const first = linkedList.getFirst();
console.log(`first: ${first.data.getKey()}`);

const last = linkedList.getLast();
console.log(`Last: ${last?.data.getKey()}`);

console.log(linkedList.size());
linkedList.removeLast();
linkedList.removeLast();
linkedList.removeLast();
console.log(linkedList.toString());
console.log(linkedList.size());
linkedList.append(element);
console.log(linkedList.toString());
console.log(linkedList.size());