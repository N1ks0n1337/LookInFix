import React, {useState} from 'react';
import { Container,Logo,LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, Icon, MobileIcon } from './Navbar.elements';
import ExitIcon from '../../image/icon/exit.svg'
import MenuIcon from '../../image/icon/menu.svg';
import Logotype from '../../image/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = props => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <Container>
            <Wrapper>
            <LogoContainer>
                <Logo src={Logotype}/>
            </LogoContainer>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <Menu open={showMobileMenu}>
                <MenuItem>
                    <MenuItemLink>
                    услуги
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                    темы
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                    статьи
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                    контакты
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
                    <MenuItemLink>
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
        </Container>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;