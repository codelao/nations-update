import React from 'react';
import { Navbar, NavItem, NavLink, Nav} from 'mdbreact';
import NavbarItem from './NavbarItem';
import {history} from './index'
const MentorHomeItem = NavbarItem('Home', 'mentorhome', 'mentorhome')



const LoggedInBottomNav = () =>{
    return (
<Nav pullLeft={true} navbar={true} bsStyle={"tabs"} id="botnavtext">
                <NavItem>
                <NavLink to={"/mentorhome"}>Home</NavLink>
                    </NavItem>
                <NavItem activeHref="/">
                <NavLink to={"/calendar"}>Calendar</NavLink>
                </NavItem>
                <NavItem >
                <NavLink to={"/chapterexec"}>Chapter Exec Committee</NavLink>
                    </NavItem>
                <NavItem >
                <NavLink to={"/paydues"}>Pay Dues</NavLink>
                    </NavItem>
                    <NavItem >
                <NavLink to={"/safeguarding"}>Safeguarding</NavLink>
                    </NavItem>
            </Nav>
)
    } 

const LoggedOutBottomNav = () => {
    return (
         <Nav pullLeft={true} navbar={true} bsStyle={"tabs"} id="botnavtext">
                        <NavItem>
                            <NavLink to={"/"}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/about"}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/service"}>Service</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/events"}>Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/donate"}>Donate</NavLink>
                        </NavItem>
                    </Nav>
    )
}
function botNav(logged) {
    return (
        <Navbar id="botnav" fixedTop={true}>{
            logged === 'true'&&(
                <LoggedInBottomNav/>
            )
        }{
            logged != 'true'&&(
                <LoggedOutBottomNav/>
            )
        }
        </Navbar> 
    )
}

export default botNav
