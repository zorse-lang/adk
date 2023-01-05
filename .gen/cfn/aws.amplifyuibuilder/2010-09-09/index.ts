import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Component extends CfnResource<ComponentComponentInputs> implements ComponentComponentOutputs {
	constructor(entity: ADKEntity, options: ComponentComponentInputs) {
		super(entity, options.LogicalId, "AWS::AmplifyUIBuilder::Component", options);
	}
	public readonly AppId: string;
	public readonly EnvironmentName: string;
	public readonly Id: string;
}
export interface ComponentComponentOutputs {
	readonly AppId: string;
	readonly EnvironmentName: string;
	readonly Id: string;
}
export interface ComponentComponentInputs {
	readonly BindingProperties: { [key: string]: ComponentBindingPropertiesValue };
	readonly ComponentType: string;
	readonly Name: string;
	readonly Overrides: any;
	readonly Properties: { [key: string]: Component };
	readonly Variants: ComponentVariant[];
	readonly Children?: ComponentChild[] | undefined;
	readonly CollectionProperties?: { [key: string]: ComponentDataConfiguration } | undefined;
	readonly Events?: { [key: string]: ComponentEvent } | undefined;
	readonly SchemaVersion?: string | undefined;
	readonly SourceId?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class Form extends CfnResource<FormComponentInputs> implements FormComponentOutputs {
	constructor(entity: ADKEntity, options: FormComponentInputs) {
		super(entity, options.LogicalId, "AWS::AmplifyUIBuilder::Form", options);
	}
	public readonly Id: string;
}
export interface FormComponentOutputs {
	readonly Id: string;
}
export interface FormComponentInputs {
	readonly DataType: FormDataTypeConfig;
	readonly Fields: { [key: string]: FieldConfig };
	readonly FormActionType: string;
	readonly Name: string;
	readonly SchemaVersion: string;
	readonly SectionalElements: { [key: string]: SectionalElement };
	readonly Style: FormStyle;
	readonly AppId?: string | undefined;
	readonly Cta?: FormCTA | undefined;
	readonly EnvironmentName?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class Theme extends CfnResource<ThemeComponentInputs> implements ThemeComponentOutputs {
	constructor(entity: ADKEntity, options: ThemeComponentInputs) {
		super(entity, options.LogicalId, "AWS::AmplifyUIBuilder::Theme", options);
	}
	public readonly AppId: string;
	public readonly CreatedAt: string;
	public readonly EnvironmentName: string;
	public readonly Id: string;
	public readonly ModifiedAt: string;
}
export interface ThemeComponentOutputs {
	readonly AppId: string;
	readonly CreatedAt: string;
	readonly EnvironmentName: string;
	readonly Id: string;
	readonly ModifiedAt: string;
}
export interface ThemeComponentInputs {
	readonly Name: string;
	readonly Values: ThemeValues[];
	readonly Overrides?: ThemeValues[] | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export interface ActionParameters {
	readonly Anchor?: Component | undefined;
	readonly Fields?: { [key: string]: Component } | undefined;
	readonly Global?: Component | undefined;
	readonly Id?: Component | undefined;
	readonly Model?: string | undefined;
	readonly State?: MutationActionSetStateParameter | undefined;
	readonly Target?: Component | undefined;
	readonly Type?: Component | undefined;
	readonly Url?: Component | undefined;
}
export interface ComponentBindingPropertiesValue {
	readonly BindingProperties?: ComponentBindingPropertiesValueProperties | undefined;
	readonly DefaultValue?: string | undefined;
	readonly Type?: string | undefined;
}
export interface ComponentBindingPropertiesValueProperties {
	readonly Bucket?: string | undefined;
	readonly DefaultValue?: string | undefined;
	readonly Field?: string | undefined;
	readonly Key?: string | undefined;
	readonly Model?: string | undefined;
	readonly Predicates?: Predicate[] | undefined;
	readonly UserAttribute?: string | undefined;
}
export interface ComponentChild {
	readonly Children?: ComponentChild[] | undefined;
	readonly ComponentType: string;
	readonly Events?: { [key: string]: ComponentEvent } | undefined;
	readonly Name: string;
	readonly Properties: { [key: string]: Component };
}
export interface ComponentCondition {
	readonly Else?: Component | undefined;
	readonly Field?: string | undefined;
	readonly Operand?: string | undefined;
	readonly OperandType?: string | undefined;
	readonly Operator?: string | undefined;
	readonly Property?: string | undefined;
	readonly Then?: Component | undefined;
}
export interface ComponentDataConfiguration {
	readonly Identifiers?: string[] | undefined;
	readonly Model: string;
	readonly Predicate?: Predicate | undefined;
	readonly Sort?: Sort[] | undefined;
}
export interface ComponentEvent {
	readonly Action?: string | undefined;
	readonly Parameters?: ActionParameters | undefined;
}
export interface Component {
	readonly BindingProperties?: ComponentPropertyBindingProperties | undefined;
	readonly Bindings?: { [key: string]: FormBindingElement } | undefined;
	readonly CollectionBindingProperties?: ComponentPropertyBindingProperties | undefined;
	readonly ComponentName?: string | undefined;
	readonly Concat?: Component[] | undefined;
	readonly Condition?: ComponentCondition | undefined;
	readonly Configured?: boolean | undefined;
	readonly DefaultValue?: string | undefined;
	readonly Event?: string | undefined;
	readonly ImportedValue?: string | undefined;
	readonly Model?: string | undefined;
	readonly Property?: string | undefined;
	readonly Type?: string | undefined;
	readonly UserAttribute?: string | undefined;
	readonly Value?: string | undefined;
}
export interface ComponentPropertyBindingProperties {
	readonly Field?: string | undefined;
	readonly Property: string;
}
export interface ComponentVariant {
	readonly Overrides?: any | undefined;
	readonly VariantValues?: { [key: string]: string } | undefined;
}
export interface FormBindingElement {
	readonly Element: string;
	readonly Property: string;
}
export interface MutationActionSetStateParameter {
	readonly ComponentName: string;
	readonly Property: string;
	readonly Set: Component;
}
export interface Predicate {
	readonly And?: Predicate[] | undefined;
	readonly Field?: string | undefined;
	readonly Operand?: string | undefined;
	readonly Operator?: string | undefined;
	readonly Or?: Predicate[] | undefined;
}
export interface Sort {
	readonly Direction: string;
	readonly Field: string;
}
export interface FieldConfig {
	readonly Excluded?: boolean | undefined;
	readonly InputType?: FieldInputConfig | undefined;
	readonly Label?: string | undefined;
	readonly Position?: FieldPosition | undefined;
	readonly Validations?: FieldValidationConfiguration[] | undefined;
}
export interface FieldInputConfig {
	readonly DefaultChecked?: boolean | undefined;
	readonly DefaultCountryCode?: string | undefined;
	readonly DefaultValue?: string | undefined;
	readonly DescriptiveText?: string | undefined;
	readonly MaxValue?: number | undefined;
	readonly MinValue?: number | undefined;
	readonly Name?: string | undefined;
	readonly Placeholder?: string | undefined;
	readonly ReadOnly?: boolean | undefined;
	readonly Required?: boolean | undefined;
	readonly Step?: number | undefined;
	readonly Type: string;
	readonly Value?: string | undefined;
	readonly ValueMappings?: ValueMappings | undefined;
}
export interface FieldPosition {
	readonly Below?: string | undefined;
	readonly Fixed?: string | undefined;
	readonly RightOf?: string | undefined;
}
export interface FieldValidationConfiguration {
	readonly NumValues?: number[] | undefined;
	readonly StrValues?: string[] | undefined;
	readonly Type: string;
	readonly ValidationMessage?: string | undefined;
}
export interface FormButton {
	readonly Children?: string | undefined;
	readonly Excluded?: boolean | undefined;
	readonly Position?: FieldPosition | undefined;
}
export interface FormCTA {
	readonly Cancel?: FormButton | undefined;
	readonly Clear?: FormButton | undefined;
	readonly Position?: string | undefined;
	readonly Submit?: FormButton | undefined;
}
export interface FormDataTypeConfig {
	readonly DataSourceType: string;
	readonly DataTypeName: string;
}
export interface FormInputValue {
	readonly Value?: string | undefined;
}
export interface FormStyle {
	readonly HorizontalGap?: FormStyleConfig | undefined;
	readonly OuterPadding?: FormStyleConfig | undefined;
	readonly VerticalGap?: FormStyleConfig | undefined;
}
export interface FormStyleConfig {
	readonly TokenReference?: string | undefined;
	readonly Value?: string | undefined;
}
export interface SectionalElement {
	readonly Level?: number | undefined;
	readonly Orientation?: string | undefined;
	readonly Position?: FieldPosition | undefined;
	readonly Text?: string | undefined;
	readonly Type: string;
}
export interface ValueMapping {
	readonly DisplayValue?: FormInputValue | undefined;
	readonly Value: FormInputValue;
}
export interface ValueMappings {
	readonly Values: ValueMapping[];
}
export interface ThemeValue {
	readonly Children?: ThemeValues[] | undefined;
	readonly Value?: string | undefined;
}
export interface ThemeValues {
	readonly Key?: string | undefined;
	readonly Value?: ThemeValue | undefined;
}
export default {
	Component: Component,
	Form: Form,
	Theme: Theme,
};
