import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

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

const Th = styled.th`
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

const SessionTable = ({session}) => {

    const { data, metadata, specificHistory } = useSelector(state => state);

    var tableData;

    if (session === 'current') {
        tableData = data ? data : [];
        console.log("current: ", tableData)
    }
    else {
        tableData = specificHistory.moves ? specificHistory.moves : [];
        console.log("specificHistory: ", tableData)

    }

    const [ correctMoves, setCorrectMoves ] = useState(Array(tableData.length).fill(false));
    const [ correctPos, setCorrectPos ] = useState(Array(tableData.length).fill(false));

    const handleMoveCheckbox = (index) => {
        const id = session === 'current' ? metadata.sessionId : session;
        var arr = [...correctMoves];
        arr[index] = !arr[index];
        console.log("move arr: ", arr);
        setCorrectMoves(arr);
        markMovePrediction(data, id, !arr[index])
    }
    
    const handlePosCheckbox = (index) => {
        const id = session === 'current' ? metadata.sessionId : session;
        var arr = [...correctPos];
        arr[index] = !arr[index];
        console.log("pos arr: ", arr);
        setCorrectPos(arr);
        markPosPrediction(data, id, !arr[index])
    }

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    
    return (
    <SessionTableDiv>
        <Title>Predictions Recorded</Title>
        <MoveScore>Move Predictions: {countOccurrences(correctMoves, true)/tableData.length}% ({countOccurrences(correctMoves, true)}/{tableData.length})</MoveScore>
        <PosScore>Position Predictions: {countOccurrences(correctPos, true)/tableData.length}% ({countOccurrences(correctPos, true)}/{tableData.length})</PosScore>
        <TableDiv>
            {tableData.length === 0 ? 
            <Text>No data available</Text>
            : <Table>
                <Tr>
                    <Th>Move</Th>
                    <Th>Positions</Th>
                    <Th>Lag</Th>
                    <Th>Accuracy</Th>
                    <Th>Move Correct?</Th>
                    <Th>Positions Correct?</Th>
                </Tr>
                {tableData.map((item, index) => {
                    return (
                    <Tr>
                        <Td>{item[4]}</Td>
                        <Td>{item[1] + ", " + item[2] + ", " + item[3]}</Td>
                        <Td>{item[5]}</Td>
                        <Td>{item[6]}</Td>
                        <Td><input type="checkbox" name="move" onClick={() => handleMoveCheckbox(index)}/></Td>
                        <Td><input type="checkbox" name="position" onClick={() => handlePosCheckbox(index)}/></Td>
                    </Tr>
                )})}
            </Table>}
        </TableDiv>
    </SessionTableDiv>
)}

export default SessionTable;