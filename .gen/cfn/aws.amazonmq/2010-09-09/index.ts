import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Broker extends CfnResource<BrokerComponentInputs> implements BrokerComponentOutputs {
	constructor(entity: ADKEntity, options: BrokerComponentInputs) {
		super(entity, options.LogicalId, "AWS::AmazonMQ::Broker", options);
	}
	public readonly AmqpEndpoints: string[];
	public readonly Arn: string;
	public readonly ConfigurationId: string;
	public readonly ConfigurationRevision: number;
	public readonly IpAddresses: string[];
	public readonly MqttEndpoints: string[];
	public readonly OpenWireEndpoints: string[];
	public readonly StompEndpoints: string[];
	public readonly WssEndpoints: string[];
}
export interface BrokerComponentOutputs {
	readonly AmqpEndpoints: string[];
	readonly Arn: string;
	readonly ConfigurationId: string;
	readonly ConfigurationRevision: number;
	readonly IpAddresses: string[];
	readonly MqttEndpoints: string[];
	readonly OpenWireEndpoints: string[];
	readonly StompEndpoints: string[];
	readonly WssEndpoints: string[];
}
export interface BrokerComponentInputs {
	readonly AutoMinorVersionUpgrade: boolean;
	readonly BrokerName: string;
	readonly DeploymentMode: string;
	readonly EngineType: string;
	readonly EngineVersion: string;
	readonly HostInstanceType: string;
	readonly PubliclyAccessible: boolean;
	readonly Users: User[];
	readonly AuthenticationStrategy?: (string | undefined) | undefined;
	readonly Configuration?: (ConfigurationId | undefined) | undefined;
	readonly EncryptionOptions?: (EncryptionOptions | undefined) | undefined;
	readonly LdapServerMetadata?: (LdapServerMetadata | undefined) | undefined;
	readonly Logs?: (LogList | undefined) | undefined;
	readonly MaintenanceWindowStartTime?: (MaintenanceWindow | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly StorageType?: (string | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly Tags?: (TagsEntry[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Configuration extends CfnResource<ConfigurationComponentInputs> implements ConfigurationComponentOutputs {
	constructor(entity: ADKEntity, options: ConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AmazonMQ::Configuration", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly Revision: number;
}
export interface ConfigurationComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly Revision: number;
}
export interface ConfigurationComponentInputs {
	readonly Data: string;
	readonly EngineType: string;
	readonly EngineVersion: string;
	readonly Name: string;
	readonly AuthenticationStrategy?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: (TagsEntry[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ConfigurationAssociation
	extends CfnResource<ConfigurationAssociationComponentInputs>
	implements ConfigurationAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AmazonMQ::ConfigurationAssociation", options);
	}
}
export interface ConfigurationAssociationComponentOutputs {}
export interface ConfigurationAssociationComponentInputs {
	readonly Broker: string;
	readonly Configuration: ConfigurationId;
	readonly LogicalId: string;
}
export interface ConfigurationId {
	readonly Id: string;
	readonly Revision: number;
}
export interface EncryptionOptions {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly UseAwsOwnedKey: boolean;
}
export interface LdapServerMetadata {
	readonly Hosts: string[];
	readonly RoleBase: string;
	readonly RoleName?: (string | undefined) | undefined;
	readonly RoleSearchMatching: string;
	readonly RoleSearchSubtree?: (boolean | undefined) | undefined;
	readonly ServiceAccountPassword: string;
	readonly ServiceAccountUsername: string;
	readonly UserBase: string;
	readonly UserRoleName?: (string | undefined) | undefined;
	readonly UserSearchMatching: string;
	readonly UserSearchSubtree?: (boolean | undefined) | undefined;
}
export interface LogList {
	readonly Audit?: (boolean | undefined) | undefined;
	readonly General?: (boolean | undefined) | undefined;
}
export interface MaintenanceWindow {
	readonly DayOfWeek: string;
	readonly TimeOfDay: string;
	readonly TimeZone: string;
}
export interface TagsEntry {
	readonly Key: string;
	readonly Value: string;
}
export interface User {
	readonly ConsoleAccess?: (boolean | undefined) | undefined;
	readonly Groups?: (string[] | undefined) | undefined;
	readonly Password: string;
	readonly Username: string;
}
export default {
	Broker: Broker,
	Configuration: Configuration,
	ConfigurationAssociation: ConfigurationAssociation,
};
