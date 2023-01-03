import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Grant extends CfnResource<GrantComponentInputs> implements GrantComponentOutputs {
	constructor(entity: ADKEntity, options: GrantComponentInputs) {
		super(entity, options.LogicalId, "AWS::LicenseManager::Grant", options);
	}
	public readonly GrantArn: string;
	public readonly Version: string;
}
export interface GrantComponentOutputs {
	readonly GrantArn: string;
	readonly Version: string;
}
export interface GrantComponentInputs {
	readonly AllowedOperations?: (string[] | undefined) | undefined;
	readonly GrantName?: (string | undefined) | undefined;
	readonly HomeRegion?: (string | undefined) | undefined;
	readonly LicenseArn?: (string | undefined) | undefined;
	readonly Principals?: (string[] | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class License extends CfnResource<LicenseComponentInputs> implements LicenseComponentOutputs {
	constructor(entity: ADKEntity, options: LicenseComponentInputs) {
		super(entity, options.LogicalId, "AWS::LicenseManager::License", options);
	}
	public readonly LicenseArn: string;
	public readonly Version: string;
}
export interface LicenseComponentOutputs {
	readonly LicenseArn: string;
	readonly Version: string;
}
export interface LicenseComponentInputs {
	readonly ConsumptionConfiguration: ConsumptionConfiguration;
	readonly Entitlements: Entitlement[];
	readonly HomeRegion: string;
	readonly Issuer: IssuerData;
	readonly LicenseName: string;
	readonly ProductName: string;
	readonly Validity: ValidityDateFormat;
	readonly Beneficiary?: (string | undefined) | undefined;
	readonly LicenseMetadata?: (Metadata[] | undefined) | undefined;
	readonly ProductSKU?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface BorrowConfiguration {
	readonly AllowEarlyCheckIn: boolean;
	readonly MaxTimeToLiveInMinutes: number;
}
export interface ConsumptionConfiguration {
	readonly BorrowConfiguration?: (BorrowConfiguration | undefined) | undefined;
	readonly ProvisionalConfiguration?: (ProvisionalConfiguration | undefined) | undefined;
	readonly RenewType?: (string | undefined) | undefined;
}
export interface Entitlement {
	readonly AllowCheckIn?: (boolean | undefined) | undefined;
	readonly MaxCount?: (number | undefined) | undefined;
	readonly Name: string;
	readonly Overage?: (boolean | undefined) | undefined;
	readonly Unit: string;
	readonly Value?: (string | undefined) | undefined;
}
export interface IssuerData {
	readonly Name: string;
	readonly SignKey?: (string | undefined) | undefined;
}
export interface Metadata {
	readonly Name: string;
	readonly Value: string;
}
export interface ProvisionalConfiguration {
	readonly MaxTimeToLiveInMinutes: number;
}
export interface ValidityDateFormat {
	readonly Begin: string;
	readonly End: string;
}
export default {
	Grant: Grant,
	License: License,
};
