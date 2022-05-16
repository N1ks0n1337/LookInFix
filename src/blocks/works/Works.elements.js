import styled from "styled-components";
import BorderImg from '../../image/sliderBorder.png'
import Background from '../../image/sliderBlockBack.png'
import backgroundWhite from '../../image/backSpec.png'
import BackBottomimg from '../../image/backbottom.png'

export const Container = styled.div`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 70px;
`

export const Back = styled.div`
        background-image: url('${Background}');
        background-repeat: no-repeat;
        background-clip: text;
        background-position: 89% 25%;
        @media(max-width: 1614px){
        background-size: 50%;
        }
        @media(max-width: 1197px){
        background-image: none;
        }
`
export const BackBottom = styled.div`
        background-image: url('${BackBottomimg}');
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-clip: text;
        @media(min-width: 1925px){
            background-size: 100%;        
        }
`
export const BackgroundWhite = styled.div`
        background-image: url('${backgroundWhite}');
        background-repeat: no-repeat;
        background-position: 0 -30%;
        background-clip: text;
        @media(min-width: 1925px){
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

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2e2e;
    font-size: 50px;
    padding-top: 50px;
    padding-bottom: 15px;
    @media(max-width: 798px){
        font-size: 37px
    }
    @media(max-width: 708px){
        font-size: 30px
    }
    @media(max-width: 554px){
        font-size: 27px;
        padding-top: 0px;
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

export const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2e2e;
    font-size: 22px;
    @media(max-width: 549px){
        text-align: center;
        padding: 5px;
    }
`
export const BlockWrapper = styled.div`
margin-top: 117px;
display: flex;
justify-content: center;
@media(max-width: 593px){
}
`
export const Block = styled.div`
  width: 1500px;
  height: 419px;
  position: relative;
  border: solid;
  border-image-source: url(${BorderImg});
  border-image-slice: 60%;
  border-image-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 47px;
  @media(max-width: 1614px){
    width: 1100px;
    height: 419px;
  }
  @media(max-width: 1180px){
    border: none;
    border-image-source: none;
  }
  @media(max-width: 1180px){
    justify-content: flex-start;
    padding-left: 0px;
    padding: 10px;
  }

`
export const BlockItems = styled.div`

`

export const Item = styled.div`
    font-size: 32px;
    color: #b7d1e6;
    line-height: 1.25;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.3s all;
    &:hover{
        color: #3499ea;
    }
    @media(max-width: 953px){
        font-size: 25px;
    }
`
export const ItemIcon = styled.img`
    margin-right: 29px;
    cursor: pointer;
    @media(max-width: 977px){
        width: 40px;
        height: 40px;
    }
`
export const SliderBlock = styled.div`
position: absolute;
right: -20px;
top: -30px;
@media(max-width: 1180px){
     position: relative;
     display: flex;
     justify-content: center;
     margin-top: 40px;
     border-radius: 40px;
     right: 0px;
     top: 0px;
    }

`
export const SliderBlockImg = styled.img`
  @media(max-width: 1614px){
    width: 650px;
  }
  @media(max-width: 1180px){
      width: 500px; 
  }
  @media(max-width: 533px){
      width: 100%; 
  }
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
export const BlockArrowLeft = styled.div`
position: relative;
`
export const ArrowLeft = styled.img`
position: absolute;
left: 30px;
top: 30px;
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

export const SliderCounter = styled.div`
color: #3499ea;
font-size: 74px;
`
export const AllCounter = styled.div`
 color: #2e2e2e;
 font-size: 22px;
 position: absolute;
 top: 0px;
 left: -30px;
`
export const Blocks = styled.div`
display: flex;
flex-direction: column;
  @media(max-width: 1180px){
      flex-direction: row;
      justify-content: space-around;
  }
  @media(max-width: 953px){
        justify-content: space-between;
    }
    @media(max-width: 683px){
        flex-direction: column;
        align-items: center;    
    }
`
