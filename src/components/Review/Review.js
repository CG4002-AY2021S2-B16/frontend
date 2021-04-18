import { createBrowserHistory } from 'history';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import BasicBarChart from '../BasicBarChart/BasicBarChart';
import BasicPieChart from '../BasicPieChart/BasicPieChart';
import SessionCard from '../SessionCard/SessionCard';
import SessionTable from '../SessionTable/SessionTable';
import ValueCard from '../ValueCard/ValueCard';

import { getPastSession, getPastSessions, saveDancerNames, savePoint } from "../../store/data";

import colours from '../../colours';
import chartColours from '../../chartColours';

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
        'save    '
        'lag     '
        'accuracy';
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
    margin: 5px 10px;
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
    const hist = createBrowserHistory({
        forceRefresh: true
    });

    // const formattedHistory = history ? history : [];
    // var items = {};

    const sessionId = props.match.params.id;
    const accuracies = data ? data.map(item => parseFloat(item[6])) : [];
    const lags = data ? data.map(item => parseFloat(item[5])) : [];
    var chartData = [];

    useEffect(() => {
        if (sessionId !== 'current') {
            dispatch(getPastSession(sessionId));
        }
        else {
            dispatch(getPastSessions())
        }
    }, [dispatch, sessionId]);

    if (sessionId === 'current') {
        console.log('current - chartData: ', chartData);
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
        data.forEach(point => dispatch(savePoint(point, id)))
        hist.push('/history');
    }

    return (
        <Body>
            <Overall>
                <SessionCard grid-area="session" sessionId={sessionId} />
                <ValueCard
                    area="accuracy"
                    title={"Average ML\nprediction accuracy"}
                    value={sessionId === 'current' ?
                        String(calculateAverage(accuracies)).substring(0, 4) + "%"
                        : specificHistory["accuracy"] ?
                        String(specificHistory["accuracy"]).substring(0, 4) + "%"
                        : "No data"}
                />
                <ValueCard
                    area="lag"
                    title="Average lag"
                    value={sessionId === 'current' ?
                        String(calculateAverage(lags)).substring(0, 4) + "ms"
                        : specificHistory["lag"] ?
                        String(specificHistory["lag"]).substring(0, 4) + "ms"
                        : "No data"}
                />
                <Button onClick={() => {
                    saveSession();
                }}>
                    {sessionId === 'current' ? 'Save Session' : 'Update Dancer Names'}
                </Button>
            </Overall>
            <Stream>
                <BasicPieChart grid-area="lagPerMove" data={chartData} />
                <BasicBarChart grid-area='movesCount' data={chartData} component='review' session={sessionId} />
                <SessionTable session={sessionId} />
            </Stream>
        </Body>
    )
}

export default Review;