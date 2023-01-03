import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class SuiteDefinition
	extends CfnResource<SuiteDefinitionComponentInputs>
	implements SuiteDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: SuiteDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTCoreDeviceAdvisor::SuiteDefinition", options);
	}
	public readonly SuiteDefinitionArn: string;
	public readonly SuiteDefinitionId: string;
	public readonly SuiteDefinitionVersion: string;
}
export interface SuiteDefinitionComponentOutputs {
	readonly SuiteDefinitionArn: string;
	readonly SuiteDefinitionId: string;
	readonly SuiteDefinitionVersion: string;
}
export interface SuiteDefinitionComponentInputs {
	readonly SuiteDefinitionConfiguration: SuiteDefinitionConfiguration;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DeviceUnderTest {
	readonly CertificateArn?: (string | undefined) | undefined;
	readonly ThingArn?: (string | undefined) | undefined;
}
export interface SuiteDefinitionConfiguration {
	readonly DevicePermissionRoleArn: string;
	readonly Devices?: (DeviceUnderTest[] | undefined) | undefined;
	readonly IntendedForQualification?: (boolean | undefined) | undefined;
	readonly RootGroup: string;
	readonly SuiteDefinitionName?: (string | undefined) | undefined;
}
export default {
	SuiteDefinition: SuiteDefinition,
};
