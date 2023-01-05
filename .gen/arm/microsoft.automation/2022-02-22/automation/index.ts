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
	readonly properties?: HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties;
	readonly systemData?: SystemData;
}
export interface HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties {
	readonly credential?: RunAsCredentialAssociationProperty;
	readonly groupType?: "System" | "User";
}
export interface RunAsCredentialAssociationProperty {
	readonly name?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	"automationAccounts/hybridRunbookWorkerGroups": automationAccounts_hybridRunbookWorkerGroups,
};
