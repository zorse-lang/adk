import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class trafficmanagerprofiles_heatMaps
	extends ArmResource<trafficmanagerprofiles_heatMapsComponentInputs>
	implements trafficmanagerprofiles_heatMapsComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofiles_heatMapsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficmanagerprofiles/heatMaps", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles/heatMaps";
}
export interface trafficmanagerprofiles_heatMapsComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles/heatMaps";
}
export interface trafficmanagerprofiles_heatMapsComponentInputs {
	readonly name: string;
	readonly properties?: HeatMapProperties;
}
export interface HeatMapEndpoint {
	readonly endpointId?: number;
	readonly resourceId?: string;
}
export interface HeatMapProperties {
	readonly endpoints?: HeatMapEndpoint[];
	readonly endTime?: string;
	readonly startTime?: string;
	readonly trafficFlows?: TrafficFlow[];
}
export interface QueryExperience {
	readonly endpointId: number;
	readonly latency?: number;
	readonly queryCount: number;
}
export interface TrafficFlow {
	readonly latitude?: number;
	readonly longitude?: number;
	readonly queryExperiences?: QueryExperience[];
	readonly sourceIp?: string;
}
export default {
	"trafficmanagerprofiles/heatMaps": trafficmanagerprofiles_heatMaps,
};
