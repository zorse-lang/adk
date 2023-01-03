import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class FHIRDatastore extends CfnResource<FHIRDatastoreComponentInputs> implements FHIRDatastoreComponentOutputs {
	constructor(entity: ADKEntity, options: FHIRDatastoreComponentInputs) {
		super(entity, options.LogicalId, "AWS::HealthLake::FHIRDatastore", options);
	}
	public readonly CreatedAtNanos: number;
	public readonly CreatedAtSeconds: string;
	public readonly DatastoreArn: string;
	public readonly DatastoreEndpoint: string;
	public readonly DatastoreId: string;
	public readonly DatastoreStatus: string;
}
export interface FHIRDatastoreComponentOutputs {
	readonly CreatedAtNanos: number;
	readonly CreatedAtSeconds: string;
	readonly DatastoreArn: string;
	readonly DatastoreEndpoint: string;
	readonly DatastoreId: string;
	readonly DatastoreStatus: string;
}
export interface FHIRDatastoreComponentInputs {
	readonly DatastoreTypeVersion: string;
	readonly DatastoreName?: (string | undefined) | undefined;
	readonly PreloadDataConfig?: (PreloadDataConfig | undefined) | undefined;
	readonly SseConfiguration?: (SseConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CreatedAt {
	readonly Nanos: number;
	readonly Seconds: string;
}
export interface KmsEncryptionConfig {
	readonly CmkType: string;
	readonly KmsKeyId?: (string | undefined) | undefined;
}
export interface PreloadDataConfig {
	readonly PreloadDataType: string;
}
export interface SseConfiguration {
	readonly KmsEncryptionConfig: KmsEncryptionConfig;
}
export default {
	FHIRDatastore: FHIRDatastore,
};
