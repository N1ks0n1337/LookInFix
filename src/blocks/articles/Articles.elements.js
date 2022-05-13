import styled from "styled-components";

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

export const Title = styled.div`
    margin-top: 20px;
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
        font-size: 27px;
        padding-top: 0px;
        margin-bottom: 20px;
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

export const Card = styled.div`
  width: 490px;
  height: 520px;
  background-color: #fff;
  padding: 10px 10px 36px;
  text-align: center;
  @media(max-width: 1046px){
    width: 370px;
    height: 460px;
  }
  @media(max-width: 766px){
    margin-bottom: 20px;
}
@media(max-width: 412px){
    width: 310px;
    height: 460px;
}
`
export const CardImage = styled.div`

`
export const CardImg = styled.img`
object-fit: contain;
width: 100%;
`
export const CardTitle = styled.div`
  font-size: 22px;
  color: #2e2e2e;
  margin-top: 30px;
`
export const CardWrapper = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
@media(max-width: 766px){
    gap: 0px;  
}
`
export const CardDescr = styled.div`
  line-height: 1.69;
  font-size: 16px;
  color: #2e2e2e;
  margin-top: 21px;
`
export const CardLink = styled.div`
    cursor: pointer;
    font-size: 16px;
    color: #3499ea;
    text-transform: uppercase;
    margin-top: 26px;
    @media (max-width: 845px){
        font-size: 13px;
    }
`
export const CardLinkIcon = styled.img`
    margin-left: 8px;
`