import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VirtualProjectsIamMemberBinding
	extends GdmResource<VirtualProjectsIamMemberBindingComponentInputs>
	implements VirtualProjectsIamMemberBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: VirtualProjectsIamMemberBindingComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.VirtualProjectsIamMemberBinding", options);
	}
}
export interface VirtualProjectsIamMemberBindingComponentOutputs {}
export interface VirtualProjectsIamMemberBindingComponentInputs {
	readonly auditConfigs?: AuditConfig[];
	readonly bindings?: Binding[];
	readonly etag?: string;
	readonly policy: Policy;
	readonly resource: string;
	readonly updateMask?: string;
	readonly version?: number;
	readonly name: string;
}
export interface AuditConfig {
	readonly auditLogConfigs?: AuditLogConfig[];
	readonly service?: string;
}
export interface AuditLogConfig {
	readonly exemptedMembers?: string[];
	readonly logType?: string;
}
export interface Binding {
	readonly condition?: Expr;
	readonly members?: string[];
	readonly role?: string;
}
export interface Expr {
	readonly description?: string;
	readonly expression?: string;
	readonly location?: string;
	readonly title?: string;
}
export interface Policy {
	readonly auditConfigs?: AuditConfig[];
	readonly bindings?: Binding[];
	readonly etag?: string;
	readonly version?: number;
}
export interface SetIamPolicyRequest {
	readonly policy: Policy;
	readonly updateMask?: string;
}
export default {
	VirtualProjectsIamMemberBinding: VirtualProjectsIamMemberBinding,
};
