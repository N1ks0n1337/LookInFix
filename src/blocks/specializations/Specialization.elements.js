import styled from "styled-components";
import blueHover from '../../image/specialization/blueHover.png'
import backgroundWhite from '../../image/backSpec.png'

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    padding-bottom: 100px;
`
export const BackgroundWhite = styled.div`
    background-image: url('${backgroundWhite}');
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-clip: text;
`
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
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
export const Line = styled.hr`
    border-bottom: 1px solid #2e2e2e;
    width: 30px;
    margin: 17px 13px;
    @media(max-width: 554px){
        display: none;
    }
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
        padding-top: 0px;
        font-size: 27px;
        margin-bottom: 11px;
    }
    @media(max-width: 406px){
        font-size: 24px
    }
`
export const TitleBlue = styled.span`
    color: #3499ea;
`
