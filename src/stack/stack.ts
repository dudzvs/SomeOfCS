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

    public getSize(): number {
        return this.size;
    }
}
