import React from "react";
import '../../css/null.css'
import Header from '../../blocks/header/Header'
import styled from 'styled-components'
import background from '../../image/Bg.png';
import Specialiazation from '../../blocks/specializations/Specialiazation';
import Specialists from '../../blocks/specialists/Specialists'
import Services from '../../blocks/services/Services'
import Works from "../../blocks/works/Works";
import Articles from "../../blocks/articles/Articles";
import Footer from "../../blocks/footer/Footer";

const Background = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
`

function Main() {
  return (
      <Background>
        <Header/>
        <Specialiazation/>
        <Works/>
        <Specialists/>
        <Services/>
        <Articles/>
        <Footer/>
      </Background>
  );
}

export default Main;
