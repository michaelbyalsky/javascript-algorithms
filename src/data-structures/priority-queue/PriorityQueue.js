export default class PriorityQueue {
  constructor() {
    this.data = [];
    console.log(this.data);
  }

  add(item, priority) {
    this.data.unshift([item, priority])
    this.data.sort(function (a, b) {
      return b[1] - a[1] ;
    });
    console.log(this.data);
  }

  changePriority(item, priority) {
    console.log(this.data)
  for (let i = 0; i < this.data.length; i++) {  
        console.log(this.data[i]);
       if(item === this.data[i][0]){
         this.data[i][1] = priority
       }
  }
  this.data.sort(function (a, b) {
    return b[1] - a[1] ;
  });
}

  dequeue() {
    return this.isEmpty() ? null : this.data.pop()
  }

  peek() {
    return this.isEmpty() ? null : this.data[this.data.length - 1][0]
  }

  isEmpty() {
    return this.data.length === 0;
  }

  poll() {
     if(this.isEmpty()) {
      return null  
  } else {
    let elem = this.data.splice(-1, 1)
    return elem[0][0]
  }
  }

  hasValue(value) {
    return this.data.some(data => data[0] === value)
  }
}
