import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: current;
    grid-template-areas: 'move  lag';
    grid-template-columns: 2fr 1fr;
    max-height: 20vh;
    max-width: 65vh;
    margin: 5px;
    margin-left: 70px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
    background: ${colours.darkBlue};
    align-self: center;
    align-items: space-evenly;
`

const Text = styled.text`
    margin: 10px;
    padding: 20px 0px; 
    color: ${props => props.type === "move" ? colours.white : colours.lightYellow};
    text-align: ${props => props.type === 'move' ? 'left' : 'right'};
    font-size: 55px;
`

const MoveCard = ({move, lag}) => (
    <Card>
        <Text type="move" grid-area="move">{move}</Text>
        <Text type="lag" grid-area="lag">{lag}ms</Text>
    </Card>
)

export default MoveCard;