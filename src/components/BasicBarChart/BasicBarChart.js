import React from 'react';
import {
    CartesianGrid,
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import styled from 'styled-components';

import colours from '../../colours';

const Graph = styled.div`
    display: grid;
    grid-area: lagPerMove;
    width: 100%;
    max-height: 45vh;
`

const Text = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    text-align: left;
    color: ${props => props.component === 'review' ? colours.darkGreen : colours.white};
    font-weight: ${props => props.component === 'review' ? 300 : 300};
`

const NoDataText = styled.div`
    margin: 10px;
    width: 95%;
    height: 95%;
    color: ${colours.white};
    font-size: 40px;
    font-weight: 300;
    text-align: left;
    line-height: 200px;
`

const tooltipLabelStyle = {
    color: colours.darkGreen
}

const tooltipTextStyle = {
    color: colours.gray3
}

const BasicBarChart = ({ data, noData, component }) => {

    const movesAndLags = component === "review" ?
        data.map(item => ({
            move: item[4],
            lag: item[5]
        }))
        : data;

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
            <Text component={component}>Average Lag per Move</Text>
                {noData === true ?
                <NoDataText>No data</NoDataText>
                :<ResponsiveContainer width="95%" height="95%">
                    <BarChart
                        // width={400} 
                        // height={320} 
                        margin={{ top: 20 }}
                        data={averageLagPerMove}
                        layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="move"
                            height={70}
                            interval={0}
                            angle={-30}
                            dy={20}
                            dx={-10}
                            stroke={component === "review" ? colours.gray3 : colours.white}
                        />
                        <YAxis stroke={component === "review" ? colours.gray3 : colours.white} />
                        <Tooltip labelStyle={tooltipLabelStyle} itemStyle={tooltipTextStyle} />
                        <Bar dataKey="averageLag" fill={component === "review" ? colours.mediumBlue : colours.white} />
                    </BarChart>
                </ResponsiveContainer>}
        </Graph>
    )
}

export default BasicBarChart;