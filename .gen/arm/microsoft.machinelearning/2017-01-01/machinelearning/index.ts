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
	readonly tags?: ResourceTags;
}
export interface AssetItem {
	readonly id?: string;
	readonly inputPorts?: AssetItemInputPorts;
	readonly locationInfo: BlobLocation;
	readonly metadata?: AssetItemMetadata;
	readonly name: string;
	readonly outputPorts?: AssetItemOutputPorts;
	readonly parameters?: ModuleAssetParameter[];
	readonly type: "Module" | "Resource";
}
export interface AssetItemInputPorts {
	readonly [key: string]: InputPort;
}
export interface AssetItemMetadata {
	readonly [key: string]: string;
}
export interface AssetItemOutputPorts {
	readonly [key: string]: OutputPort;
}
export interface BlobLocation {
	readonly credentials?: string;
	readonly uri: string;
}
export interface ColumnSpecification {
	readonly enum?: any[];
	readonly format?:
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
		| "Uint8";
	readonly type: "Boolean" | "Integer" | "Number" | "String";
	readonly "x-ms-isnullable"?: boolean;
	readonly "x-ms-isordered"?: boolean;
}
export interface CommitmentPlan {
	readonly id: string;
}
export interface DiagnosticsConfiguration {
	readonly expiry?: string;
	readonly level: "All" | "Error" | "None";
}
export interface ExampleRequest {
	readonly globalParameters?: ExampleRequestGlobalParameters;
	readonly inputs?: ExampleRequestInputs;
}
export interface ExampleRequestGlobalParameters {
	readonly [key: string]: any;
}
export interface ExampleRequestInputs {
	readonly [key: string]: any[][];
}
export interface GraphEdge {
	readonly sourceNodeId?: string;
	readonly sourcePortId?: string;
	readonly targetNodeId?: string;
	readonly targetPortId?: string;
}
export interface GraphNode {
	readonly assetId?: string;
	readonly inputId?: string;
	readonly outputId?: string;
	readonly parameters?: GraphNodeParameters;
}
export interface GraphNodeParameters {
	readonly [key: string]: WebServiceParameter;
}
export interface GraphPackage {
	readonly edges?: GraphEdge[];
	readonly graphParameters?: GraphPackageGraphParameters;
	readonly nodes?: GraphPackageNodes;
}
export interface GraphPackageGraphParameters {
	readonly [key: string]: GraphParameter;
}
export interface GraphPackageNodes {
	readonly [key: string]: GraphNode;
}
export interface GraphParameter {
	readonly description?: string;
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
	readonly type?: "Dataset";
}
export interface MachineLearningWorkspace {
	readonly id: string;
}
export interface ModeValueInfo {
	readonly interfaceString?: string;
	readonly parameters?: ModuleAssetParameter[];
}
export interface ModuleAssetParameter {
	readonly modeValuesInfo?: ModuleAssetParameterModeValuesInfo;
	readonly name?: string;
	readonly parameterType?: string;
}
export interface ModuleAssetParameterModeValuesInfo {
	readonly [key: string]: ModeValueInfo;
}
export interface OutputPort {
	readonly type?: "Dataset";
}
export interface RealtimeConfiguration {
	readonly maxConcurrentCalls?: number;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ServiceInputOutputSpecification {
	readonly description?: string;
	readonly properties: ServiceInputOutputSpecificationProperties;
	readonly title?: string;
	readonly type: string;
}
export interface ServiceInputOutputSpecificationProperties {
	readonly [key: string]: TableSpecification;
}
export interface StorageAccount {
	readonly key?: string;
	readonly name?: string;
}
export interface TableSpecification {
	readonly description?: string;
	readonly format?: string;
	readonly properties?: TableSpecificationProperties;
	readonly title?: string;
	readonly type: string;
}
export interface TableSpecificationProperties {
	readonly [key: string]: ColumnSpecification;
}
export interface WebServiceKeys {
	readonly primary?: string;
	readonly secondary?: string;
}
export interface WebServiceParameter {
	readonly certificateThumbprint?: string;
	readonly value?: any;
}
export interface WebServiceProperties {
	readonly assets?: WebServicePropertiesAssets;
	readonly commitmentPlan?: CommitmentPlan;
	readonly createdOn?: string;
	readonly description?: string;
	readonly diagnostics?: DiagnosticsConfiguration;
	readonly exampleRequest?: ExampleRequest;
	readonly exposeSampleData?: boolean;
	readonly input?: ServiceInputOutputSpecification;
	readonly keys?: WebServiceKeys;
	readonly machineLearningWorkspace?: MachineLearningWorkspace;
	readonly modifiedOn?: string;
	readonly output?: ServiceInputOutputSpecification;
	readonly parameters?: WebServicePropertiesParameters;
	readonly payloadsInBlobStorage?: boolean;
	readonly payloadsLocation?: BlobLocation;
	readonly provisioningState?: "Failed" | "Provisioning" | "Succeeded" | "Unknown";
	readonly readOnly?: boolean;
	readonly realtimeConfiguration?: RealtimeConfiguration;
	readonly storageAccount?: StorageAccount;
	readonly swaggerLocation?: string;
	readonly title?: string;
}
export interface WebServicePropertiesAssets {
	readonly [key: string]: AssetItem;
}
export interface WebServicePropertiesParameters {
	readonly [key: string]: WebServiceParameter;
}
export default {
	webServices: webServices,
};
