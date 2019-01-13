let _items = Symbol('stackItems')
class Stack {
  constructor() {
    this[_items] = []
  }

  get length() {
    return this[_items].length
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
  
  getTop() {
    let length = this[_items].length
    return length === 0 ? null : this[_items][length - 1]
  }
}