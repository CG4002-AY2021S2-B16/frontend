import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: accuracy;
    grid-template-areas: 
        'value'
        'title';
    grid-template-rows: 3fr 2fr;
    height: 15vh;
    margin: 10px;
    padding: 20px;
    border-radius: 6px;
    background: ${props => props.orange === true ? colours.darkOrange : colours.darkBlue};
    align-content: space-evenly;
    font-weight: 300;
`

const Text = styled.div`
    grid-area: ${props => props.type};
    margin: 5px;
    color: ${colours.white};
    font-size: ${props => props.type === "value" ? '40px' :'20px'};
    text-align: center;
`

const AccuracyCard = ({accuracy}) => (
    <Card orange={accuracy < 95}>
        <Text type="value" grid-area="value">{accuracy ? String(accuracy).substring(0,5)+'%' : '-'}</Text>
        <Text type="title" grid-area="title">Prediction Accuracy</Text>
    </Card>
)

export default AccuracyCard;