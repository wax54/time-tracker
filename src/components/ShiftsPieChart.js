import React from 'react';

import { Chart } from 'react-google-charts';

const ShiftsPieChart = ({ series, size }) => {
    let options = {
        // is3D: true,
        pieHole: 0.4,
        chartArea: {
            width: "100%"
        },
        slices: {
            // 0: { color: 'green' },
            // 1: { color: 'lightgreen' },
            // 2: { color: 'purple' }
        }
    };

    if (size > 580) {
        options.legend = {
            position: 'labeled',
            labeledValueText: 'both',
            textStyle: {
                color: 'blue',
                fontSize: 22
            }
        };

        options.pieSliceText = 'label';
        options.pieSliceTextStyle = { fontSize: 20 };
    } else {
        options.legend = {
            position: 'bottom',
            textStyle: {
                color: 'blue',
                fontSize: 18
            }
        };
        options.pieSliceText = 'percentage';
        options.pieSliceTextStyle = { fontSize: 18 };
    }
    if(size < 417) {
        options.legend.textStyle.fontSize = 12;
    }
    const chartEvents = [
        {
            eventName: "ready",
            callback: ({ chartWrapper, google }) => {
                const chart = chartWrapper.getChart();
                google.visualization.events.addListener(chart, "click", e => {
                    const { targetID } = e
                    //targetID looks like "slice#0"
                    const slice = +targetID.replace("slice#", '')
                    console.warn("Clicked", series[slice + 1]);
                });
                google.visualization.events.addListener(chart, "onmouseover", e => {
                    const { row} = e;
                    console.warn("MOUSE OVER ", series[row + 1]);
                });
            }
        }];
    return (
        <div className="row border shadow rounded my-2 p-4">
            <h2 style={{ textAlign: "left" }}>stats</h2>
            <div className="col-12" style={{
                    height: size,
                    margin:"auto"}} >
                <Chart
                    width="100%"
                    height="100%"
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={series}
                    options={options}
                    rootProps={{ 'data-testid': 'stats-pie' }}
                    chartEvents={chartEvents}
                />
            </div>
        </div>
    )
};
export default ShiftsPieChart