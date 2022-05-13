import React from 'react';
import {
        Container,
        Wrapper,
        NavLink,
        NavLinkBlack,
        NavLinkBlue,
        Title,
        Line,
        TitleBlue,
        Block,
        Person,
        PersonImage,
        Image,
        PersonName,
        PersonProf,
        Experience
        } from './Boots.elements'
import styled from "styled-components";
import background from '../../image/Bg.png';
import NavBar from '../../components/navbar/Navbar';
import PersonImg from '../../image/boots/Woman.png'
import Footer from '../../blocks/footer/Footer';

const Background = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
`

const Boots = () => {
    return (
        <Background>
        <Container>
            <Wrapper>
               <NavBar/>
               <Block>
                    <Person>
                        <PersonImage>
                            <Image src={PersonImg}/>
                        </PersonImage>
                        <PersonName>Лариса Семенова</PersonName>
                        <PersonProf>ведический астролог</PersonProf>
                        <Experience>опыт 9 лет</Experience>
                    </Person>
               </Block>
            </Wrapper>
            <Footer/>
        </Container>
        </Background>
    );
};

export default Boots;