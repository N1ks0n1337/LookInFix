import React, {useState} from 'react';
import styled from "styled-components";
import background from '../../image/Bg.png';
import { Container,
    Wrapper,
    Title,
    Line,
    TitleBlue,
    TextHolder,
    ImageBlocks,
    SpaceBlock,
    FitnesBlock,
    AvocadoBlock,
    FamilyBlock,
    ContainerImage,
} from './OurMission.element';
import { Blue, CopyrightBlock, UnderWrapper } from '../../blocks/footer/Footer.element';
import './checked.css'
import Navbar from '../../components/navbar/Navbar';


const Background = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
`

const OurMission = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <Background>
        <Container>
            <Navbar/>
            <Wrapper>
               <Title><Line/>Миссия&ensp;<TitleBlue>Look in</TitleBlue><Line/></Title>
                <div class="holder">
                    <input type="checkbox" class="read-more-checker" id="read-more-checker" />
                    <div class="limited l-200">
                        <TextHolder>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации позиций, занимаемых  участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации дальнейших направлений развития. </TextHolder>
                        <TextHolder> Равным образом, повышение уровня гражданского сознания требует анализа распределения внутренних резервов и ресурсов. Идейные соображения высшего порядка, а также укрепление и развитие внутренней структуры создаёт предпосылки для новых принципов формирования материально-технической и кадровой базы. Значимость этих проблем настолько очевидна, что высококачественный прототип будущего проекта предопределяет высокую востребованность распределения внутренних резервов и ресурсов. Идейные соображения высшего порядка, а также разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает актуальность инновационных методов управления процессами. Равным образом, высокое качество позиционных исследований позволяет оценить значение системы обучения кадров, соответствующей насущным потребностям. </TextHolder>
                        <TextHolder>А также реплицированные с зарубежных источников, современные исследования освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, обнародованы. Являясь всего лишь частью общей картины, диаграммы связей формируют глобальную экономическую сеть и при этом - описаны максимально подробно. Задача организации, в особенности же понимание сути ресурсосберегающих технологий предоставляет широкие возможности для стандартных подходов. Таким образом, курс на социально-ориентированный национальный проект однозначно фиксирует необходимость кластеризации усилий. Предварительные выводы неутешительны: граница обучения кадров требует определения и уточнения прогресса профессионального сообщества.</TextHolder>
                    <div class="bottom"></div>
                    </div>
                    <label for="read-more-checker" class="read-more-button"></label>
                </div>
            </Wrapper>
            <ContainerImage>
                <ImageBlocks>
                    <SpaceBlock>Системы <br/>самопознания</SpaceBlock>
                    <FitnesBlock>Фитнес</FitnesBlock>
                    <AvocadoBlock>Питание</AvocadoBlock>
                    <FamilyBlock>Психология</FamilyBlock>
                </ImageBlocks>
            </ContainerImage>

            <UnderWrapper>
                    <CopyrightBlock>© 2020 - <Blue>Look in. </Blue><br/>Все права защищены.</CopyrightBlock>
                    <CopyrightBlock>Сомневаетсесь в выборе? Обращайтесь к консультантам Look in они вам помогут</CopyrightBlock>
                    <CopyrightBlock>Сделано в <Blue>constant.agency</Blue></CopyrightBlock>
            </UnderWrapper>
        </Container>
        </Background>
    );
};

export default OurMission;