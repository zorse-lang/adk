import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Objects extends GdmResource<ObjectsComponentInputs> implements ObjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ObjectsComponentInputs) {
		super(entity, options.name, "storage.v1.Objects", options);
	}
}
export interface ObjectsComponentOutputs {}
export interface ObjectsComponentInputs {
	readonly acl?: ObjectAccessControl[];
	readonly bucket?: string;
	readonly cacheControl?: string;
	readonly componentCount?: number;
	readonly contentDisposition?: string;
	readonly contentEncoding?: string;
	readonly contentLanguage?: string;
	readonly contentType?: string;
	readonly crc32c?: string;
	readonly customerEncryption?: { encryptionAlgorithm?: string; keySha256?: string };
	readonly customTime?: string;
	readonly etag?: string;
	readonly eventBasedHold?: boolean;
	readonly generation?: string;
	readonly id?: string;
	readonly ifGenerationMatch?: string;
	readonly ifGenerationNotMatch?: string;
	readonly ifMetagenerationMatch?: string;
	readonly ifMetagenerationNotMatch?: string;
	readonly kind?: string;
	readonly kmsKeyName?: string;
	readonly md5Hash?: string;
	readonly mediaLink?: string;
	readonly metadata?: { [P in string]: string };
	readonly metageneration?: string;
	readonly name: string;
	readonly owner?: { entity?: string; entityId?: string };
	readonly predefinedAcl?: string;
	readonly projection?: string;
	readonly retentionExpirationTime?: string;
	readonly selfLink?: string;
	readonly size?: string;
	readonly storageClass?: string;
	readonly temporaryHold?: boolean;
	readonly timeCreated?: string;
	readonly timeDeleted?: string;
	readonly timeStorageClassUpdated?: string;
	readonly updated?: string;
	readonly userProject?: string;
}
export interface Object {
	readonly acl?: ObjectAccessControl[];
	readonly bucket?: string;
	readonly cacheControl?: string;
	readonly componentCount?: number;
	readonly contentDisposition?: string;
	readonly contentEncoding?: string;
	readonly contentLanguage?: string;
	readonly contentType?: string;
	readonly crc32c?: string;
	readonly customerEncryption?: { encryptionAlgorithm?: string; keySha256?: string };
	readonly customTime?: string;
	readonly etag?: string;
	readonly eventBasedHold?: boolean;
	readonly generation?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly kmsKeyName?: string;
	readonly md5Hash?: string;
	readonly mediaLink?: string;
	readonly metadata?: { [P in string]: string };
	readonly metageneration?: string;
	readonly name?: string;
	readonly owner?: { entity?: string; entityId?: string };
	readonly retentionExpirationTime?: string;
	readonly selfLink?: string;
	readonly size?: string;
	readonly storageClass?: string;
	readonly temporaryHold?: boolean;
	readonly timeCreated?: string;
	readonly timeDeleted?: string;
	readonly timeStorageClassUpdated?: string;
	readonly updated?: string;
}
export interface ObjectAccessControl {
	readonly bucket?: string;
	readonly domain?: string;
	readonly email?: string;
	readonly entity?: string;
	readonly entityId?: string;
	readonly etag?: string;
	readonly generation?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly object?: string;
	readonly projectTeam?: { projectNumber?: string; team?: string };
	readonly role?: string;
	readonly selfLink?: string;
}
export default {
	Objects: Objects,
};
