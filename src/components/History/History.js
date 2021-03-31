import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

import BasicBarChart from '../BasicBarChart/BasicBarChart';
// import BasicLineChart from '../BasicLineChart/BasicLineChart';
// import BasicPieChart from '../BasicPieChart/BasicPieChart';
// import SessionCard from '../SessionCard/SessionCard';
import HistoryTable from '../HistoryTable/HistoryTable';
import ValueCard from '../ValueCard/ValueCard';

import { getOverallAverageAccuracy, getOverallAverageLag } from "../../store/data";

import colours from '../../colours';

//height: calc(100vh - 100px);

const Body = styled.div`
    display: grid;
    grid-area: body;
    height: 100%;
    grid-template-areas: 
        'overall'
        'past   ';
    grid-auto-rows: min-content;
    grid-gap: 10px;
    background: linear-gradient(180deg, ${colours.gray6} -11.15%, rgba(255, 255, 255, 0) 88.85%), ${colours.gray5};
    align-items: space-evenly;
`

const Overall = styled.div`
    display: grid;
    margin: 20px 20px 0 20px;
    grid-area: overall;
    grid-template-areas:
        'values chart';
    grid-template-columns: 1fr 2fr;
`

const Values = styled.div`
    display: grid;
    grid-area: values;
    grid-template-areas:
        'acc'
        'lag';
    align-content: stretch;
`

const Past = styled.div`
    display: grid;
    margin: 20px;
    grid-area: past;
    justify-content: left;
`

const Div = styled.div`
    display: grid;
    grid-area: chart;
    margin: 10px;
    padding: 10px;
    border-radius: 6px;
    background: ${colours.darkBlue}
`

// TODO: Get actual data instead of placeholder data
const data = [
    {
        move: "gun",
        lag: 1230
    },
    {
        move: "hair",
        lag: 989
    },
    {
        move: "sidepump",
        lag: 2000
    },
    {
        move: "dab",
        lag: 1115
    },
    {
        move: "wipetable",
        lag: 1894
    },
    {
        move: "elbowkick",
        lag: 1744
    },
    {
        move: "pointhigh",
        lag: 2210
    },
    {
        move: "listen",
        lag: 807
    },
]

const History = () => {

    const { metadata } = useSelector(state => state);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (metadata["overallAverageAccuracy"]) {
            return;
        }
        dispatch(getOverallAverageAccuracy());
        if (metadata["overallAverageLag"]) {
            return;
        }
        dispatch(getOverallAverageLag());
    });

    return (
        <Body>
            <Overall>
                <Values>
                    <ValueCard area='acc' title={"Average \nprediction accuracy"} value={String(metadata['overallAverageAccuracy']).substring(0,5)+"%"}/>
                    <ValueCard area='lag' title="Average lag" value={String(metadata['overallAverageLag']).substring(0, 4)+"ms"}/>
                </Values>
                <Div><BasicBarChart data={data} component="history"/></Div>
            </Overall>
            <Past>
                <HistoryTable />
            </Past>
        </Body>
    )
}

export default History;