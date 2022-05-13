import React from 'react';
import { Container, 
         Wrapper,
         Title,
         Line,
         TitleBlue,
         Card,
         CardImage,
         CardImg,
         CardTitle,
         CardDescr,
         CardLink,
         CardLinkIcon,
         CardWrapper
        } from './Articles.elements';
import Icon from '../../image/provide/Detail.svg'
import ImgOne from '../../image/articles/1.png'
import ImgTwo from '../../image/articles/2.png'



const Articles = props => {
    return (
        <Container>
            <Wrapper>
            <Title><Line/>Статьи&ensp;<TitleBlue>наших специалистов</TitleBlue><Line/></Title>
                <CardWrapper>
                <Card>
                    <CardImage>
                        <CardImg src={ImgOne}/>
                    </CardImage>
                    <CardTitle>Организация пространства вокруг</CardTitle>
                    <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места</CardDescr>
                    <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                </Card>

                <Card>
                    <CardImage>
                        <CardImg src={ImgTwo}/>
                    </CardImage>
                    <CardTitle>Как сознательно управлять своей жизнью</CardTitle>
                    <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места</CardDescr>
                    <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                </Card>

                <Card>
                    <CardImage>
                        <CardImg src={ImgOne}/>
                    </CardImage>
                    <CardTitle>Как стать лидером</CardTitle>
                    <CardDescr>Например, полуосознанное влияние человека на физическое пространство вокруг рабочего места</CardDescr>
                    <CardLink>подробнее<CardLinkIcon src={Icon}/></CardLink>
                </Card>
                </CardWrapper>
            </Wrapper>
        </Container>
    );
};


export default Articles;