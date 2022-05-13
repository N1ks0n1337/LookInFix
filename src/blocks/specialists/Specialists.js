import React from 'react';
import FirstBg from '../../image/specialists/FirstBg.png'
import SecondBg from '../../image/specialists/SecondBg.png'
import ThirdBg from '../../image/specialists/ThirdBg.png'
import FourthBg from '../../image/specialists/FourthBg.png'
import Enter from '../../image/specialists/Enter.svg'
import {
    Container,
    Wrapper,
    Line,
    Title,
    TitleBlue,
    SpecialistsWrapper,
    Block,
    ImageContainer,
    Image,
    TextContainer,
    TextNumber,
    Text,
    EnterImg,
    SubTitle,
    BlueLine,
} from './Specialists.elements';

const Specialists = props => {
    return (
        <Container>
            <Wrapper>
                <Title><Line/>Вы можете выбрать&ensp;<TitleBlue>специалиста</TitleBlue><Line/></Title>
                <SubTitle>с которым вам будет комфортно</SubTitle>
                <SpecialistsWrapper>
                    <Block>
                        <ImageContainer>
                            <Image src={FirstBg}/>
                        </ImageContainer>
                        <TextContainer>
                            <TextNumber><BlueLine/>01<BlueLine/></TextNumber>
                            <Text><EnterImg src={Enter}/>Регистрируетесь<br/> на сайте</Text>
                        </TextContainer>
                    </Block>
                    <Block>
                        <ImageContainer>
                            <Image src={FirstBg}/>
                        </ImageContainer>
                        <TextContainer>
                            <TextNumber><BlueLine/>02<BlueLine/></TextNumber>
                            <Text><EnterImg src={Enter}/>Заполняете<br/> анкету</Text>
                        </TextContainer>
                    </Block>
                    <Block>
                        <ImageContainer>
                            <Image src={FirstBg}/>
                        </ImageContainer>
                        <TextContainer>
                            <TextNumber><BlueLine/>03<BlueLine/></TextNumber>
                            <Text><EnterImg src={Enter}/>Вам будет предложено<br/> несколько подходящих<br/> специалистов</Text>
                        </TextContainer>
                    </Block>
                    <Block>
                        <ImageContainer>
                            <Image src={FirstBg}/>
                        </ImageContainer>
                        <TextContainer>
                            <TextNumber><BlueLine/>04<BlueLine/></TextNumber>
                            <Text><EnterImg src={Enter}/>Выберите удобное время <br/>для консультации</Text>
                        </TextContainer>
                    </Block>
                </SpecialistsWrapper>
            </Wrapper>
        </Container>
    );
};

export default Specialists;