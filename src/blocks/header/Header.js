import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import {BackgroundImg ,Line, Items, Item, ItemTimes, ItemDescr,TitleBack ,Container, TitleBlue, Wrapper, SubTitle, Title, SubTitleBlue } from './Header.elements';
import Button from '../../components/button/Button';

const header = props => {
    return (
        <Container>
            <BackgroundImg>
            <Navbar/>
            <Wrapper>
            <SubTitle><TitleBack/><Line/> проблемы&nbsp; <SubTitleBlue> в семье?</SubTitleBlue></SubTitle>
            <Title>Помогут справиться проверенные эксперты центра <TitleBlue>Look in</TitleBlue></Title>
                <Button>Выбрать специалиста</Button>
                <Items>
                    <Item>
                        <ItemTimes>11</ItemTimes>
                        <ItemDescr>лет средний стаж экспертов</ItemDescr>
                    </Item>
                    <Item>
                        <ItemTimes>24/7</ItemTimes>
                        <ItemDescr>онлайн проведение сессий</ItemDescr>
                    </Item>
                    <Item>
                        <ItemTimes>8,4</ItemTimes>
                        <ItemDescr>средняя оценка удовлетворенности клиентов</ItemDescr>
                    </Item>
                    <Item>
                        <ItemTimes>180</ItemTimes>
                        <ItemDescr>экспертов по 5 основным услугам</ItemDescr>
                    </Item>
                </Items>
            </Wrapper>
            </BackgroundImg>
        </Container>
    );
};

export default header;