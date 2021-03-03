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
    height: 15vh;
    margin: 10px;
    padding: 20px;
    border-radius: 8px;
    background: ${colours.darkBlue};
    align-content: space-evenly;
`

const Text = styled.div`
    grid-area: ${props => props.type};
    margin: 10px;
    padding: 0 30px;
    color: ${props => props.type === "value" ? colours.white : colours.white};
    font-size: ${props => props.type === "value" ? '40px' :'20px'};
`

const ValueCard = ({title, value}) => (
    <Card>
        <Text type="value" grid-area="value">{value}</Text>
        <Text type="title" grid-area="title">{title}</Text>
    </Card>
)

export default ValueCard;