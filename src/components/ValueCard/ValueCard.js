import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: ${props => props.area};
    grid-template-areas: 
        'value'
        'title';
    grid-template-rows: 3fr 2fr;
    min-height: 14vh;
    height: ${props => props.height};
    margin: 10px;
    padding: 20px;
    border-radius: 6px;
    background: ${colours.darkBlue};
    align-content: space-evenly;
    text-align: center;
    align-self: space-evenly;
    font-weight: 300;
`

const Text = styled.div`
    grid-area: ${props => props.type};
    margin: 10px;
    padding: 0 30px;
    color: ${props => props.type === "value" ? colours.white : colours.white};
    font-size: ${props => props.type === "value" ? '40px' :'20px'};
    font-weight: 300;
`

const ValueCard = ({area, title, value, height}) => (
    <Card area={area} height={height}>
        <Text type="value" grid-area="value">{value}</Text>
        <Text type="title" grid-area="title">{title}</Text>
    </Card>
)

export default ValueCard;