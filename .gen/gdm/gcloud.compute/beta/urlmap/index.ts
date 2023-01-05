import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class UrlMap extends GdmResource<UrlMapComponentInputs> implements UrlMapComponentOutputs {
	constructor(entity: ADKEntity, options: UrlMapComponentInputs) {
		super(entity, options.name, "compute.beta.urlMap", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface UrlMapComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface UrlMapComponentInputs {
	readonly defaultRouteAction?: HttpRouteAction;
	readonly defaultService?: string;
	readonly defaultUrlRedirect?: HttpRedirectAction;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly headerAction?: HttpHeaderAction;
	readonly hostRules?: HostRule[];
	readonly name: string;
	readonly pathMatchers?: PathMatcher[];
	readonly tests?: UrlMapTest[];
}
export interface CorsPolicy {
	readonly allowCredentials?: boolean;
	readonly allowHeaders?: string[];
	readonly allowMethods?: string[];
	readonly allowOriginRegexes?: string[];
	readonly allowOrigins?: string[];
	readonly disabled?: boolean;
	readonly exposeHeaders?: string[];
	readonly maxAge?: number;
}
export interface Duration {
	readonly nanos?: number;
	readonly seconds?: string;
}
export interface HostRule {
	readonly description?: string;
	readonly hosts?: string[];
	readonly pathMatcher?: string;
}
export interface HttpFaultAbort {
	readonly httpStatus?: number;
	readonly percentage?: number;
}
export interface HttpFaultDelay {
	readonly fixedDelay?: Duration;
	readonly percentage?: number;
}
export interface HttpFaultInjection {
	readonly abort?: HttpFaultAbort;
	readonly delay?: HttpFaultDelay;
}
export interface HttpFilterConfig {
	readonly config?: string;
	readonly configTypeUrl?: string;
	readonly filterName?: string;
}
export interface HttpHeaderAction {
	readonly requestHeadersToAdd?: HttpHeaderOption[];
	readonly requestHeadersToRemove?: string[];
	readonly responseHeadersToAdd?: HttpHeaderOption[];
	readonly responseHeadersToRemove?: string[];
}
export interface HttpHeaderMatch {
	readonly exactMatch?: string;
	readonly headerName?: string;
	readonly invertMatch?: boolean;
	readonly prefixMatch?: string;
	readonly presentMatch?: boolean;
	readonly rangeMatch?: Int64RangeMatch;
	readonly regexMatch?: string;
	readonly suffixMatch?: string;
}
export interface HttpHeaderOption {
	readonly headerName?: string;
	readonly headerValue?: string;
	readonly replace?: boolean;
}
export interface HttpQueryParameterMatch {
	readonly exactMatch?: string;
	readonly name?: string;
	readonly presentMatch?: boolean;
	readonly regexMatch?: string;
}
export interface HttpRedirectAction {
	readonly hostRedirect?: string;
	readonly httpsRedirect?: boolean;
	readonly pathRedirect?: string;
	readonly prefixRedirect?: string;
	readonly redirectResponseCode?: string;
	readonly stripQuery?: boolean;
}
export interface HttpRetryPolicy {
	readonly numRetries?: number;
	readonly perTryTimeout?: Duration;
	readonly retryConditions?: string[];
}
export interface HttpRouteAction {
	readonly corsPolicy?: CorsPolicy;
	readonly faultInjectionPolicy?: HttpFaultInjection;
	readonly maxStreamDuration?: Duration;
	readonly requestMirrorPolicy?: RequestMirrorPolicy;
	readonly retryPolicy?: HttpRetryPolicy;
	readonly timeout?: Duration;
	readonly urlRewrite?: UrlRewrite;
	readonly weightedBackendServices?: WeightedBackendService[];
}
export interface HttpRouteRule {
	readonly description?: string;
	readonly headerAction?: HttpHeaderAction;
	readonly httpFilterConfigs?: HttpFilterConfig[];
	readonly httpFilterMetadata?: HttpFilterConfig[];
	readonly matchRules?: HttpRouteRuleMatch[];
	readonly priority?: number;
	readonly routeAction?: HttpRouteAction;
	readonly service?: string;
	readonly urlRedirect?: HttpRedirectAction;
}
export interface HttpRouteRuleMatch {
	readonly fullPathMatch?: string;
	readonly headerMatches?: HttpHeaderMatch[];
	readonly ignoreCase?: boolean;
	readonly metadataFilters?: MetadataFilter[];
	readonly pathTemplateMatch?: string;
	readonly prefixMatch?: string;
	readonly queryParameterMatches?: HttpQueryParameterMatch[];
	readonly regexMatch?: string;
}
export interface Int64RangeMatch {
	readonly rangeEnd?: string;
	readonly rangeStart?: string;
}
export interface MetadataFilter {
	readonly filterLabels?: MetadataFilterLabelMatch[];
	readonly filterMatchCriteria?: string;
}
export interface MetadataFilterLabelMatch {
	readonly name?: string;
	readonly value?: string;
}
export interface PathMatcher {
	readonly defaultRouteAction?: HttpRouteAction;
	readonly defaultService?: string;
	readonly defaultUrlRedirect?: HttpRedirectAction;
	readonly description?: string;
	readonly headerAction?: HttpHeaderAction;
	readonly name?: string;
	readonly pathRules?: PathRule[];
	readonly routeRules?: HttpRouteRule[];
}
export interface PathRule {
	readonly paths?: string[];
	readonly routeAction?: HttpRouteAction;
	readonly service?: string;
	readonly urlRedirect?: HttpRedirectAction;
}
export interface RequestMirrorPolicy {
	readonly backendService?: string;
}
export interface UrlMapTest {
	readonly description?: string;
	readonly expectedOutputUrl?: string;
	readonly expectedRedirectResponseCode?: number;
	readonly headers?: UrlMapTestHeader[];
	readonly host?: string;
	readonly path?: string;
	readonly service?: string;
}
export interface UrlMapTestHeader {
	readonly name?: string;
	readonly value?: string;
}
export interface UrlRewrite {
	readonly hostRewrite?: string;
	readonly pathPrefixRewrite?: string;
	readonly pathTemplateRewrite?: string;
}
export interface WeightedBackendService {
	readonly backendService?: string;
	readonly headerAction?: HttpHeaderAction;
	readonly weight?: number;
}
export default {
	UrlMap: UrlMap,
};
