import React, { Component } from 'react';
import styled from 'styled-components';
import img1 from '../images/about1.jpeg';

const Img1 = styled.img`
height:100%;
width:100%;
grid-column: 1/50;
grid-row:75/90
`
const TopWrapper = styled.div`
    background-size: 50% 40%;
    opacity: 1;
    background: url(${img1});
    background-position: 20%; 
`
const ContentWrapper = styled.div`
display: grid;
grid-template-columns: repeat(100,1vw);
grid-template-rows: repeat(120,2vh);
`
const Title = styled.div`
grid-row:15;
grid-column:20/90;
color:white;
text-align: center; 
z-index: 1; 
font-size:5vw
`
const Text1 = styled.div`
grid-column: 30/90;
grid-row:57;
font-size: 3vw
`
const Text2 = styled.div`
grid-column: 30/90;
grid-row:72;
font-size: 2.5vw;
`
const Text3 = styled.div`
grid-column: 30/90;
font-size: 2vw;
grid-row:80;
`
const Text4 = styled.div`
grid-column: 30/90;
font-size:1.5vw;
grid-row:100
`
const DoL = styled.div`
grid-column: 30/55;
grid-row:110;
`
const DoR = styled.div`
grid-column: 60/85;
grid-row:110;
`
const WWD = styled.div`
grid-column: 30/90;
font-size:2vw;
grid-row:105;
`
export default class About extends Component{
render(){
    return(<div>
        <ContentWrapper>
        <TopWrapper style={{
  "width": "100vw",
  "height": "100vh"}}/>
        <Title>What We Do</Title>
            <Text1>
        Nations Ladies is a charitable organisation whose sole purpose is to inspire young girls from vulnerable communities to achieve their highest potential.
        </Text1>
        <Text2>Our Mission</Text2>
        <Text3>
        Nations Ladies began as an idea of bringing together a group of accomplished professional women for the common purpose of encouraging greatness in London’s school-aged girls. These are women from professions such as Law, Finance and Medicine to creative fields such as Screen Writing, Fashion Design and Journalism - women who have reached the highest levels of their careers, often from humble beginnings. Together these women serve as role models and mentors supporting the development of future leaders.
        </Text3>
        <hr/>
        <Text4>As role models and mentors we seek to expand the horizons of young women, with the goal of helping to close the social mobility and gender gaps that persist long into adulthood. — Pamela Maugile, President
</Text4>
        <WWD>What We Do</WWD>
        <DoL>
                    <ul ><li>Provide 1:1 mentoring support for girls aged 14-17</li><li>Support with university applications and professional statements</li><li>Coaching for university interviews</li><li>Curate work experience opportunities</li></ul>
        </DoL>
        <DoR>
                    <ul><li>Host careers symposiums across the fields of law, finance, marketing and STEM&nbsp;</li><li>CV writing preparation&nbsp;</li><li>Deliver business etiquette workshops to prepare college and sixth form students for professional life&nbsp;</li></ul>
        </DoR>
        </ContentWrapper>
    </div>)
}
}
