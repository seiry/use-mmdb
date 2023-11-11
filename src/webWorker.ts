import { expose } from 'comlink';

const obj = {
  counter: 12,
  inc() {
    this.counter++;
  },
};

expose(obj);

export type Obj = typeof obj;
