type Node<T> = {
    value: T;
    next?: Node<T>;
};

export class Queue<T> {
    public size: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.size = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    public enqueue(value: T): void {
        const newNode: Node<T> = { value };

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    public dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const head = this.head;
        this.head = head.next;

        this.size--;
        return head?.value;
    }

    public getSize() {
        return this.size;
    }
}
