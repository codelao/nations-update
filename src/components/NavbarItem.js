import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarNav, Nav} from 'mdbreact';

const NavbarItem = (navText, linkPath, activeHref) => {
    return (<NavItem activeHref={`/${activeHref}`}>
                <NavLink to={`/${linkPath}`}>${navText}</NavLink>
                    </NavItem>)
}

export default NavbarItem