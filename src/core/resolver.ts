import { assert, errors } from "@zorse/adk/core";

/**
 * A 2D basic dependency resolver.
 * You can be creative and turn a 2D dependency resolver into a 3D, 4D, 5D, etc. dependency resolvers
 * by grouping dependencies into a single object. That's how the {@link core.System:class} composes
 * {@link core.Scene:class}s and {@link core.Entity:class}es.
 */
export class Resolver<T = any> {
	public readonly members = new Map<T, Set<T>>();
	/**
	 * Solves the dependency graph and returns a list of clusters.
	 * @returns A list of clusters. Each cluster is a list of members that are dependent on each other.
	 */
	public resolve(): T[][] {
		const clusters: Array<Set<T>> = [];
		const all = new Set<T>();
		this.members.forEach((dependencies, dependent) => {
			all.add(dependent);
			dependencies.forEach((dependency) => {
				all.add(dependency);
			});
		});
		const found = (item: T): boolean => {
			return clusters.some((cluster) => cluster.has(item));
		};
		for (const item of all) {
			if (!found(item)) {
				const newCluster = new Set<T>();
				newCluster.add(item);
				const deps = this.getDependencies(item);
				deps.forEach((dep) => {
					if (!found(dep)) {
						newCluster.add(dep);
					}
				});
				clusters.push(newCluster);
			}
		}
		const resolved = clusters.map((cluster) => Array.from(cluster));
		return resolved;
	}
	/**
	 * Adds an isolated member to the dependency graph. A member without any dependencies.
	 * @param member The member to add.
	 */
	public addIsolated(member: T): void {
		if (!this.members.has(member)) {
			this.members.set(member, new Set());
		}
	}
	/**
	 * Adds a dependent pair to the dependency graph.
	 * @param dependent The dependent member.
	 * @param dependency The dependency member.
	 */
	public addDependency(dependent: T, ...dependency: T[]): void {
		this.addIsolated(dependent);
		dependency.forEach((dep) => {
			this.addIsolated(dep);
			assert.false(errors.CyclicDependencyResolver, this.getDependencies(dep).has(dependent), dependent, dependency);
			this.members.get(dependent).add(dep);
		});
	}
	/**
	 * Recursively gets all dependencies of a single member.
	 * @param dependent The dependent member.
	 */
	public getDependencies(dependent: T): Set<T> {
		const out = new Set<T>();
		this._getDependencies(dependent, out);
		return out;
	}
	private _getDependencies(dependent: T, out: Set<T>): void {
		const resolve = (dep: T) => {
			if (this.members.has(dep)) {
				this.members.get(dep).forEach((dependency) => {
					if (!out.has(dependency)) {
						out.add(dependency);
						resolve(dependency);
					}
				});
			}
		};
		resolve(dependent);
	}
}
