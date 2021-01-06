import React, { Fragment } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Navbar/Footer";

const Background = styled.div`
  min-height: 150rem;
  width: 100vw;
  position: relative;
`;

const TopBg = styled.div`
  position: absolute;
  width: 100%;
  /* height: 100vh; */
  top: 0;
  background: url("/assets/index/bg-top.jpg") center center no-repeat;
  background-size: cover;
  z-index: -1;
  position: fixed;
`;

const MainSection = styled.div`
  margin-top: 4rem;
  width: 95vw;
  position: absolute;
  top: 5%;
  background: transparent;
  z-index: 2;
  margin: 0 2rem;
`;



function Layout(props) {
  return (
    <Fragment>
      <Background>
        <TopBg />
        <Navbar />
        <MainSection>{props.children}</MainSection>
      </Background>
      <Footer />
    </Fragment>
  );
}

export default Layout;
