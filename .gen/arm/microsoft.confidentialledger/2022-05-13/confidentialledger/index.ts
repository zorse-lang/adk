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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LedgerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export interface AADBasedSecurityPrincipal {
	readonly ledgerRoleName?: ("Administrator" | "Contributor" | "Reader") | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface CertBasedSecurityPrincipal {
	readonly cert?: string | undefined;
	readonly ledgerRoleName?: ("Administrator" | "Contributor" | "Reader") | undefined;
}
export interface LedgerProperties {
	readonly aadBasedSecurityPrincipals?: AADBasedSecurityPrincipal[] | undefined;
	readonly certBasedSecurityPrincipals?: CertBasedSecurityPrincipal[] | undefined;
	readonly identityServiceUri?: string | undefined;
	readonly ledgerInternalNamespace?: string | undefined;
	readonly ledgerName?: string | undefined;
	readonly ledgerType?: ("Private" | "Public" | "Unknown") | undefined;
	readonly ledgerUri?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	ledgers: ledgers,
};
