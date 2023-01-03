import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Interconnects extends GdmResource<InterconnectsComponentInputs> implements InterconnectsComponentOutputs {
	constructor(entity: ADKEntity, options: InterconnectsComponentInputs) {
		super(entity, options.name, "compute.alpha.Interconnects", options);
	}
	public readonly circuitInfos?: InterconnectCircuitInfo[] | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly expectedOutages?: InterconnectOutageNotification[] | undefined;
	public readonly googleIpAddress?: string | undefined;
	public readonly googleReferenceId?: string | undefined;
	public readonly id?: string | undefined;
	public readonly interconnectAttachments?: string[] | undefined;
	public readonly kind?: string | undefined;
	public readonly operationalStatus?: string | undefined;
	public readonly peerIpAddress?: string | undefined;
	public readonly provisionedLinkCount?: number | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly state?: string | undefined;
}
export interface InterconnectsComponentOutputs {
	readonly circuitInfos?: InterconnectCircuitInfo[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly expectedOutages?: InterconnectOutageNotification[] | undefined;
	readonly googleIpAddress?: string | undefined;
	readonly googleReferenceId?: string | undefined;
	readonly id?: string | undefined;
	readonly interconnectAttachments?: string[] | undefined;
	readonly kind?: string | undefined;
	readonly operationalStatus?: string | undefined;
	readonly peerIpAddress?: string | undefined;
	readonly provisionedLinkCount?: number | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly state?: string | undefined;
}
export interface InterconnectsComponentInputs {
	readonly adminEnabled?: boolean | undefined;
	readonly customerName?: string | undefined;
	readonly description?: string | undefined;
	readonly interconnectType?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly linkType?: string | undefined;
	readonly location?: string | undefined;
	readonly macsec?: InterconnectMacsec | undefined;
	readonly macsecEnabled?: boolean | undefined;
	readonly name: string;
	readonly nocContactEmail?: string | undefined;
	readonly remoteLocation?: string | undefined;
	readonly requestedLinkCount?: number | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface Interconnect {
	readonly adminEnabled?: boolean | undefined;
	readonly circuitInfos?: InterconnectCircuitInfo[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly customerName?: string | undefined;
	readonly description?: string | undefined;
	readonly expectedOutages?: InterconnectOutageNotification[] | undefined;
	readonly googleIpAddress?: string | undefined;
	readonly googleReferenceId?: string | undefined;
	readonly id?: string | undefined;
	readonly interconnectAttachments?: string[] | undefined;
	readonly interconnectType?: string | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly linkType?: string | undefined;
	readonly location?: string | undefined;
	readonly macsec?: InterconnectMacsec | undefined;
	readonly macsecEnabled?: boolean | undefined;
	readonly name?: string | undefined;
	readonly nocContactEmail?: string | undefined;
	readonly operationalStatus?: string | undefined;
	readonly peerIpAddress?: string | undefined;
	readonly provisionedLinkCount?: number | undefined;
	readonly remoteLocation?: string | undefined;
	readonly requestedLinkCount?: number | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly state?: string | undefined;
}
export interface InterconnectCircuitInfo {
	readonly customerDemarcId?: string | undefined;
	readonly googleCircuitId?: string | undefined;
	readonly googleDemarcId?: string | undefined;
}
export interface InterconnectMacsec {
	readonly failOpen?: boolean | undefined;
	readonly preSharedKeys: InterconnectMacsecPreSharedKey[];
}
export interface InterconnectMacsecPreSharedKey {
	readonly name: string;
	readonly startTime?: string | undefined;
}
export interface InterconnectOutageNotification {
	readonly affectedCircuits?: string[] | undefined;
	readonly description?: string | undefined;
	readonly endTime?: string | undefined;
	readonly issueType?: string | undefined;
	readonly name?: string | undefined;
	readonly source?: string | undefined;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
}
export default {
	Interconnects: Interconnects,
};
