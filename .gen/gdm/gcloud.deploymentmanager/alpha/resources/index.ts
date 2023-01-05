import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Resources extends GdmResource<ResourcesComponentInputs> implements ResourcesComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcesComponentInputs) {
		super(entity, options.name, "deploymentmanager.alpha.Resources", options);
	}
	public readonly finalProperties?: string;
	public readonly insertTime?: string;
	public readonly lastUsedCredential?: Credential;
	public readonly manifest?: string;
	public readonly runtimePolicies?: string[];
	public readonly update?: ResourceUpdate;
	public readonly updateTime?: string;
	public readonly url?: string;
	public readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface ResourcesComponentOutputs {
	readonly finalProperties?: string;
	readonly insertTime?: string;
	readonly lastUsedCredential?: Credential;
	readonly manifest?: string;
	readonly runtimePolicies?: string[];
	readonly update?: ResourceUpdate;
	readonly updateTime?: string;
	readonly url?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface ResourcesComponentInputs {
	readonly accessControl?: ResourceAccessControl;
	readonly id?: string;
	readonly name: string;
}
export interface BasicAuth {
	readonly password?: string;
	readonly user?: string;
}
export interface Credential {
	readonly basicAuth?: BasicAuth;
	readonly serviceAccount?: ServiceAccount;
	readonly useProjectDefault?: boolean;
}
export interface Resource {
	readonly accessControl?: ResourceAccessControl;
	readonly finalProperties?: string;
	readonly id?: string;
	readonly insertTime?: string;
	readonly lastUsedCredential?: Credential;
	readonly manifest?: string;
	readonly name?: string;
	readonly properties?: string;
	readonly runtimePolicies?: string[];
	readonly type?: string;
	readonly update?: ResourceUpdate;
	readonly updateTime?: string;
	readonly url?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface ResourceAccessControl {
	readonly gcpIamPolicy?: string;
}
export interface ResourceUpdate {
	readonly accessControl?: ResourceAccessControl;
	readonly credential?: Credential;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> };
	readonly finalProperties?: string;
	readonly intent?: string;
	readonly manifest?: string;
	readonly properties?: string;
	readonly runtimePolicies?: string[];
	readonly state?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface ServiceAccount {
	readonly email?: string;
}
export default {
	Resources: Resources,
};
