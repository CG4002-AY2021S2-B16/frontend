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
    max-width: 20vh;
`

const Title = styled.div`
    display: grid;
    grid-area: title;
    color: ${colours.mediumBlue};
    text-align: center;
    font-family: "Helvetica";
    font-weight: bold;
    font-size: 24px;
`

const Value = styled.div`
    display: grid;
    grid-area: value;
    max-height: 15vh;
    margin: 5px;
    padding: 15px;
    border-radius: 8px;
    background: ${colours.gray4};
    color: ${colours.black};
    text-align: center;
    font-family: "Courier New";
    font-size: 100px;
`

const PositionCard = ({area, dancer, position}) => {

    return (
        <Card area={area}>
            {dancer ? (<Title>{dancer}'s Position</Title>) : (<Title>Dancer {area[area.length-1]}'s Position</Title>)}
            <Value>{position}</Value>
        </Card>
    );
}

export default PositionCard;