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
	readonly AllowClassicFlow?: (boolean | undefined) | undefined;
	readonly CognitoEvents?: (any | undefined) | undefined;
	readonly CognitoIdentityProviders?: (CognitoIdentityProvider[] | undefined) | undefined;
	readonly CognitoStreams?: (CognitoStreams | undefined) | undefined;
	readonly DeveloperProviderName?: (string | undefined) | undefined;
	readonly IdentityPoolName?: (string | undefined) | undefined;
	readonly OpenIdConnectProviderARNs?: (string[] | undefined) | undefined;
	readonly PushSync?: (PushSync | undefined) | undefined;
	readonly SamlProviderARNs?: (string[] | undefined) | undefined;
	readonly SupportedLoginProviders?: (any | undefined) | undefined;
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
	readonly RoleMappings?: ({ [key: string]: RoleMapping } | undefined) | undefined;
	readonly Roles?: (any | undefined) | undefined;
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
	readonly AccountRecoverySetting?: (AccountRecoverySetting | undefined) | undefined;
	readonly AdminCreateUserConfig?: (AdminCreateUserConfig | undefined) | undefined;
	readonly AliasAttributes?: (string[] | undefined) | undefined;
	readonly AutoVerifiedAttributes?: (string[] | undefined) | undefined;
	readonly DeletionProtection?: (string | undefined) | undefined;
	readonly DeviceConfiguration?: (DeviceConfiguration | undefined) | undefined;
	readonly EmailConfiguration?: (EmailConfiguration | undefined) | undefined;
	readonly EmailVerificationMessage?: (string | undefined) | undefined;
	readonly EmailVerificationSubject?: (string | undefined) | undefined;
	readonly EnabledMfas?: (string[] | undefined) | undefined;
	readonly LambdaConfig?: (LambdaConfig | undefined) | undefined;
	readonly MfaConfiguration?: (string | undefined) | undefined;
	readonly Policies?: (Policies | undefined) | undefined;
	readonly Schema?: (SchemaAttribute[] | undefined) | undefined;
	readonly SmsAuthenticationMessage?: (string | undefined) | undefined;
	readonly SmsConfiguration?: (SmsConfiguration | undefined) | undefined;
	readonly SmsVerificationMessage?: (string | undefined) | undefined;
	readonly UserAttributeUpdateSettings?: (UserAttributeUpdateSettings | undefined) | undefined;
	readonly UsernameAttributes?: (string[] | undefined) | undefined;
	readonly UsernameConfiguration?: (UsernameConfiguration | undefined) | undefined;
	readonly UserPoolAddOns?: (UserPoolAddOns | undefined) | undefined;
	readonly UserPoolName?: (string | undefined) | undefined;
	readonly UserPoolTags?: (any | undefined) | undefined;
	readonly VerificationMessageTemplate?: (VerificationMessageTemplate | undefined) | undefined;
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
	readonly AccessTokenValidity?: (number | undefined) | undefined;
	readonly AllowedOAuthFlows?: (string[] | undefined) | undefined;
	readonly AllowedOAuthFlowsUserPoolClient?: (boolean | undefined) | undefined;
	readonly AllowedOAuthScopes?: (string[] | undefined) | undefined;
	readonly AnalyticsConfiguration?: (AnalyticsConfiguration | undefined) | undefined;
	readonly AuthSessionValidity?: (number | undefined) | undefined;
	readonly CallbackURLs?: (string[] | undefined) | undefined;
	readonly ClientName?: (string | undefined) | undefined;
	readonly DefaultRedirectURI?: (string | undefined) | undefined;
	readonly EnablePropagateAdditionalUserContextData?: (boolean | undefined) | undefined;
	readonly EnableTokenRevocation?: (boolean | undefined) | undefined;
	readonly ExplicitAuthFlows?: (string[] | undefined) | undefined;
	readonly GenerateSecret?: (boolean | undefined) | undefined;
	readonly IdTokenValidity?: (number | undefined) | undefined;
	readonly LogoutURLs?: (string[] | undefined) | undefined;
	readonly PreventUserExistenceErrors?: (string | undefined) | undefined;
	readonly ReadAttributes?: (string[] | undefined) | undefined;
	readonly RefreshTokenValidity?: (number | undefined) | undefined;
	readonly SupportedIdentityProviders?: (string[] | undefined) | undefined;
	readonly TokenValidityUnits?: (TokenValidityUnits | undefined) | undefined;
	readonly WriteAttributes?: (string[] | undefined) | undefined;
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
	readonly CustomDomainConfig?: (CustomDomainConfigType | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly GroupName?: (string | undefined) | undefined;
	readonly Precedence?: (number | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
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
	readonly AttributeMapping?: (any | undefined) | undefined;
	readonly IdpIdentifiers?: (string[] | undefined) | undefined;
	readonly ProviderDetails?: (any | undefined) | undefined;
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
	readonly Scopes?: (ResourceServerScopeType[] | undefined) | undefined;
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
	readonly AccountTakeoverRiskConfiguration?: (AccountTakeoverRiskConfigurationType | undefined) | undefined;
	readonly CompromisedCredentialsRiskConfiguration?:
		| (CompromisedCredentialsRiskConfigurationType | undefined)
		| undefined;
	readonly RiskExceptionConfiguration?: (RiskExceptionConfigurationType | undefined) | undefined;
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
	readonly CSS?: (string | undefined) | undefined;
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
	readonly ClientMetadata?: (any | undefined) | undefined;
	readonly DesiredDeliveryMediums?: (string[] | undefined) | undefined;
	readonly ForceAliasCreation?: (boolean | undefined) | undefined;
	readonly MessageAction?: (string | undefined) | undefined;
	readonly UserAttributes?: (AttributeType[] | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
	readonly ValidationData?: (AttributeType[] | undefined) | undefined;
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
	readonly ClientId?: (string | undefined) | undefined;
	readonly ProviderName?: (string | undefined) | undefined;
	readonly ServerSideTokenCheck?: (boolean | undefined) | undefined;
}
export interface CognitoStreams {
	readonly RoleArn?: (string | undefined) | undefined;
	readonly StreamName?: (string | undefined) | undefined;
	readonly StreamingStatus?: (string | undefined) | undefined;
}
export interface PushSync {
	readonly ApplicationArns?: (string[] | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
}
export interface MappingRule {
	readonly Claim: string;
	readonly MatchType: string;
	readonly RoleARN: string;
	readonly Value: string;
}
export interface RoleMapping {
	readonly AmbiguousRoleResolution?: (string | undefined) | undefined;
	readonly IdentityProvider?: (string | undefined) | undefined;
	readonly RulesConfiguration?: (RulesConfigurationType | undefined) | undefined;
	readonly Type: string;
}
export interface RulesConfigurationType {
	readonly Rules: MappingRule[];
}
export interface AccountRecoverySetting {
	readonly RecoveryMechanisms?: (RecoveryOption[] | undefined) | undefined;
}
export interface AdminCreateUserConfig {
	readonly AllowAdminCreateUserOnly?: (boolean | undefined) | undefined;
	readonly InviteMessageTemplate?: (InviteMessageTemplate | undefined) | undefined;
	readonly UnusedAccountValidityDays?: (number | undefined) | undefined;
}
export interface CustomEmailSender {
	readonly LambdaArn?: (string | undefined) | undefined;
	readonly LambdaVersion?: (string | undefined) | undefined;
}
export interface CustomSMSSender {
	readonly LambdaArn?: (string | undefined) | undefined;
	readonly LambdaVersion?: (string | undefined) | undefined;
}
export interface DeviceConfiguration {
	readonly ChallengeRequiredOnNewDevice?: (boolean | undefined) | undefined;
	readonly DeviceOnlyRememberedOnUserPrompt?: (boolean | undefined) | undefined;
}
export interface EmailConfiguration {
	readonly ConfigurationSet?: (string | undefined) | undefined;
	readonly EmailSendingAccount?: (string | undefined) | undefined;
	readonly From?: (string | undefined) | undefined;
	readonly ReplyToEmailAddress?: (string | undefined) | undefined;
	readonly SourceArn?: (string | undefined) | undefined;
}
export interface InviteMessageTemplate {
	readonly EmailMessage?: (string | undefined) | undefined;
	readonly EmailSubject?: (string | undefined) | undefined;
	readonly SMSMessage?: (string | undefined) | undefined;
}
export interface LambdaConfig {
	readonly CreateAuthChallenge?: (string | undefined) | undefined;
	readonly CustomEmailSender?: (CustomEmailSender | undefined) | undefined;
	readonly CustomMessage?: (string | undefined) | undefined;
	readonly CustomSMSSender?: (CustomSMSSender | undefined) | undefined;
	readonly DefineAuthChallenge?: (string | undefined) | undefined;
	readonly KMSKeyID?: (string | undefined) | undefined;
	readonly PostAuthentication?: (string | undefined) | undefined;
	readonly PostConfirmation?: (string | undefined) | undefined;
	readonly PreAuthentication?: (string | undefined) | undefined;
	readonly PreSignUp?: (string | undefined) | undefined;
	readonly PreTokenGeneration?: (string | undefined) | undefined;
	readonly UserMigration?: (string | undefined) | undefined;
	readonly VerifyAuthChallengeResponse?: (string | undefined) | undefined;
}
export interface NumberAttributeConstraints {
	readonly MaxValue?: (string | undefined) | undefined;
	readonly MinValue?: (string | undefined) | undefined;
}
export interface PasswordPolicy {
	readonly MinimumLength?: (number | undefined) | undefined;
	readonly RequireLowercase?: (boolean | undefined) | undefined;
	readonly RequireNumbers?: (boolean | undefined) | undefined;
	readonly RequireSymbols?: (boolean | undefined) | undefined;
	readonly RequireUppercase?: (boolean | undefined) | undefined;
	readonly TemporaryPasswordValidityDays?: (number | undefined) | undefined;
}
export interface Policies {
	readonly PasswordPolicy?: (PasswordPolicy | undefined) | undefined;
}
export interface RecoveryOption {
	readonly Name?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
}
export interface SchemaAttribute {
	readonly AttributeDataType?: (string | undefined) | undefined;
	readonly DeveloperOnlyAttribute?: (boolean | undefined) | undefined;
	readonly Mutable?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NumberAttributeConstraints?: (NumberAttributeConstraints | undefined) | undefined;
	readonly Required?: (boolean | undefined) | undefined;
	readonly StringAttributeConstraints?: (StringAttributeConstraints | undefined) | undefined;
}
export interface SmsConfiguration {
	readonly ExternalId?: (string | undefined) | undefined;
	readonly SnsCallerArn?: (string | undefined) | undefined;
	readonly SnsRegion?: (string | undefined) | undefined;
}
export interface StringAttributeConstraints {
	readonly MaxLength?: (string | undefined) | undefined;
	readonly MinLength?: (string | undefined) | undefined;
}
export interface UserAttributeUpdateSettings {
	readonly AttributesRequireVerificationBeforeUpdate: string[];
}
export interface UserPoolAddOns {
	readonly AdvancedSecurityMode?: (string | undefined) | undefined;
}
export interface UsernameConfiguration {
	readonly CaseSensitive?: (boolean | undefined) | undefined;
}
export interface VerificationMessageTemplate {
	readonly DefaultEmailOption?: (string | undefined) | undefined;
	readonly EmailMessage?: (string | undefined) | undefined;
	readonly EmailMessageByLink?: (string | undefined) | undefined;
	readonly EmailSubject?: (string | undefined) | undefined;
	readonly EmailSubjectByLink?: (string | undefined) | undefined;
	readonly SmsMessage?: (string | undefined) | undefined;
}
export interface AnalyticsConfiguration {
	readonly ApplicationArn?: (string | undefined) | undefined;
	readonly ApplicationId?: (string | undefined) | undefined;
	readonly ExternalId?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly UserDataShared?: (boolean | undefined) | undefined;
}
export interface TokenValidityUnits {
	readonly AccessToken?: (string | undefined) | undefined;
	readonly IdToken?: (string | undefined) | undefined;
	readonly RefreshToken?: (string | undefined) | undefined;
}
export interface CustomDomainConfigType {
	readonly CertificateArn?: (string | undefined) | undefined;
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
	readonly HighAction?: (AccountTakeoverActionType | undefined) | undefined;
	readonly LowAction?: (AccountTakeoverActionType | undefined) | undefined;
	readonly MediumAction?: (AccountTakeoverActionType | undefined) | undefined;
}
export interface AccountTakeoverRiskConfigurationType {
	readonly Actions: AccountTakeoverActionsType;
	readonly NotifyConfiguration?: (NotifyConfigurationType | undefined) | undefined;
}
export interface CompromisedCredentialsActionsType {
	readonly EventAction: string;
}
export interface CompromisedCredentialsRiskConfigurationType {
	readonly Actions: CompromisedCredentialsActionsType;
	readonly EventFilter?: (string[] | undefined) | undefined;
}
export interface NotifyConfigurationType {
	readonly BlockEmail?: (NotifyEmailType | undefined) | undefined;
	readonly From?: (string | undefined) | undefined;
	readonly MfaEmail?: (NotifyEmailType | undefined) | undefined;
	readonly NoActionEmail?: (NotifyEmailType | undefined) | undefined;
	readonly ReplyTo?: (string | undefined) | undefined;
	readonly SourceArn: string;
}
export interface NotifyEmailType {
	readonly HtmlBody?: (string | undefined) | undefined;
	readonly Subject: string;
	readonly TextBody?: (string | undefined) | undefined;
}
export interface RiskExceptionConfigurationType {
	readonly BlockedIPRangeList?: (string[] | undefined) | undefined;
	readonly SkippedIPRangeList?: (string[] | undefined) | undefined;
}
export interface AttributeType {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
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
