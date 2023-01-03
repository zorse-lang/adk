import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class App extends CfnResource<AppComponentInputs> implements AppComponentOutputs {
	constructor(entity: ADKEntity, options: AppComponentInputs) {
		super(entity, options.LogicalId, "AWS::Amplify::App", options);
	}
	public readonly AppId: string;
	public readonly AppName: string;
	public readonly Arn: string;
	public readonly DefaultDomain: string;
}
export interface AppComponentOutputs {
	readonly AppId: string;
	readonly AppName: string;
	readonly Arn: string;
	readonly DefaultDomain: string;
}
export interface AppComponentInputs {
	readonly Name: string;
	readonly AccessToken?: (string | undefined) | undefined;
	readonly AutoBranchCreationConfig?: (AutoBranchCreationConfig | undefined) | undefined;
	readonly BasicAuthConfig?: (BasicAuthConfig | undefined) | undefined;
	readonly BuildSpec?: (string | undefined) | undefined;
	readonly CustomHeaders?: (string | undefined) | undefined;
	readonly CustomRules?: (CustomRule[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EnableBranchAutoDeletion?: (boolean | undefined) | undefined;
	readonly EnvironmentVariables?: (EnvironmentVariable[] | undefined) | undefined;
	readonly IAMServiceRole?: (string | undefined) | undefined;
	readonly OauthToken?: (string | undefined) | undefined;
	readonly Platform?: (string | undefined) | undefined;
	readonly Repository?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Branch extends CfnResource<BranchComponentInputs> implements BranchComponentOutputs {
	constructor(entity: ADKEntity, options: BranchComponentInputs) {
		super(entity, options.LogicalId, "AWS::Amplify::Branch", options);
	}
	public readonly Arn: string;
	public readonly BranchName: string;
}
export interface BranchComponentOutputs {
	readonly Arn: string;
	readonly BranchName: string;
}
export interface BranchComponentInputs {
	readonly AppId: string;
	readonly BranchName: string;
	readonly BasicAuthConfig?: (BasicAuthConfig | undefined) | undefined;
	readonly BuildSpec?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EnableAutoBuild?: (boolean | undefined) | undefined;
	readonly EnablePerformanceMode?: (boolean | undefined) | undefined;
	readonly EnablePullRequestPreview?: (boolean | undefined) | undefined;
	readonly EnvironmentVariables?: (EnvironmentVariable[] | undefined) | undefined;
	readonly Framework?: (string | undefined) | undefined;
	readonly PullRequestEnvironmentName?: (string | undefined) | undefined;
	readonly Stage?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::Amplify::Domain", options);
	}
	public readonly Arn: string;
	public readonly AutoSubDomainIamRole: string;
	public readonly CertificateRecord: string;
	public readonly DomainName: string;
	public readonly DomainStatus: string;
	public readonly StatusReason: string;
}
export interface DomainComponentOutputs {
	readonly Arn: string;
	readonly AutoSubDomainIamRole: string;
	readonly CertificateRecord: string;
	readonly DomainName: string;
	readonly DomainStatus: string;
	readonly StatusReason: string;
}
export interface DomainComponentInputs {
	readonly AppId: string;
	readonly DomainName: string;
	readonly SubDomainSettings: SubDomainSetting[];
	readonly AutoSubDomainCreationPatterns?: string[] | undefined;
	readonly AutoSubDomainIAMRole?: (string | undefined) | undefined;
	readonly EnableAutoSubDomain?: boolean | undefined;
	readonly LogicalId: string;
}
export interface AutoBranchCreationConfig {
	readonly AutoBranchCreationPatterns?: (string[] | undefined) | undefined;
	readonly BasicAuthConfig?: (BasicAuthConfig | undefined) | undefined;
	readonly BuildSpec?: (string | undefined) | undefined;
	readonly EnableAutoBranchCreation?: (boolean | undefined) | undefined;
	readonly EnableAutoBuild?: (boolean | undefined) | undefined;
	readonly EnablePerformanceMode?: (boolean | undefined) | undefined;
	readonly EnablePullRequestPreview?: (boolean | undefined) | undefined;
	readonly EnvironmentVariables?: (EnvironmentVariable[] | undefined) | undefined;
	readonly Framework?: (string | undefined) | undefined;
	readonly PullRequestEnvironmentName?: (string | undefined) | undefined;
	readonly Stage?: (string | undefined) | undefined;
}
export interface BasicAuthConfig {
	readonly EnableBasicAuth?: (boolean | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface CustomRule {
	readonly Condition?: (string | undefined) | undefined;
	readonly Source: string;
	readonly Status?: (string | undefined) | undefined;
	readonly Target: string;
}
export interface EnvironmentVariable {
	readonly Name: string;
	readonly Value: string;
}
export interface SubDomainSetting {
	readonly BranchName: string;
	readonly Prefix: string;
}
export default {
	App: App,
	Branch: Branch,
	Domain: Domain,
};
