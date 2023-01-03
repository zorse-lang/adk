import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesIamRollouts
	extends GdmResource<ServicesIamRolloutsComponentInputs>
	implements ServicesIamRolloutsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesIamRolloutsComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesIamRollouts", options);
	}
}
export interface ServicesIamRolloutsComponentOutputs {}
export interface ServicesIamRolloutsComponentInputs {
	readonly rollout?: Rollout | undefined;
	readonly serviceName: string;
	readonly validateOnly?: boolean | undefined;
	readonly type: string;
	readonly name: string;
}
export interface ConfigFile {
	readonly fileContents?: string | undefined;
	readonly filePath?: string | undefined;
	readonly fileType?: string | undefined;
}
export interface ConfigOptions {
	readonly experiments?: string[] | undefined;
}
export interface ConfigSource {
	readonly files?: ConfigFile[] | undefined;
	readonly id?: string | undefined;
	readonly options?: ConfigOptions | undefined;
}
export interface DeleteServiceStrategy {}
export interface IamRollout {
	readonly rollout?: Rollout | undefined;
}
export interface ManagedRolloutStrategy {
	readonly configSource: ConfigSource;
}
export interface Rollout {
	readonly createdBy?: string | undefined;
	readonly createTime?: string | undefined;
	readonly deleteServiceStrategy?: any | undefined;
	readonly managedRolloutStrategy?: ManagedRolloutStrategy | undefined;
	readonly rolloutId?: string | undefined;
	readonly serviceName?: string | undefined;
	readonly serviceSelectionStrategy?: ServiceSelectionStrategy | undefined;
	readonly status?: string | undefined;
	readonly trafficPercentStrategy?: TrafficPercentStrategy | undefined;
}
export interface RolloutGroup {
	readonly name?: string | undefined;
	readonly serviceConfigIds?: string[] | undefined;
}
export interface ServiceSelectionStrategy {
	readonly groups?: RolloutGroup[] | undefined;
	readonly serviceConfigIds?: string[] | undefined;
}
export interface TrafficPercentStrategy {
	readonly percentages?: { [P in string]: number } | undefined;
}
export default {
	ServicesIamRollouts: ServicesIamRollouts,
};
