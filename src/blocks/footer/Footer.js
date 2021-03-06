import React from 'react';
import {Container, 
    Wrapper, 
    Contacts,
    FooterWrapper,
    NumberBlock,
    Email,
    Messenger,
    MessengerTitle,
    MessengerIcon,
    NumberIcon,
    Number,
    Time,
    Block,
    ContactsTitle,
    EmailImg,
    Pages,
    Navigations,
    Links,
    Questions,
    QuestionsTitle,
    QuestionsSubtitle,
    Form,
    Line,
    Input,
    InputBox,
    FormImg,
    TextArea,
    Blue,
    Insta,
    TitleBlock,
    InstImg,
    ImgWrap,
    ImageItem,
    UnderWrapper,
    CopyrightBlock,
    Back,
    CircleWa,
    CircleTg,
    CircleVib,
    CircleVk,
    CircleInst,
    CircleYt,
    MessengerIcn,
    BackgroundWhite
} from './Footer.element'
import CallIcon from '../../image/footer/call.svg'
import EmailIcon from '../../image/footer/mail.png'
import ManIcon from '../../image/footer/woman.svg'
import PhoneHandle from '../../image/footer/phone-handle.svg'
import Comments from '../../image/footer/comments.svg'
import ButtonFooter from '../../components/buttonFooter/ButtonFooter';
import Inst from '../../image/footer/instagram.svg'
import First from '../../image/footer/1.png'
import Second from '../../image/footer/2.png'
import Third from '../../image/footer/3.png'
import Fourth from '../../image/footer/4.png'
import Fifth from '../../image/footer/5.png'
import Sixth from '../../image/footer/6.png'
import Seventh from '../../image/footer/7.png'
import Eighth from '../../image/footer/8.png'
import Ninth from '../../image/footer/9.png'
import WaLogo from '../../image/footer/whatsapp.svg'
import TgLogo from '../../image/footer/tg.svg'
import VbLogo from '../../image/footer/viber.svg'
import VkLogo from '../../image/footer/vk.svg'
import InLogo from '../../image/footer/inst.svg'
import YtLogo from '../../image/footer/yt.svg'

const Footer = props => {
    const vkStyle = {
        top: '35%'
    } 
    const instStyle = {
        top: '19%'
    }
    const ytStyle = {
        top: '30%',
        left: '22%'
    }
    const waStyle = {
        top: '20%',
        left: '24%'
    }
    const tgStyle = {
        top: '25%',
        left: '18%'
    }
    const vbStyle = {
        top: '20%',
        left: '20%'
    }
    return (
        <Container>
            <BackgroundWhite>
                <Wrapper>
                    <FooterWrapper>
                        <Contacts>
                            <ContactsTitle>Наши контакты</ContactsTitle>
                            <NumberBlock>
                                <NumberIcon src={CallIcon}/>
                                <Block>
                                <Number>+7 (926) 587 75 00</Number>
                                <Time>08:00 - 18:00</Time>
                                </Block>
                            </NumberBlock>
                            <Email>
                                <EmailImg src={EmailIcon}/>
                                info@lookin.org
                            </Email>
                            <Messenger>
                                <MessengerTitle>Пишите в мессенджеры:</MessengerTitle>
                                <MessengerIcon>
                                    <CircleWa><MessengerIcn src={WaLogo} style={waStyle}/></CircleWa>
                                    <CircleTg><MessengerIcn src={TgLogo} style={tgStyle}/></CircleTg> 
                                    <CircleVib><MessengerIcn src={VbLogo} style={vbStyle}/></CircleVib>
                                </MessengerIcon>
                            </Messenger>
                            <Messenger>
                                <MessengerTitle>Пишите в мессенджеры:</MessengerTitle>
                                <MessengerIcon>
                                    <CircleVk><MessengerIcn src={VkLogo} style={vkStyle}/></CircleVk>
                                    <CircleInst><MessengerIcn src={InLogo} style={instStyle}/></CircleInst> 
                                    <CircleYt><MessengerIcn src={YtLogo} style={ytStyle}/></CircleYt>
                                </MessengerIcon>
                            </Messenger>
                        </Contacts>
                        <Pages>
                            <ContactsTitle> Страницы/Навигация</ContactsTitle>
                            <Navigations>
                                <Links>Услуги</Links>
                                <Links>Изотерика</Links>
                                <Links>Направления</Links>
                                <Links>Стать экспертом</Links>
                                <Links>Контакты</Links>
                                <Links>Как оплатить</Links>
                                <Links>Услуги</Links>
                                <Links>Изотерика</Links>
                                <Links>Направления</Links>
                                <Links>Стать экспертом</Links>
                                <Links>Контакты</Links>
                            </Navigations>
                        </Pages>
                        <Questions>
                            <QuestionsTitle>Остались Вопросы?</QuestionsTitle>
                            <QuestionsSubtitle>оставьте контакт и мы свяжемся с вами</QuestionsSubtitle>
                            <Form>
                                <InputBox>
                                    <FormImg src={ManIcon}/>
                                    <Input placeholder='Ваше имя'></Input>
                                </InputBox>
                                <Line/>
                                <InputBox>
                                    <FormImg src={PhoneHandle}/>
                                    <Input placeholder='Ваш номер телефона'></Input>
                                </InputBox>
                                <Line/>
                                <InputBox>
                                    <FormImg src={Comments}/>
                                    <Input placeholder='Ваш вопрос'></Input>
                                </InputBox>
                                <Line/>
                                <ButtonFooter>Оставить контакт</ButtonFooter>
                                <TextArea>нажимая на кнопку вы даете согласие на <br></br><Blue>обработку персональных данных</Blue></TextArea>
                            </Form>
                        </Questions>
                        <Insta>
                            <TitleBlock>
                                <InstImg src={Inst}/>
                                <ContactsTitle>Подписывайтесь на наш инстаграм</ContactsTitle>
                            </TitleBlock>
                            <ImgWrap>
                                    <ImageItem src={First}/>
                                    <ImageItem src={Second}/>
                                    <ImageItem src={Third}/>
                                    <ImageItem src={Fourth}/>
                                    <ImageItem src={Fifth}/>
                                    <ImageItem src={Sixth}/>
                                    <ImageItem src={Seventh}/>
                                    <ImageItem src={Eighth}/>
                                    <ImageItem src={Ninth}/>
                                </ImgWrap>
                        </Insta>
                    </FooterWrapper>
                    <UnderWrapper>
                        <CopyrightBlock>© 2020 - <Blue>Look in. </Blue><br/>Все права защищены.</CopyrightBlock>
                        <CopyrightBlock>Сомневаетсесь в выборе? Обращайтесь к консультантам Look in они вам помогут</CopyrightBlock>
                        <CopyrightBlock>Сделано в <Blue>constant.agency</Blue></CopyrightBlock>
                    </UnderWrapper>
                </Wrapper>
            </BackgroundWhite>
        </Container>
    );
};


export default Footer;