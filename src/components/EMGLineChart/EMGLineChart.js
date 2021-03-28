import React from 'react';
import { useSelector } from "react-redux";
import {
    CartesianGrid,
    // Label,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    // XAxis,
    YAxis,
} from 'recharts';
import styled from 'styled-components';

import colours from '../../colours';

const Graph = styled.div`
    grid-area: ${props => props.area};
    width: 100%;
    min-width: 20vw;
    min-height: 20vh;
    max-height: 30vh;
    margin: 5px;
    overflow: hidden;
    resize: horizontal;
`

const Text = styled.div`
    margin: 10px;
    font-size: 20px;
    text-align: left;
    color: ${colours.darkGreen};
`

const EMGLineChart = ({ area, title }) => {

    const { EMGData } = useSelector(state => state);

    // useEffect(() => {
    //     console.log(sensorData)
    // }, [sensorData]);

    const graphData = EMGData ? EMGData : [];

    const items = graphData.map(item => ({
            timestamp: item[0],
            meanAbs: item[1],
            RMS: item[2],
            meanFreq: item[3],
        }))

    return (
        <Graph area={area}>
            <Text>{title}</Text>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart
                    data={items}
                    margin={{ left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis/>
                    <Tooltip />
                    <Legend align="right" verticalAlign="bottom" />
                    <Line key={"meanAbs"} dataKey={"meanAbs"} stroke={colours.darkBlue} />
                    <Line key={"RMS"} dataKey={"RMS"} stroke={colours.darkGreen} />
                    <Line key={"meanFreq"} dataKey={"meanFreq"} stroke={colours.darkOrange} />
                </LineChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default EMGLineChart;