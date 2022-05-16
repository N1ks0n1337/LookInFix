import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
    padding-bottom: 100px;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2e2e;
    font-size: 50px;
    padding-top: 50px;
    padding-bottom: 15px;
    margin-bottom: 81px;
    @media(max-width: 798px){
        font-size: 37px
    }
    @media(max-width: 708px){
        font-size: 30px
    }
    @media(max-width: 554px){
        font-size: 27px;
        padding-top: 0px;
        margin-bottom: 20px;
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

export const Card = styled.div`
  width: 490px;
  height: 520px;
  background-color: #fff;
  padding: 10px 10px 36px;
  text-align: center;
  box-shadow: 0px 5px 30px 0 rgba(46, 46, 46, 0.05);
  @media(max-width: 1046px){
    width: 370px;
    
  }
  @media(max-width: 766px){
    margin-bottom: 20px;
    padding: 10px 10px 16px;
}
@media(max-width: 412px){
    width: 310px;
    
}
`
export const CardImage = styled.div`

`
export const CardImg = styled.img`
object-fit: contain;
width: 100%;
`
export const CardTitle = styled.div`
  font-size: 22px;
  color: #2e2e2e;
  margin-top: 30px;
`
export const CardWrapper = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
@media(max-width: 766px){
    gap: 0px;  
}
`
export const CardDescr = styled.div`
  line-height: 1.69;
  font-size: 16px;
  color: #2e2e2e;
  margin-top: 21px;
`
export const CardLink = styled.div`
    cursor: pointer;
    font-size: 16px;
    color: #3499ea;
    text-transform: uppercase;
    margin-top: 26px;
    @media (max-width: 845px){
        font-size: 13px;
    }
`
export const CardLinkIcon = styled.img`
    margin-left: 8px;
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
export const Holder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Limited = styled.div`
    max-height: 400px;
    overflow: hidden;
    position: relative;
`

export const Text = styled.p`
font-size: 18px;
color: #2e2e2e;
line-height: 1.5;
text-align: center;
max-width: 1500px;
width: 100%;
`
export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 80%
  );
  width: 100%;
  height: 120px;
  opacity: 1;
  transition: 0.3s;
`
export const ReadMoreChecker = styled.input`
opacity: 0;
position: absolute;
&:checked {
    max-height: none;
}
`
export const ReadMoreButton = styled.label`
color: #3499ea;
font-size: 16px;
font-weight: 600;
line-height: 1.38;
text-transform: uppercase;
`

export const TextHolder = styled.p`
  color: #2e2e2e;
  font-size: 18px;
  line-height: 1.5;
  margin-top: 20px;
  text-align: center;
`