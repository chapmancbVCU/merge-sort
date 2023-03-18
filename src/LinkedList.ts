/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { TestElement } from "./TestElement";


/**
 * @class Implementation of the LinkedList class.
 * @author Chad Chapman
 */
export class LinkedList {
    /**
     * The first element of this LinkedList.
     * @type { LinkedListNode }
     */
    private head: LinkedListNode;

    /**
     * The length of this LinkedList.
     * @type { number }
     */
    private length: number;

    /**
     * Default constructor that sets head to null and length to 0.
     */
    constructor() {
        this.head = null!;
        this.length = 0;
    }

    append(element: TestElement): void|null {
        // Simply prepend if length is 0.
        if (this.length === 0) {
            return this.prepend(element);
        }

        // Check if last node is null.
        const last = this.at(this.length - 1);
        if(last == null) {
            return null;
        }

        last.next = new LinkedListNode(element, last.next);
        this.length++;
    }

    /**
     * Returns the node at a given index.
     * @param { number} index The index for the node we want to retrieve.
     * @returns The node at the given index.
     */
    at(index: number): LinkedListNode|null {
        // If index greater than list length or less than 0.
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    /**
     * Accepts a number as a parameter and performs a search.  If the value 
     * exists in the list we return true.  Otherwise, we return false.
     * @param key The value we want to search inside list.
     * @returns True if value is in the list and otherwise false.
     */
    contains(key: number): boolean {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.data.getKey() === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * Accepts a number as a parameter and performs a search.  If the value 
     * exists in the list we return its index inside the list.  Otherwise, we 
     * return null.
     * @param key The value we want to search inside list.
     * @returns The index for the value if it exists inside the list.  
     * Otherwise we return null.
     */
    find(key: number): number|null {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.data.getKey() === key) {
                console.log(i);
                return i;
            }
            current = current.next;
        }
        return null;
    }

    /**
     * Creates a LinkedList whose elements key instance variable is set to the 
     * values passed in the function call.
     * @param { number } values An array of values we want to give to each 
     * element in a linked list.
     * @returns LinkedList with the elements whose data corresponds to values
     * passed in as an array.
     */
    static fromValues = function(...values: number[]): LinkedList {
        const linkedList = new LinkedList();
        for (let i = values.length - 1; i >= 0; i--) {
            const element = new TestElement(values[i], i + 1);
            linkedList.prepend(element);
        }
        return linkedList;
    }

    /**
     * Getter function for the first element of the linked list which is 
     * called head.
     * @returns The first element of the linked list.
     */
    getFirst(): LinkedListNode {
        return this.head;
    }

