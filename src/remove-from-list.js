const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let current = l; //текущий элемент -- первая позиция связного списка

   while(current !== null) { //пока следующий элемент есть
      if (current.value === k) {//если значение текущего элемента === к
          l = removeAtIndex(indexOf(current.value));
          return removeKFromList(l, k);
      } 
          current = current.next;    //текущий делаем следующим
  }
  return l;

  function indexOf(elem) {
      let current = l;
      let index = 0;
       while(current) {
           if(current.value === elem) {
               return index;
           }

           current = current.next;
           index++;
       }
  }

  function removeAtIndex(index) {
      let current = l;
      if (index === 0) {
          current = l.next;
          return current;
      } else {
          let prev = null;
          let counter = 0;

          while(counter < index) {
              prev = current;
              current = current.next;
              counter++;
          }
          prev.next = current.next;
      }
      return l;
  }

}

module.exports = {
  removeKFromList
};
