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
    max-height: 15vh;
    margin: 10px;
    border-radius: 8px;
    background: ${colours.grayBlue};
    align-content: space-evenly;
`

const Text = styled.text`
    grid-area: ${props => props.type};
    margin: 5px;
    color: ${props => props.type === "value" ? colours.white : colours.mediumBlue};
    font-size: ${props => props.type === "value" ? '40px' :'20px'};
    font-weight: bold;
`

const AccuracyCard = ({accuracy}) => (
    <Card>
        <Text type="value" grid-area="value">{accuracy}%</Text>
        <Text type="title" grid-area="title">Prediction Accuracy</Text>
    </Card>
)

export default AccuracyCard;