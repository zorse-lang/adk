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
	readonly properties?: QuotaProperties | undefined;
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
	readonly properties?: QuotaRequestProperties | undefined;
}
export interface QuotaProperties {
	readonly currentValue?: number | undefined;
	readonly limit?: number | undefined;
	readonly name?: ResourceName | undefined;
	readonly properties?: any | undefined;
	readonly quotaPeriod?: string | undefined;
	readonly resourceType?: ("dedicated" | "lowPriority" | "serviceSpecific" | "shared" | "standard") | undefined;
	readonly unit?: string | undefined;
}
export interface QuotaRequestProperties {
	readonly message?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Failed" | "InProgress" | "Invalid" | "Succeeded") | undefined;
	readonly requestSubmitTime?: string | undefined;
	readonly value?: SubRequest[] | undefined;
}
export interface ResourceName {
	readonly localizedValue?: string | undefined;
	readonly value?: string | undefined;
}
export interface SubRequest {
	readonly limit?: number | undefined;
	readonly message?: string | undefined;
	readonly name?: ResourceName | undefined;
	readonly provisioningState?: ("Accepted" | "Failed" | "InProgress" | "Invalid" | "Succeeded") | undefined;
	readonly resourceType?: string | undefined;
	readonly subRequestId?: string | undefined;
	readonly unit?: string | undefined;
}
export default {
	"resourceProviders/locations/serviceLimits": resourceProviders_locations_serviceLimits,
	"resourceProviders/locations/serviceLimitsRequests": resourceProviders_locations_serviceLimitsRequests,
};
