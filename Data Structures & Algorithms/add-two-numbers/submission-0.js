/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        var dummy = new ListNode();
        var curr = dummy;

        var carry = 0

        while (l1 || l2 || carry) {
            var v1 = l1 ? l1.val : 0
            var v2 = l2 ? l2.val : 0

            var sum = v1 + v2 + carry;

            carry = Math.floor(sum / 10);
            sum = sum % 10

            curr.next = new ListNode(sum)

            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        
        return dummy.next
    }
}
