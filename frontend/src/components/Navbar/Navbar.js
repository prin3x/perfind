import React from 'react';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineUser} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri';
import {Input} from 'antd';
const {Search} = Input;

const HamContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  height: 12px;

  .bar1,
  .bar2,
  .bar3 {
    width: 24px;
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
  height: 6rem;
  width: 100vw;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 50000;
`;

const UpperNavbar = styled.div`
  min-height: 1rem;
  height: 3rem;
  width: 100%;
  background: linear-gradient(to right, #b8956c, #e3d5b0);
`;
const LowerNavbar = styled.div`
  min-height: 1.5rem;
  height: 3rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

const MiddleContainer = styled.div`
  min-height: 2rem;
  height: 4.5rem;
  width: 13rem;

  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`;

const ImageContainer = styled.div`
  background: url('assets/index/logo.png') center center no-repeat #fff;
  background-size: cover;
  min-height: 2rem;
  height: 4.5rem;
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

const iconFontSize = {fontSize: '2rem'};

const Navbar = () => {
  return (
    <NavbarWrapper>
      <UpperNavbar></UpperNavbar>
      <MiddleContainer>
        <ImageContainer />
      </MiddleContainer>
      <LowerNavbar>
        <LeftContainer>
          <HamContainer>
            <div class='bar1'></div>
            <div class='bar2'></div>
            <div class='bar3'></div>
          </HamContainer>
        </LeftContainer>
        <RightContainer>
          <Search
            placeholder='input search text'
            enterButton='Search'
            size='large'
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
