import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Interconnects extends GdmResource<InterconnectsComponentInputs> implements InterconnectsComponentOutputs {
	constructor(entity: ADKEntity, options: InterconnectsComponentInputs) {
		super(entity, options.name, "compute.v1.Interconnects", options);
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
	readonly state?: string;
}
export interface InterconnectsComponentInputs {
	readonly adminEnabled?: boolean;
	readonly customerName?: string;
	readonly description?: string;
	readonly interconnectType?: string;
	readonly linkType?: string;
	readonly location?: string;
	readonly name: string;
	readonly nocContactEmail?: string;
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
	readonly linkType?: string;
	readonly location?: string;
	readonly name?: string;
	readonly nocContactEmail?: string;
	readonly operationalStatus?: string;
	readonly peerIpAddress?: string;
	readonly provisionedLinkCount?: number;
	readonly requestedLinkCount?: number;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly state?: string;
}
export interface InterconnectCircuitInfo {
	readonly customerDemarcId?: string;
	readonly googleCircuitId?: string;
	readonly googleDemarcId?: string;
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
