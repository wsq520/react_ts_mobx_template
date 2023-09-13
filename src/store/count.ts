import { action, computed, makeAutoObservable, observable } from 'mobx';

class CountStore {
  count: number = 0;
  constructor() {
    makeAutoObservable(this, {
      count: observable,
      doubleCount: computed,
      increment: action.bound,
    })
  }

  increment() {
    this.count++;
  }

  get doubleCount() {
    return this.count * 2;
  }
}

const countStore = new CountStore();
export default countStore;