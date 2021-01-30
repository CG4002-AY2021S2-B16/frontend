import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: ${props => props.area};
    grid-template-areas: 
        'title title'
        'type  value';
    grid-template-columns: 1fr 1fr;
    max-height: 20vh;
    width: 100%;
    margin: 10px;
    border-radius: 10px;
    background: ${colours.darkBlue}
`

const Heading = styled.h2`
    grid-area: title;
    margin: 10px;
    color: ${colours.white};
    text-align: left;
    font-size: 16px;
    margin-vertical: 5px:
`

const Text = styled.text`
    grid-area: ${props => props.type};
    margin: 10px;
    color: ${colours.white};
    text-align: ${props => props.type === 'type' ? 'left' : 'right'};
    font-size: 32px;
`

const LineChart = ({area, title, type, value}) => (
    <Card area={area}>
        <Heading>{title}</Heading>
        <Text type="type">{type}</Text>
        <Text type="value">{value}</Text>
    </Card>
)

export default LineChart;