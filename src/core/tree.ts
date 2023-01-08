/** A general purpose Tree implementation */
export class Tree {
	/** The name of the tree. Defaults to type name of the class plus count of same type of Tree in the parent Tree. */
	private readonly _name?: string;
	/** The parent Tree. Lack of a parent indicates this is a root tree */
	public readonly parent?: Tree;
	// Children are Trees themselves (subtrees)
	private readonly _children: Set<Tree> = new Set();
	/**
	 * Creates a new Tree.
	 * @param parent The parent Tree if any.
	 * @param name The name of the tree.
	 */
	public constructor(parent?: Tree, name?: string) {
		this.parent = parent;
		this._name =
			name ||
			(() => {
				const type = this.constructor.name;
				const count = [...this.parent._children].filter((child) => child.constructor.name === type).length;
				return `${type}${count === 0 ? "" : `${count}`}`;
			})();
		if (this.parent?._children) {
			this.parent._children.add(this);
		}
	}
	/** Returns root of the tree */
	public root(): Tree {
		return this.parent ? this.parent.root() : this;
	}
	/** Returns the path of the tree from root to this tree. */
	public path(opts: Tree.PathOptions = {}): string {
		opts = { ...TREE_DEFAULT_OPTIONS, ...opts };
		const _path = this.parent ? `${this.parent.path(opts)}${opts.sep}${this._name}` : opts.noroot ? "" : this._name;
		const paths = _path.split(opts.sep).filter(Boolean);
		const _maybeReversed = opts.reverse ? paths.reverse().join(opts.sep) : paths.join(opts.sep);
		return _maybeReversed;
	}
	/** Returns the children of the tree. */
	public children(): Tree[] {
		return [...this._children];
	}
}

export namespace Tree {
	export interface PathOptions {
		/** The separator to use between each tree name. Defaults to `/` */
		readonly sep?: string;
		/** Whether to include the root tree name in the path. Defaults to `false` */
		readonly noroot?: boolean;
		/** Whether to reverse the path. Defaults to `false` */
		readonly reverse?: boolean;
	}
}

const TREE_DEFAULT_OPTIONS: Tree.PathOptions = {
	sep: "/",
	noroot: false,
	reverse: false,
};
