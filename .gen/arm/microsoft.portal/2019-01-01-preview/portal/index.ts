import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dashboards extends ArmResource<dashboardsComponentInputs> implements dashboardsComponentOutputs {
	constructor(entity: ADKEntity, options: dashboardsComponentInputs) {
		super(entity, options.name, "Microsoft.Portal/dashboards", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Portal/dashboards";
}
export interface dashboardsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Portal/dashboards";
}
export interface dashboardsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DashboardProperties | undefined;
	readonly tags?: DashboardTags | undefined;
}
export class tenantConfigurations
	extends ArmResource<tenantConfigurationsComponentInputs>
	implements tenantConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: tenantConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Portal/tenantConfigurations", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Portal/tenantConfigurations";
}
export interface tenantConfigurationsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Portal/tenantConfigurations";
}
export interface tenantConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties | undefined;
}
export interface ConfigurationProperties {
	readonly enforcePrivateMarkdownStorage?: boolean | undefined;
}
export interface DashboardLens {
	readonly metadata?: DashboardLensMetadata | undefined;
	readonly order: number;
	readonly parts: DashboardLensParts;
}
export interface DashboardLensMetadata {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DashboardLensParts {
	readonly "[ key: string ]"?: DashboardParts | undefined;
}
export interface DashboardPartMetadata {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DashboardParts {
	readonly metadata?: DashboardPartMetadata | undefined;
	readonly position: DashboardPartsPosition;
}
export interface DashboardPartsPosition {
	readonly colSpan: number;
	readonly metadata?: DashboardPartsPositionMetadata | undefined;
	readonly rowSpan: number;
	readonly x: number;
	readonly y: number;
}
export interface DashboardPartsPositionMetadata {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DashboardProperties {
	readonly lenses?: DashboardPropertiesLenses | undefined;
	readonly metadata?: DashboardPropertiesMetadata | undefined;
}
export interface DashboardPropertiesLenses {
	readonly "[ key: string ]"?: DashboardLens | undefined;
}
export interface DashboardPropertiesMetadata {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DashboardTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	dashboards: dashboards,
	tenantConfigurations: tenantConfigurations,
};