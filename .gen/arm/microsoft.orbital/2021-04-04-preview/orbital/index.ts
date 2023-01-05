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
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ContactProfilesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SpacecraftsProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ContactsProperties;
	readonly systemData?: SystemData;
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
	readonly groundStationName?: string;
	readonly properties?: ContactInstanceProperties;
	readonly spacecraft?: ResourceReference;
}
export interface AvailableContactsListResult {
	readonly nextLink?: string;
	readonly value?: AvailableContacts[];
}
export interface ContactInstanceProperties {
	readonly endAzimuthDegrees?: number;
	readonly endElevationDegrees?: number;
	readonly maximumElevationDegrees?: number;
	readonly rxEndTime?: string;
	readonly rxStartTime?: string;
	readonly startAzimuthDegrees?: number;
	readonly startElevationDegrees?: number;
	readonly txEndTime?: string;
	readonly txStartTime?: string;
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
	readonly eirpdBW?: number;
	readonly gainOverTemperature?: number;
	readonly polarization: "LHCP" | "RHCP" | "dualRhcpLhcp" | "linearHorizontal" | "linearVertical";
}
export interface ContactProfileLinkChannel {
	readonly bandwidthMHz: number;
	readonly centerFrequencyMHz: number;
	readonly decodingConfiguration?: string;
	readonly demodulationConfiguration?: string;
	readonly encodingConfiguration?: string;
	readonly endPoint: EndPoint;
	readonly modulationConfiguration?: string;
}
export interface ContactProfilesProperties {
	readonly autoTrackingConfiguration?: "disabled" | "sBand";
	readonly eventHubUri?: string;
	readonly links: ContactProfileLink[];
	readonly minimumElevationDegrees?: number;
	readonly minimumViableContactDuration?: string;
}
export interface ContactsProperties {
	readonly contactProfile: ResourceReference;
	readonly endAzimuthDegrees?: number;
	readonly endElevationDegrees?: number;
	readonly errorMessage?: string;
	readonly groundStationName: string;
	readonly maximumElevationDegrees?: number;
	readonly reservationEndTime: string;
	readonly reservationStartTime: string;
	readonly rxEndTime?: string;
	readonly rxStartTime?: string;
	readonly startAzimuthDegrees?: number;
	readonly startElevationDegrees?: number;
	readonly status?: "cancelled" | "failed" | "providerCancelled" | "scheduled";
	readonly txEndTime?: string;
	readonly txStartTime?: string;
}
export interface EndPoint {
	readonly endPointName: string;
	readonly ipAddress: string;
	readonly port: string;
	readonly protocol: "TCP" | "UDP";
}
export interface ResourceReference {
	readonly id?: string;
}
export interface SpacecraftLink {
	readonly bandwidthMHz: number;
	readonly centerFrequencyMHz: number;
	readonly direction: "downlink" | "uplink";
	readonly polarization: "LHCP" | "RHCP" | "dualRhcpLhcp" | "linearHorizontal" | "linearVertical";
}
export interface SpacecraftsProperties {
	readonly authorizationStatus?: "Allowed" | "Denied";
	readonly authorizationStatusExtended?: string;
	readonly links?: SpacecraftLink[];
	readonly noradId: string;
	readonly titleLine?: string;
	readonly tleLine1?: string;
	readonly tleLine2?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	contactProfiles: contactProfiles,
	spacecrafts: spacecrafts,
	"spacecrafts/contacts": spacecrafts_contacts,
};
