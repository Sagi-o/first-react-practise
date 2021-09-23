import './ChartBar.css';

const ChartBar = (props: any) => {
    let barFillHeight = '0%';
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';

    if (props.maxValue) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeight }}>
                    {props.value}
                </div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    );
};

export default ChartBar;