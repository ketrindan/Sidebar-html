
import styled from 'styled-components';
import { themeLight, themeDark } from './themes';

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
  visibility: hidden;
  transition: visibility 0.1s ease-out 0.1s;
`;

export const ExpandBtn = styled.div`
  background: ${(props) =>
    props.theme.color === 'light' ? (props.opened === true ? themeLight.button_background_light_active : themeLight.button_background_light_default)
     : (props.opened === true ? themeDark.button_background_dark_active : themeDark.button_background_dark_default)
  };
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
  top: auto;
  right: ${(props) => 
    props.opened === true ? '-30px' : '-45px'
  };
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.5s ease-out, right 0.5s ease-out;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0;
  gap: 5px;
  transition: padding-left 0.5s ease-out;

  &:last-child {
    margin-top: auto;
  }
`;

export const Text = styled.span`
  color: ${(props) => 
    props.theme.color === 'light' ? themeLight.text_light_default : themeDark.text_dark_default
  };
  visibility: hidden;
  transition: visibility 0.5s ease-in;

  &:hover {
    color: ${(props) => 
      props.theme.color === 'light' ? themeLight.text_light_hover : themeDark.text_dark_hover
    };
  }
`;

export const NavItem = styled.li`
  max-width: 50px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 18px auto;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  padding: 10px 17px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 40px;
  transition: max-width 0.5s ease-out, padding 0.5s ease-out;
  
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

export const SidebarContainer = styled.nav`
  max-width: 70px;
  padding: 25px 10px;
  height: 80vh;
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
  justify-content: center;
  gap: 50px;
  transition: max-width 0.5s ease-out, padding 0.5s ease-out;

  &.opened {
    max-width: 230px;
    padding: 25px 20px;
  }

  &.opened ${Text} {
    visibility: visible;
  }

  &.opened ${Title} {
    visibility: visible;
  }

  &.opened ${NavList} {
    padding-left: 15px;
  }

  &.opened ${NavItem} {
    max-width: 100%;
    padding: 10px 5px;
  }
`;

