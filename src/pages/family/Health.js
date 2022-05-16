import React from 'react';
import FamilyBtn from '../../image/specialization/familyphoto.png'
import RealationsBtn from '../../image/specialization/relationship.png'
import WorkBtn from '../../image/specialization/work.png'
import MoneyBtn from '../../image/specialization/money.png'
import HomeBtn from '../../image/specialization/home.png'
import HolidayBtn from '../../image/specialization/holiday.png'
import BuysBtn from '../../image/specialization/buys.png'
import PersonalityBtn from '../../image/specialization/personality.png'
import EduBtn from '../../image/specialization/education.png'
import PredictBtn from '../../image/specialization/predict.png'
import InvestBtn from '../../image/specialization/investing.png'
import OtherBtn from '../../image/specialization/other.png'
import arrowHover from '../../image/specialization/arrowHover.svg'
import { BlockImage,
        Container,
        Image,
        Item,
        ItemHover,
        ItemHoverImg,
        ItemImg,
        ItemText,
        Line,
        MainBlock,
        MainTitle,
        People,
        PeopleBlock,
        PeopleBlocks,
        PeopleTitle,
        SpecializationTypesItems,
        SubTitle,
        TextHolder,
        Title,
        TitleBlue,
        Wrapper,
    
} from './Health.element';
import HealthImg from '../../image/health/Health.png'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../blocks/footer/Footer';
import './checked.css'

const Health = props => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Navbar/>
                    <Title><Line/>Здоровье<Line/></Title>
                    <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</SubTitle>
                    <BlockImage>
                       <Image src={HealthImg}/>
                    </BlockImage>
                    <MainBlock>
                        <MainTitle>Выберите специалиста и удобное время для консультации</MainTitle>
                        <PeopleBlocks>
                            <PeopleBlock>
                                <People></People>
                                <PeopleTitle>Лариса Семенова</PeopleTitle>
                            </PeopleBlock>
                        </PeopleBlocks>
                    </MainBlock>
                    <Title><Line/><TitleBlue>Смежные&nbsp;</TitleBlue>направления<Line/></Title>
                    <SpecializationTypesItems>
                        <Item>
                            <ItemImg src={FamilyBtn}/>
                            <ItemText>
                                Семья
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={RealationsBtn}/>
                            <ItemText>
                                Отношения
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={WorkBtn}/>
                            <ItemText>
                                Работа
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={MoneyBtn}/>
                            <ItemText>
                                Деньги
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={HomeBtn}/>
                            <ItemText>
                                Дом
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={HolidayBtn}/>
                            <ItemText>
                                Отдых
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={BuysBtn}/>
                            <ItemText>
                                Покупки
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={PersonalityBtn}/>
                            <ItemText>
                                Личность
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={EduBtn}/>
                            <ItemText>
                                Обучение
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={PredictBtn}/>
                            <ItemText>
                                Прогноз
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={InvestBtn}/>
                            <ItemText>
                                Инвестирование
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        <Item>
                            <ItemImg src={OtherBtn}/>
                            <ItemText>
                                Другое
                            </ItemText>
                            <ItemHover>
                                Подробнее <ItemHoverImg src={arrowHover}/>
                            </ItemHover>
                        </Item>
                        </SpecializationTypesItems>
                            <div class="holder">
                                <input type="checkbox" class="read-more-checker" id="read-more-checker" />
                                <div class="limited l-200">
                                    <TextHolder>Look in – Оазис для внутреннего “Я”. Для перемен нужно заглянуть в себя. Путь к осознанности лежит через обращение к самому себе. Мы    хотим      сопровождать людей на пути к самораскрытию. Для этого мы взаимодействуем с нашими единомышленниками и находим с ними путь к себе через  разные способы:      стандартные и нестандартные. Мы хотим поделиться  тем, что помогло и помогает нам сделать жизнь интересной, осознанной и    гармоничной.</TextHolder>
                                    <TextHolder> Для этого мы обращаемся к нашей душе, мышлению и телу. В этом нам помогают различные инструменты. На сегодняшний день это -    эзотерика,         психология, нутрициология. Но мы не останавливаемся в своих поисках и открыты всему новому. Мы любим и ценим эту жизнь и хотим  поделиться   инструментами,    которые помогли нам это осознать.</TextHolder>
                                    <TextHolder>Возможно, эти способы подойдут не всем, - у каждого свой фильтр восприятия информации. Но наша задача – объединить наших людей,     которые     получили    отклик при знакомстве с нами. Так же мы хотим показать, что эзотерика – это польза, если ты попал в руки к настоящим    специалистам. А    психология - это  фундамент к осмыслению и продвижению вперед. Эти инструменты дают больше информации для понимания себя, после     чего находишь все ответы   и прощаешься со   страхом, т.к. все страхи от неизвестности, травм и негативных установок. Мы продвигаем комплексный     подход в проработке себя.    Предоставляем качественные   услуги профессиональных специалистов. </TextHolder>
                                <div class="bottom"></div>
                                </div>
                                <label for="read-more-checker" class="read-more-button"></label>
                            </div>
                    <Footer/>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Health;