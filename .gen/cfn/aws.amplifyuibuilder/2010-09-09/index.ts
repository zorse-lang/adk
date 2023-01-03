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
	readonly Children?: (ComponentChild[] | undefined) | undefined;
	readonly CollectionProperties?: ({ [key: string]: ComponentDataConfiguration } | undefined) | undefined;
	readonly Events?: ({ [key: string]: ComponentEvent } | undefined) | undefined;
	readonly SchemaVersion?: (string | undefined) | undefined;
	readonly SourceId?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly AppId?: (string | undefined) | undefined;
	readonly Cta?: (FormCTA | undefined) | undefined;
	readonly EnvironmentName?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly Overrides?: (ThemeValues[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ActionParameters {
	readonly Anchor?: (Component | undefined) | undefined;
	readonly Fields?: ({ [key: string]: Component } | undefined) | undefined;
	readonly Global?: (Component | undefined) | undefined;
	readonly Id?: (Component | undefined) | undefined;
	readonly Model?: (string | undefined) | undefined;
	readonly State?: (MutationActionSetStateParameter | undefined) | undefined;
	readonly Target?: (Component | undefined) | undefined;
	readonly Type?: (Component | undefined) | undefined;
	readonly Url?: (Component | undefined) | undefined;
}
export interface ComponentBindingPropertiesValue {
	readonly BindingProperties?: (ComponentBindingPropertiesValueProperties | undefined) | undefined;
	readonly DefaultValue?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface ComponentBindingPropertiesValueProperties {
	readonly Bucket?: (string | undefined) | undefined;
	readonly DefaultValue?: (string | undefined) | undefined;
	readonly Field?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
	readonly Model?: (string | undefined) | undefined;
	readonly Predicates?: (Predicate[] | undefined) | undefined;
	readonly UserAttribute?: (string | undefined) | undefined;
}
export interface ComponentChild {
	readonly Children?: (ComponentChild[] | undefined) | undefined;
	readonly ComponentType: string;
	readonly Events?: ({ [key: string]: ComponentEvent } | undefined) | undefined;
	readonly Name: string;
	readonly Properties: { [key: string]: Component };
}
export interface ComponentCondition {
	readonly Else?: (Component | undefined) | undefined;
	readonly Field?: (string | undefined) | undefined;
	readonly Operand?: (string | undefined) | undefined;
	readonly OperandType?: (string | undefined) | undefined;
	readonly Operator?: (string | undefined) | undefined;
	readonly Property?: (string | undefined) | undefined;
	readonly Then?: (Component | undefined) | undefined;
}
export interface ComponentDataConfiguration {
	readonly Identifiers?: (string[] | undefined) | undefined;
	readonly Model: string;
	readonly Predicate?: (Predicate | undefined) | undefined;
	readonly Sort?: (Sort[] | undefined) | undefined;
}
export interface ComponentEvent {
	readonly Action?: (string | undefined) | undefined;
	readonly Parameters?: (ActionParameters | undefined) | undefined;
}
export interface Component {
	readonly BindingProperties?: (ComponentPropertyBindingProperties | undefined) | undefined;
	readonly Bindings?: ({ [key: string]: FormBindingElement } | undefined) | undefined;
	readonly CollectionBindingProperties?: (ComponentPropertyBindingProperties | undefined) | undefined;
	readonly ComponentName?: (string | undefined) | undefined;
	readonly Concat?: (Component[] | undefined) | undefined;
	readonly Condition?: (ComponentCondition | undefined) | undefined;
	readonly Configured?: (boolean | undefined) | undefined;
	readonly DefaultValue?: (string | undefined) | undefined;
	readonly Event?: (string | undefined) | undefined;
	readonly ImportedValue?: (string | undefined) | undefined;
	readonly Model?: (string | undefined) | undefined;
	readonly Property?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly UserAttribute?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface ComponentPropertyBindingProperties {
	readonly Field?: (string | undefined) | undefined;
	readonly Property: string;
}
export interface ComponentVariant {
	readonly Overrides?: (any | undefined) | undefined;
	readonly VariantValues?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly And?: (Predicate[] | undefined) | undefined;
	readonly Field?: (string | undefined) | undefined;
	readonly Operand?: (string | undefined) | undefined;
	readonly Operator?: (string | undefined) | undefined;
	readonly Or?: (Predicate[] | undefined) | undefined;
}
export interface Sort {
	readonly Direction: string;
	readonly Field: string;
}
export interface FieldConfig {
	readonly Excluded?: (boolean | undefined) | undefined;
	readonly InputType?: (FieldInputConfig | undefined) | undefined;
	readonly Label?: (string | undefined) | undefined;
	readonly Position?: (FieldPosition | undefined) | undefined;
	readonly Validations?: (FieldValidationConfiguration[] | undefined) | undefined;
}
export interface FieldInputConfig {
	readonly DefaultChecked?: (boolean | undefined) | undefined;
	readonly DefaultCountryCode?: (string | undefined) | undefined;
	readonly DefaultValue?: (string | undefined) | undefined;
	readonly DescriptiveText?: (string | undefined) | undefined;
	readonly MaxValue?: (number | undefined) | undefined;
	readonly MinValue?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Placeholder?: (string | undefined) | undefined;
	readonly ReadOnly?: (boolean | undefined) | undefined;
	readonly Required?: (boolean | undefined) | undefined;
	readonly Step?: (number | undefined) | undefined;
	readonly Type: string;
	readonly Value?: (string | undefined) | undefined;
	readonly ValueMappings?: (ValueMappings | undefined) | undefined;
}
export interface FieldPosition {
	readonly Below?: (string | undefined) | undefined;
	readonly Fixed?: (string | undefined) | undefined;
	readonly RightOf?: (string | undefined) | undefined;
}
export interface FieldValidationConfiguration {
	readonly NumValues?: (number[] | undefined) | undefined;
	readonly StrValues?: (string[] | undefined) | undefined;
	readonly Type: string;
	readonly ValidationMessage?: (string | undefined) | undefined;
}
export interface FormButton {
	readonly Children?: (string | undefined) | undefined;
	readonly Excluded?: (boolean | undefined) | undefined;
	readonly Position?: (FieldPosition | undefined) | undefined;
}
export interface FormCTA {
	readonly Cancel?: (FormButton | undefined) | undefined;
	readonly Clear?: (FormButton | undefined) | undefined;
	readonly Position?: (string | undefined) | undefined;
	readonly Submit?: (FormButton | undefined) | undefined;
}
export interface FormDataTypeConfig {
	readonly DataSourceType: string;
	readonly DataTypeName: string;
}
export interface FormInputValue {
	readonly Value?: (string | undefined) | undefined;
}
export interface FormStyle {
	readonly HorizontalGap?: (FormStyleConfig | undefined) | undefined;
	readonly OuterPadding?: (FormStyleConfig | undefined) | undefined;
	readonly VerticalGap?: (FormStyleConfig | undefined) | undefined;
}
export interface FormStyleConfig {
	readonly TokenReference?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface SectionalElement {
	readonly Level?: (number | undefined) | undefined;
	readonly Orientation?: (string | undefined) | undefined;
	readonly Position?: (FieldPosition | undefined) | undefined;
	readonly Text?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface ValueMapping {
	readonly DisplayValue?: (FormInputValue | undefined) | undefined;
	readonly Value: FormInputValue;
}
export interface ValueMappings {
	readonly Values: ValueMapping[];
}
export interface ThemeValue {
	readonly Children?: (ThemeValues[] | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface ThemeValues {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (ThemeValue | undefined) | undefined;
}
export default {
	Component: Component,
	Form: Form,
	Theme: Theme,
};
