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
      this.tail = 0;
      this.head = 0;
      this.queue = {};
  }

  getUnderlyingList() {
      return this.queue[this.head];
  }

  enqueue(value) {
      let item = new ListNode(value);
      if (!this.tail) {
          this.queue[this.tail] = item;
      } else {
          let element = this.queue[this.head];
          while(element.next) {
              element = element.next;
          }
          element.next = item;
      }
      this.tail++;
  }

  dequeue() {
      let element = this.queue[this.head];
      this.queue[this.head] = element.next;
      this.tail--;
      return element.value;
  }
}


module.exports = {
  Queue
};
