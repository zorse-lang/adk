import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Certificate extends RosResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CAS::Certificate", options);
	}
	public readonly CertId: any;
}
export interface CertificateComponentOutputs {
	readonly CertId: any;
}
export interface CertificateComponentInputs {
	readonly Cert: string;
	readonly Key: string;
	readonly Name: string;
	readonly Lang?: (string | undefined) | undefined;
	readonly SourceIp?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Certificate: Certificate,
};
