import React from 'react';
import {
    CartesianGrid,
    Label,
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
    grid-area: ${props => props.area};
    width: 100%;
    min-width: 50vw;
    max-width: 60vw;
    margin-left: ${props => props.area === 'chart' ? "10px" : "0px" };
`

const Text = styled.div`
    margin: 20px;
    font-size: 20px;
    text-align: left;
    color: ${colours.darkGreen};
    font-weight: 400;
`

const BasicLineChart = ({ area, data }) => {

    const items = data.map(item => ({
        move: item[4],
        lag: item[5]*1000
    }))

    return (
        <Graph area={area}>
            <Text>Session Chart</Text>
            <ResponsiveContainer width="95%" height="80%">
                <LineChart
                    // width={800}
                    // height={280}
                    data={items}
                    margin={{ left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="move" height={60} interval={0} angle={-30} dy={20} dx={-35}>
                        <Label value="move" offset={0} position="bottom" />
                    </XAxis>
                    <YAxis>
                        <Label value="lag (ms)" offset={0} angle={-90} position="left" dy={-40} dx={20} />
                    </YAxis>
                    <Tooltip />
                    <Line key={"lag"} dataKey={"lag"} stroke={colours.darkBlue} />
                </LineChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default BasicLineChart;