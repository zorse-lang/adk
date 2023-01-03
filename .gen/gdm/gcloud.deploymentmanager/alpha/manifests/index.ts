import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Manifests extends GdmResource<ManifestsComponentInputs> implements ManifestsComponentOutputs {
	constructor(entity: ADKEntity, options: ManifestsComponentInputs) {
		super(entity, options.name, "deploymentmanager.alpha.Manifests", options);
	}
	public readonly config?: ConfigFile | undefined;
	public readonly expandedConfig?: string | undefined;
	public readonly imports?: ImportFile[] | undefined;
	public readonly insertTime?: string | undefined;
	public readonly layout?: string | undefined;
	public readonly manifestSizeBytes?: string | undefined;
	public readonly manifestSizeLimitBytes?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface ManifestsComponentOutputs {
	readonly config?: ConfigFile | undefined;
	readonly expandedConfig?: string | undefined;
	readonly imports?: ImportFile[] | undefined;
	readonly insertTime?: string | undefined;
	readonly layout?: string | undefined;
	readonly manifestSizeBytes?: string | undefined;
	readonly manifestSizeLimitBytes?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface ManifestsComponentInputs {
	readonly id?: string | undefined;
	readonly name: string;
	readonly type: string;
}
export interface ConfigFile {
	readonly content?: string | undefined;
}
export interface ImportFile {
	readonly content?: string | undefined;
	readonly name?: string | undefined;
}
export interface Manifest {
	readonly config?: ConfigFile | undefined;
	readonly expandedConfig?: string | undefined;
	readonly id?: string | undefined;
	readonly imports?: ImportFile[] | undefined;
	readonly insertTime?: string | undefined;
	readonly layout?: string | undefined;
	readonly manifestSizeBytes?: string | undefined;
	readonly manifestSizeLimitBytes?: string | undefined;
	readonly name?: string | undefined;
	readonly selfLink?: string | undefined;
}
export default {
	Manifests: Manifests,
};
