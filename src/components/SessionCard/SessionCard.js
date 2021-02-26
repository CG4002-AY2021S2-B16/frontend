import React from 'react';
import styled from 'styled-components';

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
    grid-gap: 5px;
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

const Input = styled.input`
    display: grid;
    grid-area: ${props => props.area};
    background-color: ${colours.white};
    color: ${colours.darkBlue};
    background-color: ${colours.white};
    border: none;
    border-radius: 8px;
    text-align: left;
    font-size: 20px;
`

const SessionCard = () => (
    <Card>
        <Title>Session Details</Title>
        <Details>
            <Session>
                <Text grid-area="id">#017</Text>
                <Text grid-area="date">22 February 2021</Text>
            </Session>
            <Dancers>
                <Text area="dancer1Label">Dancer 1</Text>
                <Text area="dancer2Label">Dancer 2</Text>
                <Text area="dancer3Label">Dancer 3</Text>
                <Input area="dancer1Input" />
                <Input area="dancer2Input" />
                <Input area="dancer3Input" />
            </Dancers>
        </Details>
    </Card>
)

export default SessionCard;