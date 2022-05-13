import styled from "styled-components";
import FamilyBg from '../../image/provide/FamilyBg.png'
import SpaceBg from '../../image/provide/SpaceBg.png'
import AvocadoBg from '../../image/provide/AvocadoBg.png'
import RunBg from '../../image/provide/RunBg.png'

export const Container = styled.div`
    width: 100%;
    height: 82px;
    margin-top: 20px;
`
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
`
export const Content = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const BlockTitle = styled.h2`
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
    @media (max-width: 700px){
        font-size: 25px;
    }
`
export const BlockSubtitle = styled.h3`
    font-family: 'Proxima Nova';
    width: 375px;
    margin-top: 25px;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.69;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
    margin-bottom: 18px;
    @media (max-width: 700px){
        font-size: 14px;
        margin-top: 18px;
        margin-bottom: 12px;
    }
`
export const BlockDetail = styled.a`
    font-family: 'Proxima Nova';
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 1.2px;
    text-align: center;
    color: #3499ea;
    @media (max-width: 700px){
        font-size: 14px;
    }
`
export const DetailImg = styled.img`
    width: 15px;
    margin-top: 4px;
    margin-left: 8px;
`
export const FirstBlock = styled.div`
    background-image: url('${FamilyBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    margin-right: 30px;
    margin-top: 30px;
    padding-top: 50px;
    padding-left: 30px;
    justify-content: flex-start;
    @media (max-width: 1529px){
        margin-right: 25px;
    }
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
        padding-top: 30px;
    }
`
export const SecondBlock = styled.div`
    background-image: url('${SpaceBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    margin-top: 30px;
    padding-top: 50px;
    padding-left: 30px;
    justify-content: flex-start;
    @media (max-width: 1529px){
        margin-right: 30px;
    }
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
        padding-top: 30px;
    }
`
export const ThirdBlock = styled.div`
    background-image: url('${AvocadoBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    margin-right: 30px;
    margin-top: 30px;
    padding-top: 50px;
    padding-left: 30px;
    justify-content: flex-start;
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
        padding-top: 30px;
    }
`
export const FourthBlock = styled.div`
    background-image: url('${RunBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    margin-top: 30px;
    padding-top: 50px;
    padding-left: 30px;
    justify-content: flex-start;
    @media (max-width: 1529px){
        margin-right: 30px;
    }
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
        padding-top: 30px;
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
    @media(max-width: 798px){
        font-size: 37px
    }
    @media(max-width: 708px){
        font-size: 30px
    }
    @media(max-width: 596px){
        font-size: 20px
    }
    @media(max-width: 432px){
        font-size: 15px
    }
    @media(max-width: 355px){
        font-size: 12px
    }
    
`
export const Line = styled.hr`
    border-bottom: 1px solid #2e2e2e;
    width: 30px;
    margin: 17px 13px;
`
export const TitleBlue = styled.span`
    color: #3499ea;
`