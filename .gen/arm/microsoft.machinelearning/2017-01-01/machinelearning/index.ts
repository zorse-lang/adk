import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class webServices extends ArmResource<webServicesComponentInputs> implements webServicesComponentOutputs {
	constructor(entity: ADKEntity, options: webServicesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearning/webServices", "2017-01-01", options);
	}
	public readonly apiVersion: "2017-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearning/webServices";
}
export interface webServicesComponentOutputs {
	readonly apiVersion: "2017-01-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearning/webServices";
}
export interface webServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: WebServiceProperties;
	readonly tags?: ResourceTags | undefined;
}
export interface AssetItem {
	readonly id?: string | undefined;
	readonly inputPorts?: AssetItemInputPorts | undefined;
	readonly locationInfo: BlobLocation;
	readonly metadata?: AssetItemMetadata | undefined;
	readonly name: string;
	readonly outputPorts?: AssetItemOutputPorts | undefined;
	readonly parameters?: ModuleAssetParameter[] | undefined;
	readonly type: "Module" | "Resource";
}
export interface AssetItemInputPorts {
	readonly "[ key: string ]"?: InputPort | undefined;
}
export interface AssetItemMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AssetItemOutputPorts {
	readonly "[ key: string ]"?: OutputPort | undefined;
}
export interface BlobLocation {
	readonly credentials?: string | undefined;
	readonly uri: string;
}
export interface ColumnSpecification {
	readonly enum?: any[] | undefined;
	readonly format?:
		| (
				| "Byte"
				| "Char"
				| "Complex128"
				| "Complex64"
				| "Date-time"
				| "Date-timeOffset"
				| "Double"
				| "Duration"
				| "Float"
				| "Int16"
				| "Int32"
				| "Int64"
				| "Int8"
				| "Uint16"
				| "Uint32"
				| "Uint64"
				| "Uint8"
		  )
		| undefined;
	readonly type: "Boolean" | "Integer" | "Number" | "String";
	readonly "x-ms-isnullable"?: boolean | undefined;
	readonly "x-ms-isordered"?: boolean | undefined;
}
export interface CommitmentPlan {
	readonly id: string;
}
export interface DiagnosticsConfiguration {
	readonly expiry?: string | undefined;
	readonly level: "All" | "Error" | "None";
}
export interface ExampleRequest {
	readonly globalParameters?: ExampleRequestGlobalParameters | undefined;
	readonly inputs?: ExampleRequestInputs | undefined;
}
export interface ExampleRequestGlobalParameters {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ExampleRequestInputs {
	readonly "[ key: string ]"?: any[][] | undefined;
}
export interface GraphEdge {
	readonly sourceNodeId?: string | undefined;
	readonly sourcePortId?: string | undefined;
	readonly targetNodeId?: string | undefined;
	readonly targetPortId?: string | undefined;
}
export interface GraphNode {
	readonly assetId?: string | undefined;
	readonly inputId?: string | undefined;
	readonly outputId?: string | undefined;
	readonly parameters?: GraphNodeParameters | undefined;
}
export interface GraphNodeParameters {
	readonly "[ key: string ]"?: WebServiceParameter | undefined;
}
export interface GraphPackage {
	readonly edges?: GraphEdge[] | undefined;
	readonly graphParameters?: GraphPackageGraphParameters | undefined;
	readonly nodes?: GraphPackageNodes | undefined;
}
export interface GraphPackageGraphParameters {
	readonly "[ key: string ]"?: GraphParameter | undefined;
}
export interface GraphPackageNodes {
	readonly "[ key: string ]"?: GraphNode | undefined;
}
export interface GraphParameter {
	readonly description?: string | undefined;
	readonly links: GraphParameterLink[];
	readonly type:
		| "Boolean"
		| "ColumnPicker"
		| "Credential"
		| "DataGatewayName"
		| "Double"
		| "Enumerated"
		| "Float"
		| "Int"
		| "Mode"
		| "ParameterRange"
		| "Script"
		| "String";
}
export interface GraphParameterLink {
	readonly nodeId: string;
	readonly parameterKey: string;
}
export interface InputPort {
	readonly type?: "Dataset" | undefined;
}
export interface MachineLearningWorkspace {
	readonly id: string;
}
export interface ModeValueInfo {
	readonly interfaceString?: string | undefined;
	readonly parameters?: ModuleAssetParameter[] | undefined;
}
export interface ModuleAssetParameter {
	readonly modeValuesInfo?: ModuleAssetParameterModeValuesInfo | undefined;
	readonly name?: string | undefined;
	readonly parameterType?: string | undefined;
}
export interface ModuleAssetParameterModeValuesInfo {
	readonly "[ key: string ]"?: ModeValueInfo | undefined;
}
export interface OutputPort {
	readonly type?: "Dataset" | undefined;
}
export interface RealtimeConfiguration {
	readonly maxConcurrentCalls?: number | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServiceInputOutputSpecification {
	readonly description?: string | undefined;
	readonly properties: ServiceInputOutputSpecificationProperties;
	readonly title?: string | undefined;
	readonly type: string;
}
export interface ServiceInputOutputSpecificationProperties {
	readonly "[ key: string ]"?: TableSpecification | undefined;
}
export interface StorageAccount {
	readonly key?: string | undefined;
	readonly name?: string | undefined;
}
export interface TableSpecification {
	readonly description?: string | undefined;
	readonly format?: string | undefined;
	readonly properties?: TableSpecificationProperties | undefined;
	readonly title?: string | undefined;
	readonly type: string;
}
export interface TableSpecificationProperties {
	readonly "[ key: string ]"?: ColumnSpecification | undefined;
}
export interface WebServiceKeys {
	readonly primary?: string | undefined;
	readonly secondary?: string | undefined;
}
export interface WebServiceParameter {
	readonly certificateThumbprint?: string | undefined;
	readonly value?: any | undefined;
}
export interface WebServiceProperties {
	readonly assets?: WebServicePropertiesAssets | undefined;
	readonly commitmentPlan?: CommitmentPlan | undefined;
	readonly createdOn?: string | undefined;
	readonly description?: string | undefined;
	readonly diagnostics?: DiagnosticsConfiguration | undefined;
	readonly exampleRequest?: ExampleRequest | undefined;
	readonly exposeSampleData?: boolean | undefined;
	readonly input?: ServiceInputOutputSpecification | undefined;
	readonly keys?: WebServiceKeys | undefined;
	readonly machineLearningWorkspace?: MachineLearningWorkspace | undefined;
	readonly modifiedOn?: string | undefined;
	readonly output?: ServiceInputOutputSpecification | undefined;
	readonly parameters?: WebServicePropertiesParameters | undefined;
	readonly payloadsInBlobStorage?: boolean | undefined;
	readonly payloadsLocation?: BlobLocation | undefined;
	readonly provisioningState?: ("Failed" | "Provisioning" | "Succeeded" | "Unknown") | undefined;
	readonly readOnly?: boolean | undefined;
	readonly realtimeConfiguration?: RealtimeConfiguration | undefined;
	readonly storageAccount?: StorageAccount | undefined;
	readonly swaggerLocation?: string | undefined;
	readonly title?: string | undefined;
}
export interface WebServicePropertiesAssets {
	readonly "[ key: string ]"?: AssetItem | undefined;
}
export interface WebServicePropertiesParameters {
	readonly "[ key: string ]"?: WebServiceParameter | undefined;
}
export default {
	webServices: webServices,
};
