import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workbooktemplates
	extends ArmResource<workbooktemplatesComponentInputs>
	implements workbooktemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: workbooktemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/workbooktemplates", "2020-11-20", options);
	}
	public readonly apiVersion: "2020-11-20";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/workbooktemplates";
}
export interface workbooktemplatesComponentOutputs {
	readonly apiVersion: "2020-11-20";
	readonly id: string;
	readonly type: "Microsoft.Insights/workbooktemplates";
}
export interface workbooktemplatesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkbookTemplateProperties;
	readonly tags?: WorkbookTemplateResourceTags;
}
export interface WorkbookTemplateGallery {
	readonly category?: string;
	readonly name?: string;
	readonly order?: number;
	readonly resourceType?: string;
	readonly type?: string;
}
export interface WorkbookTemplateLocalizedGallery {
	readonly galleries?: WorkbookTemplateGallery[];
	readonly templateData?: any;
}
export interface WorkbookTemplateProperties {
	readonly author?: string;
	readonly galleries: WorkbookTemplateGallery[];
	readonly localized?: WorkbookTemplatePropertiesLocalized;
	readonly priority?: number;
	readonly templateData: any;
}
export interface WorkbookTemplatePropertiesLocalized {
	readonly [key: string]: WorkbookTemplateLocalizedGallery[];
}
export interface WorkbookTemplateResourceTags {
	readonly [key: string]: string;
}
export default {
	workbooktemplates: workbooktemplates,
};
