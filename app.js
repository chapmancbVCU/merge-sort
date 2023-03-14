const LinkedList = require('./LinkedList');

const linkedList = LinkedList.fromValues(10, 20, 30, 40);
linkedList.toString();

console.log(linkedList.at(0).value);
console.log(linkedList.at(1).value);
