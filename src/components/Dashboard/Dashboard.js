import React from 'react';
import styled from 'styled-components';

import LineChart from '../LineChart/LineChart';
import LogsCard from '../LogsCard/LogsCard';
import ValueCard from '../ValueCard/ValueCard';
import staticDancerLogs from '../../staticDancerLogs';
import staticSensorLogs from '../../staticSensorLogs';

import colours from '../../colours';

const Body = styled.div`
    display: grid;
    height: 100%;
    grid-template-areas: 
        'analytics logs';
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    background: linear-gradient(180deg, ${colours.gray6} -11.15%, rgba(255, 255, 255, 0) 88.85%), ${colours.gray4};
`

const Analytics = styled.div`
    display: grid;
    margin: 5px;
    grid-area: analytics;
    grid-template-areas:
        'latest     '
        'last10chart';
`

const Logs = styled.div`
    display: grid;
    margin: 5px;
    grid-area: logs;
    grid-template-areas:
        'dancer1 dancer2 dancer3'
        'sensor  sensor  sensor';
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

const Dashboard = () => (
    <Body>
        <Analytics>
            <ValueCard area="latest" title="Latest Move" type="Gun" value="180ms" />
            <LineChart area="last10chart" title="Last Ten Moves" type="Point High" value="180ms" />
        </Analytics>
        <Logs>
            <LogsCard area="dancer1" title="Dancer 1" logs={staticDancerLogs}/>
            <LogsCard area="dancer2" title="Dancer 2" logs={staticDancerLogs}/>
            <LogsCard area="dancer3" title="Dancer 3" logs={staticDancerLogs}/>
            <LogsCard area="sensor" title="Sensor" logs={staticSensorLogs}/>
        </Logs>
    </Body>
)

export default Dashboard;