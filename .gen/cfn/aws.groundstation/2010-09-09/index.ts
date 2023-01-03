import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Config extends CfnResource<ConfigComponentInputs> implements ConfigComponentOutputs {
	constructor(entity: ADKEntity, options: ConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::GroundStation::Config", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly Type: string;
}
export interface ConfigComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly Type: string;
}
export interface ConfigComponentInputs {
	readonly ConfigData: ConfigData;
	readonly Name: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DataflowEndpointGroup
	extends CfnResource<DataflowEndpointGroupComponentInputs>
	implements DataflowEndpointGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DataflowEndpointGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::GroundStation::DataflowEndpointGroup", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface DataflowEndpointGroupComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface DataflowEndpointGroupComponentInputs {
	readonly EndpointDetails: EndpointDetails[];
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class MissionProfile extends CfnResource<MissionProfileComponentInputs> implements MissionProfileComponentOutputs {
	constructor(entity: ADKEntity, options: MissionProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::GroundStation::MissionProfile", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly Region: string;
}
export interface MissionProfileComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly Region: string;
}
export interface MissionProfileComponentInputs {
	readonly DataflowEdges: DataflowEdge[];
	readonly MinimumViableContactDurationSeconds: number;
	readonly Name: string;
	readonly TrackingConfigArn: string;
	readonly ContactPostPassDurationSeconds?: (number | undefined) | undefined;
	readonly ContactPrePassDurationSeconds?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AntennaDownlinkConfig {
	readonly SpectrumConfig?: (SpectrumConfig | undefined) | undefined;
}
export interface AntennaDownlinkDemodDecodeConfig {
	readonly DecodeConfig?: (DecodeConfig | undefined) | undefined;
	readonly DemodulationConfig?: (DemodulationConfig | undefined) | undefined;
	readonly SpectrumConfig?: (SpectrumConfig | undefined) | undefined;
}
export interface AntennaUplinkConfig {
	readonly SpectrumConfig?: (UplinkSpectrumConfig | undefined) | undefined;
	readonly TargetEirp?: (Eirp | undefined) | undefined;
	readonly TransmitDisabled?: (boolean | undefined) | undefined;
}
export interface ConfigData {
	readonly AntennaDownlinkConfig?: (AntennaDownlinkConfig | undefined) | undefined;
	readonly AntennaDownlinkDemodDecodeConfig?: (AntennaDownlinkDemodDecodeConfig | undefined) | undefined;
	readonly AntennaUplinkConfig?: (AntennaUplinkConfig | undefined) | undefined;
	readonly DataflowEndpointConfig?: (DataflowEndpointConfig | undefined) | undefined;
	readonly S3RecordingConfig?: (S3RecordingConfig | undefined) | undefined;
	readonly TrackingConfig?: (TrackingConfig | undefined) | undefined;
	readonly UplinkEchoConfig?: (UplinkEchoConfig | undefined) | undefined;
}
export interface DataflowEndpointConfig {
	readonly DataflowEndpointName?: (string | undefined) | undefined;
	readonly DataflowEndpointRegion?: (string | undefined) | undefined;
}
export interface DecodeConfig {
	readonly UnvalidatedJSON?: (string | undefined) | undefined;
}
export interface DemodulationConfig {
	readonly UnvalidatedJSON?: (string | undefined) | undefined;
}
export interface Eirp {
	readonly Units?: (string | undefined) | undefined;
	readonly Value?: (number | undefined) | undefined;
}
export interface Frequency {
	readonly Units?: (string | undefined) | undefined;
	readonly Value?: (number | undefined) | undefined;
}
export interface FrequencyBandwidth {
	readonly Units?: (string | undefined) | undefined;
	readonly Value?: (number | undefined) | undefined;
}
export interface S3RecordingConfig {
	readonly BucketArn?: (string | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
}
export interface SpectrumConfig {
	readonly Bandwidth?: (FrequencyBandwidth | undefined) | undefined;
	readonly CenterFrequency?: (Frequency | undefined) | undefined;
	readonly Polarization?: (string | undefined) | undefined;
}
export interface TrackingConfig {
	readonly Autotrack?: (string | undefined) | undefined;
}
export interface UplinkEchoConfig {
	readonly AntennaUplinkConfigArn?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface UplinkSpectrumConfig {
	readonly CenterFrequency?: (Frequency | undefined) | undefined;
	readonly Polarization?: (string | undefined) | undefined;
}
export interface DataflowEndpoint {
	readonly Address?: (SocketAddress | undefined) | undefined;
	readonly Mtu?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface EndpointDetails {
	readonly Endpoint?: (DataflowEndpoint | undefined) | undefined;
	readonly SecurityDetails?: (SecurityDetails | undefined) | undefined;
}
export interface SecurityDetails {
	readonly RoleArn?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export interface SocketAddress {
	readonly Name?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
}
export interface DataflowEdge {
	readonly Destination?: (string | undefined) | undefined;
	readonly Source?: (string | undefined) | undefined;
}
export default {
	Config: Config,
	DataflowEndpointGroup: DataflowEndpointGroup,
	MissionProfile: MissionProfile,
};
