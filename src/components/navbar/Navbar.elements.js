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

