import React, {useState} from 'react';
import { Container, Exit,Blue,Descr ,BtnBorder ,Btn,BtnContainer,InputBox, Line,Input,FormImg ,Form,ModalContent,Modal,Logo,LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, Icon, MobileIcon } from './Navbar.elements';
import ExitIcon from '../../image/icon/exit.svg'
import MenuIcon from '../../image/icon/menu.svg';
import Logotype from '../../image/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css'
import ManIcon from '../../image/footer/woman.svg'
import exit from '../../image/modal/exit.png'
import { Link } from 'react-router-dom';

const Navbar = props => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [modalActive, setModalActive] = useState(false)
    return (
        <Container>
            <Wrapper>
            <LogoContainer>
                <Link to={"/"}> <Logo src={Logotype}/> </Link>
            </LogoContainer>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <Menu open={showMobileMenu}>
                <MenuItem>
                    <MenuItemLink>
                    <Link to={"/boots"}> услуги</Link>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                    <Link to={"/mission"}>темы</Link>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                    <Link to={"/news"}>статьи</Link>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink >
                    <Link to={"/ourmission"}>контакты</Link>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                    {/* <form action="#" class="search-form">
                        <input type="search" class="search-form-input" placeholder="Subscribe our newsletter" />
                        <button type="submit" class="search-form-btn">
                       <img src="http://www.freeiconspng.com/uploads/blue-arrow-png-22.png" alt=""/>
                        </button>
                    </form> */}
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink onClick={() => setModalActive(true)}>
                    <Icon src={ExitIcon}/>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                    <Icon src={MenuIcon}/>
                    </MenuItemLink>
                </MenuItem>
            </Menu>
            </Wrapper>
            <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
                    <div className='modal__content' onClick={e => e.stopPropagation()}>
                        <div className='modal__title'>Вход</div>
                        <div className='modal__subtitle'>Добро пожаловать в Look In</div>
                        <Exit src={exit}/>
                        <Form>
                        <InputBox>
                            <FormImg src={ManIcon}/>
                            <Input placeholder='Ваше имя'></Input>
                        </InputBox>
                        <Line/> 
                        <InputBox>
                            <FormImg src={ManIcon}/>
                            <Input placeholder='Пароль'></Input>
                        </InputBox>
                        <Line/> 
                        </Form>
                        <BtnContainer>
                         <Btn>
                             <BtnBorder>
                                 Войти
                             </BtnBorder>
                         </Btn>
                         <Descr>
                         нажимая на кнопку вы даете согласие<br/> &nbsp;
                            <Blue>на обработку персональных данных</Blue>
                         </Descr>
                        </BtnContainer>
                        
                </div>
            </div>
        </Container>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;