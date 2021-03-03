import React from 'react';
import {
    CartesianGrid,
    // Legend,
    Bar,
    BarChart,
    // ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import styled from 'styled-components';

import colours from '../../colours';
// import chartColours from '../../chartColours';

const Graph = styled.div`
    grid-area: lagPerMove;
    width: 100%;
    padding: 10px;
`

const Text = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: ${colours.darkGreen}
`

const BasicBarChart = ({ data }) => {


    const movesAndLags = data.map(item => ({
        move: item[4],
        lag: item[5] * 1000
    }))

    const calculateAverage = arr => {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    const getAverageLagPerMove = arr => {

        const totalLagPerMove = [];
        for (var i = 0; i < arr.length; i++) {
            totalLagPerMove[arr[i]["move"]] ?
                totalLagPerMove[arr[i]["move"]].push(arr[i]["lag"])
                : totalLagPerMove[arr[i]["move"]] = [arr[i]["lag"]];
        }

        const averageLagPerMove = Object.keys(totalLagPerMove).map(move => ({
            move: move,
            averageLag: calculateAverage(totalLagPerMove[move])
        }))

        return averageLagPerMove;
    };

    const averageLagPerMove = getAverageLagPerMove(movesAndLags);

    return (
        <Graph>
                <Text>Average Lag per Move</Text>
                <BarChart width={400} height={320} data={averageLagPerMove} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="move" height={70} interval={0} angle={-30} dy={20} dx={-10} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="averageLag" fill={colours.mediumBlue} />
                </BarChart>
        </Graph>
    )
}

export default BasicBarChart;