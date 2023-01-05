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
	readonly baseRolloutId?: string;
	readonly createdBy?: string;
	readonly createTime?: string;
	readonly deleteServiceStrategy?: any;
	readonly exclusive?: boolean;
	readonly force?: boolean;
	readonly managedRolloutStrategy?: ManagedRolloutStrategy;
	readonly rolloutId?: string;
	readonly serviceName?: string;
	readonly serviceSelectionStrategy?: ServiceSelectionStrategy;
	readonly status?: string;
	readonly trafficPercentStrategy?: TrafficPercentStrategy;
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
export interface ManagedRolloutStrategy {
	readonly configSource: ConfigSource;
	readonly serviceConfigIds?: string[];
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
	ServicesRollouts: ServicesRollouts,
};
