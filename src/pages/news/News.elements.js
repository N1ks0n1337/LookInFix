import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    margin-top: -20px;
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
    padding: 10px;
`
export const Title = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2e2e;
    font-size: 50px;
    margin-bottom: 50px;
    @media(max-width: 798px){
        font-size: 37px;
    }
    @media(max-width: 708px){
        font-size: 30px;
    }
    @media(max-width: 554px){
        font-size: 27px;
    }
    @media(max-width: 406px){
        font-size: 24px
    }
    @media(max-width: 370px){
        font-size: 20px
    }
`
export const Line = styled.hr`
    border-bottom: 1px solid #2e2e2e;
    width: 30px;
    margin: 17px 13px;
    @media(max-width: 554px){
        display: none;
    }
`
export const TitleBlue = styled.span`
    color: #3499ea;
`

export const BlockWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`

export const Block = styled.div`
max-width: 1530px;
width: 100%;
box-shadow: 0px 5px 30px 0 rgba(46, 46, 46, 0.05);
background-color: #fff;
display: flex;
margin-bottom: 30px;
@media(max-width: 820px){
    flex-direction: column;
}
`
export const BlockImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Img = styled.img`
width: 470px;
padding: 10px;
@media(max-width: 1005px){
    width: 350px;
}
@media(max-width: 380px){
    width: 100%;
    object-fit: contain;
}
`
export const BlockDescr = styled.div`
margin-left: 21px;
`
export const BlockTitle = styled.div`
color: #2e2e2e;
font-size: 32px;
font-family: 'PlayfairDisplay';
margin-top: 37px;
padding: 5px;
font-weight: 500;
@media(max-width: 1005px){
    font-size: 22px;
    margin-top: 10px;
}
`
export const BlockText = styled.div`
margin-top: 19px;
font-size: 16px;
font-weight: 300;
color: #2e2e2e;
line-height: 1.69;
padding: 5px;
@media(max-width: 1306px){
    font-size: 13px;  
}
@media(max-width: 1005px){
    margin-top: 0px;
    line-height: 1.2;
}
`
export const CardLink = styled.p`
  text-transform: uppercase;
  cursor: pointer;
  color: #3499ea;
  margin-top: 13px;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 36px;
  text-decoration: underline;
  transition: 1s all;
  @media(max-width: 1306px){
    font-size: 11px;  
}
  &:hover{
    text-decoration: none;
  }
`
export const Arrow = styled.img`
   margin: 0 0 0 7px;
`

export const BlockArrow = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 50px;
    @media(max-width: 1143px){
        margin-top: 70px;
    }
    @media(max-width: 683px){
        margin-top: 140px;
    }
    @media(max-width: 431px){
        margin-top: 111px;
    }
    @media(max-width: 383px){
        margin-top: 70px;
    }
`
export const BlockArrowRight = styled.div`
position: relative;
`
export const ArrowRight = styled.img`
position: absolute;
right: 40px;
top: 30px;
`
export const Counter = styled.div`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
`
export const AllCounter = styled.div`
 color: #2e2e2e;
 font-size: 22px;
 position: absolute;
 top: 0px;
 left: -30px;
`
export const SliderCounter = styled.div`
color: #3499ea;
font-size: 74px;
`
export const BlockArrowLeft = styled.div`
position: relative;
`
export const ArrowLeft = styled.img`
position: absolute;
left: 30px;
top: 30px;
`