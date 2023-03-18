# merge-sort

This project fufills two seperate projects from The Odin Project.  First we implement a linked list data structure along with the functions for modifying the linked list.  Next, we implemeted the merge-sort algorithm.

This project was written in Typescript.  Original goal was to implement a Iterator interface.  We backed out of that strategy because we were having issues finding out how to impment private classes.  In Java, the ListIterator class that implements the Iterator interface is a private class inside the ListIterator class.

The same is true for the LinkedListNode class.  In this project we were able to just implement the LinkedListNode class as a seperate class in the LinkedList.ts file without any issues.

We performed test driven development for the functions that modify the linked list.  Manual testing of the Merge Sort algorthim itself was performed in a file calle app.ts.  It uses a random number generator to create the values for each linked list element and simply appends the element to a new linked list.  Then the linked list is printed out.

For the print for the original list we show the element's value along with its original position using a toString function in the TestElement class.  Next we sort the list and finally print the sorted list.