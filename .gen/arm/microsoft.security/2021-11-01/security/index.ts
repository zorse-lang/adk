import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_alerts
	extends ArmResource<locations_alertsComponentInputs>
	implements locations_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/alerts", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties;
}
export interface AlertEntity {
	readonly type?: string;
	readonly [key: string]: any;
}
export interface AlertExtendedLinks {
	readonly [key: string]: string;
}
export interface AlertExtendedProperties {
	readonly [key: string]: string;
}
export interface AlertProperties {
	readonly alertDisplayName?: string;
	readonly alertType?: string;
	readonly alertUri?: string;
	readonly compromisedEntity?: string;
	readonly correlationKey?: string;
	readonly description?: string;
	readonly endTimeUtc?: string;
	readonly entities?: AlertEntity[];
	readonly extendedLinks?: AlertExtendedLinks[];
	readonly extendedProperties?: AlertExtendedProperties;
	readonly intent?:
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
		| "Unknown";
	readonly isIncident?: boolean;
	readonly processingEndTimeUtc?: string;
	readonly productComponentName?: string;
	readonly productName?: string;
	readonly remediationSteps?: string[];
	readonly resourceIdentifiers?: ResourceIdentifier[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly startTimeUtc?: string;
	readonly status?: "Active" | "Dismissed" | "Resolved";
	readonly systemAlertId?: string;
	readonly timeGeneratedUtc?: string;
	readonly vendorName?: string;
}
export interface ResourceIdentifier {}
export default {
	"locations/alerts": locations_alerts,
};
