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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (head === null || head.next === null) return head;

        let prev = head;
        let next = head.next;
        head.next = null;
        while (next.next !== null) {
            const tmp = next.next;
            next.next = prev;
            prev = next;
            next = tmp;
        }
        next.next = prev;
        return next;
    }
}
