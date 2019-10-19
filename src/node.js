class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		node.parent = this;
		if (!this.left) {
			this.left = node;
			return this;
		}
		if (!this.right) {
			this.right = node;
			return this;
		}
		return this;
	}

	removeChild(node) {
		if (this.left === node) {
			this.left.parent = null;
			this.left = null;
			return this;
		}
		if (this.right === node) {
			this.right.parent = null;
			this.right = null;
			return this;
		}
		throw new Error();
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		return this;
	}

	swapWithParent() {
		if (this.parent) {
			let parent = this.parent.parent;
			let right = this.parent.right;
			let left = this.parent.left;
			this.parent.parent = this;
			this.parent.left = this.left;
			this.parent.right = this.right;
			this.left = this.parent;
			this.parent = parent;
			this.right = right;
		}
	}
}

module.exports = Node;

const root = new Node(1, 2);
const left = new Node(3, 4);
const right = new Node(5, 6);

root.appendChild(left);
root.appendChild(right);

right.swapWithParent();

// expect(left.parent).to.equal(right);
console.log(left.parent === right);