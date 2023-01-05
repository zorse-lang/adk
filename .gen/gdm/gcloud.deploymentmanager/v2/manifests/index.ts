import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Manifests extends GdmResource<ManifestsComponentInputs> implements ManifestsComponentOutputs {
	constructor(entity: ADKEntity, options: ManifestsComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2.Manifests", options);
	}
	public readonly config?: ConfigFile;
	public readonly expandedConfig?: string;
	public readonly imports?: ImportFile[];
	public readonly insertTime?: string;
	public readonly layout?: string;
	public readonly manifestSizeBytes?: string;
	public readonly manifestSizeLimitBytes?: string;
	public readonly selfLink?: string;
}
export interface ManifestsComponentOutputs {
	readonly config?: ConfigFile;
	readonly expandedConfig?: string;
	readonly imports?: ImportFile[];
	readonly insertTime?: string;
	readonly layout?: string;
	readonly manifestSizeBytes?: string;
	readonly manifestSizeLimitBytes?: string;
	readonly selfLink?: string;
}
export interface ManifestsComponentInputs {
	readonly id?: string;
	readonly name: string;
}
export interface ConfigFile {
	readonly content?: string;
}
export interface ImportFile {
	readonly content?: string;
	readonly name?: string;
}
export interface Manifest {
	readonly config?: ConfigFile;
	readonly expandedConfig?: string;
	readonly id?: string;
	readonly imports?: ImportFile[];
	readonly insertTime?: string;
	readonly layout?: string;
	readonly manifestSizeBytes?: string;
	readonly manifestSizeLimitBytes?: string;
	readonly name?: string;
	readonly selfLink?: string;
}
export default {
	Manifests: Manifests,
};
