import styled from "styled-components";

export const Btn = styled.button`
  font-family: 'Proxima Nova';
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: #3499ea;
  width: 370px;
  height: 80px;
  border-radius: 4px 4px 20px 20px;
  border-bottom: 7px solid #1a7cc5;
  box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  transition: 0.2s all ease;
  margin-top: 68px;
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
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 380px){
    height: 44px;
  }
`