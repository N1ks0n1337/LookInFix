import styled from "styled-components";
import FamilyBg from '../../image/provide/FamilyBg.png'
import SpaceBg from '../../image/provide/SpaceBg.png'
import AvocadoBg from '../../image/provide/AvocadoBg.png'
import RunBg from '../../image/provide/RunBg.png'
import backgroundWhite from '../../image/backSpec.png'
import BackBottomimg from '../../image/backbottom.png'

export const BackBottom = styled.div`
        background-image: url('${BackBottomimg}');
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-clip: text;
        @media(min-width: 1925px){
            background-size: 100%;        
        }
`

export const BackgroundWhite = styled.div`
        background-image: url('${backgroundWhite}');
        background-repeat: no-repeat;
        background-position: 0 -25%;
        background-clip: text;
        @media(max-width: 1529px){
            background-position: 0 -13%;
        }
        @media(max-width: 845px){
            background-position: 0 -17%;
        }
        @media(max-width: 700px){
            background-position: 0 -22%;
        }
        @media(max-width: 554px){
            background-position: 0 -27%;
        }
`

export const Container = styled.div`
    width: 100%;
    padding-bottom: 100px;
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1725px;
    height: 100%;
    margin: auto;
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

export const CardWrapper = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardOne = styled.div`
    background-image: url('${FamilyBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    justify-content: flex-start;
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
        background-image: inherit;
        background-color: #dae8f3;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
    }
    @media(max-width: 449px){
        width: 320px;
        height: 195px;
    }
`
export const CardTwo = styled.div`
    background-image: url('${SpaceBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    justify-content: flex-start;
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
        background-image: inherit;
        background-color: #dae8f3;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
    }
    @media(max-width: 449px){
        width: 320px;
        height: 235px;
    }
`
export const CardThree = styled.div`
    background-image: url('${AvocadoBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    justify-content: flex-start;
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
        background-image: inherit;
        background-color: #dae8f3;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
    }
    @media(max-width: 449px){
        width: 320px;
        height: 195px;
    }
`
export const CardFour = styled.div`
    background-image: url('${RunBg}');
    object-fit: contain;
    width: 750px;
    height: 355px;
    justify-content: flex-start;
    @media (max-width: 845px){
        width: 555px;
        height: 263px;
        background-image: inherit;
        background-color: #dae8f3;
    }
    @media (max-width: 700px){
        width: 411px;
        height: 195px;
    }
    @media(max-width: 449px){
        width: 320px;
        height: 195px;
    }
`
export const CardTitle = styled.div`
  font-size: 32px;
  margin-bottom: 25px;
  @media (max-width: 845px){
    margin-bottom: 10px;
    font-size: 27px;
  }
`
export const CardDescr = styled.div`
  max-width: 375px;
  width: 50%;
  font-size: 16px;
  line-height: 1.69;
  font-weight: 300;
  color: #2e2e2e;
  margin-bottom: 25px;
  @media (max-width: 845px){
      width: 100%;
      font-size: 15px;
      line-height: 1.3;
    }
`
export const CardLink = styled.div`
    cursor: pointer;
    font-size: 16px;
    color: #3499ea;
    text-transform: uppercase;
    @media (max-width: 845px){
        font-size: 13px;
    }
`
export const CardLinkIcon = styled.img`
    margin-left: 8px;
`
export const CardBlock = styled.div`
    padding: 50px 30px;
    @media(max-width: 449px){
        padding: 30px 30px;
    }
`