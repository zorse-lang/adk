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
	readonly rollout?: Rollout;
	readonly serviceName: string;
	readonly validateOnly?: boolean;
	readonly name: string;
}
export interface ConfigFile {
	readonly fileContents?: string;
	readonly filePath?: string;
	readonly fileType?: string;
}
export interface ConfigOptions {
	readonly experiments?: string[];
}
export interface ConfigSource {
	readonly files?: ConfigFile[];
	readonly id?: string;
	readonly options?: ConfigOptions;
}
export interface DeleteServiceStrategy {}
export interface IamRollout {
	readonly rollout?: Rollout;
}
export interface ManagedRolloutStrategy {
	readonly configSource: ConfigSource;
}
export interface Rollout {
	readonly createdBy?: string;
	readonly createTime?: string;
	readonly deleteServiceStrategy?: any;
	readonly managedRolloutStrategy?: ManagedRolloutStrategy;
	readonly rolloutId?: string;
	readonly serviceName?: string;
	readonly serviceSelectionStrategy?: ServiceSelectionStrategy;
	readonly status?: string;
	readonly trafficPercentStrategy?: TrafficPercentStrategy;
}
export interface RolloutGroup {
	readonly name?: string;
	readonly serviceConfigIds?: string[];
}
export interface ServiceSelectionStrategy {
	readonly groups?: RolloutGroup[];
	readonly serviceConfigIds?: string[];
}
export interface TrafficPercentStrategy {
	readonly percentages?: { [P in string]: number };
}
export default {
	ServicesIamRollouts: ServicesIamRollouts,
};
