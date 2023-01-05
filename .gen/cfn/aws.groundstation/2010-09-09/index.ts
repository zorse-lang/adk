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
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ContactPostPassDurationSeconds?: number | undefined;
	readonly ContactPrePassDurationSeconds?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AntennaDownlinkConfig {
	readonly SpectrumConfig?: SpectrumConfig | undefined;
}
export interface AntennaDownlinkDemodDecodeConfig {
	readonly DecodeConfig?: DecodeConfig | undefined;
	readonly DemodulationConfig?: DemodulationConfig | undefined;
	readonly SpectrumConfig?: SpectrumConfig | undefined;
}
export interface AntennaUplinkConfig {
	readonly SpectrumConfig?: UplinkSpectrumConfig | undefined;
	readonly TargetEirp?: Eirp | undefined;
	readonly TransmitDisabled?: boolean | undefined;
}
export interface ConfigData {
	readonly AntennaDownlinkConfig?: AntennaDownlinkConfig | undefined;
	readonly AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig | undefined;
	readonly AntennaUplinkConfig?: AntennaUplinkConfig | undefined;
	readonly DataflowEndpointConfig?: DataflowEndpointConfig | undefined;
	readonly S3RecordingConfig?: S3RecordingConfig | undefined;
	readonly TrackingConfig?: TrackingConfig | undefined;
	readonly UplinkEchoConfig?: UplinkEchoConfig | undefined;
}
export interface DataflowEndpointConfig {
	readonly DataflowEndpointName?: string | undefined;
	readonly DataflowEndpointRegion?: string | undefined;
}
export interface DecodeConfig {
	readonly UnvalidatedJSON?: string | undefined;
}
export interface DemodulationConfig {
	readonly UnvalidatedJSON?: string | undefined;
}
export interface Eirp {
	readonly Units?: string | undefined;
	readonly Value?: number | undefined;
}
export interface Frequency {
	readonly Units?: string | undefined;
	readonly Value?: number | undefined;
}
export interface FrequencyBandwidth {
	readonly Units?: string | undefined;
	readonly Value?: number | undefined;
}
export interface S3RecordingConfig {
	readonly BucketArn?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly RoleArn?: string | undefined;
}
export interface SpectrumConfig {
	readonly Bandwidth?: FrequencyBandwidth | undefined;
	readonly CenterFrequency?: Frequency | undefined;
	readonly Polarization?: string | undefined;
}
export interface TrackingConfig {
	readonly Autotrack?: string | undefined;
}
export interface UplinkEchoConfig {
	readonly AntennaUplinkConfigArn?: string | undefined;
	readonly Enabled?: boolean | undefined;
}
export interface UplinkSpectrumConfig {
	readonly CenterFrequency?: Frequency | undefined;
	readonly Polarization?: string | undefined;
}
export interface DataflowEndpoint {
	readonly Address?: SocketAddress | undefined;
	readonly Mtu?: number | undefined;
	readonly Name?: string | undefined;
}
export interface EndpointDetails {
	readonly Endpoint?: DataflowEndpoint | undefined;
	readonly SecurityDetails?: SecurityDetails | undefined;
}
export interface SecurityDetails {
	readonly RoleArn?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
}
export interface SocketAddress {
	readonly Name?: string | undefined;
	readonly Port?: number | undefined;
}
export interface DataflowEdge {
	readonly Destination?: string | undefined;
	readonly Source?: string | undefined;
}
export default {
	Config: Config,
	DataflowEndpointGroup: DataflowEndpointGroup,
	MissionProfile: MissionProfile,
};
