import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import { updateDancerOneName, updateDancerTwoName, updateDancerThreeName } from "../../store/data";

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: session;
    grid-template-areas: 
        'title'
        'details';
    grid-template-rows: 30px auto;
    grid-gap: 5px;
    margin: 10px;
    height: 280px;
`

const Title = styled.div`
    display: grid;
    grid-area: title;
    color: ${colours.darkGreen};
    text-align: left;
    font-family: "Helvetica";
    font-weight: bold;
    font-size: 22px;
`

const Details = styled.div`
    display: grid;
    grid-area: details;
    grid-template-areas: 
        'session'
        'dancers';
    grid-template-rows: 2fr 3fr;
    padding: 20px;
    border-radius: 8px;
    background: ${colours.gray5};
`

const Session = styled.div`
    display: grid;
    grid-area: session;
    grid-template-areas: 
        'id  '
        'date';
    grid-auto-rows: min-content;
    grid-gap: 10px;
    color: ${colours.darkBlue};
    justify-content: start;
    align-items: center;
`

const Dancers = styled.div`
    display: grid;
    grid-area: dancers;
    grid-template-areas: 
        'dancer1Label dancer1Input'
        'dancer2Label dancer2Input'
        'dancer3Label dancer3Input';
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 2fr 3fr;
    grid-gap: 10px;
`

const Text = styled.div`
    display: grid;
    grid-area: ${props => props.area};
    color: ${colours.darkBlue};
    text-align: left;
    font-size: 18px;
    white-space: nowrap;
    font-weight: bold;
`

const Label = styled.label`
    display: grid;
    grid-area: ${props => props.area};
    color: ${colours.darkBlue};
    text-align: left;
    font-size: 18px;
    white-space: nowrap;
    align-self: center;
`

const Input = styled.input`
    display: grid;
    grid-area: ${props => props.area};
    padding: 0 5px;
    background-color: ${colours.white};
    color: ${colours.darkBlue};
    border: none;
    border-radius: 8px;
    text-align: left;
    font-size: 16px;
`

const SessionCard = () => {

    const { metadata, session } = useSelector(state => state);

    const dispatch = useDispatch();

    // dispatch(getNewSessionId());

    const date = Date().split(' ');
    date.splice(-5);
    const currentDate = date.join(' ')
    // console.log(currentDate);

    const updateDancerName = (event) => {
        if (event.target.id === '1') dispatch(updateDancerOneName(event.target.value));
        else if (event.target.id === '2') dispatch(updateDancerTwoName(event.target.value));
        else dispatch(updateDancerThreeName(event.target.value));
    }
    
    const getTimeElapsed = (metadata) => {
        if (metadata["startTime"] && session.sync) { 
            var secondsElapsed = (Date.now()-metadata["startTime"])/1000;
            return secondsElapsed;
        }
        return 0;
    }

    return (
        <Card>
            <Title>Session Details</Title>
            <Details>
                <Session>
                    <Text grid-area="id">{currentDate}</Text>
                    <Text grid-area="date">Time elapsed: {getTimeElapsed(metadata)}s</Text>
                </Session>
                <Dancers>
                    <Label area="dancer1Label">Dancer 1</Label>
                    <Label area="dancer2Label">Dancer 2</Label>
                    <Label area="dancer3Label">Dancer 3</Label>
                    <Input 
                        area="dancer1Input" 
                        id="1"
                        onBlur={(event) => {
                            updateDancerName(event);
                        }}
                        placeholder={metadata['dancerNames'] ? metadata['dancerNames'][1] : "Enter Dancer 1's name"}
                    />
                    <Input 
                        area="dancer2Input" 
                        id="2"
                        onBlur={(event) => {
                            updateDancerName(event);
                        }}
                        placeholder={metadata['dancerNames'] ? metadata['dancerNames'][2] : "Enter Dancer 2's name"}
                    />
                    <Input 
                        area="dancer3Input" 
                        id="3"
                        onBlur={(event) => {
                            updateDancerName(event);
                        }}
                        placeholder={metadata['dancerNames'] ? metadata['dancerNames'][3] : "Enter Dancer 3's name"}
                    />
                </Dancers>
            </Details>
        </Card>
    )
}

export default SessionCard;