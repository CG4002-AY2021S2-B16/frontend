import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: moves;
    grid-template-areas: 'move  lag';
    grid-template-columns: 2fr 1fr;
    min-height: 10vh;
    max-width: 40vw;
    margin-left: 10px;
    padding: 20px;
    border-radius: 6px;
    background: ${colours.darkBlue};
    align-self: center;
    align-items: space-evenly;
    font-weight: 300;
`

const Text = styled.div`
    margin: 10px;
    color: ${props => props.type === "move" ? colours.white : colours.lightYellow};
    text-align: ${props => props.type === 'move' ? 'left' : 'right'};
    font-size: 55px;
    line-height: 10vh;
`

const MoveCard = ({move, lag}) => (
    <Card>
        <Text type="move" grid-area="move">{move}</Text>
        <Text type="lag" grid-area="lag">{lag}ms</Text>
    </Card>
)

export default MoveCard;