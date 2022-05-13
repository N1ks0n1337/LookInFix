import styled from "styled-components";
import Background from '../../image/footer/bg.png'


export const Container = styled.div`
  background: linear-gradient(to top, transparent, #dae8f3);
  width: 100%;
  height: 100%;
  margin-top: 20px;
  background-color: transparent;
`
export const Back = styled.div`
  background-image: url('${Background}');
  background-repeat: no-repeat;
  background-clip: text;
  background-size: 120%;
  background-position: 10% -30%;
  @media(max-width: 1614px){
    background-size: 50%;
  }
  @media(max-width: 1197px){
    background-image: none;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1725px;
  height: 100%;
  margin: auto;
`
export const FooterWrapper = styled.div`
  padding-top: 70px;
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
  @media(max-width:1376px){
    flex-wrap: wrap;
    gap:50px;
  }
`
export const UnderWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`
export const CopyrightBlock = styled.div`
  font-family: 'Proxima Nova';
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #2e2e2e;
`
export const Contacts = styled.div`
`
export const Number = styled.div`
  color: #2e2e2e;
  font-size: 22px;
  margin-bottom: 13px;
`
export const Email = styled.div`
  margin-top: 25px;
`
export const Messenger = styled.div`
  font-family: 'Proxima Nova';
  margin-bottom: 35px;
  margin-top: 51px;
`
export const MessengerTitle = styled.div`

`
export const MessengerIcon = styled.div`

`
export const NumberIcon = styled.img`
  margin-right: 13px;
  width: 28px;
  height: 32px;
  margin-top: 10px;
`
export const ContactsTitle = styled.div`
  font-family: 'Playfair Display';
  color: #2e2e2e;
  font-size: 22px;
  margin-bottom: 48px;
`
export const NumberBlock = styled.div`
  font-family: 'Proxima Nova';
  display: flex;
`
export const Time = styled.div`
  font-family: 'Proxima Nova';
  font-size: 16px;
  color: #2e2e2e;
  margin-left: 6px;
`
export const Block = styled.div`

`
export const EmailImg = styled.img`
  font-family: 'Proxima Nova';
  color: #2e2e2e;
  font-size: 16px;
  margin-right: 23px;
`
export const Pages = styled.div`
`
export const Navigations = styled.div`
  display: flex;
  flex-direction: column;
`
export const Links = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-family: 'Proxima Nova';
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.19;
  letter-spacing: 1.2px;
  text-align: left;
  color: #2e2e2e;
`

export const Questions = styled.div`

`

export const QuestionsTitle = styled.div`
  font-family: 'Playfair Display';
  color: #2e2e2e;
  font-size: 22px;
  margin-bottom: 17px;
`
export const QuestionsSubtitle = styled.div`
  font-family: 'Proxima Nova';
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #2e2e2e;
  margin-bottom: 51px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Line = styled.span`
  width: 310px;
  height: 2px;
  background-color: #b7d1e6;
  margin-top: 15px;
  margin-bottom: 38px;
`
export const FormImg = styled.img`
  width: 16px;
  margin-right: 15px;
  padding-top: 3px;
`
export const InputBox = styled.div`
  margin: auto 0;
`
export const Input = styled.input`
  background-color: transparent;
  font-family: 'Proxima Nova';
  border: none;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #2e2e2e;
`
export const TextArea = styled.div`
  margin-top: 30px;
  font-family: 'Proxima Nova';
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #2e2e2e;
`
export const Blue = styled.a`
  color: #3499ea;
  cursor: pointer;
  text-decoration: underline;
`
export const Insta = styled.div`

`
export const TitleBlock = styled.div`
  display: flex;
`
export const InstImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 20px;
`

export const ImgWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  max-width: 237px;
  margin-left: 50px;
`
export const ImageItem = styled.img`
  width: 75px;
  height: 75px;
`