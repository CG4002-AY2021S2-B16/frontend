import { createBrowserHistory } from 'history';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import BasicBarChart from '../BasicBarChart/BasicBarChart';
import BasicPieChart from '../BasicPieChart/BasicPieChart';
import SessionCard from '../SessionCard/SessionCard';
import SessionTable from '../SessionTable/SessionTable';
import ValueCard from '../ValueCard/ValueCard';

import { getPastSession, saveDancerNames, savePoint } from "../../store/data";

import colours from '../../colours';

// calc(100vh - 100px);
const Body = styled.div`
    display: grid;
    grid-area: body;
    height: 100%;
    grid-template-areas: 
        'overall stream';
    grid-template-columns: 400px 1fr;
    grid-gap: 10px;
    background: linear-gradient(180deg, ${colours.gray6} -11.15%, rgba(255, 255, 255, 0) 88.85%), ${colours.gray5};
    align-content: space-evenly;
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
    align-content: start;
`

const Stream = styled.div`
    display: grid;
    margin: 20px;
    grid-area: stream;
    grid-template-areas:
        'movesCount lagPerMove'
        'graph      graph     ';
    grid-auto-rows: min-content;
    grid-gap: 20px;
    align-content: space-evenly;
`

const Button = styled.div`
    grid-area: save;
    margin: 5px;
    padding: 16px 0;
    background-color: ${colours.darkGreen};
    border: none;
    border-radius: 6px;
    color: ${colours.white};
    font-size: 18px;
    :hover {
        cursor: pointer;
    }
    text-align: center;
`

const Review = (props) => {

    const { metadata, data, specificHistory } = useSelector(state => state);

    const dispatch = useDispatch();
    const history = createBrowserHistory({
        forceRefresh: true
    });

    const sessionId = props.match.params.id;
    const accuracies = data ? data.map(item => parseFloat(item[6])) : [];
    const lags = data ? data.map(item => parseFloat(item[5])) : [];
    var chartData = [];

    useEffect(() => {
        if (sessionId !== 'current') {
            dispatch(getPastSession(sessionId))
        }
    }, [dispatch, sessionId]);

    if (sessionId === 'current') {
        chartData = data ? data : [];
    }
    else {
        chartData = specificHistory.moves ? specificHistory.moves : [];
    }

    const calculateAverage = arr => {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    const saveSession = () => {
        const id = sessionId === 'current' ? metadata.sessionId : sessionId;
        dispatch(saveDancerNames(metadata, id));
        var i;
        if (sessionId === 'current') {
            for (i=0; i<chartData.length; i++) {
                dispatch(savePoint(chartData[i], id))
            }

        }
        history.push('/history');
    }

    return (
        <Body>
            <Overall>
                <SessionCard grid-area="session" />
                <ValueCard
                    area="accuracy"
                    title={"Average \nprediction accuracy"}
                    value={sessionId === 'current' ?
                        String(calculateAverage(accuracies)).substring(0, 4) + "%"
                        : String(specificHistory["accuracy"]).substring(0, 4) + "%"}
                />
                <ValueCard
                    area="lag"
                    title="Average lag"
                    value={sessionId === 'current' ?
                        String(calculateAverage(lags)).substring(0, 4) + "ms"
                        : String(specificHistory["lag"]).substring(0, 4) + "ms"}
                />
                <Button onClick={() => {
                    saveSession();
                }}>
                    {sessionId === 'current' ? 'Save Session' : 'Update Session'}
                </Button>
            </Overall>
            <Stream>
                <BasicPieChart grid-area="lagPerMove" data={chartData} />
                <BasicBarChart grid-area='movesCount' data={chartData} component='review' />
                <SessionTable session={sessionId} />
            </Stream>
        </Body>
    )
}

export default Review;