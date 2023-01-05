import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends CfnResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "AWS::CertificateManager::Account", options);
	}
	public readonly AccountId: string;
}
export interface AccountComponentOutputs {
	readonly AccountId: string;
}
export interface AccountComponentInputs {
	readonly ExpiryEventsConfiguration: ExpiryEventsConfiguration;
	readonly LogicalId: string;
}
export class Certificate extends CfnResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::CertificateManager::Certificate", options);
	}
}
export interface CertificateComponentOutputs {}
export interface CertificateComponentInputs {
	readonly DomainName: string;
	readonly CertificateAuthorityArn?: string | undefined;
	readonly CertificateTransparencyLoggingPreference?: string | undefined;
	readonly DomainValidationOptions?: DomainValidationOption[] | undefined;
	readonly SubjectAlternativeNames?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly ValidationMethod?: string | undefined;
	readonly LogicalId: string;
}
export interface ExpiryEventsConfiguration {
	readonly DaysBeforeExpiry?: number | undefined;
}
export interface DomainValidationOption {
	readonly DomainName: string;
	readonly HostedZoneId?: string | undefined;
	readonly ValidationDomain?: string | undefined;
}
export default {
	Account: Account,
	Certificate: Certificate,
};
