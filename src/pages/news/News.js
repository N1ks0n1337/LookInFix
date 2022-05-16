import React from 'react';
import { Container, ArrowLeft ,BlockArrowLeft,SliderCounter,AllCounter,Counter,ArrowRight,BlockArrowRight ,BlockArrow,Arrow,CardLink,BlockTitle, BlockText ,BlockDescr, Img ,BlockImage ,Wrapper, Title, Line, TitleBlue, BlockWrapper, Block } from './News.elements';
import background from '../../image/Bg.png';
import styled from "styled-components";
import Navbar from '../../components/navbar/Navbar';
import ImageCard1 from '../../image/news/card1.png'
import ImageCard2 from '../../image/news/card2.png'
import ImageCard3 from '../../image/news/card3.png'
import ArrowIcon from '../../image/boots/arrow.svg'
import ArrowRightIcon from '../../image/sliderArrowLeft.svg'
import ArrowLeftIcon from '../../image/sliderArrowRight.svg'
import Footer from '../../blocks/footer/Footer'

const Background = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
`

const News = () => {
    return (
        <Background>
        <Container>
            <Wrapper>
                <Navbar/>
                <Title><Line/><TitleBlue>Новости</TitleBlue>&ensp;по теме<Line/></Title>
                <BlockWrapper>
                    <Block>
                        <BlockImage>
                            <Img src={ImageCard1}/>
                        </BlockImage>
                        <BlockDescr>
                            <BlockTitle>Организация пространства вокруг</BlockTitle>
                            <BlockText>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места (речь ... идет об офисных работниках). Конечно, Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года. Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года.</BlockText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </BlockDescr>
                    </Block>

                    <Block>
                        <BlockImage>
                            <Img src={ImageCard2}/>
                        </BlockImage>
                        <BlockDescr>
                            <BlockTitle>Организация пространства вокруг</BlockTitle>
                            <BlockText>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места (речь ... идет об офисных работниках). Конечно, Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года. Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года.</BlockText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </BlockDescr>
                    </Block>

                    <Block>
                        <BlockImage>
                            <Img src={ImageCard3}/>
                        </BlockImage>
                        <BlockDescr>
                            <BlockTitle>Организация пространства вокруг</BlockTitle>
                            <BlockText>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места (речь ... идет об офисных работниках). Конечно, Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года. Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года.</BlockText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </BlockDescr>
                    </Block>

                    <Block>
                        <BlockImage>
                            <Img src={ImageCard1}/>
                        </BlockImage>
                        <BlockDescr>
                            <BlockTitle>Организация пространства вокруг</BlockTitle>
                            <BlockText>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места (речь ... идет об офисных работниках). Конечно, Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года. Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года.</BlockText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </BlockDescr>
                    </Block>
                    <BlockArrow>
                    <BlockArrowRight><ArrowRight src={ArrowRightIcon}/></BlockArrowRight>
                    <Counter>
                    <AllCounter>1 /</AllCounter>
                    <SliderCounter>03</SliderCounter>
                    </Counter>
                    <BlockArrowLeft><ArrowLeft src={ArrowLeftIcon}/></BlockArrowLeft>
                    </BlockArrow>
                </BlockWrapper>
            </Wrapper>
            <Footer/>
        </Container>
        </Background>
    );
};

export default News;