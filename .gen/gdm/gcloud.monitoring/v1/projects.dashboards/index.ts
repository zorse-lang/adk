import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsDashboards
	extends GdmResource<ProjectsDashboardsComponentInputs>
	implements ProjectsDashboardsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsDashboardsComponentInputs) {
		super(entity, options.name, "monitoring.v1.ProjectsDashboards", options);
	}
}
export interface ProjectsDashboardsComponentOutputs {}
export interface ProjectsDashboardsComponentInputs {
	readonly columnLayout?: ColumnLayout | undefined;
	readonly dashboardFilters?: DashboardFilter[] | undefined;
	readonly displayName: string;
	readonly etag?: string | undefined;
	readonly gridLayout?: GridLayout | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mosaicLayout?: MosaicLayout | undefined;
	readonly name: string;
	readonly parent: string;
	readonly rowLayout?: RowLayout | undefined;
	readonly validateOnly?: boolean | undefined;
	readonly type: string;
}
export interface Aggregation {
	readonly alignmentPeriod?: string | undefined;
	readonly crossSeriesReducer?: string | undefined;
	readonly groupByFields?: string[] | undefined;
	readonly perSeriesAligner?: string | undefined;
}
export interface AlertChart {
	readonly name: string;
}
export interface Axis {
	readonly label?: string | undefined;
	readonly scale?: string | undefined;
}
export interface ChartOptions {
	readonly mode?: string | undefined;
}
export interface CollapsibleGroup {
	readonly collapsed?: boolean | undefined;
}
export interface Column {
	readonly weight?: string | undefined;
	readonly widgets?: Widget[] | undefined;
}
export interface ColumnLayout {
	readonly columns?: Column[] | undefined;
}
export interface ColumnSettings {
	readonly column: string;
	readonly visible: boolean;
}
export interface Dashboard {
	readonly columnLayout?: ColumnLayout | undefined;
	readonly dashboardFilters?: DashboardFilter[] | undefined;
	readonly displayName: string;
	readonly etag?: string | undefined;
	readonly gridLayout?: GridLayout | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mosaicLayout?: MosaicLayout | undefined;
	readonly name?: string | undefined;
	readonly rowLayout?: RowLayout | undefined;
}
export interface DashboardFilter {
	readonly filterType?: string | undefined;
	readonly labelKey: string;
	readonly stringValue?: string | undefined;
	readonly templateVariable?: string | undefined;
}
export interface DataSet {
	readonly legendTemplate?: string | undefined;
	readonly minAlignmentPeriod?: string | undefined;
	readonly plotType?: string | undefined;
	readonly targetAxis?: string | undefined;
	readonly timeSeriesQuery: TimeSeriesQuery;
}
export interface Empty {}
export interface GaugeView {
	readonly lowerBound?: number | undefined;
	readonly upperBound?: number | undefined;
}
export interface GridLayout {
	readonly columns?: string | undefined;
	readonly widgets?: Widget[] | undefined;
}
export interface LogsPanel {
	readonly filter?: string | undefined;
	readonly resourceNames?: string[] | undefined;
}
export interface MosaicLayout {
	readonly columns?: number | undefined;
	readonly tiles?: Tile[] | undefined;
}
export interface PickTimeSeriesFilter {
	readonly direction?: string | undefined;
	readonly numTimeSeries?: number | undefined;
	readonly rankingMethod?: string | undefined;
}
export interface RatioPart {
	readonly aggregation?: Aggregation | undefined;
	readonly filter: string;
}
export interface Row {
	readonly weight?: string | undefined;
	readonly widgets?: Widget[] | undefined;
}
export interface RowLayout {
	readonly rows?: Row[] | undefined;
}
export interface Scorecard {
	readonly gaugeView?: GaugeView | undefined;
	readonly sparkChartView?: SparkChartView | undefined;
	readonly thresholds?: Threshold[] | undefined;
	readonly timeSeriesQuery: TimeSeriesQuery;
}
export interface SparkChartView {
	readonly minAlignmentPeriod?: string | undefined;
	readonly sparkChartType: string;
}
export interface StatisticalTimeSeriesFilter {
	readonly numTimeSeries?: number | undefined;
	readonly rankingMethod?: string | undefined;
}
export interface TableDataSet {
	readonly minAlignmentPeriod?: string | undefined;
	readonly tableDisplayOptions?: TableDisplayOptions | undefined;
	readonly tableTemplate?: string | undefined;
	readonly timeSeriesQuery: TimeSeriesQuery;
}
export interface TableDisplayOptions {
	readonly shownColumns?: string[] | undefined;
}
export interface Text {
	readonly content?: string | undefined;
	readonly format?: string | undefined;
}
export interface Threshold {
	readonly color?: string | undefined;
	readonly direction?: string | undefined;
	readonly label?: string | undefined;
	readonly targetAxis?: string | undefined;
	readonly value?: number | undefined;
}
export interface Tile {
	readonly height?: number | undefined;
	readonly widget?: Widget | undefined;
	readonly width?: number | undefined;
	readonly xPos?: number | undefined;
	readonly yPos?: number | undefined;
}
export interface TimeSeriesFilter {
	readonly aggregation?: Aggregation | undefined;
	readonly filter: string;
	readonly pickTimeSeriesFilter?: PickTimeSeriesFilter | undefined;
	readonly secondaryAggregation?: Aggregation | undefined;
	readonly statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter | undefined;
}
export interface TimeSeriesFilterRatio {
	readonly denominator?: RatioPart | undefined;
	readonly numerator?: RatioPart | undefined;
	readonly pickTimeSeriesFilter?: PickTimeSeriesFilter | undefined;
	readonly secondaryAggregation?: Aggregation | undefined;
	readonly statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter | undefined;
}
export interface TimeSeriesQuery {
	readonly prometheusQuery?: string | undefined;
	readonly timeSeriesFilter?: TimeSeriesFilter | undefined;
	readonly timeSeriesFilterRatio?: TimeSeriesFilterRatio | undefined;
	readonly timeSeriesQueryLanguage?: string | undefined;
	readonly unitOverride?: string | undefined;
}
export interface TimeSeriesTable {
	readonly columnSettings?: ColumnSettings[] | undefined;
	readonly dataSets: TableDataSet[];
	readonly metricVisualization?: string | undefined;
}
export interface Widget {
	readonly alertChart?: AlertChart | undefined;
	readonly blank?: any | undefined;
	readonly collapsibleGroup?: CollapsibleGroup | undefined;
	readonly logsPanel?: LogsPanel | undefined;
	readonly scorecard?: Scorecard | undefined;
	readonly text?: Text | undefined;
	readonly timeSeriesTable?: TimeSeriesTable | undefined;
	readonly title?: string | undefined;
	readonly xyChart?: XyChart | undefined;
}
export interface XyChart {
	readonly chartOptions?: ChartOptions | undefined;
	readonly dataSets: DataSet[];
	readonly thresholds?: Threshold[] | undefined;
	readonly timeshiftDuration?: string | undefined;
	readonly xAxis?: Axis | undefined;
	readonly y2Axis?: Axis | undefined;
	readonly yAxis?: Axis | undefined;
}
export default {
	ProjectsDashboards: ProjectsDashboards,
};
