import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Channels extends GdmResource<ChannelsComponentInputs> implements ChannelsComponentOutputs {
	constructor(entity: ADKEntity, options: ChannelsComponentInputs) {
		super(entity, options.name, "storage.v1.Channels", options);
	}
}
export interface ChannelsComponentOutputs {}
export interface ChannelsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Channels: Channels,
};
