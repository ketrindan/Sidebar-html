
import styled from 'styled-components';
import { themeLight, themeDark } from './themes';

export const SidebarContainer = styled.nav`
  max-width: 250px;
  height: 80vh;
  padding: 25px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${(props) =>
    props.theme.color === 'light' ? themeLight.sidebar_background_light_default : themeDark.sidebar_background_dark_default
  };
  color: ${(props) => 
    props.theme.color === 'light' ? themeLight.text_light_default : themeDark.text_dark_default
  };
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  width: 100%;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const Title = styled.span`
  color: ${(props) => 
    props.theme.color === 'light' ? themeLight.text_logo_light_default : themeDark.text_logo_dark_default
  };
  font-size: 20px;
`;

export const ExpandBtn = styled.div`
  background: ${(props) =>
    props.theme.color === 'light' ? (props.opened === true ? themeLight.button_background_light_active : themeLight.button_background_light_default)
     : (props.opened === true ? themeDark.button_background_dark_active : themeDark.button_background_dark_default)
  };
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: auto;
  right: ${(props) => 
    props.opened === true ? '-35px' : '-60px'
  };
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  margin: 0;
  gap: 5px;

  &:last-child {
    margin-top: auto;
  }
`;

export const Text = styled.span`
  color: ${(props) => 
    props.theme.color === 'light' ? themeLight.text_light_default : themeDark.text_dark_default
  };

  &:hover {
    color: ${(props) => 
      props.theme.color === 'light' ? themeLight.text_light_hover : themeDark.text_dark_hover
    };
  }
`;

export const NavItem = styled.li`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  
  &:hover {
    background: ${(props) => 
      props.theme.color === 'light' ? themeLight.sidebar_background_light_hover : themeDark.sidebar_background_dark_hover
    };
  }

  &.active {
    background: ${(props) => 
      props.theme.color === 'light' ? themeLight.sidebar_background_light_active : themeDark.sidebar_background_dark_active
    };
  }

  &.active ${Text} {
    color: ${(props) => 
      props.theme.color === 'light' ? themeLight.text_light_active : themeDark.text_dark_active
    };
  }
`;

