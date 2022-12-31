import * as ECS from "@zorse/adk/core/object";
import * as memfs from "memfs";

import { FileSystemScene, Folder, JsonFile, TextFile } from "@zorse/adk/local";

describe("FileSystem Scene tests", () => {
	it("should be able to write a JSON file that contains line of another text file", async () => {
		const fs = new memfs.Volume();
		const system = new ECS.System();
		system.scenes.add(new FileSystemScene(fs as any));
		const entity = new ECS.Entity(system);
		const text = new TextFile(entity, { name: "test.txt", content: "Hello World\nThis is Line 2\nThis is Line 3." });
		new JsonFile(entity, { name: "test.json", data: { lineTwo: text.lines[1] } });
		const composition = await system.compose();
		const result = composition.gizmos();
		const expected = [
			{
				Components: [
					{ name: "test.txt", directory: ".", content: "Hello World\nThis is Line 2\nThis is Line 3." },
					{ name: "test.json", directory: ".", data: { lineTwo: "This is Line 2" } },
				],
			},
		];
		expect(result).toEqual(expected);
		expect(fs.toJSON()).toEqual({
			[`${process.cwd()}/test.txt`]: "Hello World\nThis is Line 2\nThis is Line 3.",
			[`${process.cwd()}/test.json`]: '{\n  "lineTwo": "This is Line 2"\n}',
		});
	});

	it("should be able to create folders", async () => {
		const fs = new memfs.Volume();
		const system = new ECS.System();
		system.scenes.add(new FileSystemScene(fs as any));
		const entity = new ECS.Entity(system);
		new Folder(entity, { name: "test" });
		new Folder(entity, { name: "test2", gitkeep: true });
		const composition = await system.compose();
		const result = composition.gizmos();
		const expected = [
			{
				Components: [
					{ name: "test", directory: ".", gitkeep: false },
					{ name: "test2", directory: ".", gitkeep: true },
				],
			},
		];
		expect(result).toEqual(expected);
		expect(fs.toJSON()).toEqual({
			[`${process.cwd()}/test2/.gitkeep`]: "",
		});
	});

	it("should be able to create empty files with no parameters", async () => {
		const fs = new memfs.Volume();
		const system = new ECS.System();
		system.scenes.add(new FileSystemScene(fs as any));
		const entity = new ECS.Entity(system);
		new TextFile(entity, { name: "empty.txt", directory: "/" });
		new JsonFile(entity, { name: "empty.json" });
		const composition = await system.compose();
		const result = composition.gizmos();
		const expected = [
			{
				Components: [
					{ name: "empty.txt", directory: "/", content: "" },
					{ name: "empty.json", directory: ".", data: {} },
				],
			},
		];
		expect(result).toEqual(expected);
		expect(fs.toJSON()).toEqual({
			["/empty.txt"]: "",
			[`${process.cwd()}/empty.json`]: "{}",
		});
	});
});
