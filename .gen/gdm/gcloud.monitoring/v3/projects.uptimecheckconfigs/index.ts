import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsUptimeCheckConfigs
	extends GdmResource<ProjectsUptimeCheckConfigsComponentInputs>
	implements ProjectsUptimeCheckConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsUptimeCheckConfigsComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsUptimeCheckConfigs", options);
	}
}
export interface ProjectsUptimeCheckConfigsComponentOutputs {}
export interface ProjectsUptimeCheckConfigsComponentInputs {
	readonly checkerType?: string | undefined;
	readonly contentMatchers?: ContentMatcher[] | undefined;
	readonly displayName?: string | undefined;
	readonly httpCheck?: HttpCheck | undefined;
	readonly internalCheckers?: InternalChecker[] | undefined;
	readonly isInternal?: boolean | undefined;
	readonly monitoredResource?: MonitoredResource | undefined;
	readonly name: string;
	readonly parent: string;
	readonly period?: string | undefined;
	readonly resourceGroup?: ResourceGroup | undefined;
	readonly selectedRegions?: string[] | undefined;
	readonly tcpCheck?: TcpCheck | undefined;
	readonly timeout?: string | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly type: string;
}
export interface BasicAuthentication {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface ContentMatcher {
	readonly content?: string | undefined;
	readonly jsonPathMatcher?: JsonPathMatcher | undefined;
	readonly matcher?: string | undefined;
}
export interface HttpCheck {
	readonly acceptedResponseStatusCodes?: ResponseStatusCode[] | undefined;
	readonly authInfo?: BasicAuthentication | undefined;
	readonly body?: string | undefined;
	readonly contentType?: string | undefined;
	readonly headers?: { [P in string]: string } | undefined;
	readonly maskHeaders?: boolean | undefined;
	readonly path?: string | undefined;
	readonly pingConfig?: PingConfig | undefined;
	readonly port?: number | undefined;
	readonly requestMethod?: string | undefined;
	readonly useSsl?: boolean | undefined;
	readonly validateSsl?: boolean | undefined;
}
export interface InternalChecker {
	readonly displayName?: string | undefined;
	readonly gcpZone?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly peerProjectId?: string | undefined;
	readonly state?: string | undefined;
}
export interface JsonPathMatcher {
	readonly jsonMatcher?: string | undefined;
	readonly jsonPath?: string | undefined;
}
export interface MonitoredResource {
	readonly labels: { [P in string]: string };
	readonly type: string;
}
export interface PingConfig {
	readonly pingsCount?: number | undefined;
}
export interface ResourceGroup {
	readonly groupId?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface ResponseStatusCode {
	readonly statusClass?: string | undefined;
	readonly statusValue?: number | undefined;
}
export interface TcpCheck {
	readonly pingConfig?: PingConfig | undefined;
	readonly port?: number | undefined;
}
export interface UptimeCheckConfig {
	readonly checkerType?: string | undefined;
	readonly contentMatchers?: ContentMatcher[] | undefined;
	readonly displayName?: string | undefined;
	readonly httpCheck?: HttpCheck | undefined;
	readonly internalCheckers?: InternalChecker[] | undefined;
	readonly isInternal?: boolean | undefined;
	readonly monitoredResource?: MonitoredResource | undefined;
	readonly name?: string | undefined;
	readonly period?: string | undefined;
	readonly resourceGroup?: ResourceGroup | undefined;
	readonly selectedRegions?: string[] | undefined;
	readonly tcpCheck?: TcpCheck | undefined;
	readonly timeout?: string | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
}
export default {
	ProjectsUptimeCheckConfigs: ProjectsUptimeCheckConfigs,
};
