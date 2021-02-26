import React from 'react';
import { useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
import styled from 'styled-components';

import { addData, startSync, endSync, toggleSync } from "../../store/data";

import colours from '../../colours';
import play from '../../play.svg';

const Card = styled.div`
    display: grid;
    grid-area: playstop;
    grid-template-areas: 
        'symbol'
        'save  ';
    grid-template-rows: 3fr 2fr;
    grid-gap: 5px;
    max-height: 20vh;
    padding: 10px;
    border-radius: 8px;
    background: ${colours.gray5};
    align-content: space-evenly;
`

const PlayStopButton = styled.a`
    display: grid;
    grid-area: symbol;
    width: 200px;
    justify-self: center;
`

const Img = styled.img`
    width: 100px;
    justify-self: center;
`

const SaveButton = styled.button`
    grid-area: save;
    margin: 5px;
    padding: 8px 0;
    background-color: ${colours.white};
    border: none;
    border-radius: 8px;
    color: ${colours.darkBlue};
    font-size: 20px;
`

const PlayCard = () => {

    // CONSTANTS
    const API_ENDPOINT = "http://127.0.0.1:3001";
    // const SOCKET_NAMES = ["dancerOne", "dancerTwo", "dancerThree"];
    const SOCKET_NAME = 'predictions';

    const dispatch = useDispatch();

    const openSocket = () => {
        dispatch(toggleSync());
        const socket = socketIOClient(API_ENDPOINT);
        socket.on(SOCKET_NAME, data => {
            dispatch(addData(data));
        });
    };

    // const openSocket = () => {
    //     console.log("clicked");
    // }

    return (
        <Card>
            <PlayStopButton
            >
                <Img 
                    src={play} 
                    alt="play button" 
                    width='60px' 
                    onClick={() => {
                        openSocket();
                    }}
                />
            </PlayStopButton>
            <SaveButton>Save Session</SaveButton>
        </Card>
    )
}

export default PlayCard;