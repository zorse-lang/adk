import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends RosResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FOAS::Cluster", options);
	}
	public readonly ClusterId: any;
	public readonly VSwitchIds: any;
	public readonly State: any;
	public readonly SecurityGroupId: any;
	public readonly SlaveInstanceInfos: any;
	public readonly MasterInstanceInfos: any;
	public readonly EngineVersions: any;
}
export interface ClusterComponentOutputs {
	readonly ClusterId: any;
	readonly VSwitchIds: any;
	readonly State: any;
	readonly SecurityGroupId: any;
	readonly SlaveInstanceInfos: any;
	readonly MasterInstanceInfos: any;
	readonly EngineVersions: any;
}
export interface ClusterComponentInputs {
	readonly ClusterName: string;
	readonly Description: string;
	readonly OssBucket: string;
	readonly VSwitchId: string;
	readonly Order?: Order | undefined;
	readonly OrderId?: any | string;
	readonly LogicalId: string;
}
export class Project extends RosResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FOAS::Project", options);
	}
	public readonly State: any;
}
export interface ProjectComponentOutputs {
	readonly State: any;
}
export interface ProjectComponentInputs {
	readonly DeployType: string;
	readonly ManagerIds: string;
	readonly Name: string;
	readonly ClusterId?: string | undefined;
	readonly Description?: string | undefined;
	readonly OrderId?: string | undefined;
	readonly LogicalId: string;
}
export interface Order {
	readonly PayModel?: string | undefined;
	readonly Period?: number | undefined;
	readonly MasterNumber?: number | undefined;
	readonly MasterSpec: string;
	readonly SlaveNumber?: number | undefined;
	readonly SlaveSpec: string;
}
export default {
	Cluster: Cluster,
	Project: Project,
};
