import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataManagers extends ArmResource<dataManagersComponentInputs> implements dataManagersComponentOutputs {
	constructor(entity: ADKEntity, options: dataManagersComponentInputs) {
		super(entity, options.name, "Microsoft.HybridData/dataManagers", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.HybridData/dataManagers";
}
export interface dataManagersComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.HybridData/dataManagers";
}
export interface dataManagersComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class dataManagers_dataServices_jobDefinitions
	extends ArmResource<dataManagers_dataServices_jobDefinitionsComponentInputs>
	implements dataManagers_dataServices_jobDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataManagers_dataServices_jobDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridData/dataManagers/dataServices/jobDefinitions", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.HybridData/dataManagers/dataServices/jobDefinitions";
}
export interface dataManagers_dataServices_jobDefinitionsComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.HybridData/dataManagers/dataServices/jobDefinitions";
}
export interface dataManagers_dataServices_jobDefinitionsComponentInputs {
	readonly name: string;
	readonly properties: JobDefinitionProperties;
}
export class dataManagers_dataStores
	extends ArmResource<dataManagers_dataStoresComponentInputs>
	implements dataManagers_dataStoresComponentOutputs
{
	constructor(entity: ADKEntity, options: dataManagers_dataStoresComponentInputs) {
		super(entity, options.name, "Microsoft.HybridData/dataManagers/dataStores", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.HybridData/dataManagers/dataStores";
}
export interface dataManagers_dataStoresComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.HybridData/dataManagers/dataStores";
}
export interface dataManagers_dataStoresComponentInputs {
	readonly name: string;
	readonly properties: DataStoreProperties;
}
export interface CustomerSecret {
	readonly algorithm: "None" | "PlainText" | "RSA1_5";
	readonly keyIdentifier: string;
	readonly keyValue: string;
}
export interface DataStoreProperties {
	readonly customerSecrets?: CustomerSecret[] | undefined;
	readonly dataStoreTypeId: string;
	readonly extendedProperties?: any | undefined;
	readonly repositoryId?: string | undefined;
	readonly state: "Disabled" | "Enabled";
}
export interface JobDefinitionProperties {
	readonly customerSecrets?: CustomerSecret[] | undefined;
	readonly dataServiceInput?: any | undefined;
	readonly dataSinkId: string;
	readonly dataSourceId: string;
	readonly lastModifiedTime?: string | undefined;
	readonly runLocation?:
		| (
				| "australiaeast"
				| "australiasoutheast"
				| "brazilsouth"
				| "canadacentral"
				| "canadaeast"
				| "centralindia"
				| "centralus"
				| "eastasia"
				| "eastus"
				| "eastus2"
				| "japaneast"
				| "japanwest"
				| "koreacentral"
				| "koreasouth"
				| "none"
				| "northcentralus"
				| "northeurope"
				| "southcentralus"
				| "southeastasia"
				| "southindia"
				| "uksouth"
				| "ukwest"
				| "westcentralus"
				| "westeurope"
				| "westindia"
				| "westus"
		  )
		| undefined;
	readonly schedules?: Schedule[] | undefined;
	readonly state: "Disabled" | "Enabled";
	readonly userConfirmation?: "NotRequired" | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Schedule {
	readonly name?: string | undefined;
	readonly policyList?: string[] | undefined;
}
export interface Sku {
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export default {
	dataManagers: dataManagers,
	"dataManagers/dataServices/jobDefinitions": dataManagers_dataServices_jobDefinitions,
	"dataManagers/dataStores": dataManagers_dataStores,
};
