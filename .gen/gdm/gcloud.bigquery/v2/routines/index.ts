import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Routines extends GdmResource<RoutinesComponentInputs> implements RoutinesComponentOutputs {
	constructor(entity: ADKEntity, options: RoutinesComponentInputs) {
		super(entity, options.name, "bigquery.v2.Routines", options);
	}
	public readonly creationTime?: string | undefined;
	public readonly etag?: string | undefined;
	public readonly lastModifiedTime?: string | undefined;
}
export interface RoutinesComponentOutputs {
	readonly creationTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
}
export interface RoutinesComponentInputs {
	readonly arguments?: Argument[] | undefined;
	readonly datasetId: string;
	readonly definitionBody: string;
	readonly description?: string | undefined;
	readonly determinismLevel?: string | undefined;
	readonly importedLibraries?: string[] | undefined;
	readonly language?: string | undefined;
	readonly remoteFunctionOptions?: RemoteFunctionOptions | undefined;
	readonly returnTableType?: StandardSqlTableType | undefined;
	readonly returnType?: StandardSqlDataType | undefined;
	readonly routineReference: RoutineReference;
	readonly routineType: string;
	readonly sparkOptions?: SparkOptions | undefined;
	readonly strictMode?: boolean | undefined;
	readonly type: string;
	readonly name: string;
}
export interface Argument {
	readonly argumentKind?: string | undefined;
	readonly dataType: StandardSqlDataType;
	readonly mode?: string | undefined;
	readonly name?: string | undefined;
}
export interface RemoteFunctionOptions {
	readonly connection?: string | undefined;
	readonly endpoint?: string | undefined;
	readonly maxBatchingRows?: string | undefined;
	readonly userDefinedContext?: { [P in string]: string } | undefined;
}
export interface Routine {
	readonly arguments?: Argument[] | undefined;
	readonly creationTime?: string | undefined;
	readonly definitionBody: string;
	readonly description?: string | undefined;
	readonly determinismLevel?: string | undefined;
	readonly etag?: string | undefined;
	readonly importedLibraries?: string[] | undefined;
	readonly language?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly remoteFunctionOptions?: RemoteFunctionOptions | undefined;
	readonly returnTableType?: StandardSqlTableType | undefined;
	readonly returnType?: StandardSqlDataType | undefined;
	readonly routineReference: RoutineReference;
	readonly routineType: string;
	readonly sparkOptions?: SparkOptions | undefined;
	readonly strictMode?: boolean | undefined;
}
export interface RoutineReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly routineId: string;
}
export interface SparkOptions {
	readonly archiveUris?: string[] | undefined;
	readonly connection?: string | undefined;
	readonly containerImage?: string | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarUris?: string[] | undefined;
	readonly mainFileUri?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly pyFileUris?: string[] | undefined;
	readonly runtimeVersion?: string | undefined;
}
export interface StandardSqlDataType {
	readonly arrayElementType?: StandardSqlDataType | undefined;
	readonly structType?: StandardSqlStructType | undefined;
	readonly typeKind: string;
}
export interface StandardSqlField {
	readonly name?: string | undefined;
	readonly type?: StandardSqlDataType | undefined;
}
export interface StandardSqlStructType {
	readonly fields?: StandardSqlField[] | undefined;
}
export interface StandardSqlTableType {
	readonly columns?: StandardSqlField[] | undefined;
}
export default {
	Routines: Routines,
};
