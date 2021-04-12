import React from 'react';
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import styled from 'styled-components';

import colours from '../../colours';
import chartColours from '../../chartColours';

const Graph = styled.div`
    grid-area: movesCount;
    width: 100%;
    padding: 10px;
`

const Text = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    text-align: left;
    color: ${colours.darkGreen};
    font-weight: 300;
`

const BasicPieChart = ({ data }) => {

    const countUnique = arr => {
        const counts = {};
        for (var i = 0; i < arr.length; i++) {
            counts[arr[i]] = 1 + (counts[arr[i]] || 0);
        };

        const moveCounts = Object.keys(counts).map(item => ({
            move: item,
            count: counts[item]
        }))

        return moveCounts;
    };

    const moves = data.map(item => item[4]);
    var moveCounts = countUnique(moves);
    moveCounts.sort(function(a, b){
        // if(a.move === 'roll') { console.log('!roll'); return 1; }
        if (b.move === 'roll') { return -1; }
        if(a.move < b.move) { return -1; }
        if(a.move > b.move) { return 1; }
        return 0;
    })
    return (
        <Graph>
            <Text>Count of Moves</Text>
            <ResponsiveContainer width="95%" height="90%">
                <PieChart
                    width={400}
                    height={320}
                    margin={{
                        top: 10,
                        bottom: 10
                    }}
                >
                    <Tooltip />
                    <Pie
                        data={moveCounts}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        nameKey="move"
                        dataKey="count"
                        label
                    >
                        {/* {
                            Object.keys(chartColours).map((move, index) => { console.log(move); return (<Cell key={index} fill={chartColours[move]} />)})
                        } */}
                        {
                            moveCounts.map((move, index) => <Cell key={index} fill={chartColours[move.move]} />)
                        }
                    </Pie>

                    <Legend verticalAlign="bottom" iconType="square" wrapperStyle={{ bottom: 0 }} />
                </PieChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default BasicPieChart;