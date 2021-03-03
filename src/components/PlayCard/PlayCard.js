import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import styled from 'styled-components';

import { addData, toggleSync, addStartTime, addEndTime } from "../../store/data";

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
    border-radius: 8px;
    background: ${colours.gray5};
    align-content: space-evenly;
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
    border-radius: 8px;
    color: ${colours.darkBlue};
    font-size: 18px;
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
    // const SOCKET_NAMES = ["dancerOne", "dancerTwo", "dancerThree"];
    const SOCKET_NAME = 'predictions';

    const { session } = useSelector(state => state);

    const dispatch = useDispatch();

    const toggleSocket = (session) => {
        const socket = socketIOClient(API_ENDPOINT);
        if (session.sync) {
            dispatch(addEndTime());
            socket.on(SOCKET_NAME, function () {
                socket.disconnect();
            });
        }
        else {
            dispatch(addStartTime());
            socket.on(SOCKET_NAME, data => {
                dispatch(addData(data));
            });
        }
        dispatch(toggleSync());
    };

    return (
        <Card>
            <PlayStopButton
            >
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