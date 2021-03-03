import React from 'react';
import {
    CartesianGrid,
    Label,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import styled from 'styled-components';

import colours from '../../colours';

const Graph = styled.div`
    grid-area: graph;
    width: 100%;
`

const Text = styled.div`
    margin: 20px;
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    color: ${colours.darkGreen}
`

const BasicLineChart = ({ data }) => {

    const items = data.map(item => ({
        move: item[4],
        lag: item[5]*1000
    }))

    return (
        <Graph>
            <Text>Session Chart</Text>
            <LineChart
                width={800}
                height={280}
                data={items}
                margin={{ left: 20 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="move" height={60} interval={0} angle={-30} dy={20} dx={-35}>
                    <Label value="move" offset={0} position="bottom" />
                </XAxis>
                <YAxis>
                    <Label value="lag (ms)" offset={0} angle={-90} position="left" dy={-40} dx={0} />
                </YAxis>
                <Tooltip />
                <Line key={"lag"} dataKey={"lag"} stroke={colours.darkBlue} />
            </LineChart>
        </Graph>
    )
}

export default BasicLineChart;