import { KrmResource, Entity as ADKEntity } from "@zorse/adk";

export class MutatingWebhookConfiguration
	extends KrmResource<MutatingWebhookConfigurationComponentInputs>
	implements MutatingWebhookConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: MutatingWebhookConfigurationComponentInputs | undefined) {
		super(entity, "admissionregistration.k8s.io/v1", "MutatingWebhookConfiguration", options);
	}
}
export interface MutatingWebhookConfigurationComponentOutputs {}
export interface MutatingWebhookConfigurationComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly webhooks?: MutatingWebhook[];
}
export class MutatingWebhookConfigurationList
	extends KrmResource<MutatingWebhookConfigurationListComponentInputs>
	implements MutatingWebhookConfigurationListComponentOutputs
{
	constructor(entity: ADKEntity, options: MutatingWebhookConfigurationListComponentInputs | undefined) {
		super(entity, "admissionregistration.k8s.io/v1", "MutatingWebhookConfigurationList", options);
	}
}
export interface MutatingWebhookConfigurationListComponentOutputs {}
export interface MutatingWebhookConfigurationListComponentInputs {
	readonly items?: MutatingWebhookConfiguration[];
	readonly metadata?: ListMeta;
}
export class ValidatingWebhookConfiguration
	extends KrmResource<ValidatingWebhookConfigurationComponentInputs>
	implements ValidatingWebhookConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: ValidatingWebhookConfigurationComponentInputs | undefined) {
		super(entity, "admissionregistration.k8s.io/v1", "ValidatingWebhookConfiguration", options);
	}
}
export interface ValidatingWebhookConfigurationComponentOutputs {}
export interface ValidatingWebhookConfigurationComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly webhooks?: ValidatingWebhook[];
}
export class ValidatingWebhookConfigurationList
	extends KrmResource<ValidatingWebhookConfigurationListComponentInputs>
	implements ValidatingWebhookConfigurationListComponentOutputs
{
	constructor(entity: ADKEntity, options: ValidatingWebhookConfigurationListComponentInputs | undefined) {
		super(entity, "admissionregistration.k8s.io/v1", "ValidatingWebhookConfigurationList", options);
	}
}
export interface ValidatingWebhookConfigurationListComponentOutputs {}
export interface ValidatingWebhookConfigurationListComponentInputs {
	readonly items?: ValidatingWebhookConfiguration[];
	readonly metadata?: ListMeta;
}
export class StorageVersionV1alpha1
	extends KrmResource<StorageVersionV1alpha1ComponentInputs>
	implements StorageVersionV1alpha1ComponentOutputs
{
	constructor(entity: ADKEntity, options: StorageVersionV1alpha1ComponentInputs | undefined) {
		super(entity, "internal.apiserver.k8s.io/v1alpha1", "StorageVersion", options);
	}
}
export interface StorageVersionV1alpha1ComponentOutputs {}
export interface StorageVersionV1alpha1ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: any;
}
export class StorageVersionListV1alpha1
	extends KrmResource<StorageVersionListV1alpha1ComponentInputs>
	implements StorageVersionListV1alpha1ComponentOutputs
{
	constructor(entity: ADKEntity, options: StorageVersionListV1alpha1ComponentInputs | undefined) {
		super(entity, "internal.apiserver.k8s.io/v1alpha1", "StorageVersionList", options);
	}
}
export interface StorageVersionListV1alpha1ComponentOutputs {}
export interface StorageVersionListV1alpha1ComponentInputs {
	readonly items?: StorageVersionV1alpha1[];
	readonly metadata?: ListMeta;
}
export class ControllerRevision
	extends KrmResource<ControllerRevisionComponentInputs>
	implements ControllerRevisionComponentOutputs
{
	constructor(entity: ADKEntity, options: ControllerRevisionComponentInputs | undefined) {
		super(entity, "apps/v1", "ControllerRevision", options);
	}
}
export interface ControllerRevisionComponentOutputs {}
export interface ControllerRevisionComponentInputs {
	readonly data?: any;
	readonly metadata?: ObjectMeta;
	readonly revision?: number;
}
export class ControllerRevisionList
	extends KrmResource<ControllerRevisionListComponentInputs>
	implements ControllerRevisionListComponentOutputs
{
	constructor(entity: ADKEntity, options: ControllerRevisionListComponentInputs | undefined) {
		super(entity, "apps/v1", "ControllerRevisionList", options);
	}
}
export interface ControllerRevisionListComponentOutputs {}
export interface ControllerRevisionListComponentInputs {
	readonly items?: ControllerRevision[];
	readonly metadata?: ListMeta;
}
export class DaemonSet extends KrmResource<DaemonSetComponentInputs> implements DaemonSetComponentOutputs {
	constructor(entity: ADKEntity, options: DaemonSetComponentInputs | undefined) {
		super(entity, "apps/v1", "DaemonSet", options);
	}
}
export interface DaemonSetComponentOutputs {}
export interface DaemonSetComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: DaemonSetSpec;
}
export class DaemonSetList extends KrmResource<DaemonSetListComponentInputs> implements DaemonSetListComponentOutputs {
	constructor(entity: ADKEntity, options: DaemonSetListComponentInputs | undefined) {
		super(entity, "apps/v1", "DaemonSetList", options);
	}
}
export interface DaemonSetListComponentOutputs {}
export interface DaemonSetListComponentInputs {
	readonly items?: DaemonSet[];
	readonly metadata?: ListMeta;
}
export class Deployment extends KrmResource<DeploymentComponentInputs> implements DeploymentComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentComponentInputs | undefined) {
		super(entity, "apps/v1", "Deployment", options);
	}
}
export interface DeploymentComponentOutputs {}
export interface DeploymentComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: DeploymentSpec;
}
export class DeploymentList extends KrmResource<DeploymentListComponentInputs> implements DeploymentListComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentListComponentInputs | undefined) {
		super(entity, "apps/v1", "DeploymentList", options);
	}
}
export interface DeploymentListComponentOutputs {}
export interface DeploymentListComponentInputs {
	readonly items?: Deployment[];
	readonly metadata?: ListMeta;
}
export class ReplicaSet extends KrmResource<ReplicaSetComponentInputs> implements ReplicaSetComponentOutputs {
	constructor(entity: ADKEntity, options: ReplicaSetComponentInputs | undefined) {
		super(entity, "apps/v1", "ReplicaSet", options);
	}
}
export interface ReplicaSetComponentOutputs {}
export interface ReplicaSetComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: ReplicaSetSpec;
}
export class ReplicaSetList extends KrmResource<ReplicaSetListComponentInputs> implements ReplicaSetListComponentOutputs {
	constructor(entity: ADKEntity, options: ReplicaSetListComponentInputs | undefined) {
		super(entity, "apps/v1", "ReplicaSetList", options);
	}
}
export interface ReplicaSetListComponentOutputs {}
export interface ReplicaSetListComponentInputs {
	readonly items?: ReplicaSet[];
	readonly metadata?: ListMeta;
}
export class StatefulSet extends KrmResource<StatefulSetComponentInputs> implements StatefulSetComponentOutputs {
	constructor(entity: ADKEntity, options: StatefulSetComponentInputs | undefined) {
		super(entity, "apps/v1", "StatefulSet", options);
	}
}
export interface StatefulSetComponentOutputs {}
export interface StatefulSetComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: StatefulSetSpec;
}
export class StatefulSetList
	extends KrmResource<StatefulSetListComponentInputs>
	implements StatefulSetListComponentOutputs
{
	constructor(entity: ADKEntity, options: StatefulSetListComponentInputs | undefined) {
		super(entity, "apps/v1", "StatefulSetList", options);
	}
}
export interface StatefulSetListComponentOutputs {}
export interface StatefulSetListComponentInputs {
	readonly items?: StatefulSet[];
	readonly metadata?: ListMeta;
}
export class TokenRequest extends KrmResource<TokenRequestComponentInputs> implements TokenRequestComponentOutputs {
	constructor(entity: ADKEntity, options: TokenRequestComponentInputs | undefined) {
		super(entity, "authentication.k8s.io/v1", "TokenRequest", options);
	}
}
export interface TokenRequestComponentOutputs {}
export interface TokenRequestComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: TokenRequestSpec;
}
export class TokenReview extends KrmResource<TokenReviewComponentInputs> implements TokenReviewComponentOutputs {
	constructor(entity: ADKEntity, options: TokenReviewComponentInputs | undefined) {
		super(entity, "authentication.k8s.io/v1", "TokenReview", options);
	}
}
export interface TokenReviewComponentOutputs {}
export interface TokenReviewComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: TokenReviewSpec;
}
export class LocalSubjectAccessReview
	extends KrmResource<LocalSubjectAccessReviewComponentInputs>
	implements LocalSubjectAccessReviewComponentOutputs
{
	constructor(entity: ADKEntity, options: LocalSubjectAccessReviewComponentInputs | undefined) {
		super(entity, "authorization.k8s.io/v1", "LocalSubjectAccessReview", options);
	}
}
export interface LocalSubjectAccessReviewComponentOutputs {}
export interface LocalSubjectAccessReviewComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: SubjectAccessReviewSpec;
}
export class SelfSubjectAccessReview
	extends KrmResource<SelfSubjectAccessReviewComponentInputs>
	implements SelfSubjectAccessReviewComponentOutputs
{
	constructor(entity: ADKEntity, options: SelfSubjectAccessReviewComponentInputs | undefined) {
		super(entity, "authorization.k8s.io/v1", "SelfSubjectAccessReview", options);
	}
}
export interface SelfSubjectAccessReviewComponentOutputs {}
export interface SelfSubjectAccessReviewComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: SelfSubjectAccessReviewSpec;
}
export class SelfSubjectRulesReview
	extends KrmResource<SelfSubjectRulesReviewComponentInputs>
	implements SelfSubjectRulesReviewComponentOutputs
{
	constructor(entity: ADKEntity, options: SelfSubjectRulesReviewComponentInputs | undefined) {
		super(entity, "authorization.k8s.io/v1", "SelfSubjectRulesReview", options);
	}
}
export interface SelfSubjectRulesReviewComponentOutputs {}
export interface SelfSubjectRulesReviewComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: SelfSubjectRulesReviewSpec;
}
export class SubjectAccessReview
	extends KrmResource<SubjectAccessReviewComponentInputs>
	implements SubjectAccessReviewComponentOutputs
{
	constructor(entity: ADKEntity, options: SubjectAccessReviewComponentInputs | undefined) {
		super(entity, "authorization.k8s.io/v1", "SubjectAccessReview", options);
	}
}
export interface SubjectAccessReviewComponentOutputs {}
export interface SubjectAccessReviewComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: SubjectAccessReviewSpec;
}
export class HorizontalPodAutoscaler
	extends KrmResource<HorizontalPodAutoscalerComponentInputs>
	implements HorizontalPodAutoscalerComponentOutputs
{
	constructor(entity: ADKEntity, options: HorizontalPodAutoscalerComponentInputs | undefined) {
		super(entity, "autoscaling/v1", "HorizontalPodAutoscaler", options);
	}
}
export interface HorizontalPodAutoscalerComponentOutputs {}
export interface HorizontalPodAutoscalerComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: HorizontalPodAutoscalerSpec;
}
export class HorizontalPodAutoscalerList
	extends KrmResource<HorizontalPodAutoscalerListComponentInputs>
	implements HorizontalPodAutoscalerListComponentOutputs
{
	constructor(entity: ADKEntity, options: HorizontalPodAutoscalerListComponentInputs | undefined) {
		super(entity, "autoscaling/v1", "HorizontalPodAutoscalerList", options);
	}
}
export interface HorizontalPodAutoscalerListComponentOutputs {}
export interface HorizontalPodAutoscalerListComponentInputs {
	readonly items?: HorizontalPodAutoscaler[];
	readonly metadata?: ListMeta;
}
export class Scale extends KrmResource<ScaleComponentInputs> implements ScaleComponentOutputs {
	constructor(entity: ADKEntity, options: ScaleComponentInputs | undefined) {
		super(entity, "autoscaling/v1", "Scale", options);
	}
}
export interface ScaleComponentOutputs {}
export interface ScaleComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: ScaleSpec;
}
export class HorizontalPodAutoscalerV2
	extends KrmResource<HorizontalPodAutoscalerV2ComponentInputs>
	implements HorizontalPodAutoscalerV2ComponentOutputs
{
	constructor(entity: ADKEntity, options: HorizontalPodAutoscalerV2ComponentInputs | undefined) {
		super(entity, "autoscaling/v2", "HorizontalPodAutoscaler", options);
	}
}
export interface HorizontalPodAutoscalerV2ComponentOutputs {}
export interface HorizontalPodAutoscalerV2ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: HorizontalPodAutoscalerSpecV2;
}
export class HorizontalPodAutoscalerListV2
	extends KrmResource<HorizontalPodAutoscalerListV2ComponentInputs>
	implements HorizontalPodAutoscalerListV2ComponentOutputs
{
	constructor(entity: ADKEntity, options: HorizontalPodAutoscalerListV2ComponentInputs | undefined) {
		super(entity, "autoscaling/v2", "HorizontalPodAutoscalerList", options);
	}
}
export interface HorizontalPodAutoscalerListV2ComponentOutputs {}
export interface HorizontalPodAutoscalerListV2ComponentInputs {
	readonly items?: HorizontalPodAutoscalerV2[];
	readonly metadata?: ListMeta;
}
export class HorizontalPodAutoscalerV2beta2
	extends KrmResource<HorizontalPodAutoscalerV2beta2ComponentInputs>
	implements HorizontalPodAutoscalerV2beta2ComponentOutputs
{
	constructor(entity: ADKEntity, options: HorizontalPodAutoscalerV2beta2ComponentInputs | undefined) {
		super(entity, "autoscaling/v2beta2", "HorizontalPodAutoscaler", options);
	}
}
export interface HorizontalPodAutoscalerV2beta2ComponentOutputs {}
export interface HorizontalPodAutoscalerV2beta2ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: HorizontalPodAutoscalerSpecV2beta2;
}
export class HorizontalPodAutoscalerListV2beta2
	extends KrmResource<HorizontalPodAutoscalerListV2beta2ComponentInputs>
	implements HorizontalPodAutoscalerListV2beta2ComponentOutputs
{
	constructor(entity: ADKEntity, options: HorizontalPodAutoscalerListV2beta2ComponentInputs | undefined) {
		super(entity, "autoscaling/v2beta2", "HorizontalPodAutoscalerList", options);
	}
}
export interface HorizontalPodAutoscalerListV2beta2ComponentOutputs {}
export interface HorizontalPodAutoscalerListV2beta2ComponentInputs {
	readonly items?: HorizontalPodAutoscalerV2beta2[];
	readonly metadata?: ListMeta;
}
export class CronJob extends KrmResource<CronJobComponentInputs> implements CronJobComponentOutputs {
	constructor(entity: ADKEntity, options: CronJobComponentInputs | undefined) {
		super(entity, "batch/v1", "CronJob", options);
	}
}
export interface CronJobComponentOutputs {}
export interface CronJobComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: CronJobSpec;
}
export class CronJobList extends KrmResource<CronJobListComponentInputs> implements CronJobListComponentOutputs {
	constructor(entity: ADKEntity, options: CronJobListComponentInputs | undefined) {
		super(entity, "batch/v1", "CronJobList", options);
	}
}
export interface CronJobListComponentOutputs {}
export interface CronJobListComponentInputs {
	readonly items?: CronJob[];
	readonly metadata?: ListMeta;
}
export class Job extends KrmResource<JobComponentInputs> implements JobComponentOutputs {
	constructor(entity: ADKEntity, options: JobComponentInputs | undefined) {
		super(entity, "batch/v1", "Job", options);
	}
}
export interface JobComponentOutputs {}
export interface JobComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: JobSpec;
}
export class JobList extends KrmResource<JobListComponentInputs> implements JobListComponentOutputs {
	constructor(entity: ADKEntity, options: JobListComponentInputs | undefined) {
		super(entity, "batch/v1", "JobList", options);
	}
}
export interface JobListComponentOutputs {}
export interface JobListComponentInputs {
	readonly items?: Job[];
	readonly metadata?: ListMeta;
}
export class CertificateSigningRequest
	extends KrmResource<CertificateSigningRequestComponentInputs>
	implements CertificateSigningRequestComponentOutputs
{
	constructor(entity: ADKEntity, options: CertificateSigningRequestComponentInputs | undefined) {
		super(entity, "certificates.k8s.io/v1", "CertificateSigningRequest", options);
	}
}
export interface CertificateSigningRequestComponentOutputs {}
export interface CertificateSigningRequestComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: CertificateSigningRequestSpec;
}
export class CertificateSigningRequestList
	extends KrmResource<CertificateSigningRequestListComponentInputs>
	implements CertificateSigningRequestListComponentOutputs
{
	constructor(entity: ADKEntity, options: CertificateSigningRequestListComponentInputs | undefined) {
		super(entity, "certificates.k8s.io/v1", "CertificateSigningRequestList", options);
	}
}
export interface CertificateSigningRequestListComponentOutputs {}
export interface CertificateSigningRequestListComponentInputs {
	readonly items?: CertificateSigningRequest[];
	readonly metadata?: ListMeta;
}
export class Lease extends KrmResource<LeaseComponentInputs> implements LeaseComponentOutputs {
	constructor(entity: ADKEntity, options: LeaseComponentInputs | undefined) {
		super(entity, "coordination.k8s.io/v1", "Lease", options);
	}
}
export interface LeaseComponentOutputs {}
export interface LeaseComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: LeaseSpec;
}
export class LeaseList extends KrmResource<LeaseListComponentInputs> implements LeaseListComponentOutputs {
	constructor(entity: ADKEntity, options: LeaseListComponentInputs | undefined) {
		super(entity, "coordination.k8s.io/v1", "LeaseList", options);
	}
}
export interface LeaseListComponentOutputs {}
export interface LeaseListComponentInputs {
	readonly items?: Lease[];
	readonly metadata?: ListMeta;
}
export class Binding extends KrmResource<BindingComponentInputs> implements BindingComponentOutputs {
	constructor(entity: ADKEntity, options: BindingComponentInputs | undefined) {
		super(entity, "v1", "Binding", options);
	}
}
export interface BindingComponentOutputs {}
export interface BindingComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly target?: ObjectReference;
}
export class ComponentStatus
	extends KrmResource<ComponentStatusComponentInputs>
	implements ComponentStatusComponentOutputs
{
	constructor(entity: ADKEntity, options: ComponentStatusComponentInputs | undefined) {
		super(entity, "v1", "ComponentStatus", options);
	}
}
export interface ComponentStatusComponentOutputs {}
export interface ComponentStatusComponentInputs {
	readonly conditions?: ComponentCondition[];
	readonly metadata?: ObjectMeta;
}
export class ComponentStatusList
	extends KrmResource<ComponentStatusListComponentInputs>
	implements ComponentStatusListComponentOutputs
{
	constructor(entity: ADKEntity, options: ComponentStatusListComponentInputs | undefined) {
		super(entity, "v1", "ComponentStatusList", options);
	}
}
export interface ComponentStatusListComponentOutputs {}
export interface ComponentStatusListComponentInputs {
	readonly items?: ComponentStatus[];
	readonly metadata?: ListMeta;
}
export class ConfigMap extends KrmResource<ConfigMapComponentInputs> implements ConfigMapComponentOutputs {
	constructor(entity: ADKEntity, options: ConfigMapComponentInputs | undefined) {
		super(entity, "v1", "ConfigMap", options);
	}
}
export interface ConfigMapComponentOutputs {}
export interface ConfigMapComponentInputs {
	readonly binaryData?: { [key: string]: string };
	readonly data?: { [key: string]: string };
	readonly immutable?: boolean;
	readonly metadata?: ObjectMeta;
}
export class ConfigMapList extends KrmResource<ConfigMapListComponentInputs> implements ConfigMapListComponentOutputs {
	constructor(entity: ADKEntity, options: ConfigMapListComponentInputs | undefined) {
		super(entity, "v1", "ConfigMapList", options);
	}
}
export interface ConfigMapListComponentOutputs {}
export interface ConfigMapListComponentInputs {
	readonly items?: ConfigMap[];
	readonly metadata?: ListMeta;
}
export class Endpoints extends KrmResource<EndpointsComponentInputs> implements EndpointsComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointsComponentInputs | undefined) {
		super(entity, "v1", "Endpoints", options);
	}
}
export interface EndpointsComponentOutputs {}
export interface EndpointsComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly subsets?: EndpointSubset[];
}
export class EndpointsList extends KrmResource<EndpointsListComponentInputs> implements EndpointsListComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointsListComponentInputs | undefined) {
		super(entity, "v1", "EndpointsList", options);
	}
}
export interface EndpointsListComponentOutputs {}
export interface EndpointsListComponentInputs {
	readonly items?: Endpoints[];
	readonly metadata?: ListMeta;
}
export class Event extends KrmResource<EventComponentInputs> implements EventComponentOutputs {
	constructor(entity: ADKEntity, options: EventComponentInputs | undefined) {
		super(entity, "events.k8s.io/v1", "Event", options);
	}
}
export interface EventComponentOutputs {}
export interface EventComponentInputs {
	readonly action?: string;
	readonly deprecatedCount?: number;
	readonly deprecatedFirstTimestamp?: Date;
	readonly deprecatedLastTimestamp?: Date;
	readonly deprecatedSource?: EventSource;
	readonly eventTime?: Date;
	readonly metadata?: ObjectMeta;
	readonly note?: string;
	readonly reason?: string;
	readonly regarding?: ObjectReference;
	readonly related?: ObjectReference;
	readonly reportingController?: string;
	readonly reportingInstance?: string;
	readonly series?: EventSeries;
	readonly type?: string;
}
export class EventList extends KrmResource<EventListComponentInputs> implements EventListComponentOutputs {
	constructor(entity: ADKEntity, options: EventListComponentInputs | undefined) {
		super(entity, "events.k8s.io/v1", "EventList", options);
	}
}
export interface EventListComponentOutputs {}
export interface EventListComponentInputs {
	readonly items?: Event[];
	readonly metadata?: ListMeta;
}
export class LimitRange extends KrmResource<LimitRangeComponentInputs> implements LimitRangeComponentOutputs {
	constructor(entity: ADKEntity, options: LimitRangeComponentInputs | undefined) {
		super(entity, "v1", "LimitRange", options);
	}
}
export interface LimitRangeComponentOutputs {}
export interface LimitRangeComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: LimitRangeSpec;
}
export class LimitRangeList extends KrmResource<LimitRangeListComponentInputs> implements LimitRangeListComponentOutputs {
	constructor(entity: ADKEntity, options: LimitRangeListComponentInputs | undefined) {
		super(entity, "v1", "LimitRangeList", options);
	}
}
export interface LimitRangeListComponentOutputs {}
export interface LimitRangeListComponentInputs {
	readonly items?: LimitRange[];
	readonly metadata?: ListMeta;
}
export class Namespace extends KrmResource<NamespaceComponentInputs> implements NamespaceComponentOutputs {
	constructor(entity: ADKEntity, options: NamespaceComponentInputs | undefined) {
		super(entity, "v1", "Namespace", options);
	}
}
export interface NamespaceComponentOutputs {}
export interface NamespaceComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: NamespaceSpec;
}
export class NamespaceList extends KrmResource<NamespaceListComponentInputs> implements NamespaceListComponentOutputs {
	constructor(entity: ADKEntity, options: NamespaceListComponentInputs | undefined) {
		super(entity, "v1", "NamespaceList", options);
	}
}
export interface NamespaceListComponentOutputs {}
export interface NamespaceListComponentInputs {
	readonly items?: Namespace[];
	readonly metadata?: ListMeta;
}
export class Node extends KrmResource<NodeComponentInputs> implements NodeComponentOutputs {
	constructor(entity: ADKEntity, options: NodeComponentInputs | undefined) {
		super(entity, "v1", "Node", options);
	}
}
export interface NodeComponentOutputs {}
export interface NodeComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: NodeSpec;
}
export class NodeList extends KrmResource<NodeListComponentInputs> implements NodeListComponentOutputs {
	constructor(entity: ADKEntity, options: NodeListComponentInputs | undefined) {
		super(entity, "v1", "NodeList", options);
	}
}
export interface NodeListComponentOutputs {}
export interface NodeListComponentInputs {
	readonly items?: Node[];
	readonly metadata?: ListMeta;
}
export class PersistentVolume
	extends KrmResource<PersistentVolumeComponentInputs>
	implements PersistentVolumeComponentOutputs
{
	constructor(entity: ADKEntity, options: PersistentVolumeComponentInputs | undefined) {
		super(entity, "v1", "PersistentVolume", options);
	}
}
export interface PersistentVolumeComponentOutputs {}
export interface PersistentVolumeComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: PersistentVolumeSpec;
}
export class PersistentVolumeClaim
	extends KrmResource<PersistentVolumeClaimComponentInputs>
	implements PersistentVolumeClaimComponentOutputs
{
	constructor(entity: ADKEntity, options: PersistentVolumeClaimComponentInputs | undefined) {
		super(entity, "v1", "PersistentVolumeClaim", options);
	}
}
export interface PersistentVolumeClaimComponentOutputs {}
export interface PersistentVolumeClaimComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: PersistentVolumeClaimSpec;
}
export class PersistentVolumeClaimList
	extends KrmResource<PersistentVolumeClaimListComponentInputs>
	implements PersistentVolumeClaimListComponentOutputs
{
	constructor(entity: ADKEntity, options: PersistentVolumeClaimListComponentInputs | undefined) {
		super(entity, "v1", "PersistentVolumeClaimList", options);
	}
}
export interface PersistentVolumeClaimListComponentOutputs {}
export interface PersistentVolumeClaimListComponentInputs {
	readonly items?: PersistentVolumeClaim[];
	readonly metadata?: ListMeta;
}
export class PersistentVolumeList
	extends KrmResource<PersistentVolumeListComponentInputs>
	implements PersistentVolumeListComponentOutputs
{
	constructor(entity: ADKEntity, options: PersistentVolumeListComponentInputs | undefined) {
		super(entity, "v1", "PersistentVolumeList", options);
	}
}
export interface PersistentVolumeListComponentOutputs {}
export interface PersistentVolumeListComponentInputs {
	readonly items?: PersistentVolume[];
	readonly metadata?: ListMeta;
}
export class Pod extends KrmResource<PodComponentInputs> implements PodComponentOutputs {
	constructor(entity: ADKEntity, options: PodComponentInputs | undefined) {
		super(entity, "v1", "Pod", options);
	}
}
export interface PodComponentOutputs {}
export interface PodComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: PodSpec;
}
export class PodList extends KrmResource<PodListComponentInputs> implements PodListComponentOutputs {
	constructor(entity: ADKEntity, options: PodListComponentInputs | undefined) {
		super(entity, "v1", "PodList", options);
	}
}
export interface PodListComponentOutputs {}
export interface PodListComponentInputs {
	readonly items?: Pod[];
	readonly metadata?: ListMeta;
}
export class PodTemplate extends KrmResource<PodTemplateComponentInputs> implements PodTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: PodTemplateComponentInputs | undefined) {
		super(entity, "v1", "PodTemplate", options);
	}
}
export interface PodTemplateComponentOutputs {}
export interface PodTemplateComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly template?: PodTemplateSpec;
}
export class PodTemplateList
	extends KrmResource<PodTemplateListComponentInputs>
	implements PodTemplateListComponentOutputs
{
	constructor(entity: ADKEntity, options: PodTemplateListComponentInputs | undefined) {
		super(entity, "v1", "PodTemplateList", options);
	}
}
export interface PodTemplateListComponentOutputs {}
export interface PodTemplateListComponentInputs {
	readonly items?: PodTemplate[];
	readonly metadata?: ListMeta;
}
export class ReplicationController
	extends KrmResource<ReplicationControllerComponentInputs>
	implements ReplicationControllerComponentOutputs
{
	constructor(entity: ADKEntity, options: ReplicationControllerComponentInputs | undefined) {
		super(entity, "v1", "ReplicationController", options);
	}
}
export interface ReplicationControllerComponentOutputs {}
export interface ReplicationControllerComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: ReplicationControllerSpec;
}
export class ReplicationControllerList
	extends KrmResource<ReplicationControllerListComponentInputs>
	implements ReplicationControllerListComponentOutputs
{
	constructor(entity: ADKEntity, options: ReplicationControllerListComponentInputs | undefined) {
		super(entity, "v1", "ReplicationControllerList", options);
	}
}
export interface ReplicationControllerListComponentOutputs {}
export interface ReplicationControllerListComponentInputs {
	readonly items?: ReplicationController[];
	readonly metadata?: ListMeta;
}
export class ResourceQuota extends KrmResource<ResourceQuotaComponentInputs> implements ResourceQuotaComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceQuotaComponentInputs | undefined) {
		super(entity, "v1", "ResourceQuota", options);
	}
}
export interface ResourceQuotaComponentOutputs {}
export interface ResourceQuotaComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: ResourceQuotaSpec;
}
export class ResourceQuotaList
	extends KrmResource<ResourceQuotaListComponentInputs>
	implements ResourceQuotaListComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceQuotaListComponentInputs | undefined) {
		super(entity, "v1", "ResourceQuotaList", options);
	}
}
export interface ResourceQuotaListComponentOutputs {}
export interface ResourceQuotaListComponentInputs {
	readonly items?: ResourceQuota[];
	readonly metadata?: ListMeta;
}
export class Secret extends KrmResource<SecretComponentInputs> implements SecretComponentOutputs {
	constructor(entity: ADKEntity, options: SecretComponentInputs | undefined) {
		super(entity, "v1", "Secret", options);
	}
}
export interface SecretComponentOutputs {}
export interface SecretComponentInputs {
	readonly data?: { [key: string]: string };
	readonly immutable?: boolean;
	readonly metadata?: ObjectMeta;
	readonly stringData?: { [key: string]: string };
	readonly type?: string;
}
export class SecretList extends KrmResource<SecretListComponentInputs> implements SecretListComponentOutputs {
	constructor(entity: ADKEntity, options: SecretListComponentInputs | undefined) {
		super(entity, "v1", "SecretList", options);
	}
}
export interface SecretListComponentOutputs {}
export interface SecretListComponentInputs {
	readonly items?: Secret[];
	readonly metadata?: ListMeta;
}
export class Service extends KrmResource<ServiceComponentInputs> implements ServiceComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceComponentInputs | undefined) {
		super(entity, "v1", "Service", options);
	}
}
export interface ServiceComponentOutputs {}
export interface ServiceComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: ServiceSpec;
}
export class ServiceAccount extends KrmResource<ServiceAccountComponentInputs> implements ServiceAccountComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceAccountComponentInputs | undefined) {
		super(entity, "v1", "ServiceAccount", options);
	}
}
export interface ServiceAccountComponentOutputs {}
export interface ServiceAccountComponentInputs {
	readonly automountServiceAccountToken?: boolean;
	readonly imagePullSecrets?: LocalObjectReference[];
	readonly metadata?: ObjectMeta;
	readonly secrets?: ObjectReference[];
}
export class ServiceAccountList
	extends KrmResource<ServiceAccountListComponentInputs>
	implements ServiceAccountListComponentOutputs
{
	constructor(entity: ADKEntity, options: ServiceAccountListComponentInputs | undefined) {
		super(entity, "v1", "ServiceAccountList", options);
	}
}
export interface ServiceAccountListComponentOutputs {}
export interface ServiceAccountListComponentInputs {
	readonly items?: ServiceAccount[];
	readonly metadata?: ListMeta;
}
export class ServiceList extends KrmResource<ServiceListComponentInputs> implements ServiceListComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceListComponentInputs | undefined) {
		super(entity, "v1", "ServiceList", options);
	}
}
export interface ServiceListComponentOutputs {}
export interface ServiceListComponentInputs {
	readonly items?: Service[];
	readonly metadata?: ListMeta;
}
export class EndpointSlice extends KrmResource<EndpointSliceComponentInputs> implements EndpointSliceComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointSliceComponentInputs | undefined) {
		super(entity, "discovery.k8s.io/v1", "EndpointSlice", options);
	}
}
export interface EndpointSliceComponentOutputs {}
export interface EndpointSliceComponentInputs {
	readonly addressType?: string;
	readonly endpoints?: Endpoint[];
	readonly metadata?: ObjectMeta;
	readonly ports?: EndpointPort[];
}
export class EndpointSliceList
	extends KrmResource<EndpointSliceListComponentInputs>
	implements EndpointSliceListComponentOutputs
{
	constructor(entity: ADKEntity, options: EndpointSliceListComponentInputs | undefined) {
		super(entity, "discovery.k8s.io/v1", "EndpointSliceList", options);
	}
}
export interface EndpointSliceListComponentOutputs {}
export interface EndpointSliceListComponentInputs {
	readonly items?: EndpointSlice[];
	readonly metadata?: ListMeta;
}
export class FlowSchemaV1beta1
	extends KrmResource<FlowSchemaV1beta1ComponentInputs>
	implements FlowSchemaV1beta1ComponentOutputs
{
	constructor(entity: ADKEntity, options: FlowSchemaV1beta1ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta1", "FlowSchema", options);
	}
}
export interface FlowSchemaV1beta1ComponentOutputs {}
export interface FlowSchemaV1beta1ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: FlowSchemaSpecV1beta1;
}
export class FlowSchemaListV1beta1
	extends KrmResource<FlowSchemaListV1beta1ComponentInputs>
	implements FlowSchemaListV1beta1ComponentOutputs
{
	constructor(entity: ADKEntity, options: FlowSchemaListV1beta1ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta1", "FlowSchemaList", options);
	}
}
export interface FlowSchemaListV1beta1ComponentOutputs {}
export interface FlowSchemaListV1beta1ComponentInputs {
	readonly items?: FlowSchemaV1beta1[];
	readonly metadata?: ListMeta;
}
export class PriorityLevelConfigurationV1beta1
	extends KrmResource<PriorityLevelConfigurationV1beta1ComponentInputs>
	implements PriorityLevelConfigurationV1beta1ComponentOutputs
{
	constructor(entity: ADKEntity, options: PriorityLevelConfigurationV1beta1ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta1", "PriorityLevelConfiguration", options);
	}
}
export interface PriorityLevelConfigurationV1beta1ComponentOutputs {}
export interface PriorityLevelConfigurationV1beta1ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: PriorityLevelConfigurationSpecV1beta1;
}
export class PriorityLevelConfigurationListV1beta1
	extends KrmResource<PriorityLevelConfigurationListV1beta1ComponentInputs>
	implements PriorityLevelConfigurationListV1beta1ComponentOutputs
{
	constructor(entity: ADKEntity, options: PriorityLevelConfigurationListV1beta1ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta1", "PriorityLevelConfigurationList", options);
	}
}
export interface PriorityLevelConfigurationListV1beta1ComponentOutputs {}
export interface PriorityLevelConfigurationListV1beta1ComponentInputs {
	readonly items?: PriorityLevelConfigurationV1beta1[];
	readonly metadata?: ListMeta;
}
export class FlowSchemaV1beta2
	extends KrmResource<FlowSchemaV1beta2ComponentInputs>
	implements FlowSchemaV1beta2ComponentOutputs
{
	constructor(entity: ADKEntity, options: FlowSchemaV1beta2ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta2", "FlowSchema", options);
	}
}
export interface FlowSchemaV1beta2ComponentOutputs {}
export interface FlowSchemaV1beta2ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: FlowSchemaSpecV1beta2;
}
export class FlowSchemaListV1beta2
	extends KrmResource<FlowSchemaListV1beta2ComponentInputs>
	implements FlowSchemaListV1beta2ComponentOutputs
{
	constructor(entity: ADKEntity, options: FlowSchemaListV1beta2ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta2", "FlowSchemaList", options);
	}
}
export interface FlowSchemaListV1beta2ComponentOutputs {}
export interface FlowSchemaListV1beta2ComponentInputs {
	readonly items?: FlowSchemaV1beta2[];
	readonly metadata?: ListMeta;
}
export class PriorityLevelConfigurationV1beta2
	extends KrmResource<PriorityLevelConfigurationV1beta2ComponentInputs>
	implements PriorityLevelConfigurationV1beta2ComponentOutputs
{
	constructor(entity: ADKEntity, options: PriorityLevelConfigurationV1beta2ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta2", "PriorityLevelConfiguration", options);
	}
}
export interface PriorityLevelConfigurationV1beta2ComponentOutputs {}
export interface PriorityLevelConfigurationV1beta2ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: PriorityLevelConfigurationSpecV1beta2;
}
export class PriorityLevelConfigurationListV1beta2
	extends KrmResource<PriorityLevelConfigurationListV1beta2ComponentInputs>
	implements PriorityLevelConfigurationListV1beta2ComponentOutputs
{
	constructor(entity: ADKEntity, options: PriorityLevelConfigurationListV1beta2ComponentInputs | undefined) {
		super(entity, "flowcontrol.apiserver.k8s.io/v1beta2", "PriorityLevelConfigurationList", options);
	}
}
export interface PriorityLevelConfigurationListV1beta2ComponentOutputs {}
export interface PriorityLevelConfigurationListV1beta2ComponentInputs {
	readonly items?: PriorityLevelConfigurationV1beta2[];
	readonly metadata?: ListMeta;
}
export class Ingress extends KrmResource<IngressComponentInputs> implements IngressComponentOutputs {
	constructor(entity: ADKEntity, options: IngressComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1", "Ingress", options);
	}
}
export interface IngressComponentOutputs {}
export interface IngressComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: IngressSpec;
}
export class IngressClass extends KrmResource<IngressClassComponentInputs> implements IngressClassComponentOutputs {
	constructor(entity: ADKEntity, options: IngressClassComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1", "IngressClass", options);
	}
}
export interface IngressClassComponentOutputs {}
export interface IngressClassComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: IngressClassSpec;
}
export class IngressClassList
	extends KrmResource<IngressClassListComponentInputs>
	implements IngressClassListComponentOutputs
{
	constructor(entity: ADKEntity, options: IngressClassListComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1", "IngressClassList", options);
	}
}
export interface IngressClassListComponentOutputs {}
export interface IngressClassListComponentInputs {
	readonly items?: IngressClass[];
	readonly metadata?: ListMeta;
}
export class IngressList extends KrmResource<IngressListComponentInputs> implements IngressListComponentOutputs {
	constructor(entity: ADKEntity, options: IngressListComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1", "IngressList", options);
	}
}
export interface IngressListComponentOutputs {}
export interface IngressListComponentInputs {
	readonly items?: Ingress[];
	readonly metadata?: ListMeta;
}
export class NetworkPolicy extends KrmResource<NetworkPolicyComponentInputs> implements NetworkPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: NetworkPolicyComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1", "NetworkPolicy", options);
	}
}
export interface NetworkPolicyComponentOutputs {}
export interface NetworkPolicyComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: NetworkPolicySpec;
}
export class NetworkPolicyList
	extends KrmResource<NetworkPolicyListComponentInputs>
	implements NetworkPolicyListComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkPolicyListComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1", "NetworkPolicyList", options);
	}
}
export interface NetworkPolicyListComponentOutputs {}
export interface NetworkPolicyListComponentInputs {
	readonly items?: NetworkPolicy[];
	readonly metadata?: ListMeta;
}
export class ClusterCidrv1alpha1
	extends KrmResource<ClusterCidrv1alpha1ComponentInputs>
	implements ClusterCidrv1alpha1ComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterCidrv1alpha1ComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1alpha1", "ClusterCIDR", options);
	}
}
export interface ClusterCidrv1alpha1ComponentOutputs {}
export interface ClusterCidrv1alpha1ComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: ClusterCidrSpecV1alpha1;
}
export class ClusterCidrListV1alpha1
	extends KrmResource<ClusterCidrListV1alpha1ComponentInputs>
	implements ClusterCidrListV1alpha1ComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterCidrListV1alpha1ComponentInputs | undefined) {
		super(entity, "networking.k8s.io/v1alpha1", "ClusterCIDRList", options);
	}
}
export interface ClusterCidrListV1alpha1ComponentOutputs {}
export interface ClusterCidrListV1alpha1ComponentInputs {
	readonly items?: ClusterCidrv1alpha1[];
	readonly metadata?: ListMeta;
}
export class RuntimeClass extends KrmResource<RuntimeClassComponentInputs> implements RuntimeClassComponentOutputs {
	constructor(entity: ADKEntity, options: RuntimeClassComponentInputs | undefined) {
		super(entity, "node.k8s.io/v1", "RuntimeClass", options);
	}
}
export interface RuntimeClassComponentOutputs {}
export interface RuntimeClassComponentInputs {
	readonly handler?: string;
	readonly metadata?: ObjectMeta;
	readonly overhead?: Overhead;
	readonly scheduling?: Scheduling;
}
export class RuntimeClassList
	extends KrmResource<RuntimeClassListComponentInputs>
	implements RuntimeClassListComponentOutputs
{
	constructor(entity: ADKEntity, options: RuntimeClassListComponentInputs | undefined) {
		super(entity, "node.k8s.io/v1", "RuntimeClassList", options);
	}
}
export interface RuntimeClassListComponentOutputs {}
export interface RuntimeClassListComponentInputs {
	readonly items?: RuntimeClass[];
	readonly metadata?: ListMeta;
}
export class Eviction extends KrmResource<EvictionComponentInputs> implements EvictionComponentOutputs {
	constructor(entity: ADKEntity, options: EvictionComponentInputs | undefined) {
		super(entity, "policy/v1", "Eviction", options);
	}
}
export interface EvictionComponentOutputs {}
export interface EvictionComponentInputs {
	readonly deleteOptions?: DeleteOptions;
	readonly metadata?: ObjectMeta;
}
export class PodDisruptionBudget
	extends KrmResource<PodDisruptionBudgetComponentInputs>
	implements PodDisruptionBudgetComponentOutputs
{
	constructor(entity: ADKEntity, options: PodDisruptionBudgetComponentInputs | undefined) {
		super(entity, "policy/v1", "PodDisruptionBudget", options);
	}
}
export interface PodDisruptionBudgetComponentOutputs {}
export interface PodDisruptionBudgetComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: PodDisruptionBudgetSpec;
}
export class PodDisruptionBudgetList
	extends KrmResource<PodDisruptionBudgetListComponentInputs>
	implements PodDisruptionBudgetListComponentOutputs
{
	constructor(entity: ADKEntity, options: PodDisruptionBudgetListComponentInputs | undefined) {
		super(entity, "policy/v1", "PodDisruptionBudgetList", options);
	}
}
export interface PodDisruptionBudgetListComponentOutputs {}
export interface PodDisruptionBudgetListComponentInputs {
	readonly items?: PodDisruptionBudget[];
	readonly metadata?: ListMeta;
}
export class ClusterRole extends KrmResource<ClusterRoleComponentInputs> implements ClusterRoleComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterRoleComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "ClusterRole", options);
	}
}
export interface ClusterRoleComponentOutputs {}
export interface ClusterRoleComponentInputs {
	readonly aggregationRule?: AggregationRule;
	readonly metadata?: ObjectMeta;
	readonly rules?: PolicyRule[];
}
export class ClusterRoleBinding
	extends KrmResource<ClusterRoleBindingComponentInputs>
	implements ClusterRoleBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterRoleBindingComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "ClusterRoleBinding", options);
	}
}
export interface ClusterRoleBindingComponentOutputs {}
export interface ClusterRoleBindingComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly roleRef?: RoleRef;
	readonly subjects?: Subject[];
}
export class ClusterRoleBindingList
	extends KrmResource<ClusterRoleBindingListComponentInputs>
	implements ClusterRoleBindingListComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterRoleBindingListComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "ClusterRoleBindingList", options);
	}
}
export interface ClusterRoleBindingListComponentOutputs {}
export interface ClusterRoleBindingListComponentInputs {
	readonly items?: ClusterRoleBinding[];
	readonly metadata?: ListMeta;
}
export class ClusterRoleList
	extends KrmResource<ClusterRoleListComponentInputs>
	implements ClusterRoleListComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterRoleListComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "ClusterRoleList", options);
	}
}
export interface ClusterRoleListComponentOutputs {}
export interface ClusterRoleListComponentInputs {
	readonly items?: ClusterRole[];
	readonly metadata?: ListMeta;
}
export class Role extends KrmResource<RoleComponentInputs> implements RoleComponentOutputs {
	constructor(entity: ADKEntity, options: RoleComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "Role", options);
	}
}
export interface RoleComponentOutputs {}
export interface RoleComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly rules?: PolicyRule[];
}
export class RoleBinding extends KrmResource<RoleBindingComponentInputs> implements RoleBindingComponentOutputs {
	constructor(entity: ADKEntity, options: RoleBindingComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "RoleBinding", options);
	}
}
export interface RoleBindingComponentOutputs {}
export interface RoleBindingComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly roleRef?: RoleRef;
	readonly subjects?: Subject[];
}
export class RoleBindingList
	extends KrmResource<RoleBindingListComponentInputs>
	implements RoleBindingListComponentOutputs
{
	constructor(entity: ADKEntity, options: RoleBindingListComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "RoleBindingList", options);
	}
}
export interface RoleBindingListComponentOutputs {}
export interface RoleBindingListComponentInputs {
	readonly items?: RoleBinding[];
	readonly metadata?: ListMeta;
}
export class RoleList extends KrmResource<RoleListComponentInputs> implements RoleListComponentOutputs {
	constructor(entity: ADKEntity, options: RoleListComponentInputs | undefined) {
		super(entity, "rbac.authorization.k8s.io/v1", "RoleList", options);
	}
}
export interface RoleListComponentOutputs {}
export interface RoleListComponentInputs {
	readonly items?: Role[];
	readonly metadata?: ListMeta;
}
export class PriorityClass extends KrmResource<PriorityClassComponentInputs> implements PriorityClassComponentOutputs {
	constructor(entity: ADKEntity, options: PriorityClassComponentInputs | undefined) {
		super(entity, "scheduling.k8s.io/v1", "PriorityClass", options);
	}
}
export interface PriorityClassComponentOutputs {}
export interface PriorityClassComponentInputs {
	readonly description?: string;
	readonly globalDefault?: boolean;
	readonly metadata?: ObjectMeta;
	readonly preemptionPolicy?: string;
	readonly value?: number;
}
export class PriorityClassList
	extends KrmResource<PriorityClassListComponentInputs>
	implements PriorityClassListComponentOutputs
{
	constructor(entity: ADKEntity, options: PriorityClassListComponentInputs | undefined) {
		super(entity, "scheduling.k8s.io/v1", "PriorityClassList", options);
	}
}
export interface PriorityClassListComponentOutputs {}
export interface PriorityClassListComponentInputs {
	readonly items?: PriorityClass[];
	readonly metadata?: ListMeta;
}
export class CsiDriver extends KrmResource<CsiDriverComponentInputs> implements CsiDriverComponentOutputs {
	constructor(entity: ADKEntity, options: CsiDriverComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "CSIDriver", options);
	}
}
export interface CsiDriverComponentOutputs {}
export interface CsiDriverComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: CsiDriverSpec;
}
export class CsiDriverList extends KrmResource<CsiDriverListComponentInputs> implements CsiDriverListComponentOutputs {
	constructor(entity: ADKEntity, options: CsiDriverListComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "CSIDriverList", options);
	}
}
export interface CsiDriverListComponentOutputs {}
export interface CsiDriverListComponentInputs {
	readonly items?: CsiDriver[];
	readonly metadata?: ListMeta;
}
export class CsiNode extends KrmResource<CsiNodeComponentInputs> implements CsiNodeComponentOutputs {
	constructor(entity: ADKEntity, options: CsiNodeComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "CSINode", options);
	}
}
export interface CsiNodeComponentOutputs {}
export interface CsiNodeComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: CsiNodeSpec;
}
export class CsiNodeList extends KrmResource<CsiNodeListComponentInputs> implements CsiNodeListComponentOutputs {
	constructor(entity: ADKEntity, options: CsiNodeListComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "CSINodeList", options);
	}
}
export interface CsiNodeListComponentOutputs {}
export interface CsiNodeListComponentInputs {
	readonly items?: CsiNode[];
	readonly metadata?: ListMeta;
}
export class CsiStorageCapacity
	extends KrmResource<CsiStorageCapacityComponentInputs>
	implements CsiStorageCapacityComponentOutputs
{
	constructor(entity: ADKEntity, options: CsiStorageCapacityComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "CSIStorageCapacity", options);
	}
}
export interface CsiStorageCapacityComponentOutputs {}
export interface CsiStorageCapacityComponentInputs {
	readonly capacity?: string;
	readonly maximumVolumeSize?: string;
	readonly metadata?: ObjectMeta;
	readonly nodeTopology?: LabelSelector;
	readonly storageClassName?: string;
}
export class CsiStorageCapacityList
	extends KrmResource<CsiStorageCapacityListComponentInputs>
	implements CsiStorageCapacityListComponentOutputs
{
	constructor(entity: ADKEntity, options: CsiStorageCapacityListComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "CSIStorageCapacityList", options);
	}
}
export interface CsiStorageCapacityListComponentOutputs {}
export interface CsiStorageCapacityListComponentInputs {
	readonly items?: CsiStorageCapacity[];
	readonly metadata?: ListMeta;
}
export class StorageClass extends KrmResource<StorageClassComponentInputs> implements StorageClassComponentOutputs {
	constructor(entity: ADKEntity, options: StorageClassComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "StorageClass", options);
	}
}
export interface StorageClassComponentOutputs {}
export interface StorageClassComponentInputs {
	readonly allowVolumeExpansion?: boolean;
	readonly allowedTopologies?: TopologySelectorTerm[];
	readonly metadata?: ObjectMeta;
	readonly mountOptions?: string[];
	readonly parameters?: { [key: string]: string };
	readonly provisioner?: string;
	readonly reclaimPolicy?: string;
	readonly volumeBindingMode?: string;
}
export class StorageClassList
	extends KrmResource<StorageClassListComponentInputs>
	implements StorageClassListComponentOutputs
{
	constructor(entity: ADKEntity, options: StorageClassListComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "StorageClassList", options);
	}
}
export interface StorageClassListComponentOutputs {}
export interface StorageClassListComponentInputs {
	readonly items?: StorageClass[];
	readonly metadata?: ListMeta;
}
export class VolumeAttachment
	extends KrmResource<VolumeAttachmentComponentInputs>
	implements VolumeAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: VolumeAttachmentComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "VolumeAttachment", options);
	}
}
export interface VolumeAttachmentComponentOutputs {}
export interface VolumeAttachmentComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: VolumeAttachmentSpec;
}
export class VolumeAttachmentList
	extends KrmResource<VolumeAttachmentListComponentInputs>
	implements VolumeAttachmentListComponentOutputs
{
	constructor(entity: ADKEntity, options: VolumeAttachmentListComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1", "VolumeAttachmentList", options);
	}
}
export interface VolumeAttachmentListComponentOutputs {}
export interface VolumeAttachmentListComponentInputs {
	readonly items?: VolumeAttachment[];
	readonly metadata?: ListMeta;
}
export class CsiStorageCapacityV1beta1
	extends KrmResource<CsiStorageCapacityV1beta1ComponentInputs>
	implements CsiStorageCapacityV1beta1ComponentOutputs
{
	constructor(entity: ADKEntity, options: CsiStorageCapacityV1beta1ComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1beta1", "CSIStorageCapacity", options);
	}
}
export interface CsiStorageCapacityV1beta1ComponentOutputs {}
export interface CsiStorageCapacityV1beta1ComponentInputs {
	readonly capacity?: string;
	readonly maximumVolumeSize?: string;
	readonly metadata?: ObjectMeta;
	readonly nodeTopology?: LabelSelector;
	readonly storageClassName?: string;
}
export class CsiStorageCapacityListV1beta1
	extends KrmResource<CsiStorageCapacityListV1beta1ComponentInputs>
	implements CsiStorageCapacityListV1beta1ComponentOutputs
{
	constructor(entity: ADKEntity, options: CsiStorageCapacityListV1beta1ComponentInputs | undefined) {
		super(entity, "storage.k8s.io/v1beta1", "CSIStorageCapacityList", options);
	}
}
export interface CsiStorageCapacityListV1beta1ComponentOutputs {}
export interface CsiStorageCapacityListV1beta1ComponentInputs {
	readonly items?: CsiStorageCapacityV1beta1[];
	readonly metadata?: ListMeta;
}
export class CustomResourceDefinition
	extends KrmResource<CustomResourceDefinitionComponentInputs>
	implements CustomResourceDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: CustomResourceDefinitionComponentInputs | undefined) {
		super(entity, "apiextensions.k8s.io/v1", "CustomResourceDefinition", options);
	}
}
export interface CustomResourceDefinitionComponentOutputs {}
export interface CustomResourceDefinitionComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: CustomResourceDefinitionSpec;
}
export class CustomResourceDefinitionList
	extends KrmResource<CustomResourceDefinitionListComponentInputs>
	implements CustomResourceDefinitionListComponentOutputs
{
	constructor(entity: ADKEntity, options: CustomResourceDefinitionListComponentInputs | undefined) {
		super(entity, "apiextensions.k8s.io/v1", "CustomResourceDefinitionList", options);
	}
}
export interface CustomResourceDefinitionListComponentOutputs {}
export interface CustomResourceDefinitionListComponentInputs {
	readonly items?: CustomResourceDefinition[];
	readonly metadata?: ListMeta;
}
export class Status extends KrmResource<StatusComponentInputs> implements StatusComponentOutputs {
	constructor(entity: ADKEntity, options: StatusComponentInputs | undefined) {
		super(entity, "v1", "Status", options);
	}
}
export interface StatusComponentOutputs {}
export interface StatusComponentInputs {
	readonly code?: number;
	readonly details?: StatusDetails;
	readonly message?: string;
	readonly metadata?: ListMeta;
	readonly reason?: string;
}
export class ApiService extends KrmResource<ApiServiceComponentInputs> implements ApiServiceComponentOutputs {
	constructor(entity: ADKEntity, options: ApiServiceComponentInputs | undefined) {
		super(entity, "apiregistration.k8s.io/v1", "APIService", options);
	}
}
export interface ApiServiceComponentOutputs {}
export interface ApiServiceComponentInputs {
	readonly metadata?: ObjectMeta;
	readonly spec?: ApiServiceSpec;
}
export class ApiServiceList extends KrmResource<ApiServiceListComponentInputs> implements ApiServiceListComponentOutputs {
	constructor(entity: ADKEntity, options: ApiServiceListComponentInputs | undefined) {
		super(entity, "apiregistration.k8s.io/v1", "APIServiceList", options);
	}
}
export interface ApiServiceListComponentOutputs {}
export interface ApiServiceListComponentInputs {
	readonly items?: ApiService[];
	readonly metadata?: ListMeta;
}
export interface ObjectMeta {
	readonly annotations?: { [key: string]: string };
	readonly creationTimestamp?: Date;
	readonly deletionGracePeriodSeconds?: number;
	readonly deletionTimestamp?: Date;
	readonly finalizers?: string[];
	readonly generateName?: string;
	readonly generation?: number;
	readonly labels?: { [key: string]: string };
	readonly managedFields?: ManagedFieldsEntry[];
	readonly name?: string;
	readonly namespace?: string;
	readonly ownerReferences?: OwnerReference[];
	readonly resourceVersion?: string;
	readonly selfLink?: string;
	readonly uid?: string;
}
export interface MutatingWebhook {
	readonly admissionReviewVersions?: string[];
	readonly clientConfig?: WebhookClientConfig;
	readonly failurePolicy?: string;
	readonly matchPolicy?: string;
	readonly name?: string;
	readonly namespaceSelector?: LabelSelector;
	readonly objectSelector?: LabelSelector;
	readonly reinvocationPolicy?: string;
	readonly rules?: RuleWithOperations[];
	readonly sideEffects?: string;
	readonly timeoutSeconds?: number;
}
export interface ListMeta {
	readonly continue?: string;
	readonly remainingItemCount?: number;
	readonly resourceVersion?: string;
	readonly selfLink?: string;
}
export interface ValidatingWebhook {
	readonly admissionReviewVersions?: string[];
	readonly clientConfig?: WebhookClientConfig;
	readonly failurePolicy?: string;
	readonly matchPolicy?: string;
	readonly name?: string;
	readonly namespaceSelector?: LabelSelector;
	readonly objectSelector?: LabelSelector;
	readonly rules?: RuleWithOperations[];
	readonly sideEffects?: string;
	readonly timeoutSeconds?: number;
}
export interface DaemonSetSpec {
	readonly minReadySeconds?: number;
	readonly revisionHistoryLimit?: number;
	readonly selector?: LabelSelector;
	readonly template?: PodTemplateSpec;
	readonly updateStrategy?: DaemonSetUpdateStrategy;
}
export interface DeploymentSpec {
	readonly minReadySeconds?: number;
	readonly paused?: boolean;
	readonly progressDeadlineSeconds?: number;
	readonly replicas?: number;
	readonly revisionHistoryLimit?: number;
	readonly selector?: LabelSelector;
	readonly strategy?: DeploymentStrategy;
	readonly template?: PodTemplateSpec;
}
export interface ReplicaSetSpec {
	readonly minReadySeconds?: number;
	readonly replicas?: number;
	readonly selector?: LabelSelector;
	readonly template?: PodTemplateSpec;
}
export interface StatefulSetSpec {
	readonly minReadySeconds?: number;
	readonly persistentVolumeClaimRetentionPolicy?: StatefulSetPersistentVolumeClaimRetentionPolicy;
	readonly podManagementPolicy?: string;
	readonly replicas?: number;
	readonly revisionHistoryLimit?: number;
	readonly selector?: LabelSelector;
	readonly serviceName?: string;
	readonly template?: PodTemplateSpec;
	readonly updateStrategy?: StatefulSetUpdateStrategy;
	readonly volumeClaimTemplates?: PersistentVolumeClaim[];
}
export interface TokenRequestSpec {
	readonly audiences?: string[];
	readonly boundObjectRef?: BoundObjectReference;
	readonly expirationSeconds?: number;
}
export interface TokenReviewSpec {
	readonly audiences?: string[];
	readonly token?: string;
}
export interface SubjectAccessReviewSpec {
	readonly extra?: { [key: string]: string[] };
	readonly groups?: string[];
	readonly nonResourceAttributes?: NonResourceAttributes;
	readonly resourceAttributes?: ResourceAttributes;
	readonly uid?: string;
	readonly user?: string;
}
export interface SelfSubjectAccessReviewSpec {
	readonly nonResourceAttributes?: NonResourceAttributes;
	readonly resourceAttributes?: ResourceAttributes;
}
export interface SelfSubjectRulesReviewSpec {
	readonly namespace?: string;
}
export interface HorizontalPodAutoscalerSpec {
	readonly maxReplicas?: number;
	readonly minReplicas?: number;
	readonly scaleTargetRef?: CrossVersionObjectReference;
	readonly targetCpuUtilizationPercentage?: number;
}
export interface ScaleSpec {
	readonly replicas?: number;
}
export interface HorizontalPodAutoscalerSpecV2 {
	readonly behavior?: HorizontalPodAutoscalerBehaviorV2;
	readonly maxReplicas?: number;
	readonly metrics?: MetricSpecV2[];
	readonly minReplicas?: number;
	readonly scaleTargetRef?: CrossVersionObjectReferenceV2;
}
export interface HorizontalPodAutoscalerSpecV2beta2 {
	readonly behavior?: HorizontalPodAutoscalerBehaviorV2beta2;
	readonly maxReplicas?: number;
	readonly metrics?: MetricSpecV2beta2[];
	readonly minReplicas?: number;
	readonly scaleTargetRef?: CrossVersionObjectReferenceV2beta2;
}
export interface CronJobSpec {
	readonly concurrencyPolicy?: string;
	readonly failedJobsHistoryLimit?: number;
	readonly jobTemplate?: JobTemplateSpec;
	readonly schedule?: string;
	readonly startingDeadlineSeconds?: number;
	readonly successfulJobsHistoryLimit?: number;
	readonly suspend?: boolean;
	readonly timeZone?: string;
}
export interface JobSpec {
	readonly activeDeadlineSeconds?: number;
	readonly backoffLimit?: number;
	readonly completionMode?: string;
	readonly completions?: number;
	readonly manualSelector?: boolean;
	readonly parallelism?: number;
	readonly podFailurePolicy?: PodFailurePolicy;
	readonly selector?: LabelSelector;
	readonly suspend?: boolean;
	readonly template?: PodTemplateSpec;
	readonly ttlSecondsAfterFinished?: number;
}
export interface CertificateSigningRequestSpec {
	readonly expirationSeconds?: number;
	readonly extra?: { [key: string]: string[] };
	readonly groups?: string[];
	readonly request?: string;
	readonly signerName?: string;
	readonly uid?: string;
	readonly usages?: string[];
	readonly username?: string;
}
export interface LeaseSpec {
	readonly acquireTime?: Date;
	readonly holderIdentity?: string;
	readonly leaseDurationSeconds?: number;
	readonly leaseTransitions?: number;
	readonly renewTime?: Date;
}
export interface ObjectReference {
	readonly apiVersion?: string;
	readonly fieldPath?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly namespace?: string;
	readonly resourceVersion?: string;
	readonly uid?: string;
}
export interface ComponentCondition {
	readonly error?: string;
	readonly message?: string;
	readonly status?: string;
	readonly type?: string;
}
export interface EndpointSubset {
	readonly addresses?: EndpointAddress[];
	readonly notReadyAddresses?: EndpointAddress[];
	readonly ports?: EndpointPort[];
}
export interface EventSource {
	readonly component?: string;
	readonly host?: string;
}
export interface EventSeries {
	readonly count?: number;
	readonly lastObservedTime?: Date;
}
export interface LimitRangeSpec {
	readonly limits?: LimitRangeItem[];
}
export interface NamespaceSpec {
	readonly finalizers?: string[];
}
export interface NodeSpec {
	readonly configSource?: NodeConfigSource;
	readonly externalId?: string;
	readonly podCidr?: string;
	readonly podCidRs?: string[];
	readonly providerId?: string;
	readonly taints?: Taint[];
	readonly unschedulable?: boolean;
}
export interface PersistentVolumeSpec {
	readonly accessModes?: string[];
	readonly awsElasticBlockStore?: AwsElasticBlockStoreVolumeSource;
	readonly azureDisk?: AzureDiskVolumeSource;
	readonly azureFile?: AzureFilePersistentVolumeSource;
	readonly capacity?: { [key: string]: string };
	readonly cephfs?: CephFsPersistentVolumeSource;
	readonly cinder?: CinderPersistentVolumeSource;
	readonly claimRef?: ObjectReference;
	readonly csi?: CsiPersistentVolumeSource;
	readonly fc?: FcVolumeSource;
	readonly flexVolume?: FlexPersistentVolumeSource;
	readonly flocker?: FlockerVolumeSource;
	readonly gcePersistentDisk?: GcePersistentDiskVolumeSource;
	readonly glusterfs?: GlusterfsPersistentVolumeSource;
	readonly hostPath?: HostPathVolumeSource;
	readonly iscsi?: IscsiPersistentVolumeSource;
	readonly local?: LocalVolumeSource;
	readonly mountOptions?: string[];
	readonly nfs?: NfsVolumeSource;
	readonly nodeAffinity?: VolumeNodeAffinity;
	readonly persistentVolumeReclaimPolicy?: string;
	readonly photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
	readonly portworxVolume?: PortworxVolumeSource;
	readonly quobyte?: QuobyteVolumeSource;
	readonly rbd?: RbdPersistentVolumeSource;
	readonly scaleIo?: ScaleIoPersistentVolumeSource;
	readonly storageClassName?: string;
	readonly storageos?: StorageOsPersistentVolumeSource;
	readonly volumeMode?: string;
	readonly vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
export interface PersistentVolumeClaimSpec {
	readonly accessModes?: string[];
	readonly dataSource?: TypedLocalObjectReference;
	readonly dataSourceRef?: TypedLocalObjectReference;
	readonly resources?: ResourceRequirements;
	readonly selector?: LabelSelector;
	readonly storageClassName?: string;
	readonly volumeMode?: string;
	readonly volumeName?: string;
}
export interface PodSpec {
	readonly activeDeadlineSeconds?: number;
	readonly affinity?: Affinity;
	readonly automountServiceAccountToken?: boolean;
	readonly containers?: Container[];
	readonly dnsConfig?: PodDnsConfig;
	readonly dnsPolicy?: string;
	readonly enableServiceLinks?: boolean;
	readonly ephemeralContainers?: EphemeralContainer[];
	readonly hostAliases?: HostAlias[];
	readonly hostIpc?: boolean;
	readonly hostNetwork?: boolean;
	readonly hostPid?: boolean;
	readonly hostUsers?: boolean;
	readonly hostname?: string;
	readonly imagePullSecrets?: LocalObjectReference[];
	readonly initContainers?: Container[];
	readonly nodeName?: string;
	readonly nodeSelector?: { [key: string]: string };
	readonly os?: PodOs;
	readonly overhead?: { [key: string]: string };
	readonly preemptionPolicy?: string;
	readonly priority?: number;
	readonly priorityClassName?: string;
	readonly readinessGates?: PodReadinessGate[];
	readonly restartPolicy?: string;
	readonly runtimeClassName?: string;
	readonly schedulerName?: string;
	readonly securityContext?: PodSecurityContext;
	readonly serviceAccount?: string;
	readonly serviceAccountName?: string;
	readonly setHostnameAsFqdn?: boolean;
	readonly shareProcessNamespace?: boolean;
	readonly subdomain?: string;
	readonly terminationGracePeriodSeconds?: number;
	readonly tolerations?: Toleration[];
	readonly topologySpreadConstraints?: TopologySpreadConstraint[];
	readonly volumes?: Volume[];
}
export interface PodTemplateSpec {
	readonly metadata?: ObjectMeta;
	readonly spec?: PodSpec;
}
export interface ReplicationControllerSpec {
	readonly minReadySeconds?: number;
	readonly replicas?: number;
	readonly selector?: { [key: string]: string };
	readonly template?: PodTemplateSpec;
}
export interface ResourceQuotaSpec {
	readonly hard?: { [key: string]: string };
	readonly scopeSelector?: ScopeSelector;
	readonly scopes?: string[];
}
export interface ServiceSpec {
	readonly allocateLoadBalancerNodePorts?: boolean;
	readonly clusterIp?: string;
	readonly clusterIPs?: string[];
	readonly externalIPs?: string[];
	readonly externalName?: string;
	readonly externalTrafficPolicy?: string;
	readonly healthCheckNodePort?: number;
	readonly internalTrafficPolicy?: string;
	readonly ipFamilies?: string[];
	readonly ipFamilyPolicy?: string;
	readonly loadBalancerClass?: string;
	readonly loadBalancerIp?: string;
	readonly loadBalancerSourceRanges?: string[];
	readonly ports?: ServicePort[];
	readonly publishNotReadyAddresses?: boolean;
	readonly selector?: { [key: string]: string };
	readonly sessionAffinity?: string;
	readonly sessionAffinityConfig?: SessionAffinityConfig;
	readonly type?: string;
}
export interface LocalObjectReference {
	readonly name?: string;
}
export interface Endpoint {
	readonly addresses?: string[];
	readonly conditions?: EndpointConditions;
	readonly deprecatedTopology?: { [key: string]: string };
	readonly hints?: EndpointHints;
	readonly hostname?: string;
	readonly nodeName?: string;
	readonly targetRef?: ObjectReference;
	readonly zone?: string;
}
export interface EndpointPort {
	readonly appProtocol?: string;
	readonly name?: string;
	readonly port?: number;
	readonly protocol?: string;
}
export interface FlowSchemaSpecV1beta1 {
	readonly distinguisherMethod?: FlowDistinguisherMethodV1beta1;
	readonly matchingPrecedence?: number;
	readonly priorityLevelConfiguration?: PriorityLevelConfigurationReferenceV1beta1;
	readonly rules?: PolicyRulesWithSubjectsV1beta1[];
}
export interface PriorityLevelConfigurationSpecV1beta1 {
	readonly limited?: LimitedPriorityLevelConfigurationV1beta1;
	readonly type?: string;
}
export interface FlowSchemaSpecV1beta2 {
	readonly distinguisherMethod?: FlowDistinguisherMethodV1beta2;
	readonly matchingPrecedence?: number;
	readonly priorityLevelConfiguration?: PriorityLevelConfigurationReferenceV1beta2;
	readonly rules?: PolicyRulesWithSubjectsV1beta2[];
}
export interface PriorityLevelConfigurationSpecV1beta2 {
	readonly limited?: LimitedPriorityLevelConfigurationV1beta2;
	readonly type?: string;
}
export interface IngressSpec {
	readonly defaultBackend?: IngressBackend;
	readonly ingressClassName?: string;
	readonly rules?: IngressRule[];
	readonly tls?: IngressTls[];
}
export interface IngressClassSpec {
	readonly controller?: string;
	readonly parameters?: IngressClassParametersReference;
}
export interface NetworkPolicySpec {
	readonly egress?: NetworkPolicyEgressRule[];
	readonly ingress?: NetworkPolicyIngressRule[];
	readonly podSelector?: LabelSelector;
	readonly policyTypes?: string[];
}
export interface ClusterCidrSpecV1alpha1 {
	readonly ipv4?: string;
	readonly ipv6?: string;
	readonly nodeSelector?: NodeSelector;
	readonly perNodeHostBits?: number;
}
export interface Overhead {
	readonly podFixed?: { [key: string]: string };
}
export interface Scheduling {
	readonly nodeSelector?: { [key: string]: string };
	readonly tolerations?: Toleration[];
}
export interface DeleteOptions {
	readonly apiVersion?: string;
	readonly dryRun?: string[];
	readonly gracePeriodSeconds?: number;
	readonly kind?: any;
	readonly orphanDependents?: boolean;
	readonly preconditions?: Preconditions;
	readonly propagationPolicy?: string;
}
export interface PodDisruptionBudgetSpec {
	readonly maxUnavailable?: string | number;
	readonly minAvailable?: string | number;
	readonly selector?: LabelSelector;
}
export interface AggregationRule {
	readonly clusterRoleSelectors?: LabelSelector[];
}
export interface PolicyRule {
	readonly apiGroups?: string[];
	readonly nonResourceUrLs?: string[];
	readonly resourceNames?: string[];
	readonly resources?: string[];
	readonly verbs?: string[];
}
export interface RoleRef {
	readonly apiGroup?: string;
	readonly kind?: string;
	readonly name?: string;
}
export interface Subject {
	readonly apiGroup?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly namespace?: string;
}
export interface CsiDriverSpec {
	readonly attachRequired?: boolean;
	readonly fsGroupPolicy?: string;
	readonly podInfoOnMount?: boolean;
	readonly requiresRepublish?: boolean;
	readonly seLinuxMount?: boolean;
	readonly storageCapacity?: boolean;
	readonly tokenRequests?: TokenRequest[];
	readonly volumeLifecycleModes?: string[];
}
export interface CsiNodeSpec {
	readonly drivers?: CsiNodeDriver[];
}
export interface LabelSelector {
	readonly matchExpressions?: LabelSelectorRequirement[];
	readonly matchLabels?: { [key: string]: string };
}
export interface TopologySelectorTerm {
	readonly matchLabelExpressions?: TopologySelectorLabelRequirement[];
}
export interface VolumeAttachmentSpec {
	readonly attacher?: string;
	readonly nodeName?: string;
	readonly source?: VolumeAttachmentSource;
}
export interface CustomResourceDefinitionSpec {
	readonly conversion?: CustomResourceConversion;
	readonly group?: string;
	readonly names?: CustomResourceDefinitionNames;
	readonly preserveUnknownFields?: boolean;
	readonly scope?: string;
	readonly versions?: CustomResourceDefinitionVersion[];
}
export interface StatusDetails {
	readonly causes?: StatusCause[];
	readonly group?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly retryAfterSeconds?: number;
	readonly uid?: string;
}
export interface ApiServiceSpec {
	readonly caBundle?: string;
	readonly group?: string;
	readonly groupPriorityMinimum?: number;
	readonly insecureSkipTlsVerify?: boolean;
	readonly service?: ServiceReference;
	readonly version?: string;
	readonly versionPriority?: number;
}
export interface ManagedFieldsEntry {
	readonly apiVersion?: string;
	readonly fieldsType?: string;
	readonly fieldsV1?: any;
	readonly manager?: string;
	readonly operation?: string;
	readonly subresource?: string;
	readonly time?: Date;
}
export interface OwnerReference {
	readonly apiVersion?: string;
	readonly blockOwnerDeletion?: boolean;
	readonly controller?: boolean;
	readonly kind?: string;
	readonly name?: string;
	readonly uid?: string;
}
export interface WebhookClientConfig {
	readonly caBundle?: string;
	readonly service?: ServiceReference;
	readonly url?: string;
}
export interface RuleWithOperations {
	readonly apiGroups?: string[];
	readonly apiVersions?: string[];
	readonly operations?: string[];
	readonly resources?: string[];
	readonly scope?: string;
}
export interface DaemonSetUpdateStrategy {
	readonly rollingUpdate?: RollingUpdateDaemonSet;
	readonly type?: string;
}
export interface DeploymentStrategy {
	readonly rollingUpdate?: RollingUpdateDeployment;
	readonly type?: string;
}
export interface StatefulSetPersistentVolumeClaimRetentionPolicy {
	readonly whenDeleted?: string;
	readonly whenScaled?: string;
}
export interface StatefulSetUpdateStrategy {
	readonly rollingUpdate?: RollingUpdateStatefulSetStrategy;
	readonly type?: string;
}
export interface BoundObjectReference {
	readonly apiVersion?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly uid?: string;
}
export interface NonResourceAttributes {
	readonly path?: string;
	readonly verb?: string;
}
export interface ResourceAttributes {
	readonly group?: string;
	readonly name?: string;
	readonly namespace?: string;
	readonly resource?: string;
	readonly subresource?: string;
	readonly verb?: string;
	readonly version?: string;
}
export interface CrossVersionObjectReference {
	readonly apiVersion?: string;
	readonly kind?: string;
	readonly name?: string;
}
export interface HorizontalPodAutoscalerBehaviorV2 {
	readonly scaleDown?: HpaScalingRulesV2;
	readonly scaleUp?: HpaScalingRulesV2;
}
export interface MetricSpecV2 {
	readonly containerResource?: ContainerResourceMetricSourceV2;
	readonly external?: ExternalMetricSourceV2;
	readonly object?: ObjectMetricSourceV2;
	readonly pods?: PodsMetricSourceV2;
	readonly resource?: ResourceMetricSourceV2;
	readonly type?: string;
}
export interface CrossVersionObjectReferenceV2 {
	readonly apiVersion?: string;
	readonly kind?: string;
	readonly name?: string;
}
export interface HorizontalPodAutoscalerBehaviorV2beta2 {
	readonly scaleDown?: HpaScalingRulesV2beta2;
	readonly scaleUp?: HpaScalingRulesV2beta2;
}
export interface MetricSpecV2beta2 {
	readonly containerResource?: ContainerResourceMetricSourceV2beta2;
	readonly external?: ExternalMetricSourceV2beta2;
	readonly object?: ObjectMetricSourceV2beta2;
	readonly pods?: PodsMetricSourceV2beta2;
	readonly resource?: ResourceMetricSourceV2beta2;
	readonly type?: string;
}
export interface CrossVersionObjectReferenceV2beta2 {
	readonly apiVersion?: string;
	readonly kind?: string;
	readonly name?: string;
}
export interface JobTemplateSpec {
	readonly metadata?: ObjectMeta;
	readonly spec?: JobSpec;
}
export interface PodFailurePolicy {
	readonly rules?: PodFailurePolicyRule[];
}
export interface EndpointAddress {
	readonly hostname?: string;
	readonly ip?: string;
	readonly nodeName?: string;
	readonly targetRef?: ObjectReference;
}
export interface LimitRangeItem {
	readonly default?: { [key: string]: string };
	readonly defaultRequest?: { [key: string]: string };
	readonly max?: { [key: string]: string };
	readonly maxLimitRequestRatio?: { [key: string]: string };
	readonly min?: { [key: string]: string };
	readonly type?: string;
}
export interface NodeConfigSource {
	readonly configMap?: ConfigMapNodeConfigSource;
}
export interface Taint {
	readonly effect?: string;
	readonly key?: string;
	readonly timeAdded?: Date;
	readonly value?: string;
}
export interface AwsElasticBlockStoreVolumeSource {
	readonly fsType?: string;
	readonly partition?: number;
	readonly readOnly?: boolean;
	readonly volumeId?: string;
}
export interface AzureDiskVolumeSource {
	readonly cachingMode?: string;
	readonly diskName?: string;
	readonly diskUri?: string;
	readonly fsType?: string;
	readonly kind?: string;
	readonly readOnly?: boolean;
}
export interface AzureFilePersistentVolumeSource {
	readonly readOnly?: boolean;
	readonly secretName?: string;
	readonly secretNamespace?: string;
	readonly shareName?: string;
}
export interface CephFsPersistentVolumeSource {
	readonly monitors?: string[];
	readonly path?: string;
	readonly readOnly?: boolean;
	readonly secretFile?: string;
	readonly secretRef?: SecretReference;
	readonly user?: string;
}
export interface CinderPersistentVolumeSource {
	readonly fsType?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: SecretReference;
	readonly volumeId?: string;
}
export interface CsiPersistentVolumeSource {
	readonly controllerExpandSecretRef?: SecretReference;
	readonly controllerPublishSecretRef?: SecretReference;
	readonly driver?: string;
	readonly fsType?: string;
	readonly nodeExpandSecretRef?: SecretReference;
	readonly nodePublishSecretRef?: SecretReference;
	readonly nodeStageSecretRef?: SecretReference;
	readonly readOnly?: boolean;
	readonly volumeAttributes?: { [key: string]: string };
	readonly volumeHandle?: string;
}
export interface FcVolumeSource {
	readonly fsType?: string;
	readonly lun?: number;
	readonly readOnly?: boolean;
	readonly targetWwNs?: string[];
	readonly wwids?: string[];
}
export interface FlexPersistentVolumeSource {
	readonly driver?: string;
	readonly fsType?: string;
	readonly options?: { [key: string]: string };
	readonly readOnly?: boolean;
	readonly secretRef?: SecretReference;
}
export interface FlockerVolumeSource {
	readonly datasetName?: string;
	readonly datasetUuid?: string;
}
export interface GcePersistentDiskVolumeSource {
	readonly fsType?: string;
	readonly partition?: number;
	readonly pdName?: string;
	readonly readOnly?: boolean;
}
export interface GlusterfsPersistentVolumeSource {
	readonly endpoints?: string;
	readonly endpointsNamespace?: string;
	readonly path?: string;
	readonly readOnly?: boolean;
}
export interface HostPathVolumeSource {
	readonly path?: string;
	readonly type?: string;
}
export interface IscsiPersistentVolumeSource {
	readonly chapAuthDiscovery?: boolean;
	readonly chapAuthSession?: boolean;
	readonly fsType?: string;
	readonly initiatorName?: string;
	readonly iqn?: string;
	readonly iscsiInterface?: string;
	readonly lun?: number;
	readonly portals?: string[];
	readonly readOnly?: boolean;
	readonly secretRef?: SecretReference;
	readonly targetPortal?: string;
}
export interface LocalVolumeSource {
	readonly fsType?: string;
	readonly path?: string;
}
export interface NfsVolumeSource {
	readonly path?: string;
	readonly readOnly?: boolean;
	readonly server?: string;
}
export interface VolumeNodeAffinity {
	readonly required?: NodeSelector;
}
export interface PhotonPersistentDiskVolumeSource {
	readonly fsType?: string;
	readonly pdId?: string;
}
export interface PortworxVolumeSource {
	readonly fsType?: string;
	readonly readOnly?: boolean;
	readonly volumeId?: string;
}
export interface QuobyteVolumeSource {
	readonly group?: string;
	readonly readOnly?: boolean;
	readonly registry?: string;
	readonly tenant?: string;
	readonly user?: string;
	readonly volume?: string;
}
export interface RbdPersistentVolumeSource {
	readonly fsType?: string;
	readonly image?: string;
	readonly keyring?: string;
	readonly monitors?: string[];
	readonly pool?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: SecretReference;
	readonly user?: string;
}
export interface ScaleIoPersistentVolumeSource {
	readonly fsType?: string;
	readonly gateway?: string;
	readonly protectionDomain?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: SecretReference;
	readonly sslEnabled?: boolean;
	readonly storageMode?: string;
	readonly storagePool?: string;
	readonly system?: string;
	readonly volumeName?: string;
}
export interface StorageOsPersistentVolumeSource {
	readonly fsType?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: ObjectReference;
	readonly volumeName?: string;
	readonly volumeNamespace?: string;
}
export interface VsphereVirtualDiskVolumeSource {
	readonly fsType?: string;
	readonly storagePolicyId?: string;
	readonly storagePolicyName?: string;
	readonly volumePath?: string;
}
export interface TypedLocalObjectReference {
	readonly apiGroup?: string;
	readonly kind?: string;
	readonly name?: string;
}
export interface ResourceRequirements {
	readonly limits?: { [key: string]: string };
	readonly requests?: { [key: string]: string };
}
export interface Affinity {
	readonly nodeAffinity?: NodeAffinity;
	readonly podAffinity?: PodAffinity;
	readonly podAntiAffinity?: PodAntiAffinity;
}
export interface Container {
	readonly args?: string[];
	readonly command?: string[];
	readonly env?: EnvVar[];
	readonly envFrom?: EnvFromSource[];
	readonly image?: string;
	readonly imagePullPolicy?: string;
	readonly lifecycle?: Lifecycle;
	readonly livenessProbe?: Probe;
	readonly name?: string;
	readonly ports?: ContainerPort[];
	readonly readinessProbe?: Probe;
	readonly resources?: ResourceRequirements;
	readonly securityContext?: SecurityContext;
	readonly startupProbe?: Probe;
	readonly stdin?: boolean;
	readonly stdinOnce?: boolean;
	readonly terminationMessagePath?: string;
	readonly terminationMessagePolicy?: string;
	readonly tty?: boolean;
	readonly volumeDevices?: VolumeDevice[];
	readonly volumeMounts?: VolumeMount[];
	readonly workingDir?: string;
}
export interface PodDnsConfig {
	readonly nameservers?: string[];
	readonly options?: PodDnsConfigOption[];
	readonly searches?: string[];
}
export interface EphemeralContainer {
	readonly args?: string[];
	readonly command?: string[];
	readonly env?: EnvVar[];
	readonly envFrom?: EnvFromSource[];
	readonly image?: string;
	readonly imagePullPolicy?: string;
	readonly lifecycle?: Lifecycle;
	readonly livenessProbe?: Probe;
	readonly name?: string;
	readonly ports?: ContainerPort[];
	readonly readinessProbe?: Probe;
	readonly resources?: ResourceRequirements;
	readonly securityContext?: SecurityContext;
	readonly startupProbe?: Probe;
	readonly stdin?: boolean;
	readonly stdinOnce?: boolean;
	readonly targetContainerName?: string;
	readonly terminationMessagePath?: string;
	readonly terminationMessagePolicy?: string;
	readonly tty?: boolean;
	readonly volumeDevices?: VolumeDevice[];
	readonly volumeMounts?: VolumeMount[];
	readonly workingDir?: string;
}
export interface HostAlias {
	readonly hostnames?: string[];
	readonly ip?: string;
}
export interface PodOs {
	readonly name?: string;
}
export interface PodReadinessGate {
	readonly conditionType?: string;
}
export interface PodSecurityContext {
	readonly fsGroup?: number;
	readonly fsGroupChangePolicy?: string;
	readonly runAsGroup?: number;
	readonly runAsNonRoot?: boolean;
	readonly runAsUser?: number;
	readonly seLinuxOptions?: SeLinuxOptions;
	readonly seccompProfile?: SeccompProfile;
	readonly supplementalGroups?: number[];
	readonly sysctls?: Sysctl[];
	readonly windowsOptions?: WindowsSecurityContextOptions;
}
export interface Toleration {
	readonly effect?: string;
	readonly key?: string;
	readonly operator?: string;
	readonly tolerationSeconds?: number;
	readonly value?: string;
}
export interface TopologySpreadConstraint {
	readonly labelSelector?: LabelSelector;
	readonly matchLabelKeys?: string[];
	readonly maxSkew?: number;
	readonly minDomains?: number;
	readonly nodeAffinityPolicy?: string;
	readonly nodeTaintsPolicy?: string;
	readonly topologyKey?: string;
	readonly whenUnsatisfiable?: string;
}
export interface Volume {
	readonly awsElasticBlockStore?: AwsElasticBlockStoreVolumeSource;
	readonly azureDisk?: AzureDiskVolumeSource;
	readonly azureFile?: AzureFileVolumeSource;
	readonly cephfs?: CephFsVolumeSource;
	readonly cinder?: CinderVolumeSource;
	readonly configMap?: ConfigMapVolumeSource;
	readonly csi?: CsiVolumeSource;
	readonly downwardApi?: DownwardApiVolumeSource;
	readonly emptyDir?: EmptyDirVolumeSource;
	readonly ephemeral?: EphemeralVolumeSource;
	readonly fc?: FcVolumeSource;
	readonly flexVolume?: FlexVolumeSource;
	readonly flocker?: FlockerVolumeSource;
	readonly gcePersistentDisk?: GcePersistentDiskVolumeSource;
	readonly gitRepo?: GitRepoVolumeSource;
	readonly glusterfs?: GlusterfsVolumeSource;
	readonly hostPath?: HostPathVolumeSource;
	readonly iscsi?: IscsiVolumeSource;
	readonly name?: string;
	readonly nfs?: NfsVolumeSource;
	readonly persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
	readonly photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
	readonly portworxVolume?: PortworxVolumeSource;
	readonly projected?: ProjectedVolumeSource;
	readonly quobyte?: QuobyteVolumeSource;
	readonly rbd?: RbdVolumeSource;
	readonly scaleIo?: ScaleIoVolumeSource;
	readonly secret?: SecretVolumeSource;
	readonly storageos?: StorageOsVolumeSource;
	readonly vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
export interface ScopeSelector {
	readonly matchExpressions?: ScopedResourceSelectorRequirement[];
}
export interface ServicePort {
	readonly appProtocol?: string;
	readonly name?: string;
	readonly nodePort?: number;
	readonly port?: number;
	readonly protocol?: string;
	readonly targetPort?: string | number;
}
export interface SessionAffinityConfig {
	readonly clientIp?: ClientIpConfig;
}
export interface EndpointConditions {
	readonly ready?: boolean;
	readonly serving?: boolean;
	readonly terminating?: boolean;
}
export interface EndpointHints {
	readonly forZones?: ForZone[];
}
export interface FlowDistinguisherMethodV1beta1 {
	readonly type?: string;
}
export interface PriorityLevelConfigurationReferenceV1beta1 {
	readonly name?: string;
}
export interface PolicyRulesWithSubjectsV1beta1 {
	readonly nonResourceRules?: NonResourcePolicyRuleV1beta1[];
	readonly resourceRules?: ResourcePolicyRuleV1beta1[];
	readonly subjects?: SubjectV1beta1[];
}
export interface LimitedPriorityLevelConfigurationV1beta1 {
	readonly assuredConcurrencyShares?: number;
	readonly limitResponse?: LimitResponseV1beta1;
}
export interface FlowDistinguisherMethodV1beta2 {
	readonly type?: string;
}
export interface PriorityLevelConfigurationReferenceV1beta2 {
	readonly name?: string;
}
export interface PolicyRulesWithSubjectsV1beta2 {
	readonly nonResourceRules?: NonResourcePolicyRuleV1beta2[];
	readonly resourceRules?: ResourcePolicyRuleV1beta2[];
	readonly subjects?: SubjectV1beta2[];
}
export interface LimitedPriorityLevelConfigurationV1beta2 {
	readonly assuredConcurrencyShares?: number;
	readonly limitResponse?: LimitResponseV1beta2;
}
export interface IngressBackend {
	readonly resource?: TypedLocalObjectReference;
	readonly service?: IngressServiceBackend;
}
export interface IngressRule {
	readonly host?: string;
	readonly http?: HttpIngressRuleValue;
}
export interface IngressTls {
	readonly hosts?: string[];
	readonly secretName?: string;
}
export interface IngressClassParametersReference {
	readonly apiGroup?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly namespace?: string;
	readonly scope?: string;
}
export interface NetworkPolicyEgressRule {
	readonly ports?: NetworkPolicyPort[];
	readonly to?: NetworkPolicyPeer[];
}
export interface NetworkPolicyIngressRule {
	readonly from?: NetworkPolicyPeer[];
	readonly ports?: NetworkPolicyPort[];
}
export interface NodeSelector {
	readonly nodeSelectorTerms?: NodeSelectorTerm[];
}
export interface Preconditions {
	readonly resourceVersion?: string;
	readonly uid?: string;
}
export interface CsiNodeDriver {
	readonly allocatable?: VolumeNodeResources;
	readonly name?: string;
	readonly nodeId?: string;
	readonly topologyKeys?: string[];
}
export interface LabelSelectorRequirement {
	readonly key?: string;
	readonly operator?: string;
	readonly values?: string[];
}
export interface TopologySelectorLabelRequirement {
	readonly key?: string;
	readonly values?: string[];
}
export interface VolumeAttachmentSource {
	readonly inlineVolumeSpec?: PersistentVolumeSpec;
	readonly persistentVolumeName?: string;
}
export interface CustomResourceConversion {
	readonly strategy?: string;
	readonly webhook?: WebhookConversion;
}
export interface CustomResourceDefinitionNames {
	readonly categories?: string[];
	readonly kind?: string;
	readonly listKind?: string;
	readonly plural?: string;
	readonly shortNames?: string[];
	readonly singular?: string;
}
export interface CustomResourceDefinitionVersion {
	readonly additionalPrinterColumns?: CustomResourceColumnDefinition[];
	readonly deprecated?: boolean;
	readonly deprecationWarning?: string;
	readonly name?: string;
	readonly schema?: CustomResourceValidation;
	readonly served?: boolean;
	readonly storage?: boolean;
	readonly subresources?: CustomResourceSubresources;
}
export interface StatusCause {
	readonly field?: string;
	readonly message?: string;
	readonly reason?: string;
}
export interface ServiceReference {
	readonly name?: string;
	readonly namespace?: string;
	readonly path?: string;
	readonly port?: number;
}
export interface RollingUpdateDaemonSet {
	readonly maxSurge?: string | number;
	readonly maxUnavailable?: string | number;
}
export interface RollingUpdateDeployment {
	readonly maxSurge?: string | number;
	readonly maxUnavailable?: string | number;
}
export interface RollingUpdateStatefulSetStrategy {
	readonly maxUnavailable?: string | number;
	readonly partition?: number;
}
export interface HpaScalingRulesV2 {
	readonly policies?: HpaScalingPolicyV2[];
	readonly selectPolicy?: string;
	readonly stabilizationWindowSeconds?: number;
}
export interface ContainerResourceMetricSourceV2 {
	readonly container?: string;
	readonly name?: string;
	readonly target?: MetricTargetV2;
}
export interface ExternalMetricSourceV2 {
	readonly metric?: MetricIdentifierV2;
	readonly target?: MetricTargetV2;
}
export interface ObjectMetricSourceV2 {
	readonly describedObject?: CrossVersionObjectReferenceV2;
	readonly metric?: MetricIdentifierV2;
	readonly target?: MetricTargetV2;
}
export interface PodsMetricSourceV2 {
	readonly metric?: MetricIdentifierV2;
	readonly target?: MetricTargetV2;
}
export interface ResourceMetricSourceV2 {
	readonly name?: string;
	readonly target?: MetricTargetV2;
}
export interface HpaScalingRulesV2beta2 {
	readonly policies?: HpaScalingPolicyV2beta2[];
	readonly selectPolicy?: string;
	readonly stabilizationWindowSeconds?: number;
}
export interface ContainerResourceMetricSourceV2beta2 {
	readonly container?: string;
	readonly name?: string;
	readonly target?: MetricTargetV2beta2;
}
export interface ExternalMetricSourceV2beta2 {
	readonly metric?: MetricIdentifierV2beta2;
	readonly target?: MetricTargetV2beta2;
}
export interface ObjectMetricSourceV2beta2 {
	readonly describedObject?: CrossVersionObjectReferenceV2beta2;
	readonly metric?: MetricIdentifierV2beta2;
	readonly target?: MetricTargetV2beta2;
}
export interface PodsMetricSourceV2beta2 {
	readonly metric?: MetricIdentifierV2beta2;
	readonly target?: MetricTargetV2beta2;
}
export interface ResourceMetricSourceV2beta2 {
	readonly name?: string;
	readonly target?: MetricTargetV2beta2;
}
export interface PodFailurePolicyRule {
	readonly action?: string;
	readonly onExitCodes?: PodFailurePolicyOnExitCodesRequirement;
	readonly onPodConditions?: PodFailurePolicyOnPodConditionsPattern[];
}
export interface ConfigMapNodeConfigSource {
	readonly kubeletConfigKey?: string;
	readonly name?: string;
	readonly namespace?: string;
	readonly resourceVersion?: string;
	readonly uid?: string;
}
export interface SecretReference {
	readonly name?: string;
	readonly namespace?: string;
}
export interface NodeAffinity {
	readonly preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
	readonly requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
export interface PodAffinity {
	readonly preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
	readonly requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface PodAntiAffinity {
	readonly preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
	readonly requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface EnvVar {
	readonly name?: string;
	readonly value?: string;
	readonly valueFrom?: EnvVarSource;
}
export interface EnvFromSource {
	readonly configMapRef?: ConfigMapEnvSource;
	readonly prefix?: string;
	readonly secretRef?: SecretEnvSource;
}
export interface Lifecycle {
	readonly postStart?: LifecycleHandler;
	readonly preStop?: LifecycleHandler;
}
export interface Probe {
	readonly exec?: ExecAction;
	readonly failureThreshold?: number;
	readonly grpc?: GrpcAction;
	readonly httpGet?: HttpGetAction;
	readonly initialDelaySeconds?: number;
	readonly periodSeconds?: number;
	readonly successThreshold?: number;
	readonly tcpSocket?: TcpSocketAction;
	readonly terminationGracePeriodSeconds?: number;
	readonly timeoutSeconds?: number;
}
export interface ContainerPort {
	readonly containerPort?: number;
	readonly hostIp?: string;
	readonly hostPort?: number;
	readonly name?: string;
	readonly protocol?: string;
}
export interface SecurityContext {
	readonly allowPrivilegeEscalation?: boolean;
	readonly capabilities?: Capabilities;
	readonly privileged?: boolean;
	readonly procMount?: string;
	readonly readOnlyRootFilesystem?: boolean;
	readonly runAsGroup?: number;
	readonly runAsNonRoot?: boolean;
	readonly runAsUser?: number;
	readonly seLinuxOptions?: SeLinuxOptions;
	readonly seccompProfile?: SeccompProfile;
	readonly windowsOptions?: WindowsSecurityContextOptions;
}
export interface VolumeDevice {
	readonly devicePath?: string;
	readonly name?: string;
}
export interface VolumeMount {
	readonly mountPath?: string;
	readonly mountPropagation?: string;
	readonly name?: string;
	readonly readOnly?: boolean;
	readonly subPath?: string;
	readonly subPathExpr?: string;
}
export interface PodDnsConfigOption {
	readonly name?: string;
	readonly value?: string;
}
export interface SeLinuxOptions {
	readonly level?: string;
	readonly role?: string;
	readonly type?: string;
	readonly user?: string;
}
export interface SeccompProfile {
	readonly localhostProfile?: string;
	readonly type?: string;
}
export interface Sysctl {
	readonly name?: string;
	readonly value?: string;
}
export interface WindowsSecurityContextOptions {
	readonly gmsaCredentialSpec?: string;
	readonly gmsaCredentialSpecName?: string;
	readonly hostProcess?: boolean;
	readonly runAsUserName?: string;
}
export interface AzureFileVolumeSource {
	readonly readOnly?: boolean;
	readonly secretName?: string;
	readonly shareName?: string;
}
export interface CephFsVolumeSource {
	readonly monitors?: string[];
	readonly path?: string;
	readonly readOnly?: boolean;
	readonly secretFile?: string;
	readonly secretRef?: LocalObjectReference;
	readonly user?: string;
}
export interface CinderVolumeSource {
	readonly fsType?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: LocalObjectReference;
	readonly volumeId?: string;
}
export interface ConfigMapVolumeSource {
	readonly defaultMode?: number;
	readonly items?: KeyToPath[];
	readonly name?: string;
	readonly optional?: boolean;
}
export interface CsiVolumeSource {
	readonly driver?: string;
	readonly fsType?: string;
	readonly nodePublishSecretRef?: LocalObjectReference;
	readonly readOnly?: boolean;
	readonly volumeAttributes?: { [key: string]: string };
}
export interface DownwardApiVolumeSource {
	readonly defaultMode?: number;
	readonly items?: DownwardApiVolumeFile[];
}
export interface EmptyDirVolumeSource {
	readonly medium?: string;
	readonly sizeLimit?: string;
}
export interface EphemeralVolumeSource {
	readonly volumeClaimTemplate?: PersistentVolumeClaimTemplate;
}
export interface FlexVolumeSource {
	readonly driver?: string;
	readonly fsType?: string;
	readonly options?: { [key: string]: string };
	readonly readOnly?: boolean;
	readonly secretRef?: LocalObjectReference;
}
export interface GitRepoVolumeSource {
	readonly directory?: string;
	readonly repository?: string;
	readonly revision?: string;
}
export interface GlusterfsVolumeSource {
	readonly endpoints?: string;
	readonly path?: string;
	readonly readOnly?: boolean;
}
export interface IscsiVolumeSource {
	readonly chapAuthDiscovery?: boolean;
	readonly chapAuthSession?: boolean;
	readonly fsType?: string;
	readonly initiatorName?: string;
	readonly iqn?: string;
	readonly iscsiInterface?: string;
	readonly lun?: number;
	readonly portals?: string[];
	readonly readOnly?: boolean;
	readonly secretRef?: LocalObjectReference;
	readonly targetPortal?: string;
}
export interface PersistentVolumeClaimVolumeSource {
	readonly claimName?: string;
	readonly readOnly?: boolean;
}
export interface ProjectedVolumeSource {
	readonly defaultMode?: number;
	readonly sources?: VolumeProjection[];
}
export interface RbdVolumeSource {
	readonly fsType?: string;
	readonly image?: string;
	readonly keyring?: string;
	readonly monitors?: string[];
	readonly pool?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: LocalObjectReference;
	readonly user?: string;
}
export interface ScaleIoVolumeSource {
	readonly fsType?: string;
	readonly gateway?: string;
	readonly protectionDomain?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: LocalObjectReference;
	readonly sslEnabled?: boolean;
	readonly storageMode?: string;
	readonly storagePool?: string;
	readonly system?: string;
	readonly volumeName?: string;
}
export interface SecretVolumeSource {
	readonly defaultMode?: number;
	readonly items?: KeyToPath[];
	readonly optional?: boolean;
	readonly secretName?: string;
}
export interface StorageOsVolumeSource {
	readonly fsType?: string;
	readonly readOnly?: boolean;
	readonly secretRef?: LocalObjectReference;
	readonly volumeName?: string;
	readonly volumeNamespace?: string;
}
export interface ScopedResourceSelectorRequirement {
	readonly operator?: string;
	readonly scopeName?: string;
	readonly values?: string[];
}
export interface ClientIpConfig {
	readonly timeoutSeconds?: number;
}
export interface ForZone {
	readonly name?: string;
}
export interface NonResourcePolicyRuleV1beta1 {
	readonly nonResourceUrLs?: string[];
	readonly verbs?: string[];
}
export interface ResourcePolicyRuleV1beta1 {
	readonly apiGroups?: string[];
	readonly clusterScope?: boolean;
	readonly namespaces?: string[];
	readonly resources?: string[];
	readonly verbs?: string[];
}
export interface SubjectV1beta1 {
	readonly group?: GroupSubjectV1beta1;
	readonly kind?: string;
	readonly serviceAccount?: ServiceAccountSubjectV1beta1;
	readonly user?: UserSubjectV1beta1;
}
export interface LimitResponseV1beta1 {
	readonly queuing?: QueuingConfigurationV1beta1;
	readonly type?: string;
}
export interface NonResourcePolicyRuleV1beta2 {
	readonly nonResourceUrLs?: string[];
	readonly verbs?: string[];
}
export interface ResourcePolicyRuleV1beta2 {
	readonly apiGroups?: string[];
	readonly clusterScope?: boolean;
	readonly namespaces?: string[];
	readonly resources?: string[];
	readonly verbs?: string[];
}
export interface SubjectV1beta2 {
	readonly group?: GroupSubjectV1beta2;
	readonly kind?: string;
	readonly serviceAccount?: ServiceAccountSubjectV1beta2;
	readonly user?: UserSubjectV1beta2;
}
export interface LimitResponseV1beta2 {
	readonly queuing?: QueuingConfigurationV1beta2;
	readonly type?: string;
}
export interface IngressServiceBackend {
	readonly name?: string;
	readonly port?: ServiceBackendPort;
}
export interface HttpIngressRuleValue {
	readonly paths?: HttpIngressPath[];
}
export interface NetworkPolicyPort {
	readonly endPort?: number;
	readonly port?: string | number;
	readonly protocol?: string;
}
export interface NetworkPolicyPeer {
	readonly ipBlock?: IpBlock;
	readonly namespaceSelector?: LabelSelector;
	readonly podSelector?: LabelSelector;
}
export interface NodeSelectorTerm {
	readonly matchExpressions?: NodeSelectorRequirement[];
	readonly matchFields?: NodeSelectorRequirement[];
}
export interface VolumeNodeResources {
	readonly count?: number;
}
export interface WebhookConversion {
	readonly clientConfig?: WebhookClientConfig;
	readonly conversionReviewVersions?: string[];
}
export interface CustomResourceColumnDefinition {
	readonly description?: string;
	readonly format?: string;
	readonly jsonPath?: string;
	readonly name?: string;
	readonly priority?: number;
	readonly type?: string;
}
export interface CustomResourceValidation {
	readonly openApiv3Schema?: JsonSchemaProps;
}
export interface CustomResourceSubresources {
	readonly scale?: CustomResourceSubresourceScale;
	readonly status?: any;
}
export interface HpaScalingPolicyV2 {
	readonly periodSeconds?: number;
	readonly type?: string;
	readonly value?: number;
}
export interface MetricTargetV2 {
	readonly averageUtilization?: number;
	readonly averageValue?: string;
	readonly type?: string;
	readonly value?: string;
}
export interface MetricIdentifierV2 {
	readonly name?: string;
	readonly selector?: LabelSelector;
}
export interface HpaScalingPolicyV2beta2 {
	readonly periodSeconds?: number;
	readonly type?: string;
	readonly value?: number;
}
export interface MetricTargetV2beta2 {
	readonly averageUtilization?: number;
	readonly averageValue?: string;
	readonly type?: string;
	readonly value?: string;
}
export interface MetricIdentifierV2beta2 {
	readonly name?: string;
	readonly selector?: LabelSelector;
}
export interface PodFailurePolicyOnExitCodesRequirement {
	readonly containerName?: string;
	readonly operator?: string;
	readonly values?: number[];
}
export interface PodFailurePolicyOnPodConditionsPattern {
	readonly status?: string;
	readonly type?: string;
}
export interface PreferredSchedulingTerm {
	readonly preference?: NodeSelectorTerm;
	readonly weight?: number;
}
export interface WeightedPodAffinityTerm {
	readonly podAffinityTerm?: PodAffinityTerm;
	readonly weight?: number;
}
export interface PodAffinityTerm {
	readonly labelSelector?: LabelSelector;
	readonly namespaceSelector?: LabelSelector;
	readonly namespaces?: string[];
	readonly topologyKey?: string;
}
export interface EnvVarSource {
	readonly configMapKeyRef?: ConfigMapKeySelector;
	readonly fieldRef?: ObjectFieldSelector;
	readonly resourceFieldRef?: ResourceFieldSelector;
	readonly secretKeyRef?: SecretKeySelector;
}
export interface ConfigMapEnvSource {
	readonly name?: string;
	readonly optional?: boolean;
}
export interface SecretEnvSource {
	readonly name?: string;
	readonly optional?: boolean;
}
export interface LifecycleHandler {
	readonly exec?: ExecAction;
	readonly httpGet?: HttpGetAction;
	readonly tcpSocket?: TcpSocketAction;
}
export interface ExecAction {
	readonly command?: string[];
}
export interface GrpcAction {
	readonly port?: number;
	readonly service?: string;
}
export interface HttpGetAction {
	readonly host?: string;
	readonly httpHeaders?: HttpHeader[];
	readonly path?: string;
	readonly port?: string | number;
	readonly scheme?: string;
}
export interface TcpSocketAction {
	readonly host?: string;
	readonly port?: string | number;
}
export interface Capabilities {
	readonly add?: string[];
	readonly drop?: string[];
}
export interface KeyToPath {
	readonly key?: string;
	readonly mode?: number;
	readonly path?: string;
}
export interface DownwardApiVolumeFile {
	readonly fieldRef?: ObjectFieldSelector;
	readonly mode?: number;
	readonly path?: string;
	readonly resourceFieldRef?: ResourceFieldSelector;
}
export interface PersistentVolumeClaimTemplate {
	readonly metadata?: ObjectMeta;
	readonly spec?: PersistentVolumeClaimSpec;
}
export interface VolumeProjection {
	readonly configMap?: ConfigMapProjection;
	readonly downwardApi?: DownwardApiProjection;
	readonly secret?: SecretProjection;
	readonly serviceAccountToken?: ServiceAccountTokenProjection;
}
export interface GroupSubjectV1beta1 {
	readonly name?: string;
}
export interface ServiceAccountSubjectV1beta1 {
	readonly name?: string;
	readonly namespace?: string;
}
export interface UserSubjectV1beta1 {
	readonly name?: string;
}
export interface QueuingConfigurationV1beta1 {
	readonly handSize?: number;
	readonly queueLengthLimit?: number;
	readonly queues?: number;
}
export interface GroupSubjectV1beta2 {
	readonly name?: string;
}
export interface ServiceAccountSubjectV1beta2 {
	readonly name?: string;
	readonly namespace?: string;
}
export interface UserSubjectV1beta2 {
	readonly name?: string;
}
export interface QueuingConfigurationV1beta2 {
	readonly handSize?: number;
	readonly queueLengthLimit?: number;
	readonly queues?: number;
}
export interface ServiceBackendPort {
	readonly name?: string;
	readonly number?: number;
}
export interface HttpIngressPath {
	readonly backend?: IngressBackend;
	readonly path?: string;
	readonly pathType?: string;
}
export interface IpBlock {
	readonly cidr?: string;
	readonly except?: string[];
}
export interface NodeSelectorRequirement {
	readonly key?: string;
	readonly operator?: string;
	readonly values?: string[];
}
export interface JsonSchemaProps {
	readonly ref?: string;
	readonly schema?: string;
	readonly additionalItems?: any;
	readonly additionalProperties?: any;
	readonly allOf?: JsonSchemaProps[];
	readonly anyOf?: JsonSchemaProps[];
	readonly default?: any;
	readonly definitions?: { [key: string]: JsonSchemaProps };
	readonly dependencies?: { [key: string]: any };
	readonly description?: string;
	readonly enum?: any[];
	readonly example?: any;
	readonly exclusiveMaximum?: boolean;
	readonly exclusiveMinimum?: boolean;
	readonly externalDocs?: ExternalDocumentation;
	readonly format?: string;
	readonly id?: string;
	readonly items?: any;
	readonly maxItems?: number;
	readonly maxLength?: number;
	readonly maxProperties?: number;
	readonly maximum?: number;
	readonly minItems?: number;
	readonly minLength?: number;
	readonly minProperties?: number;
	readonly minimum?: number;
	readonly multipleOf?: number;
	readonly not?: JsonSchemaProps;
	readonly nullable?: boolean;
	readonly oneOf?: JsonSchemaProps[];
	readonly pattern?: string;
	readonly patternProperties?: { [key: string]: JsonSchemaProps };
	readonly properties?: { [key: string]: JsonSchemaProps };
	readonly required?: string[];
	readonly title?: string;
	readonly type?: string;
	readonly uniqueItems?: boolean;
	readonly xKubernetesEmbeddedResource?: boolean;
	readonly xKubernetesIntOrString?: boolean;
	readonly xKubernetesListMapKeys?: string[];
	readonly xKubernetesListType?: string;
	readonly xKubernetesMapType?: string;
	readonly xKubernetesPreserveUnknownFields?: boolean;
	readonly xKubernetesValidations?: ValidationRule[];
}
export interface CustomResourceSubresourceScale {
	readonly labelSelectorPath?: string;
	readonly specReplicasPath?: string;
	readonly statusReplicasPath?: string;
}
export interface ConfigMapKeySelector {
	readonly key?: string;
	readonly name?: string;
	readonly optional?: boolean;
}
export interface ObjectFieldSelector {
	readonly apiVersion?: string;
	readonly fieldPath?: string;
}
export interface ResourceFieldSelector {
	readonly containerName?: string;
	readonly divisor?: string;
	readonly resource?: string;
}
export interface SecretKeySelector {
	readonly key?: string;
	readonly name?: string;
	readonly optional?: boolean;
}
export interface HttpHeader {
	readonly name?: string;
	readonly value?: string;
}
export interface ConfigMapProjection {
	readonly items?: KeyToPath[];
	readonly name?: string;
	readonly optional?: boolean;
}
export interface DownwardApiProjection {
	readonly items?: DownwardApiVolumeFile[];
}
export interface SecretProjection {
	readonly items?: KeyToPath[];
	readonly name?: string;
	readonly optional?: boolean;
}
export interface ServiceAccountTokenProjection {
	readonly audience?: string;
	readonly expirationSeconds?: number;
	readonly path?: string;
}
export interface ExternalDocumentation {
	readonly description?: string;
	readonly url?: string;
}
export interface ValidationRule {
	readonly message?: string;
	readonly rule?: string;
}
export default {
	MutatingWebhookConfiguration: MutatingWebhookConfiguration,
	MutatingWebhookConfigurationList: MutatingWebhookConfigurationList,
	ValidatingWebhookConfiguration: ValidatingWebhookConfiguration,
	ValidatingWebhookConfigurationList: ValidatingWebhookConfigurationList,
	StorageVersionV1alpha1: StorageVersionV1alpha1,
	StorageVersionListV1alpha1: StorageVersionListV1alpha1,
	ControllerRevision: ControllerRevision,
	ControllerRevisionList: ControllerRevisionList,
	DaemonSet: DaemonSet,
	DaemonSetList: DaemonSetList,
	Deployment: Deployment,
	DeploymentList: DeploymentList,
	ReplicaSet: ReplicaSet,
	ReplicaSetList: ReplicaSetList,
	StatefulSet: StatefulSet,
	StatefulSetList: StatefulSetList,
	TokenRequest: TokenRequest,
	TokenReview: TokenReview,
	LocalSubjectAccessReview: LocalSubjectAccessReview,
	SelfSubjectAccessReview: SelfSubjectAccessReview,
	SelfSubjectRulesReview: SelfSubjectRulesReview,
	SubjectAccessReview: SubjectAccessReview,
	HorizontalPodAutoscaler: HorizontalPodAutoscaler,
	HorizontalPodAutoscalerList: HorizontalPodAutoscalerList,
	Scale: Scale,
	HorizontalPodAutoscalerV2: HorizontalPodAutoscalerV2,
	HorizontalPodAutoscalerListV2: HorizontalPodAutoscalerListV2,
	HorizontalPodAutoscalerV2beta2: HorizontalPodAutoscalerV2beta2,
	HorizontalPodAutoscalerListV2beta2: HorizontalPodAutoscalerListV2beta2,
	CronJob: CronJob,
	CronJobList: CronJobList,
	Job: Job,
	JobList: JobList,
	CertificateSigningRequest: CertificateSigningRequest,
	CertificateSigningRequestList: CertificateSigningRequestList,
	Lease: Lease,
	LeaseList: LeaseList,
	Binding: Binding,
	ComponentStatus: ComponentStatus,
	ComponentStatusList: ComponentStatusList,
	ConfigMap: ConfigMap,
	ConfigMapList: ConfigMapList,
	Endpoints: Endpoints,
	EndpointsList: EndpointsList,
	Event: Event,
	EventList: EventList,
	LimitRange: LimitRange,
	LimitRangeList: LimitRangeList,
	Namespace: Namespace,
	NamespaceList: NamespaceList,
	Node: Node,
	NodeList: NodeList,
	PersistentVolume: PersistentVolume,
	PersistentVolumeClaim: PersistentVolumeClaim,
	PersistentVolumeClaimList: PersistentVolumeClaimList,
	PersistentVolumeList: PersistentVolumeList,
	Pod: Pod,
	PodList: PodList,
	PodTemplate: PodTemplate,
	PodTemplateList: PodTemplateList,
	ReplicationController: ReplicationController,
	ReplicationControllerList: ReplicationControllerList,
	ResourceQuota: ResourceQuota,
	ResourceQuotaList: ResourceQuotaList,
	Secret: Secret,
	SecretList: SecretList,
	Service: Service,
	ServiceAccount: ServiceAccount,
	ServiceAccountList: ServiceAccountList,
	ServiceList: ServiceList,
	EndpointSlice: EndpointSlice,
	EndpointSliceList: EndpointSliceList,
	FlowSchemaV1beta1: FlowSchemaV1beta1,
	FlowSchemaListV1beta1: FlowSchemaListV1beta1,
	PriorityLevelConfigurationV1beta1: PriorityLevelConfigurationV1beta1,
	PriorityLevelConfigurationListV1beta1: PriorityLevelConfigurationListV1beta1,
	FlowSchemaV1beta2: FlowSchemaV1beta2,
	FlowSchemaListV1beta2: FlowSchemaListV1beta2,
	PriorityLevelConfigurationV1beta2: PriorityLevelConfigurationV1beta2,
	PriorityLevelConfigurationListV1beta2: PriorityLevelConfigurationListV1beta2,
	Ingress: Ingress,
	IngressClass: IngressClass,
	IngressClassList: IngressClassList,
	IngressList: IngressList,
	NetworkPolicy: NetworkPolicy,
	NetworkPolicyList: NetworkPolicyList,
	ClusterCidrv1alpha1: ClusterCidrv1alpha1,
	ClusterCidrListV1alpha1: ClusterCidrListV1alpha1,
	RuntimeClass: RuntimeClass,
	RuntimeClassList: RuntimeClassList,
	Eviction: Eviction,
	PodDisruptionBudget: PodDisruptionBudget,
	PodDisruptionBudgetList: PodDisruptionBudgetList,
	ClusterRole: ClusterRole,
	ClusterRoleBinding: ClusterRoleBinding,
	ClusterRoleBindingList: ClusterRoleBindingList,
	ClusterRoleList: ClusterRoleList,
	Role: Role,
	RoleBinding: RoleBinding,
	RoleBindingList: RoleBindingList,
	RoleList: RoleList,
	PriorityClass: PriorityClass,
	PriorityClassList: PriorityClassList,
	CsiDriver: CsiDriver,
	CsiDriverList: CsiDriverList,
	CsiNode: CsiNode,
	CsiNodeList: CsiNodeList,
	CsiStorageCapacity: CsiStorageCapacity,
	CsiStorageCapacityList: CsiStorageCapacityList,
	StorageClass: StorageClass,
	StorageClassList: StorageClassList,
	VolumeAttachment: VolumeAttachment,
	VolumeAttachmentList: VolumeAttachmentList,
	CsiStorageCapacityV1beta1: CsiStorageCapacityV1beta1,
	CsiStorageCapacityListV1beta1: CsiStorageCapacityListV1beta1,
	CustomResourceDefinition: CustomResourceDefinition,
	CustomResourceDefinitionList: CustomResourceDefinitionList,
	Status: Status,
	ApiService: ApiService,
	ApiServiceList: ApiServiceList,
};
