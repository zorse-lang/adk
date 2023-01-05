import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class resourceProviders_locations_serviceLimits
	extends ArmResource<resourceProviders_locations_serviceLimitsComponentInputs>
	implements resourceProviders_locations_serviceLimitsComponentOutputs
{
	constructor(entity: ADKEntity, options: resourceProviders_locations_serviceLimitsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Capacity/resourceProviders/locations/serviceLimits",
			"2019-07-19-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-07-19-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/resourceProviders/locations/serviceLimits";
}
export interface resourceProviders_locations_serviceLimitsComponentOutputs {
	readonly apiVersion: "2019-07-19-preview";
	readonly id: string;
	readonly type: "Microsoft.Capacity/resourceProviders/locations/serviceLimits";
}
export interface resourceProviders_locations_serviceLimitsComponentInputs {
	readonly name: string;
	readonly properties?: QuotaProperties;
}
export class resourceProviders_locations_serviceLimitsRequests
	extends ArmResource<resourceProviders_locations_serviceLimitsRequestsComponentInputs>
	implements resourceProviders_locations_serviceLimitsRequestsComponentOutputs
{
	constructor(entity: ADKEntity, options: resourceProviders_locations_serviceLimitsRequestsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Capacity/resourceProviders/locations/serviceLimitsRequests",
			"2019-07-19-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-07-19-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/resourceProviders/locations/serviceLimitsRequests";
}
export interface resourceProviders_locations_serviceLimitsRequestsComponentOutputs {
	readonly apiVersion: "2019-07-19-preview";
	readonly id: string;
	readonly type: "Microsoft.Capacity/resourceProviders/locations/serviceLimitsRequests";
}
export interface resourceProviders_locations_serviceLimitsRequestsComponentInputs {
	readonly name: string;
	readonly properties?: QuotaRequestProperties;
}
export interface QuotaProperties {
	readonly currentValue?: number;
	readonly limit?: number;
	readonly name?: ResourceName;
	readonly properties?: any;
	readonly quotaPeriod?: string;
	readonly resourceType?: "dedicated" | "lowPriority" | "serviceSpecific" | "shared" | "standard";
	readonly unit?: string;
}
export interface QuotaRequestProperties {
	readonly message?: string;
	readonly provisioningState?: "Accepted" | "Failed" | "InProgress" | "Invalid" | "Succeeded";
	readonly requestSubmitTime?: string;
	readonly value?: SubRequest[];
}
export interface ResourceName {
	readonly localizedValue?: string;
	readonly value?: string;
}
export interface SubRequest {
	readonly limit?: number;
	readonly message?: string;
	readonly name?: ResourceName;
	readonly provisioningState?: "Accepted" | "Failed" | "InProgress" | "Invalid" | "Succeeded";
	readonly resourceType?: string;
	readonly subRequestId?: string;
	readonly unit?: string;
}
export default {
	"resourceProviders/locations/serviceLimits": resourceProviders_locations_serviceLimits,
	"resourceProviders/locations/serviceLimitsRequests": resourceProviders_locations_serviceLimitsRequests,
};
