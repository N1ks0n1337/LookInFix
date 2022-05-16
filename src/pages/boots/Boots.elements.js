import styled from "styled-components";
import BorderImg from '../../image/sliderBorder.png'
import backgroundWhite from '../../image/boots/back.png'


export const Container = styled.div`
    width: 100%;
    margin-top: -20px;
    font-family: 'PlayfairDisplay', sans-serif;
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NavLink = styled.div`
display: flex;
margin-top: 90px;
font-size: 16px;
@media(max-width: 586px){
    font-size: 12px; 
}
`
export const NavLinkBlack = styled.div`

`
export const NavLinkBlue = styled.div`
  color: #3499ea;
`
export const Title = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2e2e;
    font-size: 50px;
    margin-bottom: 56px;
    font-family: 'Playfair Display', serif;
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
export const Block = styled.div`
display: flex;
position: relative;
margin-top: 105px;
max-width: 1400px;
height: 534px;
width: 100%;
border: solid;
border-image-source: url(${BorderImg});
border-image-slice: 60%;
border-image-width: 100%;
position: relative;
@media(max-width: 1455px){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
@media(max-width: 1055px){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    flex-direction: column;
    border: none;
    border-image-source: none;
}
`
export const Person = styled.div`
text-align: center;
margin: 81px 0 0 55px;
@media(max-width: 1455px){  
    margin: 0px 0 0 0px;
}
`
export const PersonImage = styled.div``

export const Image = styled.img`
@media(max-width: 571px){
    width: 140px; 
}
@media(max-width: 451px){
    width: 120px; 
}
`

export const PersonName = styled.div`
  font-size: 32px;
  color: #2e2e2e;
  margin-top: 15px;
  @media(max-width: 571px){
    font-size: 25px;
}
@media(max-width: 451px){
    font-size: 20px;
}
`
export const PersonProf = styled.div`
  font-size: 16px;
  font-family: 'ProximaNova', sans-serif;;
  color: #2e2e2e;
  margin-top: 15px;
  @media(max-width: 571px){
    font-size: 14px;
}
@media(max-width: 451px){
    font-size: 13px;
}
`

export const Experience = styled.div`
  font-size: 16px;
  font-family: 'ProximaNova', sans-serif;;
  color: #2e2e2e;
  margin-top: 5px;
`

export const BlockImage = styled.div`
    @media(max-width: 1455px){
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media(max-width: 1055px){
    margin-top: 20px;
    border: solid;
    border-image-source: url(${BorderImg});
    border-image-slice: 90%;
    border-image-width: 100%;
    height: 100%;
}
@media(max-width: 574px){
    border: none;
    border-image-source: none;
    margin-top: 0px;
}
`
export const Img = styled.img`
max-width: 1155px;
width: 100%;
object-fit: contain;
position: absolute;
top: -80px;
left: 340px;
@media(max-width: 1555px){
    position: relative;
    top: -20px;
    left: 30px;
}
@media(max-width: 1455px){
    object-fit: contain;
    top: 0px;
    left: 0px;
}
@media(max-width: 1048px){
    top: 40px;
    left: 0px;
}
@media(max-width: 750px){
    top: 30px;
    left: 0px;
}
`

export const BlockDescr = styled.div`
  font-family: 'ProximaNova', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #2e2e2e;
  max-width: 1407px;
  margin-top: 79px;
  padding-bottom: 100px;
  @media(max-width: 500px){
    margin-top: 5px;
    text-align: center;
    font-size: 15px;    
  }
`

export const Text = styled.p`
margin-top: 30px;
`
export const BackgroundWhite = styled.div`
        background-image: url('${backgroundWhite}');
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-clip: text;
`
export const WrapeerTwo = styled.div`
    position: relative;
    height: 100%;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    padding-bottom: 40px;
`
export const CardBlock = styled.div`
display: flex;
gap: 40px;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
export const Card = styled.div`
  box-shadow: 0px 5px 30px 0 rgba(46, 46, 46, 0.05);
  background-color: #fff;
  width: 360px;
  border-radius: 4px;
  @media(max-width: 390px){
    width: 310px;
  }
`
export const CardImage = styled.img`
padding: 10px;
object-fit: contain;
width: 100%;
`

export const CardTitle = styled.h2`
font-size: 22px;
font-family: 'Playfair Display', serif;
line-height: 1.82;
color: #2e2e2e;
text-align: center;
`
export const CardText = styled.p`
text-align: center;
margin-top: 11px;
color: #2e2e2e;
line-height: 1.69;
font-size: 16px;

`
export const CardLink = styled.p`
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  color: #3499ea;
  margin-top: 23px;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 36px;
  text-decoration: underline;
  transition: 1s all;
  &:hover{
    text-decoration: none;
  }
`
export const Arrow = styled.img`
   margin: 0 0 0 7px;
`