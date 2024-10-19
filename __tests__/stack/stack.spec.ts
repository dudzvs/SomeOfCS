import { describe, expect, test } from '@jest/globals';
import { Stack } from '../../src/stack/stack';

describe('Stack', () => {
    let stack = new Stack<number>();

    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('should push elements in the stack', () => {
        stack.push(1);
        stack.push(2);

        expect(stack.getSize()).toBe(2);
    });

    test('should pop elements from the stack and return it', () => {
        stack.push(2);
        stack.push(3);

        const elPop = stack.pop();

        expect(elPop).toBe(3);
        expect(stack.getSize()).toBe(1);
    });

    test('pop elements of an empty stack should return undefined', () => {
        expect(stack.pop()).toBe(undefined);
    });

    test('should return the value of the tail', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const tailValue = stack.peek();

        expect(tailValue).toBe(3);
    });
});
