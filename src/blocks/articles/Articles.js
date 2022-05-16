import React from 'react';
import { Container, 
         Wrapper,
         Title,
         Line,
         TitleBlue,
         Card,
         CardImage,
         CardImg,
         CardTitle,
         CardDescr,
         CardLink,
         CardLinkIcon,
         CardWrapper,
         BlockArrow,
         BlockArrowRight,
         ArrowRight,
         Counter,
         AllCounter,
         SliderCounter,
         BlockArrowLeft,
         ArrowLeft,
         Holder,
         Limited,
         Text,
         Bottom,
         ReadMoreChecker,
         ReadMoreButton,
         TextHolder
        } from './Articles.elements';
import Icon from '../../image/provide/Detail.svg'
import ImgOne from '../../image/articles/1.png'
import ImgTwo from '../../image/articles/2.png'
import ArrowRightIcon from '../../image/sliderArrowLeft.svg'
import ArrowLeftIcon from '../../image/sliderArrowRight.svg'
import './checked.css'


const Articles = props => {
    return (
        <Container>
            <Wrapper>
            <Title><Line/>Статьи&ensp;<TitleBlue>наших специалистов</TitleBlue><Line/></Title>
                <CardWrapper>
                <Card>
                    <CardImage>
                        <CardImg src={ImgOne}/>
                    </CardImage>
                    <CardTitle>Организация пространства вокруг</CardTitle>
                    <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места</CardDescr>
                    <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                </Card>

                <Card>
                    <CardImage>
                        <CardImg src={ImgTwo}/>
                    </CardImage>
                    <CardTitle>Как сознательно управлять своей жизнью</CardTitle>
                    <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места</CardDescr>
                    <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                </Card>

                <Card>
                    <CardImage>
                        <CardImg src={ImgOne}/>
                    </CardImage>
                    <CardTitle>Как стать лидером</CardTitle>
                    <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места</CardDescr>
                    <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                </Card>
                </CardWrapper>
                <BlockArrow>
                <BlockArrowRight><ArrowRight src={ArrowRightIcon}/></BlockArrowRight>
                <Counter>
                    <AllCounter>1 /</AllCounter>
                    <SliderCounter>03</SliderCounter>
                </Counter>
                <BlockArrowLeft><ArrowLeft src={ArrowLeftIcon}/></BlockArrowLeft>
            </BlockArrow>
            <div class="holder">
                <input type="checkbox" class="read-more-checker" id="read-more-checker" />
                <div class="limited l-200">
                    <TextHolder>  Look in – Оазис для внутреннего “Я”. Для перемен нужно заглянуть в себя. Путь к осознанности лежит через обращение к самому себе. Мы хотим сопровождать людей на пути к самораскрытию. Для этого мы взаимодействуем с нашими единомышленниками и находим с ними путь к себе через разные способы: стандартные и нестандартные. Мы хотим поделиться  тем, что помогло и помогает нам сделать жизнь интересной, осознанной и гармоничной.</TextHolder>
                    <TextHolder>Для этого мы взаимодействуем с нашими единомышленниками и находим с ними путь к себе через разные способы: стандартные и нестандартные. Мы хотим поделиться  тем, что помогло и помогает нам сделать жизнь интересной, осознанной и гармоничной. Для этого мы обращаемся к нашей душе, мышлению и телу. В этом нам помогают различные инструменты. На сегодняшний день это - эзотерика, психология, нутрициология. Но мы не останавливаемся в своих поисках и открыты всему новому.</TextHolder>
                    <TextHolder>Мы любим и ценим эту жизнь и хотим поделиться инструментами, которые помогли нам это осознать. Возможно, эти способы подойдут не всем, - у каждого свой фильтр восприятия информации. Но наша задача – объединить наших людей, которые получили отклик при знакомстве с нами. Так же мы хотим показать, что эзотерика – это польза, если ты попал в руки к настоящим специалистам. А психология - это фундамент к осмыслению и продвижению вперед. Эти инструменты дают больше информации для понимания себя, после чего находишь все ответы и прощаешься со страхом, т.к. все страхи от неизвестности, травм и негативных установок. Мы продвигаем комплексный подход в проработке себя. Предоставляем качественные услуги профессиональных специалистов.</TextHolder>
                <div class="bottom"></div>
                </div>
                <label for="read-more-checker" class="read-more-button"></label>
            </div>
            </Wrapper>
        </Container>
    );
};


export default Articles;