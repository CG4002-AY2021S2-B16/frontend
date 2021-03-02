import React from 'react';
import {
    CartesianGrid,
    Label,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import styled from 'styled-components';

import colours from '../../colours';

const Graph = styled.div`
    grid-area: graph;
    width: 100%;
    height: 300px;
`

const BasicLineChart = ({ data }) => {

    const items = data.map(item => ({
        move: item[4],
        lag: item[5]
    }))

    return (
        <Graph>
            <LineChart
                width={800}
                height={300}
                data={items}
                margin={{ left: 20 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="move">
                    <Label value="move" offset={0} position="bottom" />
                </XAxis>
                <YAxis>
                    <Label value="lag (ms)" offset={0} angle={-90} position="left" dy={-40} dx={10} />
                </YAxis>
                <Tooltip />
                <Line key={"lag"} dataKey={"lag"} stroke={colours.darkBlue} />
            </LineChart>
        </Graph>
    )
}

export default BasicLineChart;