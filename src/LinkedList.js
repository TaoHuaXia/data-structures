class LinkedListNode {
  constructor(data, next) {
    this.data = data
    this.next = next || null
  }
  destory() {
    this.data = null
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertAtHead(item) {
    if (!this.head) {
      this.head = new LinkedListNode(item)
    } else {
      this.head.next = new LinkedListNode(item, this.head.next)
    }
  }

  insertAtEnd(item) {
    if (!this.head) {
      this.head = new LinkedListNode(item)
    } else {
      var lastItem = this.head
      while(lastItem.next) {
        lastItem = lastItem.next
      }
      lastItem.next = new LinkedListNode(item)
    }
  }

  getLength() {
    var length = 0
    var currentNode = this.head
    while(currentNode) {
      ++length
      currentNode = currentNode.next
    }
    return length
  }

  insertAfter(index, item) {
    if (!this.head) {
      throw new Error(`empty list, please add Node before insert`)            
    }
    if (isNaN(index) || index < 0) {
      throw new Error(`invalid index: ${index}`)      
    }
    let targetNode = this.head
    while(index > 0) {
      targetNode = targetNode.next
      if (!targetNode) {
        throw new Error(`index exceeds linkedList length`)
      }
      index--
    }
    targetNode.next = new LinkedListNode(item, targetNode.next)
  }

  deleteNodeAt(index) {
    if (!this.head) {
      throw new Error(`empty list, please add Node before delete`)            
    }
    if (isNaN(index) || index < 0) {
      throw new Error(`invalid index: ${index}`)      
    }
    if (index > (this.getLength() - 1)) {
      throw new Error(`index exceeds linkedList length`)
    }
    if (index === 0) {
      let nextNode = this.head.next
      this.head.destory()
      this.head = nextNode
    } else {
      let beforeNode = this.head
      let beforeIndex = index - 1
      while(beforeIndex > 0) {
        beforeNode = beforeNode.next
        --beforeIndex
      }
      let targetNode = beforeNode.next
      let nextNode = targetNode.next
      targetNode.destory()
      beforeNode.next = nextNode
    }
  }

  reverse() {
    if (!this.head || !this.head.next) {
      return
    } else {
      let currentNode = this.head 
      do {
        let nextNode = currentNode.next
        let 
        currentNode.next = nextNode.next
        nextNode.next = currentNode
        this.head = nextNode
        currentNode.next = oldNode
        this.head = currentNode
        p

      } while(currentNode)
    }
  }

}
