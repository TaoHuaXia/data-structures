let _items = Symbol('items')
class Stack {
  constructor() {
    this[_items] = []
  }
  push(item) {
    this[_items].push(item)
  }
  pop() {
    return this[_items].pop()
  }
  isEmpty() {
    return this[_items].length === 0
  }
  clear() {
    this[_items] = []
  }
  size() {
    return this[_items].length
  }
}