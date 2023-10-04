// Declare and initialize an array
let arr = [1, 2, 3, 4, 5];

// Access the 2nd element (indexed from 0)
console.log(arr[1]);  // Outputs: 2

// Modify the 3rd element
arr[2] = 8;

// Insert a new element at the end
arr.push(6);

// Remove the last element
arr.pop();

// Find the index of an element
let index = arr.indexOf(4);  // index will be 3




function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;  // return the index of the found element
    }
    return -1;  // element not found
}

let index = linearSearch([2, 4, 0, 1, 9], 1);
console.log(index);  // 3


function binarySearch(arr, x) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (arr[m] === x) return m;  // element found

        if (arr[m] < x) l = m + 1;  // search the right half
        else r = m - 1;  // search the left half
    }
    return -1;  // element not found
}

let sortedArr = [0, 1, 2, 4, 9];
let index = binarySearch(sortedArr, 4);
console.log(index);  // 3


let numbers = [10, 20, 30, 40, 50];

// map: returns a new array with the results of calling a function for every array element
let doubled = numbers.map(num => num * 2);

// filter: creates a new array with elements that pass the test of the provided function
let largeNumbers = numbers.filter(num => num > 25);

// reduce: reduces the array to a single value (from left-to-right)
let sum = numbers.reduce((total, num) => total + num, 0);

console.log(doubled);      // [20, 40, 60, 80, 100]
console.log(largeNumbers); // [30, 40, 50]
console.log(sum);          // 150

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal (left, root, right)
    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node) {
            this._inorder(node.left);
            console.log(node.data);
            this._inorder(node.right);
        }
    }
}

// Using the BinaryTree
const tree = new BinaryTree();

tree.insert(15);
tree.insert(10);
tree.insert(25);
tree.insert(7);
tree.insert(12);
tree.insert(20);
tree.insert(30);

// This will print the numbers in ascending order: 7, 10, 12, 15, 20, 25, 30
tree.inorder();

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal (left, root, right)
    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node) {
            this._inorder(node.left);
            console.log(node.data);
            this._inorder(node.right);
        }
    }
}

// Using the BinaryTree
const tree = new BinaryTree();

tree.insert(15);
tree.insert(10);
tree.insert(25);
tree.insert(7);
tree.insert(12);
tree.insert(20);
tree.insert(30);

// This will print the numbers in ascending order: 7, 10, 12, 15, 20, 25, 30
tree.inorder();

