import React from 'react';
import styled from 'styled-components';

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
    max-height: 15vh;
    padding: 10px;
    border-radius: 8px;
    background: ${colours.gray5};
    align-content: space-evenly;
`

const PlayStopButton = styled.img`
    display: grid;
    grid-area: symbol;
    height: 100%;
    width: 200px;
    justify-self: center;
`

const SaveButton = styled.button`
    grid-area: save;
    margin: 5px;
    background-color: ${colours.white};
    border: none;
    border-radius: 8px;
    color: ${colours.darkBlue};
    font-size: 20px;
`

const PlayCard = ({accuracy}) => (
    <Card>
        <PlayStopButton src={play} alt="play button"/>
        <SaveButton>Save Session</SaveButton>
    </Card>
)

export default PlayCard;