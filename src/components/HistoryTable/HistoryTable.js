import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

import { getPastSessions } from "../../store/data";

import colours from '../../colours';

const HistoryTableDiv = styled.div`
    display: grid;
    grid-area: past;
    grid-template-areas: 
        'title'
        'table';
    width: 85vw;
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
    min-height: 40px;
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

const HistoryTable = () => {

    const { history } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPastSessions());
    }, [dispatch]);

    const graphData = history ? history : [];
    const items = {};

    graphData.forEach(item => {
        var id = item["sessionid"];
        if (items[id]) {
            items[id][item["field"]] = item["value"];
        }
        else {
            var session = {
                "time": item["time"],
                "date": item["date"],
            }
            items[id] = session;
            items[id][item["field"]] = item["value"];
        }
    });

    return (
        <HistoryTableDiv>
            <Title>Past Sessions</Title>
            <TableDiv>
                {graphData.length === 0 ?
                    <Text>Not connected to backend</Text>
                    : <Table>
                        <tbody>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Date</Th>
                            <Th>Time</Th>
                            <Th>Dancers</Th>
                            <Th>View Session</Th>
                        </Tr>
                        {Object.entries(items).map((item, index) => {

                            var dancerOneName = item[1]["dancerOneName"] ? item[1]["dancerOneName"] : "Not recorded";
                            var dancerTwoName = item[1]["dancerTwoName"] ? item[1]["dancerTwoName"] : "Not recorded";
                            var dancerThreeName = item[1]["dancerThreeName"] ? item[1]["dancerThreeName"] : "Not recorded";

                            // Convert UTC to SGT
                            var time = item[1]["time"];
                            var hour = parseInt(time[0]+time[1]) + 8;
                            var sgtTime = hour + time.substring(2)

                            return (
                                <Tr key={index}>
                                    <Td>{item[0]}</Td>
                                    <Td>{item[1]["date"]}</Td>
                                    <Td>{sgtTime}</Td>
                                    <Td>{dancerOneName + ", " + dancerTwoName + ", " + dancerThreeName}</Td>
                                    <Td>
                                        <Link
                                            style={{
                                                textDecoration: 'none',
                                                color: colours.darkBlue,
                                                fontSize: '16px'
                                            }}
                                            to={'/review/' + item[0]}
                                        >
                                            View Details >>>
                                        </Link>
                                    </Td>
                                </Tr>
                            )
                        })}
                        </tbody>
                    </Table>}
            </TableDiv>
        </HistoryTableDiv>
    )
}

export default HistoryTable;