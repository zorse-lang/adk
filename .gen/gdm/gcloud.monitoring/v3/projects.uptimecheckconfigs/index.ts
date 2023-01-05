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
	readonly checkerType?: string;
	readonly contentMatchers?: ContentMatcher[];
	readonly displayName?: string;
	readonly httpCheck?: HttpCheck;
	readonly internalCheckers?: InternalChecker[];
	readonly isInternal?: boolean;
	readonly monitoredResource?: MonitoredResource;
	readonly name: string;
	readonly parent: string;
	readonly period?: string;
	readonly resourceGroup?: ResourceGroup;
	readonly selectedRegions?: string[];
	readonly tcpCheck?: TcpCheck;
	readonly timeout?: string;
	readonly userLabels?: { [P in string]: string };
}
export interface BasicAuthentication {
	readonly password?: string;
	readonly username?: string;
}
export interface ContentMatcher {
	readonly content?: string;
	readonly jsonPathMatcher?: JsonPathMatcher;
	readonly matcher?: string;
}
export interface HttpCheck {
	readonly acceptedResponseStatusCodes?: ResponseStatusCode[];
	readonly authInfo?: BasicAuthentication;
	readonly body?: string;
	readonly contentType?: string;
	readonly headers?: { [P in string]: string };
	readonly maskHeaders?: boolean;
	readonly path?: string;
	readonly pingConfig?: PingConfig;
	readonly port?: number;
	readonly requestMethod?: string;
	readonly useSsl?: boolean;
	readonly validateSsl?: boolean;
}
export interface InternalChecker {
	readonly displayName?: string;
	readonly gcpZone?: string;
	readonly name?: string;
	readonly network?: string;
	readonly peerProjectId?: string;
	readonly state?: string;
}
export interface JsonPathMatcher {
	readonly jsonMatcher?: string;
	readonly jsonPath?: string;
}
export interface MonitoredResource {
	readonly labels: { [P in string]: string };
	readonly type: string;
}
export interface PingConfig {
	readonly pingsCount?: number;
}
export interface ResourceGroup {
	readonly groupId?: string;
	readonly resourceType?: string;
}
export interface ResponseStatusCode {
	readonly statusClass?: string;
	readonly statusValue?: number;
}
export interface TcpCheck {
	readonly pingConfig?: PingConfig;
	readonly port?: number;
}
export interface UptimeCheckConfig {
	readonly checkerType?: string;
	readonly contentMatchers?: ContentMatcher[];
	readonly displayName?: string;
	readonly httpCheck?: HttpCheck;
	readonly internalCheckers?: InternalChecker[];
	readonly isInternal?: boolean;
	readonly monitoredResource?: MonitoredResource;
	readonly name?: string;
	readonly period?: string;
	readonly resourceGroup?: ResourceGroup;
	readonly selectedRegions?: string[];
	readonly tcpCheck?: TcpCheck;
	readonly timeout?: string;
	readonly userLabels?: { [P in string]: string };
}
export default {
	ProjectsUptimeCheckConfigs: ProjectsUptimeCheckConfigs,
};
