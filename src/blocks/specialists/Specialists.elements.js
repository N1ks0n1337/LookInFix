import styled from "styled-components";

<<<<<<< HEAD
=======
import ManBg from '../../image/specialists/ManBg.png'
import WomanBg from '../../image/specialists/WomanBg.png'
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b

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
export const SpecialistsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`
export const Block = styled.div`
    display: flex;
    @media (min-width: 750px){
        justify-content: space-evenly;
<<<<<<< HEAD
=======
        margin-bottom: -270px;
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b
        :nth-child(2n){
        flex-direction: row-reverse;
        }
    }
    @media (max-width: 750px) {
        flex-direction: column-reverse;
        margin: 60px auto;
    }
<<<<<<< HEAD


`
export const ImageContainer = styled.div`
    position: relative;

`
=======
    @media (max-width: 750px) {
        :not(:first-child){
            margin-top: 480px;
        }
    }
    @media (max-width: 540px) {
        :not(:first-child){
            margin-top: 350px;
        }
    }
    @media (max-width: 390px) {
        :not(:first-child){
            margin-top: 250px;
        }
    }

`
export const ImageContainer = styled.div`
    position: relative;

`
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b
export const Image = styled.img`
    width: 774px;
    @media (max-width: 1074px) {
        width: 550px;
    }
<<<<<<< HEAD
=======
    @media (max-width: 750px) {
        position: absolute;
        top: -80px;
        left: -180px;
    }
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b
    @media (max-width: 540px) {
        width: 400px;
        top: -50px;
        left: -107px;
    }
    @media (max-width: 390px) {
        width: 300px;
        top: -50px;
        left: -60px;
    }
<<<<<<< HEAD
`
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
=======
`
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b

export const TextNumber = styled.h2`
    display: flex;
    margin: 0 auto;
    background: linear-gradient(to top, #fff, #3499ea);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    font-size: 74px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: left;
    @media (max-width: 1074px) {
        font-size: 50px;
    }
`
export const Text = styled.h3`
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
    @media (max-width: 1074px) {
        font-size: 20px;
    }
`
export const EnterImg = styled.img`
    width: 22px;
    margin-right: 19px;
    margin-top: 10px;
    @media (max-width: 1074px) {
        width: 15px;
        margin-top: 7px;
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
export const BlueLine = styled.hr`
    border-bottom: 1px solid #9ecef5;
    width: 30px;
    margin: 30px 13px;
`
export const BlueLine = styled.hr`
    border-bottom: 1px solid #9ecef5;
    width: 30px;
    margin: 30px 13px;
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
<<<<<<< HEAD
    @media(max-width: 554px){
        font-size: 27px
    }
    @media(max-width: 406px){
        font-size: 24px
    }
    @media(max-width: 370px){
        font-size: 20px
    }
=======
    @media(max-width: 596px){
        font-size: 20px
    }
    @media(max-width: 432px){
        font-size: 15px
    }
    @media(max-width: 355px){
        font-size: 12px
    }
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b
`
export const SubTitle = styled.div`
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.82;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
<<<<<<< HEAD
=======
    margin-bottom: -100px;
>>>>>>> 5f6f31b58066c6bb045fdbe56eac0dde40bd6b9b
    @media(max-width: 611px){
        font-size: 20px
    }
    @media(max-width: 596px){
        font-size: 16px
    }
    @media(max-width: 432px){
        font-size: 12px
    }
`
export const TitleBlue = styled.span`
    color: #3499ea;
`