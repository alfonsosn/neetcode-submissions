class MyLinkedList {
    tail: ListNode;
    head: ListNode;
    size: number;

    constructor() {

        this.tail = new ListNode(null)
        this.head = new ListNode(null)

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;

        let curr = this.head.next;

        for (let i = 0; i < index; i++) curr = curr.next!;

        return curr.value
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        let first = this.head.next;
        let node = new ListNode(val)

        this.head.next = node
        node.next = first
        node.prev = this.head
        first.prev = node

        this.size = this.size + 1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        let last = this.tail.prev
        let node = new ListNode(val)     
        
        this.tail.prev = node
        node.next = this.tail
        node.prev = last
        last.next = node

        this.size = this.size + 1
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index > this.size) return;
        if (index === this.size) return this.addAtTail(val) 
        if (index === 0) return this.addAtHead(val); 

        let curr = this.head;
        for (let i = 0; i < index; i++) curr = curr.next!;

        const next = curr.next!
        const node = new ListNode(val)
        
        curr.next = node;
        node.prev = curr

        next.prev = node
        node.next = next

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;
        let curr = this.head;

        for (let i = 0; i < index; i++) curr = curr.next!;

        const cur = curr.next!;
        const next = cur.next!;
        
        curr.next = next;
        next.prev = curr;
        this.size--;

    }
}

class ListNode {
    prev: ListNode;
    next: ListNode;

    constructor(public value: number) {}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
