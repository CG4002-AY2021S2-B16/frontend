import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import styled from 'styled-components';

import { addData, addSensorData, addEMGData, toggleSync, addStartTime, addEndTime } from "../../store/data";

import colours from '../../colours';
import play from '../../play.svg';
import stop from '../../stop.svg';

const Card = styled.div`
    display: grid;
    grid-area: playstop;
    grid-template-areas: 
        'symbol'
        'save  ';
    grid-template-rows: 3fr 2fr;
    grid-gap: 5px;
    max-height: 20vh;
    margin: 10px;
    padding: 20px;
    border-radius: 6px;
    background: ${colours.gray5};
    align-content: space-evenly;
    font-weight: 300;
`

const PlayStopButton = styled.a`
    display: grid;
    grid-area: symbol;
    width: 200px;
    justify-self: center;
    :hover {
        cursor: pointer;
    }
`

const Img = styled.img`
    width: 100px;
    justify-self: center;
`

const SaveButton = styled.div`
    grid-area: save;
    margin: 5px;
    padding: 16px 0;
    background-color: ${colours.white};
    border: none;
    border-radius: 6px;
    color: ${colours.darkBlue};
    font-size: 18px;
    text-align: center;
`

// const A = styled.a`
//     font-size: 18px;
//     text-decoration: none;
//     color: ${colours.darkBlue}
//     :hover {
//         cursor: pointer;
//     }
// `

const PlayCard = () => {

    // CONSTANTS
    const API_ENDPOINT = "http://127.0.0.1:3001";
    const SOCKET_NAME_PREDICTIONS = 'predictions';
    const SOCKET_NAME_SENSOR_DATA = 'sensor';
    const SOCKET_NAME_EMG_DATA = 'emg';

    const { session } = useSelector(state => state);

    const dispatch = useDispatch();

    const toggleSocket = (session) => {
        const socket = socketIOClient(API_ENDPOINT);
        if (session.sync) {
            dispatch(addEndTime());
            console.log("disconnecting", socket.disconnect());
            socket.on(SOCKET_NAME_PREDICTIONS, function () {
                socket.disconnect();
            });
            socket.on(SOCKET_NAME_SENSOR_DATA, function () {
                socket.disconnect();
            });
        }
        else {
            dispatch(addStartTime());
            socket.on(SOCKET_NAME_PREDICTIONS, data => {
                console.log("Received prediction: ", data);
                dispatch(addData(data));
            });
            socket.on(SOCKET_NAME_SENSOR_DATA, data => {
                // console.log("Received sensor data: ", data);
                dispatch(addSensorData(data));
            });
            socket.on(SOCKET_NAME_EMG_DATA, data => {
                // console.log("Received emg data: ", data);
                dispatch(addEMGData(data));
            });
        }
        dispatch(toggleSync());
    };

    return (
        <Card>
            <PlayStopButton>
                <Img
                    src={session.sync ? stop : play}
                    alt="play button"
                    width='60px'
                    onClick={() => {
                        toggleSocket(session);
                    }}
                />
            </PlayStopButton>
            <SaveButton>
                {session.sync ? "Syncing..." : 
                <Link 
                    style = {{
                        textDecoration: 'none',
                        color: colours.darkBlue,
                        fontSize: '18px'
                    }}
                    to='/review'
                >
                    Click to review session
                </Link>}
            </SaveButton>
        </Card>
    )
}

export default PlayCard;