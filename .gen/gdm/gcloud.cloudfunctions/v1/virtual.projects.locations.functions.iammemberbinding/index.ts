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
	readonly auditConfigs?: AuditConfig[] | undefined;
	readonly bindings?: Binding[] | undefined;
	readonly etag?: string | undefined;
	readonly policy: Policy;
	readonly resource: string;
	readonly rules?: Rule[] | undefined;
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
	readonly ignoreChildExemptions?: boolean | undefined;
	readonly logType?: string | undefined;
}
export interface AuthorizationLoggingOptions {
	readonly permissionType?: string | undefined;
}
export interface Binding {
	readonly bindingId?: string | undefined;
	readonly condition?: Expr | undefined;
	readonly members?: string[] | undefined;
	readonly role?: string | undefined;
}
export interface CloudAuditOptions {
	readonly authorizationLoggingOptions?: AuthorizationLoggingOptions | undefined;
	readonly logName?: string | undefined;
}
export interface Condition {
	readonly iam?: string | undefined;
	readonly op?: string | undefined;
	readonly svc?: string | undefined;
	readonly sys?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface CounterOptions {
	readonly customFields?: CustomField[] | undefined;
	readonly field?: string | undefined;
	readonly metric?: string | undefined;
}
export interface CustomField {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface DataAccessOptions {
	readonly logMode?: string | undefined;
}
export interface Expr {
	readonly description?: string | undefined;
	readonly expression?: string | undefined;
	readonly location?: string | undefined;
	readonly title?: string | undefined;
}
export interface LogConfig {
	readonly cloudAudit?: CloudAuditOptions | undefined;
	readonly counter?: CounterOptions | undefined;
	readonly dataAccess?: DataAccessOptions | undefined;
}
export interface Policy {
	readonly auditConfigs?: AuditConfig[] | undefined;
	readonly bindings?: Binding[] | undefined;
	readonly etag?: string | undefined;
	readonly rules?: Rule[] | undefined;
	readonly version?: number | undefined;
}
export interface Rule {
	readonly action: string;
	readonly conditions?: Condition[] | undefined;
	readonly description?: string | undefined;
	readonly in?: string[] | undefined;
	readonly logConfig?: LogConfig[] | undefined;
	readonly notIn?: string[] | undefined;
	readonly permissions?: string[] | undefined;
}
export interface SetIamPolicyRequest {
	readonly policy: Policy;
	readonly updateMask?: string | undefined;
}
export default {
	VirtualProjectsLocationsFunctionsIamMemberBinding: VirtualProjectsLocationsFunctionsIamMemberBinding,
};
