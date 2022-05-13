import styled from "styled-components";
import blueHover from '../../image/specialization/blueHover.png'
import WhiteBack from '../../image/specialization/top.png'

export const Container = styled.div`
    width: 100%;
    margin-top: 20px;
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
    :hover&{
        background: url(${blueHover});
        cursor: pointer;
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
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 1.2px;
    text-align: center;
    color: #fff;
    ${Item}:hover &{
        display: block;
        position: absolute;
        top: 65%;
        left: 50%;
        background-color: rgba(52,153,234,0.6);
        transform: translate(-50%, -50%);
    }
`
export const HoverBg = styled.p`
    display: none;
    position: absolute;
    top: 65%;
    left: 50%;
    height: 100%;
    width: 100%;
    background-color: rgba(52,153,234,0.6);
    ${Item}:hover{
        display: block;
        
    } 
`
export const ItemText = styled.h2`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
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
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2e2e;
    font-size: 50px;
    padding-top: 50px;
    padding-bottom: 15px;
<<<<<<< HEAD
    margin-bottom: 81px;
=======
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b
    @media(max-width: 798px){
        font-size: 37px
    }
    @media(max-width: 708px){
        font-size: 30px
    }
<<<<<<< HEAD
    @media(max-width: 554px){
        padding-top: 0px;
        font-size: 27px;
        margin-bottom: 11px;
    }
    @media(max-width: 406px){
        font-size: 24px
=======
    @media(max-width: 596px){
        font-size: 20px
    }
    @media(max-width: 432px){
        font-size: 15px
    }
    @media(max-width: 355px){
        font-size: 12px
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b
    }
`
export const TitleBlue = styled.span`
    color: #3499ea;
`
