export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[1, 'Error-1'], [2, 'Error-2'], [3, 'Error-3']]);
  }

  translate(code) {
    for (const key of this.errors.keys()) {
      if (code === key) {
        return this.errors.get(key);
      }
    }
    return 'Unknown error';
  }
}

/*
const m = new Map();

m.set(1, 'error-1');
console.log(m.get(1)); */
