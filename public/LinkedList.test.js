/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import {describe, expect, test} from '@jest/globals';
import { TestElement } from "./TestElement";

/******************************************************************************
 * Test Element Class                                                         *
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
});