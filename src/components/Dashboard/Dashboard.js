import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";

import AccuracyCard from '../AccuracyCard/AccuracyCard';
import BasicLineChart from '../BasicLineChart/BasicLineChart';
import EMGLineChart from '../EMGLineChart/EMGLineChart';
import MoveCard from '../MoveCard/MoveCard';
import PlayCard from '../PlayCard/PlayCard';
import PositionCard from '../PositionCard/PositionCard';
import SessionCard from '../SessionCard/SessionCard';
import TripleLineChart from '../TripleLineChart/TripleLineChart';
import { toggleDataView } from "../../store/data";

import colours from '../../colours';

const Body = styled.div`
    display: grid;
    grid-area: body;
    height: 100%;
    grid-template-areas: 
        'metadata stream';
    grid-template-columns: 400px 1fr;
    grid-gap: 10px;
    background: linear-gradient(180deg, ${colours.gray6} -11.15%, rgba(255, 255, 255, 0) 88.85%), ${colours.gray5};
    align-content: space-evenly;
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
    grid-gap: 10px;
    align-content: start;
`

const Stream = styled.div`
    display: grid;
    margin: 20px;
    grid-area: stream;
    grid-template-areas:
        'positions toggle'
        'moves     .     '
        'graph     graph ';
    grid-auto-rows: min-content;
    grid-gap: 10px;
    align-content: space-evenly;
`

const Positions = styled.div`
    display: grid;
    grid-area: positions;
    grid-template-areas: 'position1 position2 position3';
    grid-template-columns: auto;
    grid-gap: 10px;
    justify-content: start;
`

const Moves = styled.div`
    display: grid;
    grid-area: moves;
    grid-template-areas: 'roll pitch yaw';
    grid-template-columns: auto;
    grid-gap: 10px;
    justify-content: start;
`

const Toggle = styled.div`
    display: grid;
    grid-area: toggle;
    grid-template-areas: 
        'label checkbox';
    grid-template-rows: auto;
    grid-gap: 5px;
    justify-content: end;
    align-content: start;
`

const EMGAndChart = styled.div`
    display: grid;
    grid-area: graph;
    grid-template-areas:
        'emg chart';
    grid-template-columns: fit-content();
    grid-gap: 5px;
`

const InputLabel = styled.label`
    grid-area: checkbox;
    width: 42px;
    height: 24px;
    border-radius: 15px;
    background: ${colours.gray4};
    cursor: pointer;
    align-content: start;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin: 3px;
        background: ${colours.white};
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`

const Input = styled.input`
    grid-area: checkbox;
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${InputLabel} {
        background: ${colours.darkGreen};
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            margin-left: 22px;
            transition: 0.2s;
        }
    }
`

const Label = styled.label`
  grid-area: label;
  font-size: 14px;
  line-height: 24px;
  white-space: no-wrap;
`
const Dashboard = () => {

    const dispatch = useDispatch();
    const { data, metadata, session } = useSelector(state => state);

    var latestDataPoint = data[data.length - 1] ? data[data.length - 1] : [0, 0, 0, 0, 0, 0];
    var dancerNames = metadata['dancerNames'] ? metadata['dancerNames'] : { 1: "1", 2: "2", 3: "3" };

    const toggleView = () => {
        dispatch(toggleDataView());
    };

    return (
        <Body>
            <Metadata>
                <SessionCard grid-area="session" sessionId='current'/>
                <AccuracyCard accuracy={latestDataPoint[6]} />
                <PlayCard />
            </Metadata>
            <Stream>
                {session.dataView ?
                    // 
                    // Display sensor data
                    //
                    <>
                        <Positions>
                            <TripleLineChart area="position1" title="X" type="x" />
                            <TripleLineChart area="position2" title="Y" type="y" />
                            <TripleLineChart area="position3" title="Z" type="z" />
                        </Positions>
                        <Moves>
                            <TripleLineChart area="roll" title="Roll" type="roll" />
                            <TripleLineChart area="pitch" title="Pitch" type="pitch" />
                            <TripleLineChart area="yaw" title="Yaw" type="yaw" />
                        </Moves>
                    </>
                    :
                    // 
                    // Display prediction data
                    //
                    <>
                        <Positions>
                            <PositionCard area="position1" dancer={dancerNames[1]} position={latestDataPoint[1]} />
                            <PositionCard area="position2" dancer={dancerNames[2]} position={latestDataPoint[2]} />
                            <PositionCard area="position3" dancer={dancerNames[3]} position={latestDataPoint[3]} />
                        </Positions>
                        <MoveCard move={latestDataPoint[4]} lag={latestDataPoint[5]} />
                    </>}
                <Toggle>
                    <Input
                        id="checkbox"
                        type="checkbox"
                        onClick={() => {
                            toggleView();
                        }}
                    />
                    <InputLabel/>
                    <Label htmlFor="checkbox">View sensor data</Label>
                </Toggle>
                {session.dataView ?
                    <EMGAndChart>
                        <EMGLineChart area='emg' title="EMG" />
                        <BasicLineChart area='chart' data={data} />
                    </EMGAndChart>
                    : <BasicLineChart area='graph' data={data} />
                }  
            </Stream>
        </Body>
    )
}

export default Dashboard;