import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class IdentityPool extends CfnResource<IdentityPoolComponentInputs> implements IdentityPoolComponentOutputs {
	constructor(entity: ADKEntity, options: IdentityPoolComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::IdentityPool", options);
	}
	public readonly Name: string;
}
export interface IdentityPoolComponentOutputs {
	readonly Name: string;
}
export interface IdentityPoolComponentInputs {
	readonly AllowUnauthenticatedIdentities: boolean;
	readonly AllowClassicFlow?: boolean | undefined;
	readonly CognitoEvents?: any | undefined;
	readonly CognitoIdentityProviders?: CognitoIdentityProvider[] | undefined;
	readonly CognitoStreams?: CognitoStreams | undefined;
	readonly DeveloperProviderName?: string | undefined;
	readonly IdentityPoolName?: string | undefined;
	readonly OpenIdConnectProviderARNs?: string[] | undefined;
	readonly PushSync?: PushSync | undefined;
	readonly SamlProviderARNs?: string[] | undefined;
	readonly SupportedLoginProviders?: any | undefined;
	readonly LogicalId: string;
}
export class IdentityPoolRoleAttachment
	extends CfnResource<IdentityPoolRoleAttachmentComponentInputs>
	implements IdentityPoolRoleAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: IdentityPoolRoleAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::IdentityPoolRoleAttachment", options);
	}
}
export interface IdentityPoolRoleAttachmentComponentOutputs {}
export interface IdentityPoolRoleAttachmentComponentInputs {
	readonly IdentityPoolId: string;
	readonly RoleMappings?: { [key: string]: RoleMapping } | undefined;
	readonly Roles?: any | undefined;
	readonly LogicalId: string;
}
export class UserPool extends CfnResource<UserPoolComponentInputs> implements UserPoolComponentOutputs {
	constructor(entity: ADKEntity, options: UserPoolComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPool", options);
	}
	public readonly Arn: string;
	public readonly ProviderName: string;
	public readonly ProviderUrl: string;
}
export interface UserPoolComponentOutputs {
	readonly Arn: string;
	readonly ProviderName: string;
	readonly ProviderUrl: string;
}
export interface UserPoolComponentInputs {
	readonly AccountRecoverySetting?: AccountRecoverySetting | undefined;
	readonly AdminCreateUserConfig?: AdminCreateUserConfig | undefined;
	readonly AliasAttributes?: string[] | undefined;
	readonly AutoVerifiedAttributes?: string[] | undefined;
	readonly DeletionProtection?: string | undefined;
	readonly DeviceConfiguration?: DeviceConfiguration | undefined;
	readonly EmailConfiguration?: EmailConfiguration | undefined;
	readonly EmailVerificationMessage?: string | undefined;
	readonly EmailVerificationSubject?: string | undefined;
	readonly EnabledMfas?: string[] | undefined;
	readonly LambdaConfig?: LambdaConfig | undefined;
	readonly MfaConfiguration?: string | undefined;
	readonly Policies?: Policies | undefined;
	readonly Schema?: SchemaAttribute[] | undefined;
	readonly SmsAuthenticationMessage?: string | undefined;
	readonly SmsConfiguration?: SmsConfiguration | undefined;
	readonly SmsVerificationMessage?: string | undefined;
	readonly UserAttributeUpdateSettings?: UserAttributeUpdateSettings | undefined;
	readonly UsernameAttributes?: string[] | undefined;
	readonly UsernameConfiguration?: UsernameConfiguration | undefined;
	readonly UserPoolAddOns?: UserPoolAddOns | undefined;
	readonly UserPoolName?: string | undefined;
	readonly UserPoolTags?: any | undefined;
	readonly VerificationMessageTemplate?: VerificationMessageTemplate | undefined;
	readonly LogicalId: string;
}
export class UserPoolClient extends CfnResource<UserPoolClientComponentInputs> implements UserPoolClientComponentOutputs {
	constructor(entity: ADKEntity, options: UserPoolClientComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolClient", options);
	}
	public readonly ClientSecret: string;
	public readonly Name: string;
}
export interface UserPoolClientComponentOutputs {
	readonly ClientSecret: string;
	readonly Name: string;
}
export interface UserPoolClientComponentInputs {
	readonly UserPoolId: string;
	readonly AccessTokenValidity?: number | undefined;
	readonly AllowedOAuthFlows?: string[] | undefined;
	readonly AllowedOAuthFlowsUserPoolClient?: boolean | undefined;
	readonly AllowedOAuthScopes?: string[] | undefined;
	readonly AnalyticsConfiguration?: AnalyticsConfiguration | undefined;
	readonly AuthSessionValidity?: number | undefined;
	readonly CallbackURLs?: string[] | undefined;
	readonly ClientName?: string | undefined;
	readonly DefaultRedirectURI?: string | undefined;
	readonly EnablePropagateAdditionalUserContextData?: boolean | undefined;
	readonly EnableTokenRevocation?: boolean | undefined;
	readonly ExplicitAuthFlows?: string[] | undefined;
	readonly GenerateSecret?: boolean | undefined;
	readonly IdTokenValidity?: number | undefined;
	readonly LogoutURLs?: string[] | undefined;
	readonly PreventUserExistenceErrors?: string | undefined;
	readonly ReadAttributes?: string[] | undefined;
	readonly RefreshTokenValidity?: number | undefined;
	readonly SupportedIdentityProviders?: string[] | undefined;
	readonly TokenValidityUnits?: TokenValidityUnits | undefined;
	readonly WriteAttributes?: string[] | undefined;
	readonly LogicalId: string;
}
export class UserPoolDomain extends CfnResource<UserPoolDomainComponentInputs> implements UserPoolDomainComponentOutputs {
	constructor(entity: ADKEntity, options: UserPoolDomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolDomain", options);
	}
	public readonly CloudFrontDistribution: string;
}
export interface UserPoolDomainComponentOutputs {
	readonly CloudFrontDistribution: string;
}
export interface UserPoolDomainComponentInputs {
	readonly Domain: string;
	readonly UserPoolId: string;
	readonly CustomDomainConfig?: CustomDomainConfigType | undefined;
	readonly LogicalId: string;
}
export class UserPoolGroup extends CfnResource<UserPoolGroupComponentInputs> implements UserPoolGroupComponentOutputs {
	constructor(entity: ADKEntity, options: UserPoolGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolGroup", options);
	}
}
export interface UserPoolGroupComponentOutputs {}
export interface UserPoolGroupComponentInputs {
	readonly UserPoolId: string;
	readonly Description?: string | undefined;
	readonly GroupName?: string | undefined;
	readonly Precedence?: number | undefined;
	readonly RoleArn?: string | undefined;
	readonly LogicalId: string;
}
export class UserPoolIdentityProvider
	extends CfnResource<UserPoolIdentityProviderComponentInputs>
	implements UserPoolIdentityProviderComponentOutputs
{
	constructor(entity: ADKEntity, options: UserPoolIdentityProviderComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolIdentityProvider", options);
	}
}
export interface UserPoolIdentityProviderComponentOutputs {}
export interface UserPoolIdentityProviderComponentInputs {
	readonly ProviderName: string;
	readonly ProviderType: string;
	readonly UserPoolId: string;
	readonly AttributeMapping?: any | undefined;
	readonly IdpIdentifiers?: string[] | undefined;
	readonly ProviderDetails?: any | undefined;
	readonly LogicalId: string;
}
export class UserPoolResourceServer
	extends CfnResource<UserPoolResourceServerComponentInputs>
	implements UserPoolResourceServerComponentOutputs
{
	constructor(entity: ADKEntity, options: UserPoolResourceServerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolResourceServer", options);
	}
}
export interface UserPoolResourceServerComponentOutputs {}
export interface UserPoolResourceServerComponentInputs {
	readonly Identifier: string;
	readonly Name: string;
	readonly UserPoolId: string;
	readonly Scopes?: ResourceServerScopeType[] | undefined;
	readonly LogicalId: string;
}
export class UserPoolRiskConfigurationAttachment
	extends CfnResource<UserPoolRiskConfigurationAttachmentComponentInputs>
	implements UserPoolRiskConfigurationAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: UserPoolRiskConfigurationAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolRiskConfigurationAttachment", options);
	}
}
export interface UserPoolRiskConfigurationAttachmentComponentOutputs {}
export interface UserPoolRiskConfigurationAttachmentComponentInputs {
	readonly ClientId: string;
	readonly UserPoolId: string;
	readonly AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType | undefined;
	readonly CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType | undefined;
	readonly RiskExceptionConfiguration?: RiskExceptionConfigurationType | undefined;
	readonly LogicalId: string;
}
export class UserPoolUICustomizationAttachment
	extends CfnResource<UserPoolUICustomizationAttachmentComponentInputs>
	implements UserPoolUICustomizationAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: UserPoolUICustomizationAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolUICustomizationAttachment", options);
	}
}
export interface UserPoolUICustomizationAttachmentComponentOutputs {}
export interface UserPoolUICustomizationAttachmentComponentInputs {
	readonly ClientId: string;
	readonly UserPoolId: string;
	readonly CSS?: string | undefined;
	readonly LogicalId: string;
}
export class UserPoolUser extends CfnResource<UserPoolUserComponentInputs> implements UserPoolUserComponentOutputs {
	constructor(entity: ADKEntity, options: UserPoolUserComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolUser", options);
	}
}
export interface UserPoolUserComponentOutputs {}
export interface UserPoolUserComponentInputs {
	readonly UserPoolId: string;
	readonly ClientMetadata?: any | undefined;
	readonly DesiredDeliveryMediums?: string[] | undefined;
	readonly ForceAliasCreation?: boolean | undefined;
	readonly MessageAction?: string | undefined;
	readonly UserAttributes?: AttributeType[] | undefined;
	readonly Username?: string | undefined;
	readonly ValidationData?: AttributeType[] | undefined;
	readonly LogicalId: string;
}
export class UserPoolUserToGroupAttachment
	extends CfnResource<UserPoolUserToGroupAttachmentComponentInputs>
	implements UserPoolUserToGroupAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: UserPoolUserToGroupAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cognito::UserPoolUserToGroupAttachment", options);
	}
}
export interface UserPoolUserToGroupAttachmentComponentOutputs {}
export interface UserPoolUserToGroupAttachmentComponentInputs {
	readonly GroupName: string;
	readonly Username: string;
	readonly UserPoolId: string;
	readonly LogicalId: string;
}
export interface CognitoIdentityProvider {
	readonly ClientId?: string | undefined;
	readonly ProviderName?: string | undefined;
	readonly ServerSideTokenCheck?: boolean | undefined;
}
export interface CognitoStreams {
	readonly RoleArn?: string | undefined;
	readonly StreamName?: string | undefined;
	readonly StreamingStatus?: string | undefined;
}
export interface PushSync {
	readonly ApplicationArns?: string[] | undefined;
	readonly RoleArn?: string | undefined;
}
export interface MappingRule {
	readonly Claim: string;
	readonly MatchType: string;
	readonly RoleARN: string;
	readonly Value: string;
}
export interface RoleMapping {
	readonly AmbiguousRoleResolution?: string | undefined;
	readonly IdentityProvider?: string | undefined;
	readonly RulesConfiguration?: RulesConfigurationType | undefined;
	readonly Type: string;
}
export interface RulesConfigurationType {
	readonly Rules: MappingRule[];
}
export interface AccountRecoverySetting {
	readonly RecoveryMechanisms?: RecoveryOption[] | undefined;
}
export interface AdminCreateUserConfig {
	readonly AllowAdminCreateUserOnly?: boolean | undefined;
	readonly InviteMessageTemplate?: InviteMessageTemplate | undefined;
	readonly UnusedAccountValidityDays?: number | undefined;
}
export interface CustomEmailSender {
	readonly LambdaArn?: string | undefined;
	readonly LambdaVersion?: string | undefined;
}
export interface CustomSMSSender {
	readonly LambdaArn?: string | undefined;
	readonly LambdaVersion?: string | undefined;
}
export interface DeviceConfiguration {
	readonly ChallengeRequiredOnNewDevice?: boolean | undefined;
	readonly DeviceOnlyRememberedOnUserPrompt?: boolean | undefined;
}
export interface EmailConfiguration {
	readonly ConfigurationSet?: string | undefined;
	readonly EmailSendingAccount?: string | undefined;
	readonly From?: string | undefined;
	readonly ReplyToEmailAddress?: string | undefined;
	readonly SourceArn?: string | undefined;
}
export interface InviteMessageTemplate {
	readonly EmailMessage?: string | undefined;
	readonly EmailSubject?: string | undefined;
	readonly SMSMessage?: string | undefined;
}
export interface LambdaConfig {
	readonly CreateAuthChallenge?: string | undefined;
	readonly CustomEmailSender?: CustomEmailSender | undefined;
	readonly CustomMessage?: string | undefined;
	readonly CustomSMSSender?: CustomSMSSender | undefined;
	readonly DefineAuthChallenge?: string | undefined;
	readonly KMSKeyID?: string | undefined;
	readonly PostAuthentication?: string | undefined;
	readonly PostConfirmation?: string | undefined;
	readonly PreAuthentication?: string | undefined;
	readonly PreSignUp?: string | undefined;
	readonly PreTokenGeneration?: string | undefined;
	readonly UserMigration?: string | undefined;
	readonly VerifyAuthChallengeResponse?: string | undefined;
}
export interface NumberAttributeConstraints {
	readonly MaxValue?: string | undefined;
	readonly MinValue?: string | undefined;
}
export interface PasswordPolicy {
	readonly MinimumLength?: number | undefined;
	readonly RequireLowercase?: boolean | undefined;
	readonly RequireNumbers?: boolean | undefined;
	readonly RequireSymbols?: boolean | undefined;
	readonly RequireUppercase?: boolean | undefined;
	readonly TemporaryPasswordValidityDays?: number | undefined;
}
export interface Policies {
	readonly PasswordPolicy?: PasswordPolicy | undefined;
}
export interface RecoveryOption {
	readonly Name?: string | undefined;
	readonly Priority?: number | undefined;
}
export interface SchemaAttribute {
	readonly AttributeDataType?: string | undefined;
	readonly DeveloperOnlyAttribute?: boolean | undefined;
	readonly Mutable?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly NumberAttributeConstraints?: NumberAttributeConstraints | undefined;
	readonly Required?: boolean | undefined;
	readonly StringAttributeConstraints?: StringAttributeConstraints | undefined;
}
export interface SmsConfiguration {
	readonly ExternalId?: string | undefined;
	readonly SnsCallerArn?: string | undefined;
	readonly SnsRegion?: string | undefined;
}
export interface StringAttributeConstraints {
	readonly MaxLength?: string | undefined;
	readonly MinLength?: string | undefined;
}
export interface UserAttributeUpdateSettings {
	readonly AttributesRequireVerificationBeforeUpdate: string[];
}
export interface UserPoolAddOns {
	readonly AdvancedSecurityMode?: string | undefined;
}
export interface UsernameConfiguration {
	readonly CaseSensitive?: boolean | undefined;
}
export interface VerificationMessageTemplate {
	readonly DefaultEmailOption?: string | undefined;
	readonly EmailMessage?: string | undefined;
	readonly EmailMessageByLink?: string | undefined;
	readonly EmailSubject?: string | undefined;
	readonly EmailSubjectByLink?: string | undefined;
	readonly SmsMessage?: string | undefined;
}
export interface AnalyticsConfiguration {
	readonly ApplicationArn?: string | undefined;
	readonly ApplicationId?: string | undefined;
	readonly ExternalId?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly UserDataShared?: boolean | undefined;
}
export interface TokenValidityUnits {
	readonly AccessToken?: string | undefined;
	readonly IdToken?: string | undefined;
	readonly RefreshToken?: string | undefined;
}
export interface CustomDomainConfigType {
	readonly CertificateArn?: string | undefined;
}
export interface ResourceServerScopeType {
	readonly ScopeDescription: string;
	readonly ScopeName: string;
}
export interface AccountTakeoverActionType {
	readonly EventAction: string;
	readonly Notify: boolean;
}
export interface AccountTakeoverActionsType {
	readonly HighAction?: AccountTakeoverActionType | undefined;
	readonly LowAction?: AccountTakeoverActionType | undefined;
	readonly MediumAction?: AccountTakeoverActionType | undefined;
}
export interface AccountTakeoverRiskConfigurationType {
	readonly Actions: AccountTakeoverActionsType;
	readonly NotifyConfiguration?: NotifyConfigurationType | undefined;
}
export interface CompromisedCredentialsActionsType {
	readonly EventAction: string;
}
export interface CompromisedCredentialsRiskConfigurationType {
	readonly Actions: CompromisedCredentialsActionsType;
	readonly EventFilter?: string[] | undefined;
}
export interface NotifyConfigurationType {
	readonly BlockEmail?: NotifyEmailType | undefined;
	readonly From?: string | undefined;
	readonly MfaEmail?: NotifyEmailType | undefined;
	readonly NoActionEmail?: NotifyEmailType | undefined;
	readonly ReplyTo?: string | undefined;
	readonly SourceArn: string;
}
export interface NotifyEmailType {
	readonly HtmlBody?: string | undefined;
	readonly Subject: string;
	readonly TextBody?: string | undefined;
}
export interface RiskExceptionConfigurationType {
	readonly BlockedIPRangeList?: string[] | undefined;
	readonly SkippedIPRangeList?: string[] | undefined;
}
export interface AttributeType {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export default {
	IdentityPool: IdentityPool,
	IdentityPoolRoleAttachment: IdentityPoolRoleAttachment,
	UserPool: UserPool,
	UserPoolClient: UserPoolClient,
	UserPoolDomain: UserPoolDomain,
	UserPoolGroup: UserPoolGroup,
	UserPoolIdentityProvider: UserPoolIdentityProvider,
	UserPoolResourceServer: UserPoolResourceServer,
	UserPoolRiskConfigurationAttachment: UserPoolRiskConfigurationAttachment,
	UserPoolUICustomizationAttachment: UserPoolUICustomizationAttachment,
	UserPoolUser: UserPoolUser,
	UserPoolUserToGroupAttachment: UserPoolUserToGroupAttachment,
};
