import { createBrowserHistory } from 'history';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import BasicBarChart from '../BasicBarChart/BasicBarChart';
import BasicLineChart from '../BasicLineChart/BasicLineChart';
import BasicPieChart from '../BasicPieChart/BasicPieChart';
import SessionCard from '../SessionCard/SessionCard';
import ValueCard from '../ValueCard/ValueCard';

import { saveDancerNames } from "../../store/data";

import colours from '../../colours';

const Body = styled.div`
    display: grid;
    grid-area: body;
    height: calc(100vh - 100px);
    grid-template-areas: 
        'overall stream';
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    background: linear-gradient(180deg, ${colours.gray6} -11.15%, rgba(255, 255, 255, 0) 88.85%), ${colours.gray5};
    align-items: space-evenly;
`

const Overall = styled.div`
    display: grid;
    margin: 20px;
    grid-area: overall;
    grid-template-areas:
        'session '
        'accuracy'
        'lag     '
        'save    ';
    grid-auto-rows: min-content;
`

const Stream = styled.div`
    display: grid;
    margin: 20px;
    grid-area: stream;
    grid-template-areas:
        'movesCount lagPerMove'
        'graph      graph     '
        '.          .         ';
    grid-auto-rows: min-content;
    grid-gap: 20px;
`

const Button = styled.div`
    grid-area: save;
    margin: 5px;
    padding: 16px 0;
    background-color: ${colours.darkGreen};
    border: none;
    border-radius: 8px;
    color: ${colours.white};
    font-size: 18px;
    :hover {
        cursor: pointer;
    }
`

const Review = () => {

    const { metadata, data } = useSelector(state => state);

    const dispatch = useDispatch();
    const history = createBrowserHistory({
        forceRefresh: true
    });

    var accuracies = data ? data.map(item => parseFloat(item[6])) : [];
    var lags = data ? data.map(item => parseFloat(item[5])) : [];

    const calculateAverage = arr => {
        return arr.reduce((a,b) => a+b, 0) / arr.length;
    }

    const saveSession = () => {
        console.log("save session");
        dispatch(saveDancerNames(metadata));
        history.push('/');
    }

    return (
        <Body>
            <Overall>
                <SessionCard grid-area="session" />
                <ValueCard area="accuracy" title={"Average \nprediction accuracy"} value={String(calculateAverage(accuracies)).substring(0,4)+"%"}/>
                <ValueCard area="lag" title="Average lag" value={String(calculateAverage(lags)*1000).substring(0, 4)+"ms"}/>
                <Button onClick={() => {
                    saveSession();
                }}>
                    Save Session
                </Button>
            </Overall>
            <Stream>
                <BasicPieChart grid-area="lagPerMove" data={data}/>
                <BasicBarChart grid-area="movesCount" data={data}/>
                <BasicLineChart grid-area="graph" data={data}/>
            </Stream>
        </Body>
    )
}

export default Review;