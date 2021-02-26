import React, { useState, useEffect } from "react";
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
`

const Title = styled.div`
    display: grid;
    grid-area: title;
    color: ${colours.mediumBlue};
    text-align: left;
    font-family: "Helvetica";
    font-weight: bold;
    font-size: 24px;
`

const Details = styled.div`
    display: grid;
    grid-area: details;
    grid-template-areas: 
        'session'
        'dancers';
    grid-template-rows: 2fr 3fr;
    padding: 10px;
    border-radius: 8px;
    background: ${colours.gray5};
`

const Session = styled.div`
    display: grid;
    grid-area: session;
    grid-template-areas: 
        'id  '
        'date';
    grid-template-rows: 1fr 1fr;
    color: ${colours.darkBlue};
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

const Text = styled.text`
    display: grid;
    grid-area: ${props => props.area};
    color: ${colours.darkBlue};
    text-align: left;
    font-size: 18px;
    white-space: nowrap;
    align-self: center;
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

    const dispatch = useDispatch();

    const updateDancerName = (event) => {
        if (event.target.id === '1') dispatch(updateDancerOneName(event.target.value));
        else if (event.target.id === '2') dispatch(updateDancerTwoName(event.target.value));
        else dispatch(updateDancerThreeName(event.target.value));
    }
    
    return (
        <Card>
            <Title>Session Details</Title>
            <Details>
                <Session>
                    <Text grid-area="id">#017</Text>
                    <Text grid-area="date">22 February 2021</Text>
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
                        placeholder="Enter Dancer 1's name"
                    />
                    <Input 
                        area="dancer2Input" 
                        id="2"
                        onBlur={(event) => {
                            updateDancerName(event);
                        }}
                        placeholder="Enter Dancer 2's name"
                    />
                    <Input 
                        area="dancer3Input" 
                        id="3"
                        onBlur={(event) => {
                            updateDancerName(event);
                        }}
                        placeholder="Enter Dancer 3's name"
                    />
                    {/* <Input area="dancer2Input" />
                    <Input area="dancer3Input" /> */}
                </Dancers>
            </Details>
        </Card>
    )
}

export default SessionCard;