import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Assignment extends CfnResource<AssignmentComponentInputs> implements AssignmentComponentOutputs {
	constructor(entity: ADKEntity, options: AssignmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSO::Assignment", options);
	}
}
export interface AssignmentComponentOutputs {}
export interface AssignmentComponentInputs {
	readonly InstanceArn: string;
	readonly PermissionSetArn: string;
	readonly PrincipalId: string;
	readonly PrincipalType: string;
	readonly TargetId: string;
	readonly TargetType: string;
	readonly LogicalId: string;
}
export class InstanceAccessControlAttributeConfiguration
	extends CfnResource<InstanceAccessControlAttributeConfigurationComponentInputs>
	implements InstanceAccessControlAttributeConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceAccessControlAttributeConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSO::InstanceAccessControlAttributeConfiguration", options);
	}
}
export interface InstanceAccessControlAttributeConfigurationComponentOutputs {}
export interface InstanceAccessControlAttributeConfigurationComponentInputs {
	readonly InstanceArn: string;
	readonly AccessControlAttributes?: (AccessControlAttribute[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class PermissionSet extends CfnResource<PermissionSetComponentInputs> implements PermissionSetComponentOutputs {
	constructor(entity: ADKEntity, options: PermissionSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSO::PermissionSet", options);
	}
	public readonly PermissionSetArn: string;
}
export interface PermissionSetComponentOutputs {
	readonly PermissionSetArn: string;
}
export interface PermissionSetComponentInputs {
	readonly InstanceArn: string;
	readonly Name: string;
	readonly CustomerManagedPolicyReferences?: (CustomerManagedPolicyReference[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly InlinePolicy?: (any | undefined) | undefined;
	readonly ManagedPolicies?: (string[] | undefined) | undefined;
	readonly PermissionsBoundary?: (PermissionsBoundary | undefined) | undefined;
	readonly RelayStateType?: (string | undefined) | undefined;
	readonly SessionDuration?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AccessControlAttribute {
	readonly Key: string;
	readonly Value: AccessControlAttributeValue;
}
export interface AccessControlAttributeValue {
	readonly Source: string[];
}
export interface CustomerManagedPolicyReference {
	readonly Name: string;
	readonly Path?: (string | undefined) | undefined;
}
export interface PermissionsBoundary {
	readonly CustomerManagedPolicyReference?: (CustomerManagedPolicyReference | undefined) | undefined;
	readonly ManagedPolicyArn?: (string | undefined) | undefined;
}
export default {
	Assignment: Assignment,
	InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration,
	PermissionSet: PermissionSet,
};
