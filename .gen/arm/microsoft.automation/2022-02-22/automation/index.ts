import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class automationAccounts_hybridRunbookWorkerGroups
	extends ArmResource<automationAccounts_hybridRunbookWorkerGroupsComponentInputs>
	implements automationAccounts_hybridRunbookWorkerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_hybridRunbookWorkerGroupsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups",
			"2022-02-22",
			options,
		);
	}
	public readonly apiVersion: "2022-02-22";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups";
}
export interface automationAccounts_hybridRunbookWorkerGroupsComponentOutputs {
	readonly apiVersion: "2022-02-22";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups";
}
export interface automationAccounts_hybridRunbookWorkerGroupsComponentInputs {
	readonly name: string;
	readonly properties?:
		| HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties
		| undefined;
	readonly systemData?: SystemData | undefined;
}
export interface HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties {
	readonly credential?: RunAsCredentialAssociationProperty | undefined;
	readonly groupType?: ("System" | "User") | undefined;
}
export interface RunAsCredentialAssociationProperty {
	readonly name?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	"automationAccounts/hybridRunbookWorkerGroups": automationAccounts_hybridRunbookWorkerGroups,
};
