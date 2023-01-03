import {
	GeneratedConstruct,
	GeneratedFunction,
	GeneratedInterface,
	GeneratedModule,
	GeneratedUnion,
	PropertyKind,
} from "./types";

import { CodeMaker } from "codemaker";
import _ from "lodash";

export * from "./types";

// a map of symbols to sanitized symbols
const SYMBOLS = new Map<string, string>();

function $sym(name: string): string {
	if (name === "cdk.IResolvable") {
		return "(any /* cdk.IResolvable */)"; // TODO: fix this
	}
	if (name.includes("AnyDict")) {
		return "any";
	}
	name = name.replace("Any", "any");
	if (name.includes("{ [key: string]: (Function) }") || name.startsWith("Function[]") || name === "Function") {
		name = name.replace("Function", "FunctionInstance");
	}
	const isArray = name.endsWith("[]");
	const isOptional = name.endsWith("?");
	const baseName = isArray ? name.slice(0, -2) : isOptional ? name.slice(0, -1) : name;
	if (
		["string", "number", "boolean", "object", "undefined", "Date", "[ key: string ]"].includes(baseName) ||
		baseName.includes("|") ||
		baseName.includes("<") ||
		(baseName.startsWith("{") && baseName.endsWith("}"))
	) {
		return name;
	}
	if (["'", '"'].includes(baseName[0]) && baseName[0] === baseName[baseName.length - 1]) {
		return name;
	}
	if (SYMBOLS.has(name)) {
		return SYMBOLS.get(name) as string;
	}
	const sanitized = baseName.replace(/[^a-zA-Z0-9_[\]]/g, "_");
	const symbol = `${sanitized}${isArray ? "[]" : ""}${isOptional ? "?" : ""}`;
	SYMBOLS.set(name, symbol);
	return symbol;
}

function writeInterface(opts: GeneratedModule, code: CodeMaker, iface: GeneratedInterface) {
	const { name } = iface;
	code.openBlock(`export interface ${$sym(name)}`);
	for (const prop of iface.properties) {
		const { name, type, required } = prop;
		const optionality = required ? "" : " | undefined";
		const question = required ? "" : "?";
		const nameQuoted = name === "*" ? "[ key: string ]" : `"${name}"`;
		const typeWrapped = name === "*" ? "any" : $sym(type);
		code.line(`readonly ${nameQuoted}${question}: (${typeWrapped})${optionality};`);
	}
	code.closeBlock();
}

function writeConstruct(opts: GeneratedModule, code: CodeMaker, klass: GeneratedConstruct) {
	const { name } = klass;
	const InputType = $sym(`${klass.name}ComponentInputs`);
	const OutputType = $sym(`${klass.name}ComponentOutputs`);
	code.openBlock(`export class ${$sym(name)} extends ${opts.baseResource}<${InputType}> implements ${OutputType}`);
	const inputRequired = klass.properties.some((p) => p.required);
	const optionality = inputRequired ? "" : " | undefined";
	code.openBlock(`constructor(entity: ADKEntity, options: ${InputType}${optionality})`);
	code.line(klass.initializer);
	code.closeBlock();
	const input = klass.properties.filter((p) => p.kind === PropertyKind.Input);
	const output = klass.properties.filter((p) => p.kind === PropertyKind.Output);
	for (const prop of output) {
		const { name, type, required } = prop;
		const optionality = required ? "" : " | undefined";
		const question = required ? "" : "?";
		const nameSanitized = name === "*" ? "[ key: string ]" : name;
		const visibility = name === "*" ? "" : "public readonly ";
		code.line(`${visibility}${nameSanitized}${question}: (${$sym(type)})${optionality};`);
	}
	code.closeBlock();

	writeInterface(opts, code, { name: OutputType, properties: output });
	writeInterface(opts, code, { name: InputType, properties: input });
}

function writeUnion(opts: GeneratedModule, code: CodeMaker, union: GeneratedUnion) {
	const { name } = union;
	code.line(`export type ${$sym(name)} = ${union.types.map($sym).join(" | ")};`);
}

function writeFunction(opts: GeneratedModule, code: CodeMaker, func: GeneratedFunction) {
	const { name, parameters, returns } = func;
	code.openBlock(
		`export function ${$sym(name)}(${parameters.map((v) => `${v.name}: ${$sym(v.type)}`).join(", ")}): ${$sym(
			returns,
		)}`,
	);
	code.line(func.body);
	code.closeBlock();
}

export function write(opts: GeneratedModule): CodeMaker {
	opts.code.openFile(opts.fileName);
	opts.code.line(`import { ${opts.baseResource}, Entity as ADKEntity } from "@zorse/adk";`);
	opts.code.line();
	const remaps = new Set<string>();
	for (const construct of _.uniqBy(opts.constructs, (c) => c.name)) {
		writeConstruct(opts, opts.code, construct);
		remaps.add(construct.name);
	}
	for (const func of _.uniqBy(opts.functions, (i) => i.name)) {
		writeFunction(opts, opts.code, func);
	}
	for (const iface of _.uniqBy(opts.interfaces, (i) => i.name)) {
		writeInterface(opts, opts.code, iface);
	}
	for (const union of _.uniqBy(opts.unions, (i) => i.name)) {
		writeUnion(opts, opts.code, union);
	}
	opts.code.openBlock("export default");
	for (const remap of remaps) {
		opts.code.line(`"${remap}": ${$sym(remap)},`);
	}
	opts.code.closeBlock();
	opts.code.closeFile(opts.fileName);
	return opts.code;
}
