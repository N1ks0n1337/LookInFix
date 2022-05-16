import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 82px;
    margin-top: 20px;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    cursor: pointer;
`
export const Logo = styled.img`
`

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    
    @media(max-width: 960px){
        z-index: 99998;
        background-color: #fff;
        position: absolute;
        top: 0px;
        left: ${({open}) => (open ? "0": "-100%")};
        width: 100%;
        height: 100%;
        position: fixed;
        opacity: 1;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`
export const MenuItem = styled.li`
    font-family: 'Proxima Nova';
    font-weight: 600;
    height: 100%;
    padding-top: 40px;
    &:nth-child(4){
        margin-right: 174px;  
    }
    @media(max-width: 960px){
        padding-top: 0px;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(7){
        display: none;
        }
        &:nth-child(6){
        display: none;
        }
        &:nth-child(4){
        margin-right: 0px; 
        }

}
    @media(max-width: 1164px){
        &:nth-child(4){
            margin-right: 0px;  
        }
    }

`

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #2e2e2e;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s all ease;
    &:hover{
        color: #3499ea;
    }
    @media(max-width: 1164px){
        font-size: 14px;
    }
    @media(max-width: 960px){
        width: 100%;
        font-size: 16px;
    }
`

export const Icon = styled.img`

`
export const MobileIcon = styled.div`
    display: none;
    @media(max-width: 960px){
        display: flex;
        align-items: center;
        cursor: pointer;
        svg{
            fill: #000;
            z-index: 99999;
            position: fixed;
            right: 10px;
            z-index: 99999;
            margin-right: 0.5rem;
            width: 25px;
            height: 25px;
        }
    }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const InputBox = styled.div`
`
export const FormImg = styled.img`
  width: 16px;
  margin-right: 15px;
  padding-top: 3px;
`
export const Input = styled.input`
  background-color: transparent;
  font-family: 'Proxima Nova';
  border: none;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #3499ea;
`
export const Line = styled.span`
  width: 310px;
  height: 2px;
  background-color: #3499ea;
  margin-top: 15px;
  margin-bottom: 38px;
`
export const BtnContainer = styled.div`
margin-top: -30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Btn = styled.button`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: #3499ea;
  width: 310px;
  height: 65px;
  border-radius: 4px 4px 20px 20px;
  border-bottom: 7px solid #1a7cc5;
  box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  transition: 0.2s all ease;
  &:hover{
    border-bottom: 2px solid #1a7cc5; 
  }
  @media(max-width: 1089px){
    width: 321px;
    font-size: 16px
  }
  @media(max-width: 380px){
    width: 280px;
    font-size: 14px;
    height: 60px;
  }
`
export const BtnBorder = styled.div`
  border: solid 0.2px rgba(255, 255, 255, 0.3);
  margin: 5px;
  border-radius: 4px 4px 10px 10px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Descr = styled.div`
 font-size: 14px;
 font-weight: 300;
 color: #2e2e2e;
 text-align: center;
 line-height: 1.29;
margin-top: 10px;
`
export const Blue = styled.span`
color: #3499ea;
`
export const Exit = styled.img`
position: absolute;
top: -150px;
`