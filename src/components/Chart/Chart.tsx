import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props: any) => {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint: any) => (
                <ChartBar value={dataPoint.value}
                          maxValue={props.maxValue}
                          label={dataPoint.label}
                          key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;