    /**
     * Getter function for the tail of this linked list.
     * @returns Returns the tail of the linked list.
     */
    getLast(): LinkedListNode|null {
        if (this.head == null) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < this.length - 1; i++) {
            current = current.next;
        }
        return current;
    }

    /**
     * This function perfroms the merging of two linked lists.  It performs 
     * comparison operations to decide order of each element.
     * @param { LinkedListNode } firstB The head of the left side of the 
     * linked list.
     * @param { LinkedListNode} firstC The head of the right side of the 
     * linked list.
     * @returns The head of a newly merged linked list.
     */
    merge(firstB: LinkedListNode, firstC: LinkedListNode): LinkedListNode {
        // firstA gets initialized to null and gets returned after merging.
        let firstA = null;

        /* This is the initial comparison of firstB.data and firstC.data.  The
        purpose of this comparison is to figure out what firstA shoud be by 
        determining which half othe list's first node is smaller. */
        if  (firstB.data.compareTo(firstC.data) <= 0) {
            firstA = firstB;
            firstB = firstB.next;
        } else {
            firstA = firstC;
            firstC = firstC.next;
        }

        /* lastA is set to the value of firstA initially but is used to 
        determine the last node of the list befor a non-empty list is 
        concateneated to the list starting with firstA. */
        let lastA = firstA;

        // While firstB and firstC are not null, the nodes are compared.
        while(firstB != null && firstC != null) {
            if(firstB.data.compareTo(firstC.data) <= 0) {
                lastA.next = firstB;
                firstB = firstB.next;
            } else {
                lastA.next = firstC;
                firstC = firstC.next;
            }
            lastA = lastA.next;
        }

        /* If firstB is not null then it is attached to lastA.next.  Otherwise,
        if firstC is not null then it is attached to lastA.next. */
        if(firstB != null) {
            lastA.next = firstB;
        } else if (firstC != null) {
            lastA.next = firstC;
        }
        return firstA;
    }

    /**
     * This function contains the merge sort algorithm.  It splits the list in 
     * half and recursively calls itself until you have a list of length 1.  
     * Then merge operations are called to create a sorted linked list.
     * @param firstA The head of the list that we are sorting.
     * @returns The head of the list that we are sorting.
     */
    mergeSort(firstA: LinkedListNode): LinkedListNode {
        /* The base case of the recursive algorithm.  The recursion "bottoms 
        out" when the sequence to be sorted has only one node.  Thus, we return
        it since there is no work to be done. */
        if(firstA.next == null) {
            return firstA;
        }

        /* LinkedListNodes current and half are used for splitting the list.
        firstB is used as a pointer for the first half of the list and firstC 
        will be used as a pointer for the second half of the list. */
        let firstB = firstA;
        let firstC = null;
        let current = firstA;
        let half = firstA;
        let length = 0;

        /* We want to determine the center of the linked list so we know how 
        to split it up. */
        while(current != null) {
            if(length % 2 == 0 && length != 0) {
                half = half.next;
            }
            current = current.next;
            length++;
        }
        firstC = half.next;

        // half.next establishes the end of the first half of the list.
        half.next = null!;

        // Recursive calls for each half of the list.
        firstB = this.mergeSort(firstB);
        firstC = this.mergeSort(firstC);

        // Merge the list back together.
        firstA = this.merge(firstB, firstC);
        this.head = firstA;
        
        return firstA;
    }

    /**
     * Removes last element from a LinkedList.
     * @returns null when we have an empty list.
     */
    removeLast(): void|null {
        if (this.head == null) {
            return null;
        }

        if (this.length == 1) {
            this.head = null!;
        }
        else {
            let current = this.head;
            let previous = current;
            for (let i = 0; i < this.length - 1; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
    }

    /**
     * Adds element to front of the linked list.
     * @param { TestElement} element The element we want to add to a 
     * LinkListNode of this LinkedList. 
     */
    prepend(element: TestElement ): void {
        const newNode = new LinkedListNode(element, this.head);
        this.head = newNode;
        this.length++;
    }

    /**
     * This function is for testing to make sure we can proceed to the actual 
     * implementation of the merge sort.
     * @returns 0 if head is null.
     */
    selectionSort(): void|null {
        // Local variables
        let i = null;
        let j = null;
        let min = null;

        // Dummy information for temp variables that is needed for swap.
        let tempElement = new TestElement(0,0);
        let temp = new LinkedListNode(tempElement, this.head);

        if (this.head == null) {
            return null;
        }

        i = this.head;

        while(i.next != null) {
            min = i;
            j = i.next;
            while(j != null) {
                // Comparing j.data to min.data
                if(j.data.compareTo(min.data) <  0) {
                    min = j;
                }
                j = j.next;
            }

            // Swap data.
            temp.data = min.data;
            min.data = i.data;
            i.data = temp.data;
            i = i.next;
        }
    }

    /**
     * Returns the value for the length of the LinkedList.
     * @returns The length of the LinkedList.
     */
    size(): number {
        return this.length;
    }

    /**
     * Returns as a string, the contents of the LinkedList.
     * @returns The linked list.
     */
    toString(): string {
        let output = '';
        let current = this.head;

        while (current) {
            output = `${output}${current.data.toString()} => `;
            current = current.next;
        }
        return `${output}null`;
    }
}


/**
 * @class The LinkedListNode class represents each node in a linked list. 
 * Each node contains an object of the Test Element class.
 * @author Chad Chapman
 */
class LinkedListNode {
    /**
     * The object stored in each LinkedListNode
     * @type { TestElement }
     */
    public data: TestElement;

    /**
     * The next node of this linked list.
     * @type { LinkedListNode }
     */
    public next: LinkedListNode;

    /**
     * Constructor for creating a new LinkedListNode.  It accepts the data 
     * that will be stored in this node and the next node.
     * @param { TestElement } data The test element object is the data that is 
     * associated with a node.  
     * @param { LinkedListNode } next The next element after this node. 
     */
    constructor(data: TestElement, next: LinkedListNode) {
        this.data = data;
        this.next = next;
    }
}