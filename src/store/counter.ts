import { makeAutoObservable } from 'mobx'

class counterStore {
  counter = 0;
  constructor() {
    makeAutoObservable(this);
  }
  counterStore() {
    this.counter++
  }
  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}

export default counterStore;
