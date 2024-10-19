type StackNode<T> = {
    value: T;
    prev?: StackNode<T>;
};

export class Stack<T> {
    public size: number;
    private tail?: StackNode<T>;

    constructor() {
        this.size = 0;
        this.tail = undefined;
    }

    public push(value: T): void {
        this.tail = { value, prev: this.tail };
        this.size++;
    }

    public pop(): T | undefined {
        if (!this.tail) {
            return undefined;
        }

        const tail = this.tail;
        this.tail = tail.prev;

        this.size--;
        return tail?.value;
    }

    public getSize(): number {
        return this.size;
    }
}
