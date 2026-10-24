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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let res = new ListNode()
        let curr = new ListNode()
        res.next = curr

        while (list1 || list2) {
            if (list1?.val <= list2?.val) {
                curr.next = list1;
                list1 = list1.next;
                curr = curr.next
            } else if (list2?.val < list1?.val) {
                curr.next = list2;
                list2 = list2.next;
                curr = curr.next
            } else {
                while (list1) {
                    curr.next = list1;
                    list1 = list1.next;
                    curr = curr.next;
                }

                while (list2) {
                    curr.next = list2;
                    list2 = list2.next;
                    curr = curr.next;
                }
            }
        }

        return res.next.next
    }
}
