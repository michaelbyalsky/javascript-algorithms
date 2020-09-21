

export default class Stack {
  
  constructor(initialData) {
      this.data = new Array(50);
      this.index = 0;
  }
  push(item) {
    this.data[this.index] = item;
    this.index ++
  }

  peek() {
    if(this.isEmpty()) {
      return null
    } else {
      return this.data[this.index -1]
    }
  }

  pop() { 
    if(this.isEmpty()) {
      return null
    } else {
      return this.data[--this.index]
    }
  }

  toString(func = x => x) {
    let str = "";
    for (let i = 0; i < this.index; i++) {
      str = func(this.data[i]) + "," + str;
    }
    return str.slice(0, -1)
  }

  isEmpty () {
    return this.index === 0
  }

  toArray() {
    return [...this.data].slice(0, this.index).reverse()
  }
}
