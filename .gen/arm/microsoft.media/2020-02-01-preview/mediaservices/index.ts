import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class mediaServices_mediaGraphs
	extends ArmResource<mediaServices_mediaGraphsComponentInputs>
	implements mediaServices_mediaGraphsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_mediaGraphsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/mediaGraphs", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/mediaGraphs";
}
export interface mediaServices_mediaGraphsComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/mediaGraphs";
}
export interface mediaServices_mediaGraphsComponentInputs {
	readonly name: string;
	readonly properties?: MediaGraphProperties | undefined;
}
export interface MediaGraphCertificateSource {}
export interface MediaGraphCredentials {}
export interface MediaGraphEndpoint {
	readonly credentials?: MediaGraphCredentials | undefined;
	readonly url: string;
}
export interface MediaGraphProperties {
	readonly created?: string | undefined;
	readonly description?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly sinks: MediaGraphSink[];
	readonly sources: MediaGraphSource[];
	readonly state?: ("Running" | "Starting" | "Stopped" | "Stopping") | undefined;
}
export interface MediaGraphSink {
	readonly inputs: string[];
	readonly name: string;
}
export interface MediaGraphSource {
	readonly name: string;
}
export interface MediaGraphTlsValidationOptions {
	readonly ignoreHostname: boolean;
	readonly ignoreSignature: boolean;
}
export default {
	"mediaServices/mediaGraphs": mediaServices_mediaGraphs,
};
