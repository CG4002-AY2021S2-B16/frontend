import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";

import AccuracyCard from '../AccuracyCard/AccuracyCard';
import LineChart from '../LineChart/LineChart';
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
    padding: 20px;
    grid-template-areas: 
        'metadata stream';
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    background: linear-gradient(180deg, ${colours.gray6} -11.15%, rgba(255, 255, 255, 0) 88.85%), ${colours.gray5};
`

const Metadata = styled.div`
    display: grid;
    margin: 5px;
    grid-area: metadata;
    grid-template-areas:
        'session '
        'playstop'
        'accuracy';
    grid-gap: 20px;
`

const Stream = styled.div`
    display: grid;
    margin: 5px;
    grid-area: stream;
    grid-template-areas:
        'positions'
        'current '
        'graph   ';
    grid-template-rows: 2fr 2fr 3fr;
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

    const { data } = useSelector(state => state);

    var latestDataPoint = data[data.length-1] ? data[data.length-1] : [0,0,0,0,0,0];

    return (
        <Body>
            <Metadata>
                <SessionCard grid-area="session" />
                <AccuracyCard accuracy={latestDataPoint[6]}/>
                <PlayCard />
                {/* <MoveCard area="latest" title="Latest Move and Lag" move={latestDataPoint[4]} value={latestDataPoint[5]*1000+"ms"} kind="group"/> */}
                {/* <LineChart area="last10chart" title="Last Ten Moves" type="Point High" value="180ms" /> */}
            </Metadata>
            <Stream>
                <Positions>
                    <PositionCard area="dancer1" position={latestDataPoint[1]}/>
                    <PositionCard area="dancer2" position={latestDataPoint[2]}/>
                    <PositionCard area="dancer3" position={latestDataPoint[3]}/>
                </Positions>
                <MoveCard move={latestDataPoint[4]} lag={latestDataPoint[5]*1000}/>
            </Stream>
        </Body>
    )
}

export default Dashboard;