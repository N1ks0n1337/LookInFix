import styled from "styled-components";
import FamilyImg from '../../image/OurMission/family.png'
import FitnesImg from '../../image/OurMission/fitnes.png'
import SpaceImg from '../../image/OurMission/space.png'
import AvocadoImg from '../../image/OurMission/avocado.png'


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
export const TextHolder = styled.p`
    color: #2e2e2e;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 20px;
    text-align: center;
`
export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`
export const ImageBlocks = styled.div`
    max-width: 951px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -150px;
    @media (max-width:936px) {
        margin-top: 0;
    }
    @media (max-width:500px) {
        width: 400px;
    }
`
export const SpaceBlock = styled.a`
    cursor: pointer;
    background-image: url('${SpaceImg}');
    width: 468px;
    height: 467px;
    object-fit: contain;
    text-shadow: 3.1px 9.5px 35px rgba(46, 46, 46, 0.85);
    font-family: 'Playfair Display';
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    padding-top: 295px;
    padding-left: 180px;
    @media (max-width:936px) {
        background-image: linear-gradient(to right bottom, #c5cfed, #a3b3f0, #8596f0, #6b79ed, #5659e7);
        width: 350px;
        height: 100px;
        padding-top: 0;
        padding-left: 0;
    }
    @media (max-width:700px) {
        width: 250px;
    }
    @media (max-width:500px) {
        width: 150px;
        font-size: 16px;
        padding-top: 30px;
    }
`
export const FitnesBlock = styled.a`
    cursor: pointer;
    background-image: url('${FitnesImg}');
    width: 468px;
    height: 453px;
    object-fit: contain;
    text-shadow: 3.1px 9.5px 35px rgba(46, 46, 46, 0.85);
    font-family: 'Playfair Display';
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    padding-top: 300px;
    padding-right: 240px;
    @media (max-width:936px) {
        background-image: linear-gradient(to left bottom, #eecbec, #ebb0d8, #e993be, #e6769f, #e0587b);
        width: 350px;
        height: 100px;
        padding-top: 20px;
        padding-right: 0;
    }
    @media (max-width:700px) {
        width: 250px;
    }
    @media (max-width:500px) {
        width: 150px;
        font-size: 16px;
        padding-top: 40px;
    }
`
export const AvocadoBlock = styled.a`
    margin-top: -14px;
    cursor: pointer;
    background-image: url('${AvocadoImg}');
    width: 468px;
    height: 407px;
    object-fit: contain;
    text-shadow: 3.1px 9.5px 35px rgba(46, 46, 46, 0.85);
    font-family: 'Playfair Display';
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    padding-top: 100px;
    padding-left: 200px;
    @media (max-width:936px) {
        margin-top: 0;
        background-image: linear-gradient(to right top, #c6d9a5, #b4cc91, #a2bf7e, #8fb36c, #7ca65a);
        width: 350px;
        height: 100px;
        padding-top: 25px;
        padding-left: 0;
    }
    @media (max-width:700px) {
        width: 250px;
    }
    @media (max-width:500px) {
        padding-top: 35px;
        width: 150px;
        font-size: 16px;
    }
`
export const FamilyBlock = styled.a`
    margin-top: -14px;
    cursor: pointer;
    background-image: url('${FamilyImg}');
    width: 468px;
    height: 407px;
    object-fit: contain;
    text-shadow: 3.1px 9.5px 35px rgba(46, 46, 46, 0.85);
    font-family: 'Playfair Display';
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    padding-top: 100px;
    padding-right: 150px;
    @media (max-width:936px) {
        margin-top: 0;
        background-image: linear-gradient(to left top, #c5cfed, #a3b3f0, #8596f0, #6b79ed, #5659e7);
        width: 350px;
        height: 100px;
        padding-top: 25px;
        padding-right: 0;
    }
    @media (max-width:700px) {
        width: 250px;
    }
    @media (max-width:500px) {
        padding-top: 35px;
        width: 150px;
        font-size: 16px;
    }
`