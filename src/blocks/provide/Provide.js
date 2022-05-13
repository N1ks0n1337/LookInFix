import React from 'react';
import Detail from '../../image/provide/Detail.svg'
import { 
    Container, 
    Title, 
    Wrapper,
    Line,
    TitleBlue,
    Content,
    FirstBlock,
    SecondBlock,
    ThirdBlock,
    FourthBlock,
    BlockTitle,
    BlockSubtitle,
    BlockDetail,
    DetailImg,

} from './Provide.elements';

const Provide = props => {
    return (
        <Container>
            <Wrapper>
                <Title><Line/>Наши&ensp;<TitleBlue>услуги</TitleBlue><Line/></Title>
                <Content>
                    <FirstBlock>
                        <BlockTitle>Семья</BlockTitle>
                        <BlockSubtitle>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</BlockSubtitle>
                        <BlockDetail>Подробнее<DetailImg src={Detail}/></BlockDetail>
                    </FirstBlock>
                    <SecondBlock>
                        <BlockTitle>Системы самопознания</BlockTitle>
                        <BlockSubtitle>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</BlockSubtitle>
                        <BlockDetail>Подробнее<DetailImg src={Detail}/></BlockDetail>
                    </SecondBlock>
                    <ThirdBlock>
                        <BlockTitle>Питание</BlockTitle>
                        <BlockSubtitle>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</BlockSubtitle>
                        <BlockDetail>Подробнее<DetailImg src={Detail}/></BlockDetail>
                    </ThirdBlock>
                    <FourthBlock>
                        <BlockTitle>Фитнес</BlockTitle>
                        <BlockSubtitle>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места.</BlockSubtitle>
                        <BlockDetail>Подробнее<DetailImg src={Detail}/></BlockDetail>
                    </FourthBlock>
                </Content>
            </Wrapper>
        </Container>
    );
};

export default Provide;