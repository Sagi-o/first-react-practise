import { FunctionComponent } from "react";
import Chart from "../Chart/Chart";

interface ExpensesChartProps {
    items: any[]
}

const ExpensesChart: FunctionComponent<ExpensesChartProps> = (props) => {
    const dataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const item of props.items) {
        const month = item.date?.getMonth(); // Jan -> 0
        dataPoints[month].value += item.price;
    }

    const maxValue = Math.max(...dataPoints.map(item => item.value));

    return (<Chart dataPoints={dataPoints} maxValue={maxValue} />);
}

export default ExpensesChart;