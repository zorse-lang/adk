import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesRollouts
	extends GdmResource<ServicesRolloutsComponentInputs>
	implements ServicesRolloutsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesRolloutsComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesRollouts", options);
	}
}
export interface ServicesRolloutsComponentOutputs {}
export interface ServicesRolloutsComponentInputs {
	readonly baseRolloutId?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createTime?: string | undefined;
	readonly deleteServiceStrategy?: any | undefined;
	readonly exclusive?: boolean | undefined;
	readonly force?: boolean | undefined;
	readonly managedRolloutStrategy?: ManagedRolloutStrategy | undefined;
	readonly rolloutId?: string | undefined;
	readonly serviceName?: string | undefined;
	readonly serviceSelectionStrategy?: ServiceSelectionStrategy | undefined;
	readonly status?: string | undefined;
	readonly trafficPercentStrategy?: TrafficPercentStrategy | undefined;
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
export interface ManagedRolloutStrategy {
	readonly configSource: ConfigSource;
	readonly serviceConfigIds?: string[] | undefined;
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
	ServicesRollouts: ServicesRollouts,
};
