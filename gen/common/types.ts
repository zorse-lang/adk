import type { CodeMaker } from "codemaker";

export enum PropertyKind {
	Input,
	Output,
}

export interface GeneratedUnion {
	name: string;
	types: string[];
}

export interface GeneratedProperty {
	name: string;
	type: string;
	kind?: PropertyKind;
	required?: boolean;
}

export interface GeneratedInterface {
	name: string;
	properties: GeneratedProperty[];
}

export interface GeneratedConstruct extends GeneratedInterface {
	initializer: string;
}

export interface GeneratedFunction {
	name: string;
	parameters: GeneratedProperty[];
	returns: string;
	body: string;
}

export interface GeneratedModule {
	constructs: GeneratedConstruct[];
	interfaces: GeneratedInterface[];
	functions: GeneratedFunction[];
	unions: GeneratedUnion[];
	baseResource: string;
	fileName: string;
	code: CodeMaker;
}
