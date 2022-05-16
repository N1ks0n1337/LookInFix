import styled from "styled-components";
import Background from '../../image/footer/bg.png'
import backgroundWhite from '../../image/backSpec.png'

export const Container = styled.div`
  background: linear-gradient(to top, transparent, #dae8f3);
  width: 100%;
  height: 100%;
  background-color: transparent;
`
export const BackgroundWhite = styled.div`
  background-image: url('${backgroundWhite}');
  background-repeat: no-repeat;
  background-position: 0 -49%;
  background-clip: text;
  @media(max-width: 1529px){
    background-position: 0 -49%;
  }
  @media(max-width: 1376px){
    background-position: 0 -27%;
  }
  @media(max-width: 845px){
    background-position: 0 -10%;
  }
  @media(max-width: 832px){
    background-position: 0 -13%;
  }
  @media(max-width: 700px){
    background-position: 0 -12%;
  }
  @media(max-width: 535px){
    background-position: 0 -9%;
  }
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
  padding: 0 15px 15px 15px;
  @media (max-width: 1000px){
    flex-wrap: wrap;
    gap:20px;
    justify-content: center;
  }
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
  @media (max-width: 1000px){
    font-size: 12px;
  }
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
export const MessengerIcn = styled.img`
  width: 24px;
  position: absolute;
  top: 25%;
  left: 20%;
`
export const MessengerIcon = styled.a`
  margin-top: 16px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap:10px;
  cursor: pointer;
`
export const CircleYt = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0 rgba(123, 174, 217, 0.6);
  background-image: linear-gradient(to right bottom, #bad3e8, #b3cee6, #accae3, #a4c5e1, #9dc1df);
  :hover&{
    background-image: linear-gradient(to bottom, #fc6565, #fc6262, #fc6060, #fb5d5d, #fb5a5a);
  }
`
export const CircleInst = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0 rgba(123, 174, 217, 0.6);
  background-image: linear-gradient(to right bottom, #bad3e8, #b3cee6, #accae3, #a4c5e1, #9dc1df);
  :hover&{
    background-image: linear-gradient(to right bottom, #e13db1, #ef309d, #f82687, #fe2571, #ff2c5b, #ff3d4d, #ff4d3f, #ff5c30, #ff6f27, #ff801e, #ff9115, #ffa20d);
  }
`
export const CircleVk = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0 rgba(123, 174, 217, 0.6);
  background-image: linear-gradient(to right bottom, #bad3e8, #b3cee6, #accae3, #a4c5e1, #9dc1df);
  :hover&{
    background-image: linear-gradient(to bottom, #6198c6, #6199c6, #6199c6, #619ac6, #619ac6);
  }
`
export const CircleVib = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0 rgba(123, 174, 217, 0.6);
  background-image: linear-gradient(to right bottom, #bad3e8, #b3cee6, #accae3, #a4c5e1, #9dc1df);
  :hover&{
    background-image: linear-gradient(to bottom, #a274d0, #9f71ce, #9c6ecc, #986bca, #9568c8);
  }
`
export const CircleWa = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0 rgba(123, 174, 217, 0.6);
  background-image: linear-gradient(to right bottom, #bad3e8, #b3cee6, #accae3, #a4c5e1, #9dc1df);
  :hover&{
    background-image: linear-gradient(to bottom, #84ca4f, #7fc74c, #7bc449, #76c247, #71bf44);
  }
`
export const CircleTg = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0 rgba(123, 174, 217, 0.6);
  background-image: linear-gradient(to right bottom, #bad3e8, #b3cee6, #accae3, #a4c5e1, #9dc1df);
  :hover&{
    background-image: linear-gradient(to bottom, #00b7ea, #00b3e9, #00afe8, #00abe6, #00a7e5);
  }
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
  padding-left: 10px;
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
  :hover&{
    color: #3499ea;
  }
`

export const Questions = styled.div`
  padding-left: 15px;
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
  padding-left: 15px;
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