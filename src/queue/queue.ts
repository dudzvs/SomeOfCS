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

    public enqueue(value: T) {
        const newNode: Node<T> = { value };

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    public getSize() {
        return this.size;
    }
}
