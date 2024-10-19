import { describe, expect, test } from '@jest/globals';
import { Queue } from '../../src/queue/queue';
describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('should enqueue elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.getSize()).toBe(2);
    });

    test('should dequeue elements in the correct order', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
    });

    test('should return undefined when dequeue is called on an empty queue', () => {
        expect(queue.dequeue()).toBe(undefined);
    });
});
