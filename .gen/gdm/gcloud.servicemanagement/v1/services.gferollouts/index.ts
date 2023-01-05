import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesGfeRollouts
	extends GdmResource<ServicesGfeRolloutsComponentInputs>
	implements ServicesGfeRolloutsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesGfeRolloutsComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesGfeRollouts", options);
	}
}
export interface ServicesGfeRolloutsComponentOutputs {}
export interface ServicesGfeRolloutsComponentInputs {
	readonly force?: boolean;
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
export interface GfeRollout {
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
	ServicesGfeRollouts: ServicesGfeRollouts,
};
