const LinkedList = require('./LinkedList');

// Test insertion at head of list.
describe('#prepend', () => {
    test('Add new element to head of list', () => {
        const linkedList = new LinkedList();

        linkedList.prepend(10);
        const originalHead = linkedList.head;
        linkedList.prepend(20);

        expect(linkedList.head.next).toBe(originalHead);
        expect(linkedList.head.value).toBe(20);
        expect(linkedList.length).toBe(2);
    });
});

/*describe(`#append`, () => {
    test('Add element to end of list', () => {

    })
});*/

// Get element at index
describe('#at', () => {
    describe('With index less than 0', () => {
        test('We return null', () => {
            const linkedList = LinkedList.fromValues(10, 20);

            expect(linkedList.at(-1)).toBeNull();
        });
    });

    describe('If index is greater than list length', () => {
        test('We return null', () => {
            const linkedList = LinkedList.fromValues(10, 20);

            expect(linkedList.at(5)).toBeNull();
        });
    });

    describe('Index 0', () => {
        test('Return the head of list', () => {
            const linkedList = LinkedList.fromValues(10, 20);

            expect(linkedList.at(0).value).toBe(10);
        });
    });

    describe('Index in the middle', () => {
        test('Return the index at the middle', () => {
            const linkedList = LinkedList.fromValues(10, 20, 30, 40);
            
            expect(linkedList.at(2).value).toBe(30);
        });
    });
});

// Test size function.
describe('Test getting length of linked list', () => {
    describe('Test linked list of length 0', () => {
        test('Returns null', () => {
            const linkedList = new LinkedList();
            expect(linkedList.head).toBeNull();
        });
    });

    describe('Test when length is 1', () => {
        test('Returns length = 1', () => {
            const linkedList = LinkedList.fromValues(10);
            expect(linkedList.length).toBe(1);
        });
    });

    describe('Test when lenght is greater than 1', () => {
        test('Returns length = 3', () => {
            const linkedList = LinkedList.fromValues(1, 2, 3);
            expect(linkedList.length).toBe(3);
        });
    });
})