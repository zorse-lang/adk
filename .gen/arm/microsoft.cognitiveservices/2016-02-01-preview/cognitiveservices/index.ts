import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.CognitiveServices/accounts", "2016-02-01-preview", options);
	}
	public readonly apiVersion: "2016-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CognitiveServices/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2016-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CognitiveServices/accounts";
}
export interface accountsComponentInputs {
	readonly etag?: string;
	readonly kind:
		| "Academic"
		| "Bing.Autosuggest"
		| "Bing.Search"
		| "Bing.Speech"
		| "Bing.SpellCheck"
		| "ComputerVision"
		| "ContentModerator"
		| "Emotion"
		| "Face"
		| "LUIS"
		| "Recommendations"
		| "SpeakerRecognition"
		| "Speech"
		| "SpeechTranslation"
		| "TextAnalytics"
		| "TextTranslation"
		| "WebLM";
	readonly location: string;
	readonly name: string;
	readonly properties: any;
	readonly sku: Sku;
	readonly tags?: CognitiveServicesAccountCreateParametersTags;
}
export function listKeys(resource: accounts): CognitiveServicesAccountKeys {
	if (resource.apiVersion !== "2016-02-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.CognitiveServices/accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CognitiveServicesAccountCreateParametersTags {
	readonly [key: string]: string;
}
export interface CognitiveServicesAccountKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface Sku {
	readonly name: "F0" | "P0" | "P1" | "P2" | "S0" | "S1" | "S2" | "S3" | "S4" | "S5" | "S6";
	readonly tier?: "Free" | "Premium";
}
export default {
	accounts: accounts,
};
