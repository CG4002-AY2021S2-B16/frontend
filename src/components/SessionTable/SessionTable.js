import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

import colours from '../../colours';

const SessionTableDiv = styled.div`
    display: grid;
    grid-area: graph;
    grid-template-areas: 
        'title'
        'table';
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

const TableDiv = styled.div`
    display: grid;
    grid-area: table;
    margin: 10px 0;
    padding: 10px;
    height: 30vh;
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

const A = styled.a`
    font-size: 16px;
    text-decoration: none;
    color: ${colours.darkBlue}
`

const Text = styled.div`
    font-size: 20px;
    text-decoration: none;
    color: ${colours.darkBlue}
    align-self: centre;
`

const SessionTable = () => {

    const { data } = useSelector(state => state);

    const tableData = data ? data : [];

    console.log("tableData: ", data)
    
    return (
    <SessionTableDiv>
        <Title>Predictions Recorded</Title>
        <TableDiv>
            {tableData.length === 0 ? 
            <Text>No data available</Text>
            : <Table>
                <Tr>
                    <Th>Move</Th>
                    <Th>Positions</Th>
                    <Th>Lag</Th>
                    <Th>Accuracy</Th>
                </Tr>
                {tableData.map(item => {

                    return (
                    <Tr>
                        <Td>{item[4]}</Td>
                        <Td>{item[1] + ", " + item[2] + ", " + item[3]}</Td>
                        <Td>{item[5]*1000}</Td>
                        <Td>{item[6]}</Td>
                        {/* <Td><A href='/'>View Details >>></A></Td> */}
                    </Tr>
                )})}
            </Table>}
        </TableDiv>
    </SessionTableDiv>
)}

export default SessionTable;