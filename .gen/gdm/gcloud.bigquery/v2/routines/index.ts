import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Routines extends GdmResource<RoutinesComponentInputs> implements RoutinesComponentOutputs {
	constructor(entity: ADKEntity, options: RoutinesComponentInputs) {
		super(entity, options.name, "bigquery.v2.Routines", options);
	}
	public readonly creationTime?: string;
	public readonly etag?: string;
	public readonly lastModifiedTime?: string;
}
export interface RoutinesComponentOutputs {
	readonly creationTime?: string;
	readonly etag?: string;
	readonly lastModifiedTime?: string;
}
export interface RoutinesComponentInputs {
	readonly arguments?: Argument[];
	readonly datasetId: string;
	readonly definitionBody: string;
	readonly description?: string;
	readonly determinismLevel?: string;
	readonly importedLibraries?: string[];
	readonly language?: string;
	readonly remoteFunctionOptions?: RemoteFunctionOptions;
	readonly returnTableType?: StandardSqlTableType;
	readonly returnType?: StandardSqlDataType;
	readonly routineReference: RoutineReference;
	readonly routineType: string;
	readonly sparkOptions?: SparkOptions;
	readonly strictMode?: boolean;
	readonly name: string;
}
export interface Argument {
	readonly argumentKind?: string;
	readonly dataType: StandardSqlDataType;
	readonly mode?: string;
	readonly name?: string;
}
export interface RemoteFunctionOptions {
	readonly connection?: string;
	readonly endpoint?: string;
	readonly maxBatchingRows?: string;
	readonly userDefinedContext?: { [P in string]: string };
}
export interface Routine {
	readonly arguments?: Argument[];
	readonly creationTime?: string;
	readonly definitionBody: string;
	readonly description?: string;
	readonly determinismLevel?: string;
	readonly etag?: string;
	readonly importedLibraries?: string[];
	readonly language?: string;
	readonly lastModifiedTime?: string;
	readonly remoteFunctionOptions?: RemoteFunctionOptions;
	readonly returnTableType?: StandardSqlTableType;
	readonly returnType?: StandardSqlDataType;
	readonly routineReference: RoutineReference;
	readonly routineType: string;
	readonly sparkOptions?: SparkOptions;
	readonly strictMode?: boolean;
}
export interface RoutineReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly routineId: string;
}
export interface SparkOptions {
	readonly archiveUris?: string[];
	readonly connection?: string;
	readonly containerImage?: string;
	readonly fileUris?: string[];
	readonly jarUris?: string[];
	readonly mainFileUri?: string;
	readonly properties?: { [P in string]: string };
	readonly pyFileUris?: string[];
	readonly runtimeVersion?: string;
}
export interface StandardSqlDataType {
	readonly arrayElementType?: StandardSqlDataType;
	readonly structType?: StandardSqlStructType;
	readonly typeKind: string;
}
export interface StandardSqlField {
	readonly name?: string;
	readonly type?: StandardSqlDataType;
}
export interface StandardSqlStructType {
	readonly fields?: StandardSqlField[];
}
export interface StandardSqlTableType {
	readonly columns?: StandardSqlField[];
}
export default {
	Routines: Routines,
};
