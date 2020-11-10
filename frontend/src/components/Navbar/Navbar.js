import React, {useState} from 'react';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineUser} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri';
import {Input} from 'antd';
import Logo from '../../assets/logo.svg';
const {Search} = Input;

const HamContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  height: 12px;
  z-index: 5000;
  background: transparent;

  .bar1,
  .bar2,
  .bar3 {
    width: 24px;
    z-index: 500;
    height: 3px;
    background-color: #8a7d6b;
    margin-top: 3px;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;
const NavbarWrapper = styled.div`
  min-height: 2rem;
  height: 7rem;
  width: 100vw;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 5000;
`;

const UpperNavbar = styled.div`
  min-height: 1rem;
  height: 3.5rem;
  width: 100%;
  background: linear-gradient(to right, #b8956c, #e3d5b0);
`;
const LowerNavbar = styled.div`
  min-height: 1.5rem;
  height: 3.5rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

const MiddleContainer = styled.div`
  min-height: 2rem;
  width: 13rem;

  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`;

const ImageContainer = styled.div`
  background: url('assets/index/navbar-logo-01.png') center center no-repeat;
  background-size: contain;
  min-height: 2rem;
  height: 7.5rem;
  width: 13rem;
`;

const LeftContainer = styled.div`
  width: 3rem;
  padding-left: 0.2rem;
  padding-top: 0.25rem;
`;

const RightContainer = styled.div`
  width: 20rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  display: flex;
`;

const Menu = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  position: fixed;
  top: 3rem;
  left: 0.25rem;
  background: radial-gradient(#b8956c, #e3d5b0);
  z-index: -1;
  transition: transform 0.8s ease-in;
  transform: scale(${props => props.scale});
`;

const iconFontSize = {fontSize: '1.75rem', color: '#8a7d6b'};

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <NavbarWrapper>
      <Menu scale={show ? '250' : '0'} />
      <UpperNavbar></UpperNavbar>
      <MiddleContainer>
        <img src={Logo} alt='' />
      </MiddleContainer>
      <LowerNavbar>
        <LeftContainer>
          <HamContainer onClick={handleMenu}>
            <div className={`bar1 ${show ? 'change' : ''}`}></div>
            <div className={`bar2 ${show ? 'change' : ''}`}></div>
            <div className={`bar3 ${show ? 'change' : ''}`}></div>
          </HamContainer>
        </LeftContainer>
        <RightContainer>
          <Search
            placeholder='input search text'
            size='medium'
            style={{borderRadius: '10px'}}
            allowClear
          />
          <RiShoppingCartLine style={iconFontSize} />
          <AiOutlineUser style={iconFontSize} />
        </RightContainer>
      </LowerNavbar>
    </NavbarWrapper>
  );
};

export default Navbar;
