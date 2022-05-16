import React from 'react';
import styled from "styled-components";
import background from '../../image/Bg.png';
import NavBar from '../../components/navbar/Navbar';
import PersonImg from '../../image/boots/Woman.png'
import Footer from '../../blocks/footer/Footer';
import BootsImg from '../../image/boots/trainers.png'
import CardOneImg from '../../image/boots/card1.png'
import Card2Img from '../../image/boots/card2.png'
import Card3Img from '../../image/boots/card3.png'
import Card4Img from '../../image/boots/card4.png'
import ArrowIcon from '../../image/boots/arrow.svg'
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
        Experience,
        BlockImage,
        Img,
        BlockDescr,
        Text,
        BackgroundWhite,
        WrapeerTwo,
        CardBlock,
        Card,
        CardImage,
        CardTitle,
        CardText,
        CardLink,
        Arrow
        } from './Boots.elements'


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
        <BackgroundWhite>
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
                    <BlockImage>
                        <Img src={BootsImg}/>
                    </BlockImage>
               </Block>
               <BlockDescr>
                   <Text>Узнать свое будущее – естественное желание человека. Как иначе можно объяснить такое количество разных способов приоткрыть завесу тайны и заглянуть вперед?</Text>
                   <Text>Способов гадать придумано множество, начиная от наблюдений за поведением животных, чтобы понять, какая погода будет в скором времени, заканчивая святочными гаданиями, которые «работают» только в определенные дни года.Карты Таро – один из древнейших инструментов для гадания, один из главных магических атрибутов. Точная дата появления на свет неизвестна, но появились карты примерно в промежутке между четырнадцатым и шестнадцатым веками, в эпоху Средневековья.</Text>
                   <Text>В настоящее время карты Таро используются для того, чтобы гадать или совершать иные действия, связанные со всем потусторонним, но раньше эти карты имели и игровую функцию.</Text>
                   <Text>Традиционно колода карт Таро состоит из 78 карт. Чтобы понимать, о чем пойдет речь, стоит разобраться с таким понятием, как «арканы». Это ключевое слово, которое является важнейшим в искусстве гадания.</Text>
                   <Text>Итак, арканы – это тайны, которые необходимы, чтобы разгадать будущее. С помощью карт вы узнаете определённые ситуации, которые при правильном толковании помогут вам разгадать грядущее. Арканы делятся на две группы: старшие и младшие.</Text>
                   <Text>К старшим арканам относят 22 карты, каждая из которых имеет традиционное название.</Text>
               </BlockDescr>
            </Wrapper>
            </BackgroundWhite>
            <WrapeerTwo>
                <Wrapper>
                <Title><Line/><TitleBlue>Читайте&ensp;</TitleBlue>также<Line/></Title>
                    <CardBlock>
                        <Card>
                            <CardImage src={CardOneImg}/>
                            <CardTitle>
                            Организация пространства вокруг
                            </CardTitle>
                            <CardText>
                            Например, полуосознанное влияние
                            </CardText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </Card>

                        <Card>
                            <CardImage src={Card2Img }/>
                            <CardTitle>
                            Как сознательно<br/> управлять своей жизнью
                            </CardTitle>
                            <CardText>
                            Например, полуосознанное влияние
                            </CardText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </Card>

                        <Card>
                            <CardImage src={Card3Img }/>
                            <CardTitle>
                            Как стать лидером
                            </CardTitle>
                            <CardText>
                            Например, полуосознанное влияние<br/> человека на физическое пространство
                            </CardText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </Card>

                        <Card>
                            <CardImage src={Card4Img}/>
                            <CardTitle>
                            Организация пространства вокруг
                            </CardTitle>
                            <CardText>
                            Например, полуосознанное влияние
                            </CardText>
                            <CardLink>подробнее<Arrow src={ArrowIcon}/></CardLink>
                        </Card>
                    </CardBlock>
                </Wrapper>
            </WrapeerTwo>
            <Footer/>
        </Container>
        </Background>
    );
};

export default Boots;