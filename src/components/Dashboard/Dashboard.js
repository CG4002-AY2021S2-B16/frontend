import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

import AccuracyCard from '../AccuracyCard/AccuracyCard';
import BasicLineChart from '../BasicLineChart/BasicLineChart';
import MoveCard from '../MoveCard/MoveCard';
import PlayCard from '../PlayCard/PlayCard';
import PositionCard from '../PositionCard/PositionCard';
import SessionCard from '../SessionCard/SessionCard';
// import staticDancerLogs from '../../staticDancerLogs';
// import staticSensorLogs from '../../dummyLogs';

import colours from '../../colours';

const Body = styled.div`
    display: grid;
    grid-area: body;
    height: calc(100vh - 100px);
    grid-template-areas: 
        'metadata stream';
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    background: linear-gradient(180deg, ${colours.gray6} -11.15%, rgba(255, 255, 255, 0) 88.85%), ${colours.gray5};
    align-items: space-evenly;
`

const Metadata = styled.div`
    display: grid;
    margin: 20px;
    grid-area: metadata;
    grid-template-areas:
        'session '
        'playstop'
        'accuracy'
        '.       ';
    grid-auto-rows: min-content;
`

const Stream = styled.div`
    display: grid;
    margin: 20px;
    grid-area: stream;
    grid-template-areas:
        'positions'
        'current '
        'graph   '
        '.       ';
    grid-auto-rows: min-content;
    grid-gap: 20px;
`

const Positions = styled.div`
    display: grid;
    grid-area: positions;
    grid-template-areas: 'dancer1 dancer2 dancer3';
    grid-template-columns: auto;
    grid-gap: 10px;
    justify-content: start;
`

const Dashboard = () => {

    const { data, metadata } = useSelector(state => state);

    var latestDataPoint = data[data.length-1] ? data[data.length-1] : [0,0,0,0,0,0];
    var dancerNames = metadata['dancerNames'] ? metadata['dancerNames'] : {1: "Dancer 1", 2: "Dancer 2", 3: "Dancer 3"};

    return (
        <Body>
            <Metadata>
                <SessionCard grid-area="session" />
                <AccuracyCard accuracy={latestDataPoint[6]}/>
                <PlayCard />
            </Metadata>
            <Stream>
                <Positions>
                    <PositionCard area="dancer1" dancer={dancerNames[1]} position={latestDataPoint[1]}/>
                    <PositionCard area="dancer2" dancer={dancerNames[2]} position={latestDataPoint[2]}/>
                    <PositionCard area="dancer3" dancer={dancerNames[3]} position={latestDataPoint[3]}/>
                </Positions>
                <MoveCard move={latestDataPoint[4]} lag={latestDataPoint[5]*1000}/>
                <BasicLineChart grid-area="graph" data={data}/>
            </Stream>
        </Body>
    )
}

export default Dashboard;