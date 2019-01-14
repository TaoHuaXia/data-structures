let length = Symbol('LinkedListLength')
class LinkedListNode {
  constructor(data, next) {
    this.data = data
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this[length] = 0
    this.head = new LinkedListNode(null)
  }

  insertAtHead(data) {
    this.head.next = new LinkedListNode(data, this.head.next)
    this[length]++
  }

  insertAtEnd(data) {
    var lastNode = this.head
    while (lastNode.next) {
      lastNode = lastNode.next
    }
    lastNode.next = new LinkedListNode(data)
    this[length]++
  }

  findAt(index) {
    if (isNaN(index)) {
      throw new Error(`invalid index: ${index}`)
    }
    let targeNode = this.head
    while(index>=0 && targeNode) {
      targeNode = targeNode.next
      index--
    }
    return targeNode
  }

  insertAfter(index, data) {
    let targeNode = this.findAt(index)
    if (!targeNode || targeNode === this.head) {
      throw new Error(`can not find node at index(${index})`)
    }
    targeNode.next = new LinkedListNode(data, targeNode.next)
    this[length]++
  }

  deleteAt(index) {
    let prevNode = this.findAt(index - 1)
    if (!prevNode || !prevNode.next) {
      throw new Error(`can not find node at index(${index})`)
    }
    prevNode.next = prevNode.next.next
    this[length]--
  }

  indexOf(data) {
    let index = -1
    let currentNode = this.head.next
    let find = false

    while(currentNode) {
      index++
      if (currentNode.data === data) {
        find = true
        break
      }
      currentNode = currentNode.next
    }
    return find ? index : undefined
  }

  getSize() {
    return this[length]
  }
}