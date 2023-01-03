import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_alerts
	extends ArmResource<locations_alertsComponentInputs>
	implements locations_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/alerts", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
}
export interface AlertEntity {
	readonly type?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AlertExtendedLinks {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AlertExtendedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AlertProperties {
	readonly alertDisplayName?: string | undefined;
	readonly alertType?: string | undefined;
	readonly alertUri?: string | undefined;
	readonly compromisedEntity?: string | undefined;
	readonly correlationKey?: string | undefined;
	readonly description?: string | undefined;
	readonly endTimeUtc?: string | undefined;
	readonly entities?: AlertEntity[] | undefined;
	readonly extendedLinks?: AlertExtendedLinks[] | undefined;
	readonly extendedProperties?: AlertExtendedProperties | undefined;
	readonly intent?:
		| (
				| "Collection"
				| "CommandAndControl"
				| "CredentialAccess"
				| "DefenseEvasion"
				| "Discovery"
				| "Execution"
				| "Exfiltration"
				| "Exploitation"
				| "Impact"
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"
				| "Probing"
				| "Unknown"
		  )
		| undefined;
	readonly isIncident?: boolean | undefined;
	readonly processingEndTimeUtc?: string | undefined;
	readonly productComponentName?: string | undefined;
	readonly productName?: string | undefined;
	readonly remediationSteps?: string[] | undefined;
	readonly resourceIdentifiers?: ResourceIdentifier[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly status?: ("Active" | "Dismissed" | "InProgress" | "Resolved") | undefined;
	readonly subTechniques?: string[] | undefined;
	readonly supportingEvidence?: AlertPropertiesSupportingEvidence | undefined;
	readonly systemAlertId?: string | undefined;
	readonly techniques?: string[] | undefined;
	readonly timeGeneratedUtc?: string | undefined;
	readonly vendorName?: string | undefined;
	readonly version?: string | undefined;
}
export interface AlertPropertiesSupportingEvidence {
	readonly type?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ResourceIdentifier {}
export default {
	"locations/alerts": locations_alerts,
};
