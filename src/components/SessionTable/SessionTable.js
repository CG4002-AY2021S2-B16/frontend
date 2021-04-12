import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";

import colours from '../../colours';

import { markPosPrediction, markMovePrediction } from "../../store/data";

const SessionTableDiv = styled.div`
    display: grid;
    grid-area: graph;
    grid-template-areas: 
        'title moveScore posScore'
        'table table     table   ';
    min-width: 60vw;
    max-width: 70vw;
    text-align: left;
`

const Title = styled.div`
    display: grid;
    grid-area: title;
    margin: 0 10px;
    color: ${colours.darkGreen};
    font-weight: bold;
    font-size: 22px;
    text-align: left;
    font-weight: 600;
`

const MoveScore = styled.div`
    display: grid;
    grid-area: moveScore;
    margin: 0 10px;
    color: ${colours.darkGreen};
    font-size: 22px;
    text-align: right;
    font-weight: 400;
`

const PosScore = styled.div`
    display: grid;
    grid-area: posScore;
    margin: 0 10px;
    color: ${colours.darkGreen};
    font-size: 22px;
    text-align: right;
    font-weight: 400;
`

const TableDiv = styled.div`
    display: grid;
    grid-area: table;
    margin: 10px 0;
    padding: 10px;
    height: 37vh;
    width: 1fr;
    background-color: ${colours.gray5};
    border-radius: 6px;
    overflow-y: scroll;
    align-content: stretch;
    justify-content: stretch;
`

const Table = styled.table`
    text-align: left;
    border-spacing: 0 8px;
`

const Tr = styled.tr`
    height: 40px;
    max-height: 40px;
    border-radius: 6px;
`

const Tr2 = styled.tr`
    border-radius: 6px;
`

// const Th = styled.th`
//     padding: 5px;
//     text-align: center;
//     :first-child {
//         border-top-left-radius: 8px; 
//         border-bottom-left-radius: 8px;
//     }
//     :last-child {
//         border-bottom-right-radius: 8px; 
//         border-top-right-radius: 8px; 
//     }
//     background-color: ${colours.gray6}
// `

const Th = styled.th`
    padding: 5px;
    text-align: center;
    align-items: stretch;
`

const Td = styled.td`
    padding: 5px;
    :first-child {
        border-top-left-radius: 8px; 
        border-bottom-left-radius: 8px;
    }
    :last-child {
        border-bottom-right-radius: 8px; 
        border-top-right-radius: 8px; 
    }
    background-color: ${colours.gray6}
`

const Text = styled.div`
    font-size: 20px;
    text-decoration: none;
    color: ${colours.darkBlue}
    align-self: centre;
`

