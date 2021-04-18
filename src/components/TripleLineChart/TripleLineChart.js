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
    min-width: 18vw;
    min-height: 20vh;
    max-height: 30vh;
    margin: 5px;
    overflow: hidden;
    resize: horizontal;
`

const Text = styled.div`
    margin: 10px;
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    color: ${colours.darkGreen};
    font-weight: 300;
`

const TripleLineChart = ({ area, title, type }) => {

    const { sensorData } = useSelector(state => state);

    var graphData = sensorData ? sensorData : [];

    const typeMap = {
        "timestamp": 0,
        "x": 1,
        "y": 2,
        "z": 3,
        "roll": 4,
        "pitch": 5,
        "yaw": 6
    }

    const dataArray = [graphData[1].length, graphData[2].length, graphData[3].length]
    const max = Math.max(graphData[1].length, graphData[2].length, graphData[3].length);
    const maxIndex = dataArray.indexOf(Math.max(max));

    const items = maxIndex >= 0 ?
        graphData[maxIndex + 1].map((item, index) => ({
            "timestamp": graphData[maxIndex+1][index][typeMap["timestamp"]],
            "Dancer 1": graphData[1][index] ? graphData[1][index][typeMap[type]] : 0,
            "Dancer 2": graphData[2][index] ? graphData[2][index][typeMap[type]] : 0,
            "Dancer 3": graphData[3][index] ? graphData[3][index][typeMap[type]] : 0,
        }))
        : [];


    return (
        <Graph area={area}>
            <Text>{title}</Text>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart
                    data={items}
                    margin={{ left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* <XAxis dataKey="timestamp" height={60} interval={0} angle={-30} dy={20} dx={-35}>
                        <Label value="time" offset={0} position="bottom" />
                    </XAxis> */}
                    {/* <YAxis>
                        <Label value="value" offset={0} angle={-90} position="left" dy={-40} dx={0} />
                    </YAxis> */}
                    <YAxis/>
                    <Tooltip />
                    <Legend align="right" verticalAlign="bottom" />
                    <Line key={"Dancer 1"} dataKey={"Dancer 1"} stroke={colours.darkGreen} />
                    <Line key={"Dancer 2"} dataKey={"Dancer 2"} stroke={colours.darkBlue} />
                    <Line key={"Dancer 3"} dataKey={"Dancer 3"} stroke={colours.darkOrange} />
                </LineChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default TripleLineChart;