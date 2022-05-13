import React from 'react';
import styled from "styled-components";
import background from '../../image/Bg.png';
import NavBar from '../../components/navbar/Navbar'
import { Container, 
         NavLink,
         NavLinkBlack, 
         NavLinkBlue, 
         Wrapper,
         Title,
         Line,
         TitleBlue,
         BlockImage,
         Image,
         BlockContent,
         BlockDescrWrapper,
         BlockDescrWrapperOne,
         BlockDescrWrapperTitle,
         BlockWheel,
         BlockImageWrapper,
         InfoImage,
         BlockTitle,
         BlockDescrWrapperTwo
        } from './Mission.element';
import MissionImg from '../../image/mission/missionImage.png'
import WheelImg from '../../image/mission/group-20-copy.png' 
import Footer from '../../blocks/footer/Footer';

const Background = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
`

const Mission = () => {
    return (
        <Background>
        <Container>
            <Wrapper>
               <NavBar/>
               <NavLink>
                   <NavLinkBlack>Главная /&nbsp; </NavLinkBlack>
                   <NavLinkBlue> Миссия Look in</NavLinkBlue>
               </NavLink>
               <Title><Line/>Миссия&ensp;<TitleBlue>Look in</TitleBlue><Line/></Title>
               <BlockContent>
               <BlockImage>
                   <Image src={MissionImg}/>
               </BlockImage>
               <BlockDescrWrapper>
                    <BlockDescrWrapperOne>Компания «МосРегионГаз» предлагает комплексные энергетические решения на основе сжиженного углеводородного газа. Доступное и универсальное топливо позволяет получать различные виды энергии, в том числе тепло и электричество. Пользователи системы автономной газификации по достоинству оценивают ее преимущества.</BlockDescrWrapperOne>
                    <BlockDescrWrapperTitle>Независимость</BlockDescrWrapperTitle>
                    <BlockDescrWrapperOne>Постоянное давление газа с отсутствием перепадов, в отличие от магистральных газопроводов. Система автономной газификации является собственностью владельца</BlockDescrWrapperOne>
                    <BlockDescrWrapperTitle>Экономичность</BlockDescrWrapperTitle>
                    <BlockDescrWrapperOne>Стоимость получаемой из сжиженного газа энергии примерно на 25-30 % ниже, чем при использовании дизтоплива, и вдвое меньше, чем при отоплении электричеством. Такая экономичность позволяет сократить различные статьи расходов. Она объясняется тем, что в СУГ концентрация серных соединений гораздо меньше. Из-за этого сгорание топлива происходит с большей эффективностью, чем при использовании мазута, угля, природного газа (метана), дров и др</BlockDescrWrapperOne>
               </BlockDescrWrapper>
               </BlockContent>
               <BlockWheel>
                    <BlockTitle>
                    <Title><Line/>Колесо&ensp;<TitleBlue>баланса</TitleBlue><Line/></Title>
                    </BlockTitle>
                    <BlockImageWrapper>
                        <InfoImage src={WheelImg}/>
                        <InfoImage src={WheelImg}/>
                    </BlockImageWrapper>
                    <BlockDescrWrapperTwo>
                    <BlockDescrWrapperOne>Компания «МосРегионГаз» предлагает комплексные энергетические решения на основе сжиженного углеводородного газа. Доступное и универсальное топливо позволяет получать различные виды энергии, в том числе тепло и электричество. Пользователи системы автономной газификации по достоинству оценивают ее преимущества.</BlockDescrWrapperOne>
                    <BlockDescrWrapperTitle>Независимость</BlockDescrWrapperTitle>
                    <BlockDescrWrapperOne>Постоянное давление газа с отсутствием перепадов, в отличие от магистральных газопроводов. Система автономной газификации является собственностью владельца</BlockDescrWrapperOne>
                    <BlockDescrWrapperTitle>Экономичность</BlockDescrWrapperTitle>
                    <BlockDescrWrapperOne>Стоимость получаемой из сжиженного газа энергии примерно на 25-30 % ниже, чем при использовании дизтоплива, и вдвое меньше, чем при отоплении электричеством. Такая экономичность позволяет сократить различные статьи расходов. Она объясняется тем, что в СУГ концентрация серных соединений гораздо меньше. Из-за этого сгорание топлива происходит с большей эффективностью, чем при использовании мазута, угля, природного газа (метана), дров и др</BlockDescrWrapperOne>
               </BlockDescrWrapperTwo>
               </BlockWheel>
            </Wrapper>
            <Footer/>
        </Container>
        </Background>
    );
};

export default Mission;