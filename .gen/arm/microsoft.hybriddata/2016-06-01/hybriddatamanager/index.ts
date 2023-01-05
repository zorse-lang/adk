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
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
	readonly customerSecrets?: CustomerSecret[];
	readonly dataStoreTypeId: string;
	readonly extendedProperties?: any;
	readonly repositoryId?: string;
	readonly state: "Disabled" | "Enabled";
}
export interface JobDefinitionProperties {
	readonly customerSecrets?: CustomerSecret[];
	readonly dataServiceInput?: any;
	readonly dataSinkId: string;
	readonly dataSourceId: string;
	readonly lastModifiedTime?: string;
	readonly runLocation?:
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
		| "westus";
	readonly schedules?: Schedule[];
	readonly state: "Disabled" | "Enabled";
	readonly userConfirmation?: "NotRequired";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Schedule {
	readonly name?: string;
	readonly policyList?: string[];
}
export interface Sku {
	readonly name?: string;
	readonly tier?: string;
}
export default {
	dataManagers: dataManagers,
	"dataManagers/dataServices/jobDefinitions": dataManagers_dataServices_jobDefinitions,
	"dataManagers/dataStores": dataManagers_dataStores,
};
