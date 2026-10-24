class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        this.stack = []
        let first, second;

        tokens.forEach((token) => {
            switch(token) {
                case "+":
                    this.addition();
                    break;
                case "-":
                    this.subtraction();
                    break;
                case "*":
                    this.multiplication();
                    break;
                case "/":
                    this.division();
                    break;
                default: 
                    this.stack.push(Number(token));  
                    break;
            }
        });

        return this.stack.pop()
    }

    addition() {
        this.getValues();
        this.stack.push(this.second + this.first); 
    }

    multiplication() {
        this.getValues();
        this.stack.push(this.second * this.first);
    }

    division() {
        this.getValues();
        this.stack.push(Math.trunc(this.second / this.first));  
    }

    subtraction() {
        this.getValues();
        this.stack.push(this.second - this.first); 
    }

    getValues() {   
        this.first  = this.stack.pop();
        this.second = this.stack.pop(); 
    }

}
