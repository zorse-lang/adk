import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Deployments extends GdmResource<DeploymentsComponentInputs> implements DeploymentsComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentsComponentInputs) {
		super(entity, options.name, "deploymentmanager.alpha.Deployments", options);
	}
	public readonly insertTime?: string | undefined;
	public readonly manifest?: string | undefined;
	public readonly operation?: Operation | undefined;
	public readonly outputs?: DeploymentOutputEntry[] | undefined;
	public readonly selfLink?: string | undefined;
	public readonly update?: DeploymentUpdate | undefined;
	public readonly updateTime?: string | undefined;
}
export interface DeploymentsComponentOutputs {
	readonly insertTime?: string | undefined;
	readonly manifest?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly outputs?: DeploymentOutputEntry[] | undefined;
	readonly selfLink?: string | undefined;
	readonly update?: DeploymentUpdate | undefined;
	readonly updateTime?: string | undefined;
}
export interface DeploymentsComponentInputs {
	readonly createPolicy?: string | undefined;
	readonly credential?: Credential | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly labels?: DeploymentLabelEntry[] | undefined;
	readonly name: string;
	readonly preview?: boolean | undefined;
	readonly target?: TargetConfiguration | undefined;
	readonly type: string;
}
export interface BasicAuth {
	readonly password?: string | undefined;
	readonly user?: string | undefined;
}
export interface ConfigFile {
	readonly content?: string | undefined;
}
export interface Credential {
	readonly basicAuth?: BasicAuth | undefined;
	readonly serviceAccount?: ServiceAccount | undefined;
	readonly useProjectDefault?: boolean | undefined;
}
export interface Deployment {
	readonly credential?: Credential | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly labels?: DeploymentLabelEntry[] | undefined;
	readonly manifest?: string | undefined;
	readonly name?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly outputs?: DeploymentOutputEntry[] | undefined;
	readonly selfLink?: string | undefined;
	readonly target?: TargetConfiguration | undefined;
	readonly update?: DeploymentUpdate | undefined;
	readonly updateTime?: string | undefined;
}
export interface DeploymentLabelEntry {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface DeploymentOutputEntry {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface DeploymentUpdate {
	readonly credential?: Credential | undefined;
	readonly description?: string | undefined;
	readonly labels?: DeploymentUpdateLabelEntry[] | undefined;
	readonly manifest?: string | undefined;
}
export interface DeploymentUpdateLabelEntry {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface ImportFile {
	readonly content?: string | undefined;
	readonly name?: string | undefined;
}
export interface Operation {
	readonly clientOperationId?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> } | undefined;
	readonly httpErrorMessage?: string | undefined;
	readonly httpErrorStatusCode?: number | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly operationGroupId?: string | undefined;
	readonly operationType?: string | undefined;
	readonly progress?: number | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly targetId?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly user?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
	readonly zone?: string | undefined;
}
export interface ServiceAccount {
	readonly email?: string | undefined;
}
export interface TargetConfiguration {
	readonly config?: ConfigFile | undefined;
	readonly imports?: ImportFile[] | undefined;
}
export default {
	Deployments: Deployments,
};
