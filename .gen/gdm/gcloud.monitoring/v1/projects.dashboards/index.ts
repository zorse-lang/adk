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
	readonly columnLayout?: ColumnLayout;
	readonly dashboardFilters?: DashboardFilter[];
	readonly displayName: string;
	readonly etag?: string;
	readonly gridLayout?: GridLayout;
	readonly labels?: { [P in string]: string };
	readonly mosaicLayout?: MosaicLayout;
	readonly name: string;
	readonly parent: string;
	readonly rowLayout?: RowLayout;
	readonly validateOnly?: boolean;
}
export interface Aggregation {
	readonly alignmentPeriod?: string;
	readonly crossSeriesReducer?: string;
	readonly groupByFields?: string[];
	readonly perSeriesAligner?: string;
}
export interface AlertChart {
	readonly name: string;
}
export interface Axis {
	readonly label?: string;
	readonly scale?: string;
}
export interface ChartOptions {
	readonly mode?: string;
}
export interface CollapsibleGroup {
	readonly collapsed?: boolean;
}
export interface Column {
	readonly weight?: string;
	readonly widgets?: Widget[];
}
export interface ColumnLayout {
	readonly columns?: Column[];
}
export interface ColumnSettings {
	readonly column: string;
	readonly visible: boolean;
}
export interface Dashboard {
	readonly columnLayout?: ColumnLayout;
	readonly dashboardFilters?: DashboardFilter[];
	readonly displayName: string;
	readonly etag?: string;
	readonly gridLayout?: GridLayout;
	readonly labels?: { [P in string]: string };
	readonly mosaicLayout?: MosaicLayout;
	readonly name?: string;
	readonly rowLayout?: RowLayout;
}
export interface DashboardFilter {
	readonly filterType?: string;
	readonly labelKey: string;
	readonly stringValue?: string;
	readonly templateVariable?: string;
}
export interface DataSet {
	readonly legendTemplate?: string;
	readonly minAlignmentPeriod?: string;
	readonly plotType?: string;
	readonly targetAxis?: string;
	readonly timeSeriesQuery: TimeSeriesQuery;
}
export interface Empty {}
export interface GaugeView {
	readonly lowerBound?: number;
	readonly upperBound?: number;
}
export interface GridLayout {
	readonly columns?: string;
	readonly widgets?: Widget[];
}
export interface LogsPanel {
	readonly filter?: string;
	readonly resourceNames?: string[];
}
export interface MosaicLayout {
	readonly columns?: number;
	readonly tiles?: Tile[];
}
export interface PickTimeSeriesFilter {
	readonly direction?: string;
	readonly numTimeSeries?: number;
	readonly rankingMethod?: string;
}
export interface RatioPart {
	readonly aggregation?: Aggregation;
	readonly filter: string;
}
export interface Row {
	readonly weight?: string;
	readonly widgets?: Widget[];
}
export interface RowLayout {
	readonly rows?: Row[];
}
export interface Scorecard {
	readonly gaugeView?: GaugeView;
	readonly sparkChartView?: SparkChartView;
	readonly thresholds?: Threshold[];
	readonly timeSeriesQuery: TimeSeriesQuery;
}
export interface SparkChartView {
	readonly minAlignmentPeriod?: string;
	readonly sparkChartType: string;
}
export interface StatisticalTimeSeriesFilter {
	readonly numTimeSeries?: number;
	readonly rankingMethod?: string;
}
export interface TableDataSet {
	readonly minAlignmentPeriod?: string;
	readonly tableDisplayOptions?: TableDisplayOptions;
	readonly tableTemplate?: string;
	readonly timeSeriesQuery: TimeSeriesQuery;
}
export interface TableDisplayOptions {
	readonly shownColumns?: string[];
}
export interface Text {
	readonly content?: string;
	readonly format?: string;
}
export interface Threshold {
	readonly color?: string;
	readonly direction?: string;
	readonly label?: string;
	readonly targetAxis?: string;
	readonly value?: number;
}
export interface Tile {
	readonly height?: number;
	readonly widget?: Widget;
	readonly width?: number;
	readonly xPos?: number;
	readonly yPos?: number;
}
export interface TimeSeriesFilter {
	readonly aggregation?: Aggregation;
	readonly filter: string;
	readonly pickTimeSeriesFilter?: PickTimeSeriesFilter;
	readonly secondaryAggregation?: Aggregation;
	readonly statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
export interface TimeSeriesFilterRatio {
	readonly denominator?: RatioPart;
	readonly numerator?: RatioPart;
	readonly pickTimeSeriesFilter?: PickTimeSeriesFilter;
	readonly secondaryAggregation?: Aggregation;
	readonly statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
export interface TimeSeriesQuery {
	readonly prometheusQuery?: string;
	readonly timeSeriesFilter?: TimeSeriesFilter;
	readonly timeSeriesFilterRatio?: TimeSeriesFilterRatio;
	readonly timeSeriesQueryLanguage?: string;
	readonly unitOverride?: string;
}
export interface TimeSeriesTable {
	readonly columnSettings?: ColumnSettings[];
	readonly dataSets: TableDataSet[];
	readonly metricVisualization?: string;
}
export interface Widget {
	readonly alertChart?: AlertChart;
	readonly blank?: any;
	readonly collapsibleGroup?: CollapsibleGroup;
	readonly logsPanel?: LogsPanel;
	readonly scorecard?: Scorecard;
	readonly text?: Text;
	readonly timeSeriesTable?: TimeSeriesTable;
	readonly title?: string;
	readonly xyChart?: XyChart;
}
export interface XyChart {
	readonly chartOptions?: ChartOptions;
	readonly dataSets: DataSet[];
	readonly thresholds?: Threshold[];
	readonly timeshiftDuration?: string;
	readonly xAxis?: Axis;
	readonly y2Axis?: Axis;
	readonly yAxis?: Axis;
}
export default {
	ProjectsDashboards: ProjectsDashboards,
};
