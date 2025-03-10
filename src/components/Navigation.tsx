import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Logo = styled(Link)`
  color: #0042a9;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #003584;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #0042a9;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: #003584;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.div`
  position: relative;
  padding: 0 0.5rem;
  
  &:hover > div {
    display: block;
    animation: fadeIn 0.2s ease;
  }

  &:hover {
    background: rgba(1, 81, 198, 0.03);
  }
`;

const NavButton = styled.button<{ active?: boolean }>`
  color: ${props => props.active ? '#0042a9' : '#222222'};
  text-decoration: none;
  padding: 1rem;
  display: block;
  transition: all 0.2s ease;
  background: none;
  border: none;
  font-size: 1.05rem;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '500'};
  position: relative;
  letter-spacing: -0.3px;

  &:hover {
    color: #003584;
    font-weight: 600;
    background-color: rgba(0, 65, 169, 0.05);
  }

  &::after {
    content: '';
    display: block;
    width: ${props => props.active ? '100%' : '0'};
    height: 3px;
    background: #0042a9;
    transition: width 0.2s ease;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }

  text-shadow: ${props => props.active ? '0 0 0.5px #0151c6' : 'none'};
  &:hover {
    text-shadow: 0 0 0.5px #0151c6;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 1px);
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  min-width: 240px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0.8rem 0;
  z-index: 1000;
  border: 1px solid #e8e8e8;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #ffffff;
    filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    box-shadow: none;
    border-radius: 0;
    background: #f8f9fa;
    border: none;
    min-width: 100%;

    &::before {
      display: none;
    }
  }
`;

const DropdownLink = styled(Link)<{ active?: boolean }>`
  color: ${props => props.active ? '#0042a9' : '#222222'};
  text-decoration: none;
  padding: 0.9rem 1.5rem;
  display: block;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  position: relative;
  font-weight: ${props => props.active ? '600' : '400'};
  letter-spacing: -0.2px;

  &:hover {
    background: #edf5ff;
    color: #003584;
    font-weight: 500;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: #0042a9;
    transition: height 0.2s ease;
  }

  &:hover::before {
    height: 70%;
  }

  ${props => props.active && `
    background: #edf5ff;
    font-weight: 600;
    
    &::before {
      height: 70%;
    }
  `}

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    border-bottom: 1px solid #e8e8e8;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname.startsWith(path);
  const isExactActive = (path: string) => location.pathname === path;

  const menuItems = [
    {
      title: '회사소개',
      path: '/about',
      submenu: [
        { title: '인사말', path: '/about/greeting' },
        { title: '경영이념', path: '/about/philosophy' },
        { title: '회사개요', path: '/about/overview' },
        { title: '연혁', path: '/about/history' },
        { title: '조직도', path: '/about/organization' },
        { title: '인증현황', path: '/about/certification' },
        { title: '고객사', path: '/about/clients' }
      ]
    },
    {
      title: '사업영역',
      path: '/business',
      submenu: [
        { title: '장비사업부', path: '/business/equipment' },
        { title: '금속가공사업부', path: '/business/metal' },
        { title: '정밀세정사업부', path: '/business/cleaning' },
        { title: '부품판매사업부', path: '/business/parts' },
        { title: '구매대행서비스', path: '/business/purchasing' }
      ]
    },
    {
      title: '생산시설',
      path: '/factory',
      submenu: [
        { title: '가공시설', path: '/factory/processing' },
        { title: '조립시설', path: '/factory/assembly' },
        { title: '세정시설', path: '/factory/cleaning' }
      ]
    },
    {
      title: '제품소개',
      path: '/products',
      submenu: [
        { title: '취급 부품/파트', path: '/products/parts' },
        { title: '설비 제작 사례', path: '/products/cases' }
      ]
    },
    {
      title: '고객지원',
      path: '/support',
      submenu: [
        { title: 'FAQ', path: '/support/faq' },
        { title: '문의하기', path: '/support/contact' }
      ]
    }
  ];

  const handleMainMenuClick = (item: typeof menuItems[0]) => {
    if (item.submenu && item.submenu.length > 0) {
      navigate(item.submenu[0].path);
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">GOYO</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          {menuItems.map((item) => (
            <NavItem key={item.path}>
              <NavButton
                onClick={() => handleMainMenuClick(item)}
                active={isActive(item.path)}
              >
                {item.title}
              </NavButton>
              <Dropdown>
                {item.submenu.map((subItem) => (
                  <DropdownLink
                    key={subItem.path}
                    to={subItem.path}
                    active={isExactActive(subItem.path)}
                  >
                    {subItem.title}
                  </DropdownLink>
                ))}
              </Dropdown>
            </NavItem>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 