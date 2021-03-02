import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';
import logo from '../../streamteam_header.png';

const Nav = styled.div`
    text-align: center;
    display: grid;
    grid-area: sidenav;
    background: ${colours.darkBlue};
`

const Ul = styled.ul`
    list-style-type: none;
`

const Li = styled.li`
    font-size: 18px;
    background-color: ${colours.lightBlue}
    color: ${colours.white}
`

const SideNav = () => (
    <Nav>
        {/* <Ul>
            <Li><a>Current Session</a></Li>
            <Li><a>Past Sessions</a></Li>
        </Ul> */}
    </Nav>
)

export default SideNav;