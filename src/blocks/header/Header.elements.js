import styled from "styled-components";
import HeaderBG from '../../image/headerBG.png'

export const BackgroundImg = styled.div`
        background-image: url('${HeaderBG}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 800px -550px;
        background-clip: text;
        @media(max-width: 1740px){
          background-position: 800px -450px;
        }
        @media(max-width: 1613px){
          background-position: 600px -350px;
        }
        @media(max-width: 1353px){
          background-position: 600px -250px;
        }
        @media(max-width: 1250px){
          background-position: 500px -150px;
        }
        @media(max-width: 1086px){
          background-position: 400px -150px;
        }
        @media(max-width: 1086px){
          background-position: 400px -150px;
        }
        @media(max-width: 950px){
          background-size: 700px;
          background-position: 500px -70px;
        }
        @media(max-width: 876px){
          background-image: none; 
        }
`
export const Container = styled.div`
    width: 100%;
    margin-top: -30px;
    
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
    padding: 30px 30px;
`
export const Line = styled.hr`
      border-bottom: 1px solid #2e2e2e;
      width: 30px;
      margin-right: 13px;
`
export const SubTitle = styled.div`
      font-family: 'Proxima Nova';
      font-size: 22px;
      color: rgba(0, 0, 0, 0.52);
      margin-bottom: 54px;
      margin-top: 174px;
      display: flex;
      align-items: center;
      position: relative;
      @media(max-width: 500px){
        margin-top: 104px;
      }
      @media(max-width: 450px){
        font-size: 17px;
      }
`
export const SubTitleBlue = styled.div`
   color: #3499ea;
`
export const TitleBack = styled.div`
  margin-left: 20px; 
  width: 253px;
  height: 45px;
  transform: skew(-20deg);
  background-color: #3499ea;
  opacity: 0.1;
  position: absolute;
  border-radius: 4px;
  @media(max-width: 450px){
    width: 203px;
    margin-left: 10px; 
    }
`
export const Title = styled.div`
  font-size: 66px;
  width: 750px;
  line-height: 1.27;
  @media(max-width: 1112px){
    font-size: 44px;
    width: 637px;
  }
  @media(max-width: 672px){
    font-size: 34px;
    width: 100%;
  }
  @media(max-width: 440px){
    font-size: 28px;
    width: 100%;
  }
  @media(max-width: 380px){
    font-size: 24px;
    width: 100%;
  }
`

export const TitleBlue = styled.span`
  color: #3499ea;
`

export const Items = styled.div`
  margin-top: 112px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 155px;
@media(max-width: 828px){
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
}
@media(max-width: 500px){
  margin-top: 72px;
}
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  margin-bottom: 30px;
`
export const ItemTimes = styled.span`
    font-size: 74px;
    color: #3499ea;
    margin-right: 11px;
    `
export const ItemDescr = styled.div`
  color: #2e2e2e;
  line-height: 1.38;
  width: 112px;
  padding-top: 19px;
  font-family: 'Proxima Nova';
`