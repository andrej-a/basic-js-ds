const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.root_tree = null;   //определяем корень дерева
  }

  root() {
      return this.root_tree;
  }

  add(value) {
      this.root_tree = addElemToTree(this.root_tree, value);

      function addElemToTree(node, value) {
          if (!node) {
              return new Node(value);
          }

          if (node.data === value) {
              return node;
          }

          if (value < node.data) {
              node.left = addElemToTree(node.left, value);
          } else {
              node.right = addElemToTree(node.right, value);
          }

          return node;
      }
  }

  has(value) {
      return searchElemInTree(this.root_tree, value);

      function searchElemInTree(node, value) {
          if (!node) {
              return false;
          }

          if (node.data === value) {
              return true;
          }

          if (value < node.data) {
              return searchElemInTree(node.left, value);
          } else {
              return searchElemInTree(node.right, value);
          }
      }
  }

  find(value) {
      return findInTree(this.root_tree, value);

      function findInTree(node, value) {
          if (!node) {
              return null;
          }

          if (node.data === value) {
              return node;
          }

          if (value < node.data) {
              return findInTree(node.left, value);
          } else {
              return findInTree(node.right, value);
          }
      }
  }

  remove(value) {
      this.root_tree = removeFromTree(this.root_tree, value);

      function removeFromTree(node, value) {
          if (!node) {
              return null;
          }
          
          if (value < node.data) {
              node.left = removeFromTree(node.left, value);
              return node;
          } else if(value > node.data) {
              node.right = removeFromTree(node.right, value);
              return node;
          } else {
              if (!node.left && !node.right) {
                  return null;
              }

              if (!node.left) {
                  node = node.right;
                  return node;
              }

              if (!node.right) {
                  node = node.left;
                  return node;
              }

              let minFromRight = node.right;
              while(minFromRight.left) {
                  minFromRight = minFromRight.left;
              }
              node.data = minFromRight.data;
              node.right = removeFromTree(node.right, minFromRight.data);
              return node;
          }
      }
  }

  min() {
      if (!this.root_tree) {
          return null;
      }

      let node = this.root_tree;
      while(node.left) {
          node = node.left;
      }
      return node.data;
  }

  max() {
      if (!this.root_tree) {
          return null;
      }

      let node = this.root_tree;
      while(node.right) {
          node = node.right;
      }

      return node.data;
  }

}//class

module.exports = {
  BinarySearchTree
};