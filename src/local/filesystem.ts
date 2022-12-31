import { Component, Entity, Scene, Symbols, Token, View } from "@zorse/adk/core";
import { dirname, resolve } from "path";

/** Base options to create a FileSystem {@link core.Component:class} with */
export interface FileSystemBaseOptions {
	/** The directory this {@link core.Component:class} is located in on the physical file system. @defaultValue `"."` */
	readonly directory?: string;
	/** The name of this {@link core.Component:class} on the physical file system, with the extension */
	readonly name: string;
}

/** Represents "something on the disk". At minimum it has a name and a directory it's located in */
export abstract class FileSystemComponent extends Component.Resolvable {
	/** Name of the "thing" on disk */
	public name: string;
	/** Directory the "thing" is located in on disk @defaultValue `"."` */
	public directory: string;
	public constructor(parent: Entity, options: FileSystemBaseOptions) {
		super(parent);
		this.name = options.name;
		this.directory = options.directory ?? ".";
	}
	/** Absolute physical path to the component */
	get path(): string {
		return resolve(this.directory, this.name);
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
export class TextFile extends FileSystemComponent {
	/** The content of the file */
	public content: string;
	/** Lines in the content of the file (Resolvable) */
	public lines: string[];
	public constructor(parent: Entity, options: TextFileOptions) {
		super(parent, options);
		this.content = options.content ?? "";
	}
	public async [Symbols.ComponentRender](out: Map<string, string>) {
		out.set(this.path, this.content);
	}
}

/** A JSON file on the disk. When this {@link core.Component:class} is rendered, a physical JSON file appears */
export class JsonFile extends FileSystemComponent {
	/** The data to serialize to JSON */
	public data: any;
	public constructor(parent: Entity, options: JsonFileOptions) {
		super(parent, options);
		this.data = options.data ?? {};
	}
	public async [Symbols.ComponentRender](out: Map<string, string>) {
		out.set(this.path, JSON.stringify(this.data, null, 2));
	}
}

/** A folder on the disk. When this {@link core.Component:class} is rendered, a physical folder appears */
export class Folder extends FileSystemComponent {
	/** Whether to create a `.gitkeep` file in the folder */
	public gitkeep: boolean;
	public constructor(parent: Entity, options: FolderOptions) {
		super(parent, options);
		this.gitkeep = options.gitkeep ?? false;
	}
	public async [Symbols.ComponentRender](out: Map<string, string>) {
		if (this.gitkeep) {
			out.set(`${this.path}/.gitkeep`, "");
		}
	}
}

/** A basic file system scene implementation, it blindly overwrites on disk. */
export class FileSystemScene extends Scene {
	private readonly _output = new Map<string, string>();
	/** @param _fs Filesystem FS object that implements Node FS API */
	public constructor(private readonly _fs: typeof import("fs")) {
		super();
	}
	public empty(): Map<string, string> {
		this._output.clear();
		return this._output;
	}
	public filter(component: Component): boolean {
		return component instanceof FileSystemComponent;
	}
	public async render(view: View): Promise<void> {
		for (const _out of this._output) {
			await this._fs.promises.mkdir(dirname(_out[0]), { recursive: true });
			await this._fs.promises.writeFile(_out[0], _out[1]);
		}
	}
	public update(token: Token): Token {
		let maybeUpdated: Token = super.update(token);
		if (token.data instanceof TextFile) {
			const accessor = token.path();
			if (accessor.startsWith('["lines"]')) {
				const lines = token.data.content.split("\n");
				const value = eval(`lines${accessor.replace('["lines"]', "")}`);
				maybeUpdated = new Token({ resolver: () => value, data: lines });
			}
		}
		return maybeUpdated;
	}
}
