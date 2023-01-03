import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class contactProfiles
	extends ArmResource<contactProfilesComponentInputs>
	implements contactProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: contactProfilesComponentInputs) {
		super(entity, options.name, "Microsoft.Orbital/contactProfiles", "2021-04-04-preview", options);
	}
	public readonly apiVersion: "2021-04-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Orbital/contactProfiles";
}
export interface contactProfilesComponentOutputs {
	readonly apiVersion: "2021-04-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Orbital/contactProfiles";
}
export interface contactProfilesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ContactProfilesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class spacecrafts extends ArmResource<spacecraftsComponentInputs> implements spacecraftsComponentOutputs {
	constructor(entity: ADKEntity, options: spacecraftsComponentInputs) {
		super(entity, options.name, "Microsoft.Orbital/spacecrafts", "2021-04-04-preview", options);
	}
	public readonly apiVersion: "2021-04-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Orbital/spacecrafts";
}
export interface spacecraftsComponentOutputs {
	readonly apiVersion: "2021-04-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Orbital/spacecrafts";
}
export interface spacecraftsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SpacecraftsProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class spacecrafts_contacts
	extends ArmResource<spacecrafts_contactsComponentInputs>
	implements spacecrafts_contactsComponentOutputs
{
	constructor(entity: ADKEntity, options: spacecrafts_contactsComponentInputs) {
		super(entity, options.name, "Microsoft.Orbital/spacecrafts/contacts", "2021-04-04-preview", options);
	}
	public readonly apiVersion: "2021-04-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Orbital/spacecrafts/contacts";
}
export interface spacecrafts_contactsComponentOutputs {
	readonly apiVersion: "2021-04-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Orbital/spacecrafts/contacts";
}
export interface spacecrafts_contactsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ContactsProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listAvailableContacts(resource: spacecrafts, input: ContactParameters): AvailableContactsListResult {
	if (resource.apiVersion !== "2021-04-04-preview") {
		throw new Error(`listAvailableContacts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Orbital/spacecrafts") {
		throw new Error(`listAvailableContacts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AvailableContacts {
	readonly groundStationName?: string | undefined;
	readonly properties?: ContactInstanceProperties | undefined;
	readonly spacecraft?: ResourceReference | undefined;
}
export interface AvailableContactsListResult {
	readonly nextLink?: string | undefined;
	readonly value?: AvailableContacts[] | undefined;
}
export interface ContactInstanceProperties {
	readonly endAzimuthDegrees?: number | undefined;
	readonly endElevationDegrees?: number | undefined;
	readonly maximumElevationDegrees?: number | undefined;
	readonly rxEndTime?: string | undefined;
	readonly rxStartTime?: string | undefined;
	readonly startAzimuthDegrees?: number | undefined;
	readonly startElevationDegrees?: number | undefined;
	readonly txEndTime?: string | undefined;
	readonly txStartTime?: string | undefined;
}
export interface ContactParameters {
	readonly contactProfile: ResourceReference;
	readonly endTime: string;
	readonly groundStationName: string;
	readonly startTime: string;
}
export interface ContactProfileLink {
	readonly channels: ContactProfileLinkChannel[];
	readonly direction: "downlink" | "uplink";
	readonly eirpdBW?: number | undefined;
	readonly gainOverTemperature?: number | undefined;
	readonly polarization: "LHCP" | "RHCP" | "dualRhcpLhcp" | "linearHorizontal" | "linearVertical";
}
export interface ContactProfileLinkChannel {
	readonly bandwidthMHz: number;
	readonly centerFrequencyMHz: number;
	readonly decodingConfiguration?: string | undefined;
	readonly demodulationConfiguration?: string | undefined;
	readonly encodingConfiguration?: string | undefined;
	readonly endPoint: EndPoint;
	readonly modulationConfiguration?: string | undefined;
}
export interface ContactProfilesProperties {
	readonly autoTrackingConfiguration?: ("disabled" | "sBand") | undefined;
	readonly eventHubUri?: string | undefined;
	readonly links: ContactProfileLink[];
	readonly minimumElevationDegrees?: number | undefined;
	readonly minimumViableContactDuration?: string | undefined;
}
export interface ContactsProperties {
	readonly contactProfile: ResourceReference;
	readonly endAzimuthDegrees?: number | undefined;
	readonly endElevationDegrees?: number | undefined;
	readonly errorMessage?: string | undefined;
	readonly groundStationName: string;
	readonly maximumElevationDegrees?: number | undefined;
	readonly reservationEndTime: string;
	readonly reservationStartTime: string;
	readonly rxEndTime?: string | undefined;
	readonly rxStartTime?: string | undefined;
	readonly startAzimuthDegrees?: number | undefined;
	readonly startElevationDegrees?: number | undefined;
	readonly status?: ("cancelled" | "failed" | "providerCancelled" | "scheduled") | undefined;
	readonly txEndTime?: string | undefined;
	readonly txStartTime?: string | undefined;
}
export interface EndPoint {
	readonly endPointName: string;
	readonly ipAddress: string;
	readonly port: string;
	readonly protocol: "TCP" | "UDP";
}
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface SpacecraftLink {
	readonly bandwidthMHz: number;
	readonly centerFrequencyMHz: number;
	readonly direction: "downlink" | "uplink";
	readonly polarization: "LHCP" | "RHCP" | "dualRhcpLhcp" | "linearHorizontal" | "linearVertical";
}
export interface SpacecraftsProperties {
	readonly authorizationStatus?: ("Allowed" | "Denied") | undefined;
	readonly authorizationStatusExtended?: string | undefined;
	readonly links?: SpacecraftLink[] | undefined;
	readonly noradId: string;
	readonly titleLine?: string | undefined;
	readonly tleLine1?: string | undefined;
	readonly tleLine2?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	contactProfiles: contactProfiles,
	spacecrafts: spacecrafts,
	"spacecrafts/contacts": spacecrafts_contacts,
};
