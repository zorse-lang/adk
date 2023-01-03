import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Binding extends RosResource<BindingComponentInputs> implements BindingComponentOutputs {
	constructor(entity: ADKEntity, options: BindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::AMQP::Binding", options);
	}
}
export interface BindingComponentOutputs {}
export interface BindingComponentInputs {
	readonly Argument: string;
	readonly BindingKey: string;
	readonly BindingType: string;
	readonly DestinationName: string;
	readonly InstanceId: string;
	readonly SourceExchange: string;
	readonly VirtualHost: string;
	readonly LogicalId: string;
}
export class Exchange extends RosResource<ExchangeComponentInputs> implements ExchangeComponentOutputs {
	constructor(entity: ADKEntity, options: ExchangeComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::AMQP::Exchange", options);
	}
}
export interface ExchangeComponentOutputs {}
export interface ExchangeComponentInputs {
	readonly AutoDeleteState: boolean;
	readonly ExchangeName: any | string;
	readonly ExchangeType: string;
	readonly InstanceId: string;
	readonly Internal: boolean;
	readonly VirtualHost: string;
	readonly AlternateExchange?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::AMQP::Instance", options);
	}
	public readonly InstanceId: any;
}
export interface InstanceComponentOutputs {
	readonly InstanceId: any;
}
export interface InstanceComponentInputs {
	readonly InstanceType: string;
	readonly MaxTps: number;
	readonly QueueCapacity: number;
	readonly StorageSize: number;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly MaxEipTps?: (number | undefined) | undefined;
	readonly OrderNum?: (number | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly SupportEip?: (string | undefined) | undefined;
	readonly SupportTracing?: (string | undefined) | undefined;
	readonly TracingStorageTime?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class Queue extends RosResource<QueueComponentInputs> implements QueueComponentOutputs {
	constructor(entity: ADKEntity, options: QueueComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::AMQP::Queue", options);
	}
}
export interface QueueComponentOutputs {}
export interface QueueComponentInputs {
	readonly InstanceId: string;
	readonly QueueName: any | string;
	readonly VirtualHost: string;
	readonly AutoDeleteState?: (boolean | undefined) | undefined;
	readonly AutoExpireState?: (number | undefined) | undefined;
	readonly DeadLetterExchange?: (string | undefined) | undefined;
	readonly DeadLetterRoutingKey?: (string | undefined) | undefined;
	readonly ExclusiveState?: (boolean | undefined) | undefined;
	readonly MaximumPriority?: (number | undefined) | undefined;
	readonly MaxLength?: (number | undefined) | undefined;
	readonly MessageTTL?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class VirtualHost extends RosResource<VirtualHostComponentInputs> implements VirtualHostComponentOutputs {
	constructor(entity: ADKEntity, options: VirtualHostComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::AMQP::VirtualHost", options);
	}
}
export interface VirtualHostComponentOutputs {}
export interface VirtualHostComponentInputs {
	readonly InstanceId: string;
	readonly VirtualHost: any | string;
	readonly LogicalId: string;
}
export default {
	Binding: Binding,
	Exchange: Exchange,
	Instance: Instance,
	Queue: Queue,
	VirtualHost: VirtualHost,
};
