import { Component, Entity, Scene, Symbols, System, Token, View, assert, errors } from "@zorse/adk/core";
import { dirname, resolve } from "path";

/** Base class for local {@link core.Component:class}s @noInheritDoc */
export abstract class LocalComponent extends Component {}

/** Base class for local {@link core.Scene:class}s @noInheritDoc */
export abstract class LocalScene extends Scene {}

/** Base options to create a FileSystem {@link core.Component:class} with */
export interface FileSystemOptions {
	/** The location this {@link core.Component:class} is located in on the physical file system. @defaultValue `"."` */
	readonly location?: string;
	/** The name of this {@link core.Component:class} on the physical file system, with the extension */
	readonly name: string;
}

/** Represents "something on the disk". At minimum it has a name and a location it's located in */
export abstract class FileSystemComponent extends LocalComponent {
	/** Name of the "thing" on disk */
	public name: string;
	/** Location the "thing" is located in on disk @defaultValue `"."` */
	public location: string;
	public constructor(parent: Entity, options: FileSystemOptions) {
		super(parent);
		this.name = options.name;
		this.location = options.location ?? ".";
	}
	/** Absolute physical path to the component */
	get path(): string {
		return resolve(this.location, this.name);
	}
}

/** Options to create a {@link scenes.TextFile:class} with */
export interface TextFileOptions extends FileSystemOptions {
	/** The content of the file @defaultValue `""` */
	readonly content?: string;
}

/** Options to create a {@link scenes.JsonFile:class} with */
export interface JsonFileOptions extends FileSystemOptions {
	/** The data to serialize to JSON @defaultValue `{}` */
	readonly data?: any;
}

/** Options to create a {@link scenes.Folder:class} with */
export interface FolderOptions extends FileSystemOptions {
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

/** A basic file system {@link core.Scene:class} implementation, it blindly overwrites on disk. */
export class FileSystemScene extends LocalScene {
	/** @param _fs Filesystem FS object that implements Node FS API */
	public constructor(system: System, private readonly _fs: typeof import("fs")) {
		super(system);
	}
	public empty(): Map<string, string> {
		return new Map();
	}
	public filter(component: Component): boolean {
		return component instanceof FileSystemComponent;
	}
	public async render(view: View): Promise<void> {
		for (const out of view.output as Map<string, string>) {
			await this._fs.promises.mkdir(dirname(out[0]), { recursive: true });
			await this._fs.promises.writeFile(out[0], out[1]);
		}
	}
	public update(token: Token): void {
		assert.true(errors.NotSupportedYet, token.data instanceof FileSystemComponent);
		assert.true(errors.NotSupportedYet, this.filter(token.data));
		const tokenDataHandle = token.data[Symbols.ComponentHandle];
		if (tokenDataHandle.actual instanceof TextFile) {
			token.query<TextFile>((c) => c.lines)?.reset(() => token.data.content.split("\n"));
		}
	}
}
