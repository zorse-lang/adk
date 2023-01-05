import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VirtualProjectsLocationsFunctionsIamMemberBinding
	extends GdmResource<VirtualProjectsLocationsFunctionsIamMemberBindingComponentInputs>
	implements VirtualProjectsLocationsFunctionsIamMemberBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: VirtualProjectsLocationsFunctionsIamMemberBindingComponentInputs) {
		super(entity, options.name, "cloudfunctions.v1.VirtualProjectsLocationsFunctionsIamMemberBinding", options);
	}
}
export interface VirtualProjectsLocationsFunctionsIamMemberBindingComponentOutputs {}
export interface VirtualProjectsLocationsFunctionsIamMemberBindingComponentInputs {
	readonly auditConfigs?: AuditConfig[];
	readonly bindings?: Binding[];
	readonly etag?: string;
	readonly policy: Policy;
	readonly resource: string;
	readonly rules?: Rule[];
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
	readonly ignoreChildExemptions?: boolean;
	readonly logType?: string;
}
export interface AuthorizationLoggingOptions {
	readonly permissionType?: string;
}
export interface Binding {
	readonly bindingId?: string;
	readonly condition?: Expr;
	readonly members?: string[];
	readonly role?: string;
}
export interface CloudAuditOptions {
	readonly authorizationLoggingOptions?: AuthorizationLoggingOptions;
	readonly logName?: string;
}
export interface Condition {
	readonly iam?: string;
	readonly op?: string;
	readonly svc?: string;
	readonly sys?: string;
	readonly values?: string[];
}
export interface CounterOptions {
	readonly customFields?: CustomField[];
	readonly field?: string;
	readonly metric?: string;
}
export interface CustomField {
	readonly name?: string;
	readonly value?: string;
}
export interface DataAccessOptions {
	readonly logMode?: string;
}
export interface Expr {
	readonly description?: string;
	readonly expression?: string;
	readonly location?: string;
	readonly title?: string;
}
export interface LogConfig {
	readonly cloudAudit?: CloudAuditOptions;
	readonly counter?: CounterOptions;
	readonly dataAccess?: DataAccessOptions;
}
export interface Policy {
	readonly auditConfigs?: AuditConfig[];
	readonly bindings?: Binding[];
	readonly etag?: string;
	readonly rules?: Rule[];
	readonly version?: number;
}
export interface Rule {
	readonly action: string;
	readonly conditions?: Condition[];
	readonly description?: string;
	readonly in?: string[];
	readonly logConfig?: LogConfig[];
	readonly notIn?: string[];
	readonly permissions?: string[];
}
export interface SetIamPolicyRequest {
	readonly policy: Policy;
	readonly updateMask?: string;
}
export default {
	VirtualProjectsLocationsFunctionsIamMemberBinding: VirtualProjectsLocationsFunctionsIamMemberBinding,
};
