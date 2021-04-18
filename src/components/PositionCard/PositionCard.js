import React from "react";
import styled from 'styled-components';

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: ${props => props.area};
    grid-template-areas: 
        'title'
        'value';
    grid-template-rows: 1fr 3fr;
    grid-gap: 5px;
    margin-top: 10px;
    margin-left: 10px;
    min-width: 10vw;
`

const Title = styled.div`
    display: grid;
    grid-area: title;
    color: ${colours.darkGreen};
    text-align: left;
    font-size: 22px;
    font-weight: 300;
`

const Value = styled.div`
    display: grid;
    grid-area: value;
    max-height: 12vh;
    margin: 0;
    padding: 10px;
    border-radius: 6px;
    background: ${colours.gray4};
    color: ${colours.black};
    text-align: center;
    font-size: 100px;
    font-family: 'Courier New';
`

const PositionCard = ({area, position, dancer}) => {

    return (
        <Card area={area}>
            {/* {dancer ? (<Title>{dancer}'s<br/> Position</Title>) : (<Title>Dancer {area[area.length-1]}'s Position</Title>)} */}
            <Title>In Position {area[area.length - 1]}:</Title>
            <Value>{position}</Value>
        </Card>
    );
}

export default PositionCard;