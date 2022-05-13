import React from 'react';
import { Container,
        Wrapper,
        Title,
        Line,
        TitleBlue,
        SubTitle,
        Block,
        BlockWrapper,
        Item,
        ItemIcon,
        BlockItems,
        SliderBlock,
        SliderBlockImg,
        Back,
        BlockArrow,
        BlockArrowLeft,
        BlockArrowRight,
        ArrowLeft,
        ArrowRight,
        Counter,
        AllCounter,
        SliderCounter,
        Blocks
        } from './Works.elements';
import ImgOne from '../../image/sliderElem1.svg'
import ImgTwo from '../../image/sliderElem2.svg'
import ImgThree from '../../image/sliderElem3.svg'
import sliderImage from '../../image/sliderImage.png'
import ArrowRightIcon from '../../image/sliderArrowLeft.svg'
import ArrowLeftIcon from '../../image/sliderArrowRight.svg'

const Works = props => {
    return (
        <Container>
            <Back>
            <Wrapper>
            <Title><Line/>У нас&ensp;<TitleBlue>работают</TitleBlue><Line/></Title>
            <SubTitle>только опытные специалисты, прошедшие отбор look in по:</SubTitle>
            <BlockWrapper>
                <Block>
                    <Blocks>
                    <BlockItems>
                        <Item><ItemIcon src={ImgOne}/>Опыту</Item>
                    </BlockItems>
                    <BlockItems>
                        <Item><ItemIcon src={ImgTwo}/>Образованию</Item>
                    </BlockItems>
                    <BlockItems>
                        <Item><ItemIcon src={ImgThree}/>Собеседованию</Item>
                    </BlockItems>
                    </Blocks>
                    <SliderBlock>
                        <SliderBlockImg src={sliderImage}/>
                    </SliderBlock>
                </Block>
            </BlockWrapper>
            <BlockArrow>
                <BlockArrowRight><ArrowRight src={ArrowRightIcon}/></BlockArrowRight>
                <Counter>
                    <AllCounter>3 /</AllCounter>
                    <SliderCounter>03</SliderCounter>
                </Counter>
                <BlockArrowLeft><ArrowLeft src={ArrowLeftIcon}/></BlockArrowLeft>
            </BlockArrow>
            </Wrapper>
            </Back>
        </Container>
    );
};


export default Works;