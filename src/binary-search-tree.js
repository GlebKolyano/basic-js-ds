const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null
  }
  root() {
    return this.tree
  }

  add(data) {
    if (this.tree === null) {
      this.tree = new Node(data)
    } else {
      let node = new Node(data)
      this._insertNode(this.tree, node)
    }

  }
  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode
        } else {
            this._insertNode(node.left, newNode)
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            this._insertNode(node.right, newNode)
        }
    }
  }

  has(data) {
    function treeHasNode(node, data) {
      if (node === null) {
        return false
      } else if (data > node.data) {
        return treeHasNode(node.right, data)
      } else if (data < node.data) {
        return treeHasNode(node.left, data)
      } else {
        return true
      } 
    }
    return treeHasNode(this.tree, data)
  }

  find(data) {
    function treeHasNode(node, data) {
      if (node === null) {
        return null
      } else if (data > node.data) {
        return treeHasNode(node.right, data)
      } else if (data < node.data) {
        return treeHasNode(node.left, data)
      } else {
        return node
      } 
    }
    return treeHasNode(this.tree, data)
  }

  remove(data) {
    this.tree = this.removeNode(this.tree, data)
  }

  removeNode(node, data) {
    if (node === null) {
      return node
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else {
      if (node.left === null && node.right === null) {
        console.log("bingo:", node)
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      let minNodeRight = this._minNodeRemove(node.right)
      node.data = minNodeRight.data
      node.right = this.removeNode(node.right, node.data)
      return node
    }
  }

  _minNodeRemove(node) {
    if (node.left === null)
        return node
    else
        return this._minNodeRemove(node.left);
}

  _findMinNode(node) {
    if (node.left === null) {
      return node.data
    } else {
      return this._findMinNode(node.left)
    }
  }

  min() {
    if (this.tree === null) return null
    if (this.tree.left === null) return this.tree.data
    return this._findMinNode(this.tree.left)
  }

  _findMaxNode(node) {
    if (node.right === null) {
      return node.data
    } else {
      return this._findMaxNode(node.right)
    }
  }

  max() {
    if (this.tree === null) return null
    if (this.tree.right === null) return this.tree.data
    return this._findMaxNode(this.tree.right)
  }
}

module.exports = {
  BinarySearchTree
};
