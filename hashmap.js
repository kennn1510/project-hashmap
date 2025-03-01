class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;

    return this;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;

    return this;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    let nodeBeforeLastNode = this.at(this.size - 2);
    let poppedNode = this.tail;
    nodeBeforeLastNode.nextNode = null;
    this.tail = nodeBeforeLastNode;
    this.size--;
    return poppedNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return string + "null";
  }
}

class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    hashIndex = this.hash(key);
    if (this.buckets[hashIndex].contains(key)) {
      this.buckets[hashIndex].at(key).value = value;
    } else {
      this.buckets[hashIndex].append(key, value);
    }
  }

  get(key) {
    hashIndex = this.hash(key);
    if (this.buckets[hashIndex].contains(key))
      return this.buckets[hashIndex].at(this.buckets[hashIndex].find(key));
    return null;
  }

  has(key) {
    hashIndex = this.hash(key);
    if (this.buckets[hashIndex].contains(key)) return true;
    return false;
  }

  remove(key) {
    hashIndex = this.hash(key);
    if (this.has(key)) {
      this.buckets[hashIndex].at(key).pop();
      return true;
    }
    return false;
  }

  length() {
    let size = 0;
    for (bucket of buckets) {
      for (node of bucket) {
        size++;
      }
    }
    return size;
  }

  clear() {
    this.buckets = [];
  }

  keys() {
    let keys = [];
    for (bucket of buckets) {
      for (key of bucket) {
        keys.append(key);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (bucket of buckets) {
      for (key of bucket) {
        values.append(this.get(key));
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (bucket of buckets) {
      for (key of bucket) {
        entries.append([key, this.get(key)]);
      }
    }
    return entries;
  }
}
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
}
