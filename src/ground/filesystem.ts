import { Component, Entity, Scene, Symbols } from "@zorse/adk/core";

/** Alias to platform's "fs" API (Node's "fs" API) */
export type FileSystem = typeof import("fs");

/** Base options to create a FileSystem {@link core.Component:class} with */
export interface FileSystemBaseOptions {
	/** The directory this {@link core.Component:class} is located in on the physical file system. @defaultValue `"."` */
	readonly directory?: string;
	/** The name of this {@link core.Component:class} on the physical file system, with the extension */
	readonly name: string;
}

/** Represents "something on the disk". At minimum it has a name and a directory it's located in */
export abstract class FileSystemComponent extends Component {
	/** Name of the "thing" on disk */
	public name: string;
	/** Directory the "thing" is located in on disk @defaultValue `"."` */
	public directory: string;
	public constructor(parent: Entity, options: FileSystemBaseOptions) {
		super(parent);
		this.name = options.name;
		this.directory = options.directory ?? ".";
	}
}

/** Options to create a {@link ground.TextFile:class} with */
export interface TextFileOptions extends FileSystemBaseOptions {
	/** The content of the file @defaultValue `""` */
	readonly content?: string;
}

/** Options to create a {@link ground.JsonFile:class} with */
export interface JsonFileOptions extends FileSystemBaseOptions {
	/** The data to serialize to JSON @defaultValue `{}` */
	readonly data?: any;
}

/** Options to create a {@link ground.Folder:class} with */
export interface FolderOptions extends FileSystemBaseOptions {
	/** Whether to create a `.gitkeep` file in the folder @defaultValue `false` */
	readonly gitkeep?: boolean;
}

/** A text file on the disk. When this {@link core.Component:class} is rendered, a physical file appears */
export abstract class TextFile extends FileSystemComponent {
	/** The content of the file */
	public content: string;
	public constructor(parent: Entity, options: TextFileOptions) {
		super(parent, options);
		this.content = options.content ?? "";
	}
	/**
	 * Renders this {@link core.Component:class} to the physical file system.
	 * @param out The platform's "fs" API (Node's "fs" API)
	 */
	public async [Symbols.ComponentRender](out: FileSystem) {
		const { promises: fs } = out;
		await fs.mkdir(this.directory, { recursive: true });
		const path = `${this.directory}/${this.name}`;
		await fs.writeFile(path, this.content, "utf8");
	}
}

/** A JSON file on the disk. When this {@link core.Component:class} is rendered, a physical JSON file appears */
export abstract class JsonFile extends FileSystemComponent {
	/** The data to serialize to JSON */
	public data: any;
	public constructor(parent: Entity, options: JsonFileOptions) {
		super(parent, options);
		this.data = options.data ?? {};
	}
	/**
	 * Renders this {@link core.Component:class} to the physical file system.
	 * @param out The platform's "fs" API (Node's "fs" API)
	 */
	public async [Symbols.ComponentRender](out: FileSystem) {
		const { promises: fs } = out;
		await fs.mkdir(this.directory, { recursive: true });
		const path = `${this.directory}/${this.name}`;
		await fs.writeFile(path, JSON.stringify(this.data, null, 2), "utf8");
	}
}

/** A folder on the disk. When this {@link core.Component:class} is rendered, a physical folder appears */
export abstract class Folder extends FileSystemComponent {
	/** Whether to create a `.gitkeep` file in the folder */
	public gitkeep: boolean;
	public constructor(parent: Entity, options: FolderOptions) {
		super(parent, options);
		this.gitkeep = options.gitkeep ?? false;
	}
	/**
	 * Renders this {@link core.Component:class} to the physical file system.
	 * @param out The platform's "fs" API (Node's "fs" API)
	 */
	public async [Symbols.ComponentRender](out: FileSystem) {
		const { promises: fs } = out;
		const path = `${this.directory}/${this.name}`;
		await fs.mkdir(path, { recursive: true });
		if (this.gitkeep) {
			await fs.writeFile(`${path}/.gitkeep`, "", "utf8");
		}
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
