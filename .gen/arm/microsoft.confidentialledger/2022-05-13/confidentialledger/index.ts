import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class ledgers extends ArmResource<ledgersComponentInputs> implements ledgersComponentOutputs {
	constructor(entity: ADKEntity, options: ledgersComponentInputs) {
		super(entity, options.name, "Microsoft.ConfidentialLedger/ledgers", "2022-05-13", options);
	}
	public readonly apiVersion: "2022-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.ConfidentialLedger/ledgers";
}
export interface ledgersComponentOutputs {
	readonly apiVersion: "2022-05-13";
	readonly id: string;
	readonly type: "Microsoft.ConfidentialLedger/ledgers";
}
export interface ledgersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: LedgerProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
}
export interface AADBasedSecurityPrincipal {
	readonly ledgerRoleName?: "Administrator" | "Contributor" | "Reader";
	readonly principalId?: string;
	readonly tenantId?: string;
}
export interface CertBasedSecurityPrincipal {
	readonly cert?: string;
	readonly ledgerRoleName?: "Administrator" | "Contributor" | "Reader";
}
export interface LedgerProperties {
	readonly aadBasedSecurityPrincipals?: AADBasedSecurityPrincipal[];
	readonly certBasedSecurityPrincipals?: CertBasedSecurityPrincipal[];
	readonly identityServiceUri?: string;
	readonly ledgerInternalNamespace?: string;
	readonly ledgerName?: string;
	readonly ledgerType?: "Private" | "Public" | "Unknown";
	readonly ledgerUri?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Tags {
	readonly [key: string]: string;
}
export default {
	ledgers: ledgers,
};
