import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workbooktemplates
	extends ArmResource<workbooktemplatesComponentInputs>
	implements workbooktemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: workbooktemplatesComponentInputs) {
		super(entity, options.name, "microsoft.insights/workbooktemplates", "2019-10-17-preview", options);
	}
	public readonly apiVersion: "2019-10-17-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/workbooktemplates";
}
export interface workbooktemplatesComponentOutputs {
	readonly apiVersion: "2019-10-17-preview";
	readonly id: string;
	readonly type: "microsoft.insights/workbooktemplates";
}
export interface workbooktemplatesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkbookTemplateProperties | undefined;
	readonly tags?: WorkbookTemplateResourceTags | undefined;
}
export interface WorkbookTemplateGallery {
	readonly category?: string | undefined;
	readonly name?: string | undefined;
	readonly order?: number | undefined;
	readonly resourceType?: string | undefined;
	readonly type?: string | undefined;
}
export interface WorkbookTemplateLocalizedGallery {
	readonly galleries?: WorkbookTemplateGallery[] | undefined;
	readonly templateData?: any | undefined;
}
export interface WorkbookTemplateProperties {
	readonly author?: string | undefined;
	readonly galleries: WorkbookTemplateGallery[];
	readonly localized?: WorkbookTemplatePropertiesLocalized | undefined;
	readonly priority?: number | undefined;
	readonly templateData: any;
}
export interface WorkbookTemplatePropertiesLocalized {
	readonly "[ key: string ]"?: WorkbookTemplateLocalizedGallery[] | undefined;
}
export interface WorkbookTemplateResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	workbooktemplates: workbooktemplates,
};
