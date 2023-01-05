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
	readonly AllowedOperations?: string[] | undefined;
	readonly GrantName?: string | undefined;
	readonly HomeRegion?: string | undefined;
	readonly LicenseArn?: string | undefined;
	readonly Principals?: string[] | undefined;
	readonly Status?: string | undefined;
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
	readonly Beneficiary?: string | undefined;
	readonly LicenseMetadata?: Metadata[] | undefined;
	readonly ProductSKU?: string | undefined;
	readonly Status?: string | undefined;
	readonly LogicalId: string;
}
export interface BorrowConfiguration {
	readonly AllowEarlyCheckIn: boolean;
	readonly MaxTimeToLiveInMinutes: number;
}
export interface ConsumptionConfiguration {
	readonly BorrowConfiguration?: BorrowConfiguration | undefined;
	readonly ProvisionalConfiguration?: ProvisionalConfiguration | undefined;
	readonly RenewType?: string | undefined;
}
export interface Entitlement {
	readonly AllowCheckIn?: boolean | undefined;
	readonly MaxCount?: number | undefined;
	readonly Name: string;
	readonly Overage?: boolean | undefined;
	readonly Unit: string;
	readonly Value?: string | undefined;
}
export interface IssuerData {
	readonly Name: string;
	readonly SignKey?: string | undefined;
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
