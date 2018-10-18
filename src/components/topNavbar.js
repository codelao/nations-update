import React from 'react';
import styled from 'styled-components';
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarNav, Nav} from 'mdbreact';
import img from "../images/LinksLogo.png";

function topNav(logged, login, logout) {

          return (
            <Navbar id="topnav">
                  
              {logged === 'true'&&(
                <Nav pullLeft={true} navbar={true} bsStyle={"tabs"} id="topnavtext">
                <img src={img}/>
                <NavItem eventkey={1}>
                <NavLink to="/#">{localStorage.getItem('display')}
                  </NavLink>                 
                
            </NavItem>
              <NavItem eventkey={2} onClick={logout}><NavLink to="/#">Logout</NavLink>
              </NavItem>
              </Nav>
            )}{logged != 'true'&&(
              <Nav id="topnavtext">
              <img src={img}/>
                    <NavItem eventkey={1}><NavLink to="/#">Call Us</NavLink></NavItem>
                  <NavItem eventkey={2} onClick={login}><NavLink to="/">Members Only</NavLink></NavItem>
                  </Nav>
            )
            }
            </Navbar>
            
          )
         /* var topNavIn = (           
               <Navbar>
                 <Nav pullLeft={true} navbar={true} bsStyle={"tabs"}>
                  <NavItem eventkey={1}>
                    <NavLink to="/#">{localStorage.getItem('display')}
                      </NavLink>                 
                    
                </NavItem>
                  <NavItem eventkey={2} onClick={logout}><NavLink to="/#">Logout</NavLink></NavItem>
              </Nav>
               </Navbar>           
          )
          var topNavOut = (
            
                <Navbar>
                  <Nav>
                    <NavItem eventkey={1}><NavLink to="/#">Call Us</NavLink></NavItem>
                  <NavItem eventkey={2} onClick={login}><NavLink to="/">Members Only</NavLink></NavItem>
                  </Nav>
                </Navbar>
          )
        if(logged === 'true'){
          return topNavIn
        }else{
          return topNavOut
        }*/
}

export default topNav 