import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { Input } from "antd";
import { Divider } from "antd";
import { useHistory } from "react-router-dom";
import LocalStorageService from "../../services/LocalStorageService";

const { Search } = Input;

const HamContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  height: 12px;
  z-index: 1000;
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
  z-index: 1000;
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
  padding: 0.25rem 4rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

const MiddleContainer = styled.div`
  min-height: 2rem;
  width: 13rem;
  position: absolute;
  left: 47.5%;
  transform: translate(-50%, -50%);
  top: 50%;
  background: transparent;
  padding: 1.25rem;
`;

const ImageContainer = styled.div`
  background: url("assets/index/logo-3-without-bg.png") center center no-repeat;
  background-size: contain;
  min-height: 2rem;
  height: 5.25rem;
  width: 13rem;
`;

const LeftContainer = styled.div`
  width: 3rem;
  padding-left: 0.2rem;
  padding-top: 0.5rem;
`;

const RightContainer = styled.div`
  width: 25rem;
  padding-top: 0.5rem;
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
  opacity: 0.5;
  z-index: -1;
  transition: transform 0.8s ease-in;
  transform: scale(${(props) => props.scale});
  display: ${(props) => props.display};
`;

const DropdownContent = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  z-index: 1;
`;
const IconWrapper = styled.div`
  position: relative;
  &:hover .dropdown-content {
    display: block;
  }
`;

const ListWrapper = styled.ul`
  list-style: none;
  position: relative;
`;

const List = styled.li`
  padding: 0.5rem 0;
  cursor: pointer;
  font-size: 0.9rem;
`;

const MainNavWrapper = styled.div`
  position: fixed;
  left: 7%;
  top: 14.2%;
  display: ${(props) => props.display};
  transform: scale(${(props) => props.scale});
  transition: all 0.75s ease-in;
  transform-origin: left;
  text-align: center;
  box-shadow: 2px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-top: 2px solid #8a7d6b;
`;

const MainNavbarContainer = styled.ul`
  width: 85vw;
  height: 100vh;
  display: ${(props) => props.display};
  transform-origin: left;
  transform: scale(${(props) => props.scale});
  transition: all 10s ease-in;
  text-align: center;
  background: #fff;
  z-index: 5;
  list-style: none;
  padding-top: 3rem;
  position: absolute;
`;

const MainNav = styled.li`
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  font-size: 1.5rem;
`;

const iconFontSize = {
  fontSize: "1.75rem",
  color: "#8a7d6b",
  margin: "0 1.25rem",
  cursor: "pointer",
};

const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const history = useHistory();

  const onRedirect = (path) => {
    history.push(path);
    setShow(!show);
  };

  const handleMenu = () => {
    setShow(!show);
  };

  const logOut = (props) => {
    LocalStorageService.removeToken();
    // props.setRole("GUEST");
  };

  return (
    <NavbarWrapper>
      <Menu scale={show ? "250" : "0"} />
      <UpperNavbar></UpperNavbar>
      <MiddleContainer>
        <ImageContainer />
      </MiddleContainer>
      <LowerNavbar>
        <LeftContainer>
          <HamContainer onClick={handleMenu}>
            <div className={`bar1 ${show ? "change" : ""}`}></div>
            <div className={`bar2 ${show ? "change" : ""}`}></div>
            <div className={`bar3 ${show ? "change" : ""}`}></div>
          </HamContainer>
        </LeftContainer>
        <MainNavWrapper
          className="main-nav-wrapper1234"
          display={show ? "block" : "none"}
          transform={show ? "70rem" : "0"}
        >
          <MainNavbarContainer>
            <MainNav>Home</MainNav>
            <Divider />
            <MainNav onClick={() => onRedirect("/products")}>
              All Products
            </MainNav>
            <Divider />
            <MainNav onClick={() => onRedirect("/highligh")}>
              Highlight Items
            </MainNav>
            <Divider />
            <MainNav onClick={() => onRedirect("/about")}>About Us</MainNav>
            <Divider />
            <MainNav onClick={() => onRedirect("/contact")}>Contact Us</MainNav>
          </MainNavbarContainer>
        </MainNavWrapper>
        <RightContainer>
          <Search
            placeholder="input search text"
            size="medium"
            style={{ borderRadius: "10px" }}
            allowClear
          />
          <IconWrapper>
            <RiShoppingCartLine style={iconFontSize} />
          </IconWrapper>
          <IconWrapper>
            <AiOutlineUser style={iconFontSize} />
            <DropdownContent display="none" className="dropdown-content">
              <ListWrapper>
                <List>My Account</List>
                <List>My Transactions</List>
                <List onClick={logOut}>Logout</List>
              </ListWrapper>
            </DropdownContent>
          </IconWrapper>
        </RightContainer>
      </LowerNavbar>
    </NavbarWrapper>
  );
};

export default Navbar;
