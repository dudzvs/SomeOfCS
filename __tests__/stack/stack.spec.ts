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
});
