/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import {describe, expect, test} from '@jest/globals';
import { LinkedList } from "./LinkedList";
import { TestElement } from "./TestElement";


/******************************************************************************
 * TestElement Class                                                          *
 *****************************************************************************/
describe('#compareTo', () => {
    describe('When values of key are the same', () => {
        test('Returns 0', () => {
            const a = new TestElement(1, 1);
            const b = new TestElement(1, 2);
            const result = a.compareTo(b);
            
            expect(result).toBe(0);
        });
    });

    describe(`When a is less than b`, () => {
        test('Returns less than 0', () => {
            const a = new TestElement(1, 1);
            const b = new TestElement(2, 2);
            const result = a.compareTo(b);
            
            expect(result).toBeLessThan(0);
        });
    });

    describe('When a is greater than b', () => {
        test('Returns greater than 0', () => {
            const a = new TestElement(2, 1);
            const b = new TestElement(1, 2);
            const result = a.compareTo(b);
            
            expect(result).toBeGreaterThan(0);
        });
    });
});

describe('#getAuxiliary', () => {
    test('Test getAuxiliary getter function', () => {
        const element = new TestElement(1, 1);
        const aux = element.getAuxiliary();

        expect(aux).toBe(1);
    });
});

describe('#toString', () => {
    test('Test formatting of toString', () => {
        const element = new TestElement(1, 1);
        const result = element.toString();

        expect(result).toBe('[1 (1)]');
    });
});


/******************************************************************************
 * LinkedList Class                                                           *
 *****************************************************************************/
describe('#append', () => {
    describe('Added to new list', () => {
        test('Element added to beginning of new list', () => {
            const linkedList = new LinkedList();
            const element = new TestElement(10, 1);
            linkedList.append(element);
            
            expect(linkedList.head.data.getKey()).toBe(10);
        });
    });

    describe('Add element to end of existing list', () => {
        test('Element added to end of list', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);
            const element = new TestElement(40, 4);
            const prevLast = linkedList.at(2);
            linkedList.append(element);

            expect(prevLast.data.getKey()).toBe(30);
            expect(prevLast.data.getAuxiliary()).toBe(3);
            expect(linkedList.at(3).data.getKey()).toBe(40);
            expect(linkedList.at(3).data.getAuxiliary()).toBe(4);
        });
    });
});

describe('#at', () => {
    describe('With index less than 0', () => {
        test('Returns null', () => {
            const linkedList = LinkedList.fromValues(10, 20);

            expect(linkedList.at(-1)).toBeNull();
        });
    });

    describe('With index greather than list length', () => {
        test('Returns null', () => {
            const linkedList = LinkedList.fromValues(10, 20);

            expect(linkedList.at(5)).toBeNull();
        });
    });

    describe('With index 0', () => {
        test('Returns head', () => {
            const linkedList = LinkedList.fromValues(10, 20);

            expect(linkedList.at(0).data.getKey()).toBe(10);
        });
    });

    describe('With index in the middle', () => {
        test('Returns element value at that index', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);

            expect(linkedList.at(1).data.getKey()).toBe(20);
        });
    });
});

describe('#contains', () => {
    describe('When value is not in the list', () => {
        test('Return false', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);
            
            expect(linkedList.contains(40)).toBe(false);
        });
    });

    describe('When value is in the list', () => {
        test('Return true', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);
            
            expect(linkedList.contains(30)).toBe(true);
        });
    });
});

describe('#getFirst', () => {
    describe('When head is null', () => {
        test('Return null for empty linked list', () => {
            const linkedList = new LinkedList();

            expect(linkedList.getFirst()).toBeNull();
        });
    });

    describe('Not empty list', () => {
        test('Return head then verifiy data and position', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);
            const head = linkedList.getFirst();
            
            expect(head.data.getKey()).toBe(10);
            expect(head.data.getAuxiliary()).toBe(1);
        });
    });
});

describe('#getLast', () => {
    describe('For an empty linked list', () => {
        test('Return null for empty linked list', () => {
            const linkedList = new LinkedList();

            expect(linkedList.getFirst()).toBeNull();
        });
    });

    describe('for a non-empty linked list', () => {
        test('Returns last element of a linked list', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);
            const last = linkedList.getLast();

            expect(last.data.getKey()).toBe(30);
            expect(last.data.getAuxiliary()).toBe(3);
        });
    });
});

describe('#find', () => {
    describe('When value is not in the list', () => {
        test('Return null', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);
            
            expect(linkedList.find(40)).toBeNull();
        });
    });

    describe('When value is in the list', () => {
        test('Return true', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30);
            
            expect(linkedList.find(30)).toBe(2);
        });
    });
});

describe('#prepend', () => {
    test('Adds element to the beginning of the list', () => {
        let element1 = new TestElement(10, 1);
        let element2 = new TestElement(20, 2);

        const linkedList = new LinkedList();
        linkedList.prepend(element1);
        
        const originalHead = linkedList.head;
        linkedList.prepend(element2);

        expect(linkedList.head.data.getKey()).toBe(20);
        expect(linkedList.head.next).toBe(originalHead);
        expect(linkedList.length).toBe(2);
    });
});

describe('#removeLast', () => {
    describe('For an empty linked list', () => {
        test('Return null for empty linked list', () => {
            const linkedList = new LinkedList();
            linkedList.removeLast();

            expect(linkedList.head).toBeNull();
            expect(linkedList.size()).toBe(0);
        });
    });

    describe('When removing node of list of size=1', () => {
        test('We should get head=null', () => {
            const linkedList = LinkedList.fromValues(10);
            linkedList.removeLast();

            expect(linkedList.head).toBeNull();
            expect(linkedList.size()).toBe(0);
        });
    });

    describe('When removing node from a list size > 1', () => {
        const linkedList = LinkedList.fromValues(10, 20, 30);
        
        const prevLast = linkedList.at(linkedList.size() - 1);
        const prevLength = linkedList.size();
        linkedList.removeLast();

        const last = linkedList.at(linkedList.size() - 1);
        
        expect(prevLast.data.getKey()).toBe(30);
        expect(prevLength).toBe(3);
        expect(last.data.getKey()).toBe(20);
        expect(linkedList.size()).toBe(2);
    });
});

describe('#selectionSort', () => {
    describe('When list is of length 0', () => {
        test('We return null', () => {
            const linkedList = new LinkedList();
            
            expect(linkedList.selectionSort()).toBeNull();
        });
    });

    describe('Sorting a list', () => {
        test('We sort the list', () => {
            const linkedList = LinkedList.fromValues(50, 40, 30, 20, 10, 0);
            linkedList.selectionSort();
            
            expect(linkedList.toString()).toBe(
                '[0 (6)] => [10 (5)] => [20 (4)] => [30 (3)] => [40 (2)] => [50 (1)] => null');
        });
    });
});

describe('#size', () => {
    test('Returns size of LinkedList', () => {
        const linkedList = LinkedList.fromValues(10, 20);
        const length = linkedList.size();

        expect(length).toBe(2);
    });
});

describe('#toString', () => {
    test('Prints formatted string', () => {
        const linkedList = LinkedList.fromValues(10, 20);
        const result = linkedList.toString();
        
        expect(result).toBe('[10 (1)] => [20 (2)] => null');
    });
});