const SessionTable = ({ session }) => {

    const { data, metadata, specificHistory } = useSelector(state => state);

    const dispatch = useDispatch();

    var tableData;
    var corrMoves;
    var corrPos;

    if (session === 'current') {
        tableData = data ? data : [];
        corrMoves = new Array(tableData.length).fill(false)
        corrPos = new Array(tableData.length).fill(false)
    }
    else {
        tableData = specificHistory.moves ? specificHistory.moves : [];
        corrMoves = tableData.map(item => item[9] ? item[9] : false)
        corrPos = tableData.map(item => item[8] ? item[8] : false)
    }

    const [correctMoves, setCorrectMoves] = useState([...corrMoves]);
    const [correctPos, setCorrectPos] = useState([...corrPos]);

    useEffect(() => {
        setCorrectMoves(tableData.map(item => item[9] ? item[9] : false));
        setCorrectPos(tableData.map(item => item[8] ? item[8] : false));
    }, [tableData])

    const handleMoveCheckbox = (index) => {
        const id = session === 'current' ? metadata.sessionId : session;
        var arr = [...correctMoves];
        arr[index] = !arr[index];
        // console.log("move arr: ", arr, index);
        setCorrectMoves(arr);
        dispatch(markMovePrediction(tableData[index], id, arr[index]));
    }

    const handlePosCheckbox = (index) => {
        const id = session === 'current' ? metadata.sessionId : session;
        var arr = [...correctPos];
        arr[index] = !arr[index];
        // console.log("pos arr: ", arr, index);
        setCorrectPos(arr);
        dispatch(markPosPrediction(tableData[index], id, arr[index]));
    }

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    return (
        <SessionTableDiv>
            <Title>Predictions Recorded</Title>
            <MoveScore>Move Predictions: {String(countOccurrences(correctMoves ? correctMoves : corrMoves, true) / tableData.length * 100).split('.')[0]}% ({countOccurrences(correctMoves, true)}/{tableData.length})</MoveScore>
            <PosScore>Position Predictions: {String(countOccurrences(correctPos ? correctPos : corrPos, true) / tableData.length * 100).split('.')[0]}% ({countOccurrences(correctPos, true)}/{tableData.length})</PosScore>
            <TableDiv>
                {tableData.length === 0 ?
                    <Text>No data available</Text>
                    : <Table>
                        {/* <colgroup>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="1" style={{width: '5%'}}/>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="4" style={{width: '6%'}}/>
                            <col span="1" style={{width: '11%'}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th rowspan="2" colspan="1">MOVE</th>
                                <th rowspan="2" colspan="1">POSITIONS</th>
                                <th rowspan="2" colspan="1">LAG (MS)</th>
                                <th rowspan="2" colspan="1">ACCURACY</th>
                                <th rowspan="2" colspan="1">SLOWEST DANCER</th>
                                <th rowspan="1" colspan="4">MOVE PREDICTIONS</th>
                                <th rowspan="1" colspan="1">POSITION PREDICTION</th>
                            </tr> */}
                        <colgroup>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="1" style={{width: '6%'}}/>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="1" style={{width: '4%'}}/>
                            <col span="4" style={{width: '6%'}}/>
                            <col span="1" style={{width: '10%'}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th rowspan="2" colspan="1">Move</th>
                                <th rowspan="2" colspan="1">Positions</th>
                                <th rowspan="2" colspan="1">Lag (ms)</th>
                                <th rowspan="2" colspan="1">Accuracy</th>
                                <th rowspan="2" colspan="1">Slowest Dancer</th>
                                <th rowspan="1" colspan="4">Move Predictions</th>
                                <th rowspan="1" colspan="1">Position Prediction</th>
                            </tr>
                            <tr>
                                <th>All 3</th>
                                <th>Dancer 1 {String(countOccurrences(correctMoves ? correctMoves : corrMoves, true) / tableData.length * 100).split('.')[0]}%</th>
                                <th>Dancer 2 {String(countOccurrences(correctMoves ? correctMoves : corrMoves, true) / tableData.length * 100).split('.')[0]}%</th>
                                <th>Dancer 3 {String(countOccurrences(correctMoves ? correctMoves : corrMoves, true) / tableData.length * 100).split('.')[0]}%</th>
                                <th>All 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{item[4]}</Td>
                                        <Td>{item[1] + ", " + item[2] + ", " + item[3]}</Td>
                                        <Td>{String(item[5]).split('.')[0]}</Td>
                                        <Td>{String(item[6]).substring(0, 5)}%</Td>
                                        <Td>{item[7] ? String((item[7]+1)%3) : 'No data'}</Td>
                                        <Td><input type="checkbox" name="move" defaultChecked={item[9]} onClick={() => handleMoveCheckbox(index)} /></Td>

                                        <Td>{correctMoves[index]? <p>&#10004;</p> : <p>&#10008;</p>}</Td>
                                        <Td>{correctMoves[index]? <p>&#10004;</p> : <p>&#10008;</p>}</Td>
                                        <Td>{correctMoves[index]? <p>&#10004;</p> : <p>&#10008;</p>}</Td>
                                        <Td><input type="checkbox" name="position" defaultChecked={item[8]} onClick={() => handlePosCheckbox(index)} /></Td>
                                    </Tr>
                                )
                            })}
                        </tbody>
                    </Table>}
            </TableDiv>
        </SessionTableDiv>
    )
}

export default SessionTable;