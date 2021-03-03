import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

// import BasicBarChart from '../BasicBarChart/BasicBarChart';
// import BasicLineChart from '../BasicLineChart/BasicLineChart';
// import BasicPieChart from '../BasicPieChart/BasicPieChart';
// import SessionCard from '../SessionCard/SessionCard';
import ValueCard from '../ValueCard/ValueCard';

import { getOverallAverageAccuracy, getOverallAverageLag } from "../../store/data";

import colours from '../../colours';

const Body = styled.div`
    display: grid;
    grid-area: body;
    height: calc(100vh - 100px);
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
    margin: 20px;
    grid-area: overall;
    grid-template-areas:
        'overallaccuracy overallchart'
        'overalllag      overallchart';
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: min-content;
`

const Past = styled.div`
    display: grid;
    margin: 20px;
    grid-area: past;
`

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
                <ValueCard area="overallaccuracy" title={"Average \nprediction accuracy"} value={String(metadata['overallAverageAccuracy']).substring(0,5)+"%"}/>
                <ValueCard area="overalllag" title="Average lag" value={String(metadata['overallAverageLag']*1000).substring(0, 4)+"ms"}/>
            </Overall>
            <Past>
            </Past>
        </Body>
    )
}

export default History;