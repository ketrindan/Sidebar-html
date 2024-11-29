import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { ExpandBtn, Logo, NavHeader, NavItem, NavList, SidebarContainer, Text, Title } from './styles';
import { ThemeProvider } from 'styled-components';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(false);
    const [clickedItem, setClickedItem] = useState(null);
    const prev = useRef();
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const themeSettings = {
        color,
      };

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    const clickNavItem = (e, route) => {
        prev.current && prev.current.classList.remove('active');
        goToRoute(route.path);
        e.currentTarget.classList.add('active');
        setClickedItem(e.currentTarget);
    }

    useEffect(() => {
        prev.current = clickedItem;
    })

    return (
        <ThemeProvider theme={themeSettings}>
            <SidebarContainer className={ containerClassnames }>
                <NavHeader>
                    <Logo src={ logo } alt="TensorFlow logo"/>
                    <Title>TensorFlow</Title>
                    <ExpandBtn opened={isOpened} onClick={ toggleSidebar }>
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                    </ExpandBtn>
                </NavHeader>
                <NavList>
                    {
                        routes.map(route => (
                            <NavItem
                                key={ route.title }
                                onClick={(e) => {
                                    clickNavItem(e, route);
                                }}
                            >
                                <FontAwesomeIcon icon={ route.icon }/>
                                <Text>{ route.title }</Text>
                            </NavItem>
                        ))
                    }
                </NavList>
                <NavList>
                    {
                        bottomRoutes.map(route => (
                            <NavItem
                                key={ route.title }
                                onClick={(e) => {
                                    clickNavItem(e, route);
                                }}
                            >
                                <FontAwesomeIcon icon={ route.icon }/>
                                <Text>{ route.title }</Text>
                            </NavItem>
                        ))
                    }
                </NavList>
            </SidebarContainer>
        </ThemeProvider>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
