let queue_items = Symbol('QueueItems')
class Queue {
  constructor() {
    this[queue_items] = []
  }

  get length() {
    return this[queue_items].length
  }

  enqueue(item) {
    this[queue_items].unshift(item)
  }

  dequeue(item) {
    return this[queue_items].pop()
  }

  getHead() {
    let length = this[queue_items].length
    return length === 0 ? null : this[queue_items][length - 1]
  }

  getTail() {
    return this[queue_items][0] || null

  }
}
