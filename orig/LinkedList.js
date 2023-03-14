class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        if (this.length == 0) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < this.length - 1; i++) {
            current = current.next;
        }
        console.log(`current: ${current.value}`);
        const newNode = new LinkedListNode(data, current);
        console.log(`new node: ${newNode.value}`);
        
        this.length++;
    }

    at(index) {
        if  (index <0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    /**
     * Addes element to front of the linked list.
     * @param {*} data 
     */
    prepend(data) {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }

    size() {
        return this.length;
    }

    toString() {
        let output = '';
        let current = this.head;

        while (current) {
            output = `${output}${current.value} =>`;
            current = current.next;
        }

        console.log(`${output}null`);
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

LinkedList.fromValues = function(...values) {
    const linkedList = new LinkedList();

    for (let i = values.length -1; i >= 0; i--) {
        linkedList.prepend(values[i]);
    }

    return linkedList;
}

module.exports = LinkedList;