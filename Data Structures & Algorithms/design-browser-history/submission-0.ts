class BrowserHistory {
    history: string[]
    currentIndex: number;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: string) {
        this.history = [];
        this.currentIndex = 0;
        this.history.push(homepage)
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(url);
        this.currentIndex = this.history.length - 1;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        this.currentIndex = Math.max(0, this.currentIndex - steps) 
        return this.history[this.currentIndex]
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps) 
        return this.history[this.currentIndex]
    }
}

// class DoubleLinkedList {
//         head: ListNode;
//         tail: ListNode;
        
//     }

// class ListNode { 
//     next: ListNode | null;
//     prev: ListNode | null;
//     key: number;
//     value: number;
    
//     constructor(key: number, value: number) {
//         this.key = key;
//         this.value = value;
//     }
// }