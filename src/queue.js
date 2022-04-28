const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  constructor() {
    this.storage = null 
    this.size = 0
  }

  getUnderlyingList() {
    return this.storage
  }

  enqueue(val) {
    let node =  new ListNode(val) 
    let lastNode

    if (this.storage === null) {
      this.storage = node

    } else {
      lastNode = this.storage
 
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = node
    }
    this.size++
  }

  dequeue() {
    let deletedEl = this.storage.value

    if (this.storage.next) {
      this.storage = this.storage.next
    } else {
      this.storage = null
    }
    return deletedEl
  }
}


module.exports = {
  Queue
};
