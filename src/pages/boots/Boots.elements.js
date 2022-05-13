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
export const Block = styled.div`
display: flex;
position: relative;
margin-top: 105px;
`
export const Person = styled.div`

`
export const PersonImage = styled.div``

export const Image = styled.img``

export const PersonName = styled.div`

`
export const PersonProf = styled.div`

`

export const Experience = styled.div`

`

