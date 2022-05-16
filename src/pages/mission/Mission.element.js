import styled from "styled-components";
import BorderImg from '../../image/sliderBorder.png'


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
    @media(max-width: 1331px){
        margin-bottom: 0px;
    }
    @media(max-width: 1061px){
        margin-bottom: -40px;
    }
    @media(max-width: 798px){
        font-size: 37px;
        margin-bottom: -80px;
    }
    @media(max-width: 708px){
        font-size: 30px;
        margin-bottom: -100px;
    }
    @media(max-width: 554px){
        font-size: 27px;
        margin-bottom: -150px;
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
export const BlockImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid;
border-image-source: url(${BorderImg});
border-image-slice: 60%;
border-image-width: 100%;
width: 1500px;
height: 475px;
position: relative;
margin-top: 40px;
@media(max-width: 1589px){
    border-image-source: none;
    border: none;
    width: 100%;
}
@media(max-width: 1331px){
    margin-top: 10px;
}
`
export const Image = styled.img`
max-width: 1500px;
height: 475px;
width: 100%;
object-fit: contain;
position: absolute;
bottom: 30px;
left: 30px;
@media(max-width: 1589px){
    position: relative;
    bottom: 0px;
    left: 0px
}
`

export const BlockContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 500px){
    text-align: center;
}
`
export const BlockDescrWrapper = styled.div`
max-width: 1500px;
width: 100%;
font-size: 18px;
font-weight: 300;
color: #2e2e2e;
line-height: 1.5;
font-family: 'PlayfairDisplay';
margin-top: 63px;
@media(max-width: 1152px){
    font-size: 14px;
    margin-top: 3px;
}
@media(max-width: 880px){
    font-size: 14px;
    margin-top: -53px;
}
@media(max-width: 682px){
    font-size: 14px;
    margin-top: -93px;
}
@media(max-width: 502px){
    font-size: 14px;
    margin-top: -153px;
}
`
export const BlockDescrWrapperOne = styled.div`
  font-family: 'Proxima Nova';
`
export const BlockDescrWrapperTitle = styled.div`
  font-family: 'Playfair Display';
  font-size: 22px;
  font-weight: normal;
  line-height: 1.82;
  margin-top: 30px;
  @media(max-width: 1152px){
    font-size: 19px;
}
`
export const BlockWheel = styled.div`
margin-top: 92px;
`
export const BlockImageWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
export const InfoImage = styled.img`
@media(max-width: 965px){
    width: 100%;
}
`
export const BlockTitle = styled.div`
@media(max-width: 1149px){
    margin-bottom: 50px;
}
@media(max-width: 779px){
    margin-bottom: 100px;
}
@media(max-width: 556px){
    margin-bottom: 200px;
}
`
export const BlockDescrWrapperTwo = styled.div`
margin-top: 76px;
@media(max-width: 500px){
    text-align: center;
}
`