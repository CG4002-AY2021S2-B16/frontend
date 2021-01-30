import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';

const Card = styled.div`
    display: grid;
    grid-area: ${props => props.area};
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    background: ${colours.gray5};
`
const Heading = styled.h2`
    color: ${colours.darkBlue};
    text-align: left;
    font-size: 16px;
    margin-vertical: 5px:
`

const Text = styled.text`
    color: ${colours.black};
    text-align: left;
    font-family: "Courier New";
    font-size: 11px;
`

const HighlightText = styled.text`
    color: ${colours.black};
    text-align: left;
    font-family: "Courier New";
    font-size: 11px;
    font-weight: bold;
`

const LogsCard = ({area, title, logs}) => {

    const renderLogs = (logs) => {
        const logsLength = logs.length;
        return logs.map((item, index) => {
            if (index+1 === logsLength) {
                return <HighlightText>{item}</HighlightText>
            }
            return <Text>{item}</Text>
        })
    }

    return (
        <Card area={area}>
            <Heading>{title} Logs:</Heading>
            {renderLogs(logs)}
        </Card>
    );
}

export default LogsCard;