import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionUrlMaps extends GdmResource<RegionUrlMapsComponentInputs> implements RegionUrlMapsComponentOutputs {
	constructor(entity: ADKEntity, options: RegionUrlMapsComponentInputs) {
		super(entity, options.name, "compute.v1.RegionUrlMaps", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface RegionUrlMapsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface RegionUrlMapsComponentInputs {
	readonly defaultRouteAction?: HttpRouteAction | undefined;
	readonly defaultService?: string | undefined;
	readonly defaultUrlRedirect?: HttpRedirectAction | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly headerAction?: HttpHeaderAction | undefined;
	readonly hostRules?: HostRule[] | undefined;
	readonly name: string;
	readonly pathMatchers?: PathMatcher[] | undefined;
	readonly requestId?: string | undefined;
	readonly tests?: UrlMapTest[] | undefined;
	readonly type: string;
}
export interface CorsPolicy {
	readonly allowCredentials?: boolean | undefined;
	readonly allowHeaders?: string[] | undefined;
	readonly allowMethods?: string[] | undefined;
	readonly allowOriginRegexes?: string[] | undefined;
	readonly allowOrigins?: string[] | undefined;
	readonly disabled?: boolean | undefined;
	readonly exposeHeaders?: string[] | undefined;
	readonly maxAge?: number | undefined;
}
export interface Duration {
	readonly nanos?: number | undefined;
	readonly seconds?: string | undefined;
}
export interface HostRule {
	readonly description?: string | undefined;
	readonly hosts?: string[] | undefined;
	readonly pathMatcher?: string | undefined;
}
export interface HttpFaultAbort {
	readonly httpStatus?: number | undefined;
	readonly percentage?: number | undefined;
}
export interface HttpFaultDelay {
	readonly fixedDelay?: Duration | undefined;
	readonly percentage?: number | undefined;
}
export interface HttpFaultInjection {
	readonly abort?: HttpFaultAbort | undefined;
	readonly delay?: HttpFaultDelay | undefined;
}
export interface HttpHeaderAction {
	readonly requestHeadersToAdd?: HttpHeaderOption[] | undefined;
	readonly requestHeadersToRemove?: string[] | undefined;
	readonly responseHeadersToAdd?: HttpHeaderOption[] | undefined;
	readonly responseHeadersToRemove?: string[] | undefined;
}
export interface HttpHeaderMatch {
	readonly exactMatch?: string | undefined;
	readonly headerName?: string | undefined;
	readonly invertMatch?: boolean | undefined;
	readonly prefixMatch?: string | undefined;
	readonly presentMatch?: boolean | undefined;
	readonly rangeMatch?: Int64RangeMatch | undefined;
	readonly regexMatch?: string | undefined;
	readonly suffixMatch?: string | undefined;
}
export interface HttpHeaderOption {
	readonly headerName?: string | undefined;
	readonly headerValue?: string | undefined;
	readonly replace?: boolean | undefined;
}
export interface HttpQueryParameterMatch {
	readonly exactMatch?: string | undefined;
	readonly name?: string | undefined;
	readonly presentMatch?: boolean | undefined;
	readonly regexMatch?: string | undefined;
}
export interface HttpRedirectAction {
	readonly hostRedirect?: string | undefined;
	readonly httpsRedirect?: boolean | undefined;
	readonly pathRedirect?: string | undefined;
	readonly prefixRedirect?: string | undefined;
	readonly redirectResponseCode?: string | undefined;
	readonly stripQuery?: boolean | undefined;
}
export interface HttpRetryPolicy {
	readonly numRetries?: number | undefined;
	readonly perTryTimeout?: Duration | undefined;
	readonly retryConditions?: string[] | undefined;
}
export interface HttpRouteAction {
	readonly corsPolicy?: CorsPolicy | undefined;
	readonly faultInjectionPolicy?: HttpFaultInjection | undefined;
	readonly maxStreamDuration?: Duration | undefined;
	readonly requestMirrorPolicy?: RequestMirrorPolicy | undefined;
	readonly retryPolicy?: HttpRetryPolicy | undefined;
	readonly timeout?: Duration | undefined;
	readonly urlRewrite?: UrlRewrite | undefined;
	readonly weightedBackendServices?: WeightedBackendService[] | undefined;
}
export interface HttpRouteRule {
	readonly description?: string | undefined;
	readonly headerAction?: HttpHeaderAction | undefined;
	readonly matchRules?: HttpRouteRuleMatch[] | undefined;
	readonly priority?: number | undefined;
	readonly routeAction?: HttpRouteAction | undefined;
	readonly service?: string | undefined;
	readonly urlRedirect?: HttpRedirectAction | undefined;
}
export interface HttpRouteRuleMatch {
	readonly fullPathMatch?: string | undefined;
	readonly headerMatches?: HttpHeaderMatch[] | undefined;
	readonly ignoreCase?: boolean | undefined;
	readonly metadataFilters?: MetadataFilter[] | undefined;
	readonly prefixMatch?: string | undefined;
	readonly queryParameterMatches?: HttpQueryParameterMatch[] | undefined;
	readonly regexMatch?: string | undefined;
}
export interface Int64RangeMatch {
	readonly rangeEnd?: string | undefined;
	readonly rangeStart?: string | undefined;
}
export interface MetadataFilter {
	readonly filterLabels?: MetadataFilterLabelMatch[] | undefined;
	readonly filterMatchCriteria?: string | undefined;
}
export interface MetadataFilterLabelMatch {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface PathMatcher {
	readonly defaultRouteAction?: HttpRouteAction | undefined;
	readonly defaultService?: string | undefined;
	readonly defaultUrlRedirect?: HttpRedirectAction | undefined;
	readonly description?: string | undefined;
	readonly headerAction?: HttpHeaderAction | undefined;
	readonly name?: string | undefined;
	readonly pathRules?: PathRule[] | undefined;
	readonly routeRules?: HttpRouteRule[] | undefined;
}
export interface PathRule {
	readonly paths?: string[] | undefined;
	readonly routeAction?: HttpRouteAction | undefined;
	readonly service?: string | undefined;
	readonly urlRedirect?: HttpRedirectAction | undefined;
}
export interface RequestMirrorPolicy {
	readonly backendService?: string | undefined;
}
export interface UrlMap {
	readonly creationTimestamp?: string | undefined;
	readonly defaultRouteAction?: HttpRouteAction | undefined;
	readonly defaultService?: string | undefined;
	readonly defaultUrlRedirect?: HttpRedirectAction | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly headerAction?: HttpHeaderAction | undefined;
	readonly hostRules?: HostRule[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly pathMatchers?: PathMatcher[] | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly tests?: UrlMapTest[] | undefined;
}
export interface UrlMapTest {
	readonly description?: string | undefined;
	readonly expectedOutputUrl?: string | undefined;
	readonly expectedRedirectResponseCode?: number | undefined;
	readonly headers?: UrlMapTestHeader[] | undefined;
	readonly host?: string | undefined;
	readonly path?: string | undefined;
	readonly service?: string | undefined;
}
export interface UrlMapTestHeader {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface UrlRewrite {
	readonly hostRewrite?: string | undefined;
	readonly pathPrefixRewrite?: string | undefined;
}
export interface WeightedBackendService {
	readonly backendService?: string | undefined;
	readonly headerAction?: HttpHeaderAction | undefined;
	readonly weight?: number | undefined;
}
export default {
	RegionUrlMaps: RegionUrlMaps,
};
