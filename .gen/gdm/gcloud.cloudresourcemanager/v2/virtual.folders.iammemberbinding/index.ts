import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VirtualFoldersIamMemberBinding
	extends GdmResource<VirtualFoldersIamMemberBindingComponentInputs>
	implements VirtualFoldersIamMemberBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: VirtualFoldersIamMemberBindingComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v2.VirtualFoldersIamMemberBinding", options);
	}
}
export interface VirtualFoldersIamMemberBindingComponentOutputs {}
export interface VirtualFoldersIamMemberBindingComponentInputs {
	readonly auditConfigs?: AuditConfig[] | undefined;
	readonly bindings?: Binding[] | undefined;
	readonly etag?: string | undefined;
	readonly policy: Policy;
	readonly resource: string;
	readonly updateMask?: string | undefined;
	readonly version?: number | undefined;
	readonly type: string;
	readonly name: string;
}
export interface AuditConfig {
	readonly auditLogConfigs?: AuditLogConfig[] | undefined;
	readonly service?: string | undefined;
}
export interface AuditLogConfig {
	readonly exemptedMembers?: string[] | undefined;
	readonly logType?: string | undefined;
}
export interface Binding {
	readonly condition?: Expr | undefined;
	readonly members?: string[] | undefined;
	readonly role?: string | undefined;
}
export interface Expr {
	readonly description?: string | undefined;
	readonly expression?: string | undefined;
	readonly location?: string | undefined;
	readonly title?: string | undefined;
}
export interface Policy {
	readonly auditConfigs?: AuditConfig[] | undefined;
	readonly bindings?: Binding[] | undefined;
	readonly etag?: string | undefined;
	readonly version?: number | undefined;
}
export interface SetIamPolicyRequest {
	readonly policy: Policy;
	readonly updateMask?: string | undefined;
}
export default {
	VirtualFoldersIamMemberBinding: VirtualFoldersIamMemberBinding,
};
