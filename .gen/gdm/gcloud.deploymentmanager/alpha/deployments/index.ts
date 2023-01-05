import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Deployments extends GdmResource<DeploymentsComponentInputs> implements DeploymentsComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentsComponentInputs) {
		super(entity, options.name, "deploymentmanager.alpha.Deployments", options);
	}
	public readonly insertTime?: string;
	public readonly manifest?: string;
	public readonly operation?: Operation;
	public readonly outputs?: DeploymentOutputEntry[];
	public readonly selfLink?: string;
	public readonly update?: DeploymentUpdate;
	public readonly updateTime?: string;
}
export interface DeploymentsComponentOutputs {
	readonly insertTime?: string;
	readonly manifest?: string;
	readonly operation?: Operation;
	readonly outputs?: DeploymentOutputEntry[];
	readonly selfLink?: string;
	readonly update?: DeploymentUpdate;
	readonly updateTime?: string;
}
export interface DeploymentsComponentInputs {
	readonly createPolicy?: string;
	readonly credential?: Credential;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly labels?: DeploymentLabelEntry[];
	readonly name: string;
	readonly preview?: boolean;
	readonly target?: TargetConfiguration;
}
export interface BasicAuth {
	readonly password?: string;
	readonly user?: string;
}
export interface ConfigFile {
	readonly content?: string;
}
export interface Credential {
	readonly basicAuth?: BasicAuth;
	readonly serviceAccount?: ServiceAccount;
	readonly useProjectDefault?: boolean;
}
export interface Deployment {
	readonly credential?: Credential;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly insertTime?: string;
	readonly labels?: DeploymentLabelEntry[];
	readonly manifest?: string;
	readonly name?: string;
	readonly operation?: Operation;
	readonly outputs?: DeploymentOutputEntry[];
	readonly selfLink?: string;
	readonly target?: TargetConfiguration;
	readonly update?: DeploymentUpdate;
	readonly updateTime?: string;
}
export interface DeploymentLabelEntry {
	readonly key?: string;
	readonly value?: string;
}
export interface DeploymentOutputEntry {
	readonly key?: string;
	readonly value?: string;
}
export interface DeploymentUpdate {
	readonly credential?: Credential;
	readonly description?: string;
	readonly labels?: DeploymentUpdateLabelEntry[];
	readonly manifest?: string;
}
export interface DeploymentUpdateLabelEntry {
	readonly key?: string;
	readonly value?: string;
}
export interface ImportFile {
	readonly content?: string;
	readonly name?: string;
}
export interface Operation {
	readonly clientOperationId?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly endTime?: string;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> };
	readonly httpErrorMessage?: string;
	readonly httpErrorStatusCode?: number;
	readonly id?: string;
	readonly insertTime?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly operationGroupId?: string;
	readonly operationType?: string;
	readonly progress?: number;
	readonly region?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly targetId?: string;
	readonly targetLink?: string;
	readonly user?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
	readonly zone?: string;
}
export interface ServiceAccount {
	readonly email?: string;
}
export interface TargetConfiguration {
	readonly config?: ConfigFile;
	readonly imports?: ImportFile[];
}
export default {
	Deployments: Deployments,
};
