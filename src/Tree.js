class BinaryNode {
  constructor (data, left, right) {
    this.data = data
    this.left = left || null
    this.right = right || null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert(num) {
    let reg = /^(-?\d+(\.\d+)?)$/
    if (!reg.test(num.toString())) {
      throw new Error(`${num} is not a number`)
    }
    if (!this.root) {
      this.root = new BinaryNode(num)
      return
    } else {
      let current = this.root
      while (true) {
        if (num < current.data) {
          if (current.left) {
            current = current.left
          } else {
            current.left = new BinaryNode(num)
            break
          }
        } else {
          if (current.right) {
            current = current.right
          } else {
            current.right = new BinaryNode(num)
            break
          }
        }
      }
    }
  }
}