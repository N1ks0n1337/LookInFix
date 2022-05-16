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
import WhiteBack from '../../image/specialization/top.png'
import arrowHover from '../../image/specialization/arrowHover.svg'
import {
    Container,
    ItemImg,
    Item,
    SpecializationTypesItems,
    Wrapper,
    ItemText,
    Title,
    TitleBlue,
    Line,
    ItemHover,
    ItemHoverImg

} from './Specialization.elements';


const Specialiazation = props => {
    return (
        <Container>
            <Wrapper>
                <Title><Line/>Специализации&nbsp;<TitleBlue>экспертов</TitleBlue><Line/></Title>
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
            </Wrapper>
        </Container>
    );
};

export default Specialiazation;