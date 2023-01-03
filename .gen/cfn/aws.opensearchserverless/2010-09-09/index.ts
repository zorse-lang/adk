import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPolicy extends CfnResource<AccessPolicyComponentInputs> implements AccessPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpenSearchServerless::AccessPolicy", options);
	}
}
export interface AccessPolicyComponentOutputs {}
export interface AccessPolicyComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Policy?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Collection extends CfnResource<CollectionComponentInputs> implements CollectionComponentOutputs {
	constructor(entity: ADKEntity, options: CollectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpenSearchServerless::Collection", options);
	}
	public readonly Arn: string;
	public readonly CollectionEndpoint: string;
	public readonly DashboardEndpoint: string;
	public readonly Id: string;
}
export interface CollectionComponentOutputs {
	readonly Arn: string;
	readonly CollectionEndpoint: string;
	readonly DashboardEndpoint: string;
	readonly Id: string;
}
export interface CollectionComponentInputs {
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityConfig extends CfnResource<SecurityConfigComponentInputs> implements SecurityConfigComponentOutputs {
	constructor(entity: ADKEntity, options: SecurityConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpenSearchServerless::SecurityConfig", options);
	}
	public readonly Id: string;
}
export interface SecurityConfigComponentOutputs {
	readonly Id: string;
}
export interface SecurityConfigComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly SamlOptions?: (SamlConfigOptions | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityPolicy extends CfnResource<SecurityPolicyComponentInputs> implements SecurityPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: SecurityPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpenSearchServerless::SecurityPolicy", options);
	}
}
export interface SecurityPolicyComponentOutputs {}
export interface SecurityPolicyComponentInputs {
	readonly Policy: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class VpcEndpoint extends CfnResource<VpcEndpointComponentInputs> implements VpcEndpointComponentOutputs {
	constructor(entity: ADKEntity, options: VpcEndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpenSearchServerless::VpcEndpoint", options);
	}
	public readonly Id: string;
}
export interface VpcEndpointComponentOutputs {
	readonly Id: string;
}
export interface VpcEndpointComponentInputs {
	readonly Name: string;
	readonly VpcId: string;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface SamlConfigOptions {
	readonly GroupAttribute?: (string | undefined) | undefined;
	readonly Metadata: string;
	readonly SessionTimeout?: (number | undefined) | undefined;
	readonly UserAttribute?: (string | undefined) | undefined;
}
export default {
	AccessPolicy: AccessPolicy,
	Collection: Collection,
	SecurityConfig: SecurityConfig,
	SecurityPolicy: SecurityPolicy,
	VpcEndpoint: VpcEndpoint,
};
