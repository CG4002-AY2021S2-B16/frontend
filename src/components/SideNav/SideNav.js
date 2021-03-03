import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import colours from '../../colours';

const Nav = styled.div`
    text-align: center;
    display: grid;
    grid-area: sidenav;
    height: 100%;
    background: ${colours.darkBlue};
    color: ${colours.white};
`

const Ul = styled.ul`
    list-style-type: none;
    width: 100%;
    padding: 0;
`

const Li = styled.li`
    height: 50px;
    margin: 10px 0;
    padding: 0 20px;
    background: ${props => props.path ? colours.dullBlue : colours.darkBlue}
`

const A = styled.a`
    line-height: 45px;
    font-size: 18px;
    text-decoration: none;
    color: ${colours.white}
`

const SideNav = () => {

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    
    return (
    <Nav>
        <Ul>
            <Li path={usePathname()==='/'}>
                <Link 
                    style={{ 
                        textDecoration: 'none', 
                        lineHeight: '45px', 
                        color: colours.white, 
                        fontSize: '18px'
                    }} 
                    to="/">
                        Current Session
                </Link>
            </Li>
            <Li path={usePathname()==='/history'}>
            <A href="/history">
                Past Sessions
            </A>
            </Li>
        </Ul>
    </Nav>
)}

export default SideNav;