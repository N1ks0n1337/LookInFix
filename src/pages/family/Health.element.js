import styled from "styled-components";
import BorderImg from '../../image/sliderBorder.png'
import LarS from '../../image/health/lars.png'

export const Container = styled.div`
    width: 100%;
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
    margin-bottom: 56px;
    @media(max-width: 706px){
        margin-bottom: 40px;
    }
    @media(max-width: 406px){
        font-size: 24px;
        margin-bottom: 32px;
    }
    @media(max-width: 370px){
        font-size: 20px;
    }
`
export const TextHolder = styled.p`
    color: #2e2e2e;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 20px;
    text-align: center;
`
export const SubTitle = styled.div`
    font-family: 'Proxima Nova';
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
    @media(max-width: 549px){
        text-align: center;
        padding: 5px;
    }
    @media(max-width: 1061px){
        margin-bottom: -40px;
    }
    @media(max-width: 798px){
        margin-bottom: -80px;
    }
    @media(max-width: 708px){
        margin-bottom: -100px;
    }
    @media(max-width: 554px){
        font-size: 16px;
        margin-bottom: -150px;
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
export const SpecializationTypesItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const Item = styled.div`
    position: relative;
    margin: 15px;
    width: 500px;
    @media(max-width: 798px){
        width: 400px;
    }
    @media(max-width: 611px){
        width: 300px;
    }
    @media(max-width: 561px){
        width: 250px;
    }
    :hover&{
        cursor: pointer;
        &:after{
            opacity: 1;
            transition: .2s ease-in-out;
        }
    }
    &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(52,153,234,0.6);
    opacity: 0;
    z-index: 5;
    }
`
export const ItemHoverImg = styled.img`
    width: 15px;
    height: 15px;
    z-index: 10;
    margin-top: 4px;
    
    @media (max-width:561px){
        margin-top: 2px;
    }
`
export const ItemImg = styled.img`
    width: 500px;
    @media(max-width: 798px){
        width: 400px;
    }
    @media(max-width: 611px){
        width: 300px;
    }
    @media(max-width: 561px){
        width: 250px;
    }
`
export const ItemHover = styled.a`
    display: none;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    text-decoration: underline;
    font-family: 'Proxima Nova';
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 1.2px;
    text-align: center;
    color: #fff;
    z-index: 10;
    ${Item}:hover &{
        display: block;
    }
    @media (max-width:561px){
        font-size: 12px;
    }
`
export const ItemText = styled.h2`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    font-family: 'Playfair Display';
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
    z-index: 10;
    ${Item}:hover &{
        top: 40%;
        color: #fff;
    }
    @media(max-width: 611px){
        font-size: 20px;
    }
`
export const Block = styled.div`
    width: 1500px;
    height: 419px;
    border: solid;
    border-image-source: url(${BorderImg});
    border-image-slice: 60%;
    border-image-width: 100%;
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
    margin-top: 100px;
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
export const MainBlock = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const MainTitle = styled.h2`
    font-family: 'Playfair Display';
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
`
export const PeopleBlocks = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
`
export const PeopleBlock = styled.div`
    display: flex;
    flex-direction: column;
`
export const People = styled.div`
    background-image: url(${LarS});
    margin: 0 auto;
    width: 129px;
    height: 138px;
`
export const PeopleTitle = styled.h3`
    margin: 0 auto;
    font-family: 'Playfair Display';
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.82;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
`
export const PeopleTextBlock = styled.div`

`