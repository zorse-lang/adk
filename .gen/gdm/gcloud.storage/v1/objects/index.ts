import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Objects extends GdmResource<ObjectsComponentInputs> implements ObjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ObjectsComponentInputs) {
		super(entity, options.name, "storage.v1.Objects", options);
	}
}
export interface ObjectsComponentOutputs {}
export interface ObjectsComponentInputs {
	readonly acl?: ObjectAccessControl[] | undefined;
	readonly bucket?: string | undefined;
	readonly cacheControl?: string | undefined;
	readonly componentCount?: number | undefined;
	readonly contentDisposition?: string | undefined;
	readonly contentEncoding?: string | undefined;
	readonly contentLanguage?: string | undefined;
	readonly contentType?: string | undefined;
	readonly crc32c?: string | undefined;
	readonly customerEncryption?: { encryptionAlgorithm?: string; keySha256?: string } | undefined;
	readonly customTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly eventBasedHold?: boolean | undefined;
	readonly generation?: string | undefined;
	readonly id?: string | undefined;
	readonly ifGenerationMatch?: string | undefined;
	readonly ifGenerationNotMatch?: string | undefined;
	readonly ifMetagenerationMatch?: string | undefined;
	readonly ifMetagenerationNotMatch?: string | undefined;
	readonly kind?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly md5Hash?: string | undefined;
	readonly mediaLink?: string | undefined;
	readonly metadata?: { [P in string]: string } | undefined;
	readonly metageneration?: string | undefined;
	readonly name: string;
	readonly owner?: { entity?: string; entityId?: string } | undefined;
	readonly predefinedAcl?: string | undefined;
	readonly projection?: string | undefined;
	readonly retentionExpirationTime?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly size?: string | undefined;
	readonly storageClass?: string | undefined;
	readonly temporaryHold?: boolean | undefined;
	readonly timeCreated?: string | undefined;
	readonly timeDeleted?: string | undefined;
	readonly timeStorageClassUpdated?: string | undefined;
	readonly updated?: string | undefined;
	readonly userProject?: string | undefined;
	readonly type: string;
}
export interface Object {
	readonly acl?: ObjectAccessControl[] | undefined;
	readonly bucket?: string | undefined;
	readonly cacheControl?: string | undefined;
	readonly componentCount?: number | undefined;
	readonly contentDisposition?: string | undefined;
	readonly contentEncoding?: string | undefined;
	readonly contentLanguage?: string | undefined;
	readonly contentType?: string | undefined;
	readonly crc32c?: string | undefined;
	readonly customerEncryption?: { encryptionAlgorithm?: string; keySha256?: string } | undefined;
	readonly customTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly eventBasedHold?: boolean | undefined;
	readonly generation?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly md5Hash?: string | undefined;
	readonly mediaLink?: string | undefined;
	readonly metadata?: { [P in string]: string } | undefined;
	readonly metageneration?: string | undefined;
	readonly name?: string | undefined;
	readonly owner?: { entity?: string; entityId?: string } | undefined;
	readonly retentionExpirationTime?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly size?: string | undefined;
	readonly storageClass?: string | undefined;
	readonly temporaryHold?: boolean | undefined;
	readonly timeCreated?: string | undefined;
	readonly timeDeleted?: string | undefined;
	readonly timeStorageClassUpdated?: string | undefined;
	readonly updated?: string | undefined;
}
export interface ObjectAccessControl {
	readonly bucket?: string | undefined;
	readonly domain?: string | undefined;
	readonly email?: string | undefined;
	readonly entity?: string | undefined;
	readonly entityId?: string | undefined;
	readonly etag?: string | undefined;
	readonly generation?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly object?: string | undefined;
	readonly projectTeam?: { projectNumber?: string; team?: string } | undefined;
	readonly role?: string | undefined;
	readonly selfLink?: string | undefined;
}
export default {
	Objects: Objects,
};
