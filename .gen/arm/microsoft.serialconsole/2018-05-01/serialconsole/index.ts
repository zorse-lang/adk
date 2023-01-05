import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class serialPorts extends ArmResource<serialPortsComponentInputs> implements serialPortsComponentOutputs {
	constructor(entity: ADKEntity, options: serialPortsComponentInputs) {
		super(entity, options.name, "Microsoft.SerialConsole/serialPorts", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.SerialConsole/serialPorts";
}
export interface serialPortsComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.SerialConsole/serialPorts";
}
export interface serialPortsComponentInputs {
	readonly name: string;
	readonly properties?: SerialPortProperties;
}
export interface SerialPortProperties {
	readonly state?: "disabled";
}
export default {
	serialPorts: serialPorts,
};
