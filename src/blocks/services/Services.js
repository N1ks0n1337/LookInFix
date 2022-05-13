import React from 'react';
import Icon from '../../image/provide/Detail.svg'
import { Container, 
        Wrapper, 
        Title, 
        Line, 
        TitleBlue, 
        CardWrapper, 
        CardTitle,
        CardDescr,
        CardLink,
        CardLinkIcon,
        CardBlock,
        CardOne,
        CardTwo,
        CardThree,
        CardFour
        } from './Services.elements';

const Services = props => {
    return (
        <Container>
            <Wrapper>
            <Title><Line/>Наши&ensp;<TitleBlue>услуги</TitleBlue><Line/></Title>
            
            <CardWrapper>
                <CardOne>
                    <CardBlock>
                        <CardTitle>Семья</CardTitle>
                        <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</CardDescr>
                        <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                    </CardBlock>
                </CardOne>
                <CardTwo>
                    <CardBlock>
                        <CardTitle>Системы самопознания</CardTitle>
                        <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</CardDescr>
                        <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                    </CardBlock>
                </CardTwo>

                <CardThree>
                    <CardBlock>
                        <CardTitle>Питание</CardTitle>
                        <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</CardDescr>
                        <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                    </CardBlock>
                </CardThree>

                <CardFour>
                    <CardBlock>
                        <CardTitle>Фитнес</CardTitle>
                        <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</CardDescr>
                        <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                    </CardBlock>
                </CardFour>   
            </CardWrapper>
            </Wrapper>
        </Container>
    );
};



export default Services;