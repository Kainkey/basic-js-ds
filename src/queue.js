const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;
  tail = null;

  getUnderlyingList() {
    if (this.head) {
      let listQueue = []
      let pointer = this.head
      while (pointer) {
        listQueue.push({ 'value': pointer.value, 'next': pointer.next })
        pointer = pointer.next
      }
      return listQueue[0]
    }

  }

  enqueue(value) {
    if (this.head) {
      this.tail.next = new ListNode(value)
      this.tail = this.tail.next
    }
    else {
      this.head = new ListNode(value)
      this.tail = this.head
    }


  }

  dequeue() {
    if (this.head) {
      let temp = this.head
      this.head = temp.next
      return temp.value
    } else {
      return
    }
  }
}


module.exports = {
  Queue
};
