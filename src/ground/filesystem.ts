import { Component, Entity, Scene, Symbols } from "@zorse/adk/core";

export type FileSystem = typeof import("fs");
export abstract class FileSystemComponent extends Component {}

export interface FileBaseOptions {
	readonly directory?: string;
	readonly name: string;
}
export interface TextFileOptions extends FileBaseOptions {
	readonly lines?: string[];
}
export interface JsonFileOptions extends FileBaseOptions {
	readonly data?: any;
}
export interface FolderOptions {
	readonly directory?: string;
	readonly name: string;
}

export abstract class TextFile extends FileSystemComponent {
	protected name: string;
	protected directory: string;
	protected lines: string[];
	public constructor(parent: Entity, options: TextFileOptions) {
		super(parent);
		this.name = options.name;
		this.lines = options.lines ?? [];
		this.directory = options.directory ?? ".";
	}
	public async [Symbols.ComponentRender](out: FileSystem) {
		const { promises: fs } = out;
		if (!(await fs.stat(this.directory)).isDirectory()) {
			await fs.mkdir(this.directory, { recursive: true });
		}
		const path = `${this.directory}/${this.name}`;
		await fs.writeFile(path, this.lines.join("\n"), "utf8");
	}
}

export abstract class JsonFile extends FileSystemComponent {
	protected name: string;
	protected directory: string;
	protected data: any;
	public constructor(parent: Entity, options: JsonFileOptions) {
		super(parent);
		this.name = options.name;
		this.data = options.data ?? {};
		this.directory = options.directory ?? ".";
	}
	public async [Symbols.ComponentRender](out: FileSystem) {
		const { promises: fs } = out;
		await fs.mkdir(this.directory, { recursive: true });
		const path = `${this.directory}/${this.name}`;
		await fs.writeFile(path, JSON.stringify(this.data, null, 2), "utf8");
	}
}

export abstract class Folder extends FileSystemComponent {
	protected name: string;
	protected directory: string;
	public constructor(parent: Entity, options: FolderOptions) {
		super(parent);
		this.name = options.name;
		this.directory = options.directory ?? ".";
	}
	public async [Symbols.ComponentRender](out: FileSystem) {
		const { promises: fs } = out;
		const path = `${this.directory}/${this.name}`;
		await fs.mkdir(path, { recursive: true });
	}
}

export class NodeFileSystemScene extends Scene {
	public constructor(private readonly fs: FileSystem) {
		super();
	}
	public empty(): FileSystem {
		return this.fs;
	}
	public accepts(component: Component): boolean {
		return component instanceof FileSystemComponent;
	}
}
