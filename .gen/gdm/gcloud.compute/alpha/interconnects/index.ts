import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Interconnects extends GdmResource<InterconnectsComponentInputs> implements InterconnectsComponentOutputs {
	constructor(entity: ADKEntity, options: InterconnectsComponentInputs) {
		super(entity, options.name, "compute.alpha.Interconnects", options);
	}
	public readonly circuitInfos?: InterconnectCircuitInfo[];
	public readonly creationTimestamp?: string;
	public readonly expectedOutages?: InterconnectOutageNotification[];
	public readonly googleIpAddress?: string;
	public readonly googleReferenceId?: string;
	public readonly id?: string;
	public readonly interconnectAttachments?: string[];
	public readonly kind?: string;
	public readonly operationalStatus?: string;
	public readonly peerIpAddress?: string;
	public readonly provisionedLinkCount?: number;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly state?: string;
}
export interface InterconnectsComponentOutputs {
	readonly circuitInfos?: InterconnectCircuitInfo[];
	readonly creationTimestamp?: string;
	readonly expectedOutages?: InterconnectOutageNotification[];
	readonly googleIpAddress?: string;
	readonly googleReferenceId?: string;
	readonly id?: string;
	readonly interconnectAttachments?: string[];
	readonly kind?: string;
	readonly operationalStatus?: string;
	readonly peerIpAddress?: string;
	readonly provisionedLinkCount?: number;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
}
export interface InterconnectsComponentInputs {
	readonly adminEnabled?: boolean;
	readonly customerName?: string;
	readonly description?: string;
	readonly interconnectType?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly linkType?: string;
	readonly location?: string;
	readonly macsec?: InterconnectMacsec;
	readonly macsecEnabled?: boolean;
	readonly name: string;
	readonly nocContactEmail?: string;
	readonly remoteLocation?: string;
	readonly requestedLinkCount?: number;
	readonly requestId?: string;
}
export interface Interconnect {
	readonly adminEnabled?: boolean;
	readonly circuitInfos?: InterconnectCircuitInfo[];
	readonly creationTimestamp?: string;
	readonly customerName?: string;
	readonly description?: string;
	readonly expectedOutages?: InterconnectOutageNotification[];
	readonly googleIpAddress?: string;
	readonly googleReferenceId?: string;
	readonly id?: string;
	readonly interconnectAttachments?: string[];
	readonly interconnectType?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly linkType?: string;
	readonly location?: string;
	readonly macsec?: InterconnectMacsec;
	readonly macsecEnabled?: boolean;
	readonly name?: string;
	readonly nocContactEmail?: string;
	readonly operationalStatus?: string;
	readonly peerIpAddress?: string;
	readonly provisionedLinkCount?: number;
	readonly remoteLocation?: string;
	readonly requestedLinkCount?: number;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
}
export interface InterconnectCircuitInfo {
	readonly customerDemarcId?: string;
	readonly googleCircuitId?: string;
	readonly googleDemarcId?: string;
}
export interface InterconnectMacsec {
	readonly failOpen?: boolean;
	readonly preSharedKeys: InterconnectMacsecPreSharedKey[];
}
export interface InterconnectMacsecPreSharedKey {
	readonly name: string;
	readonly startTime?: string;
}
export interface InterconnectOutageNotification {
	readonly affectedCircuits?: string[];
	readonly description?: string;
	readonly endTime?: string;
	readonly issueType?: string;
	readonly name?: string;
	readonly source?: string;
	readonly startTime?: string;
	readonly state?: string;
}
export default {
	Interconnects: Interconnects,
};
