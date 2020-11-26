import React, { Fragment } from "react";
import styled from "styled-components";
import { Button } from "antd";

const ContentWrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 100%;
  display: flex;
  &:not(:first-of-type) {
    margin-top: 10rem;
  }
`;

const Content = styled.div`
  width: 50%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #b8956c;
  font-family: Playfair;
  font-size: 4rem;
`;
const SubTitle = styled.span`
  color: #b8956c;
  font-family: Playfair;
  font-size: 2rem;
`;

const Paragraph = styled.p`
  padding: 2rem 0;
  font-size: 1.2rem;
`;

const MainSection = styled.div`
  padding: 5rem 7.5rem;
`;
const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  max-width: 95vw;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  border-radius: 1rem;
  height: 100%;
`;
const LandingPage = () => {
  return (
    <Fragment>
      <InsideMainSection>
        <MainSection>
          <ContentWrapper>
            <Content>
              <Title>
                <SubTitle>Because</SubTitle> Scent
              <br /> Define<SubTitle> Who</SubTitle> You Are
            </Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                architecto fugiat fugit est! Consequatur, expedita. Atque odit
                aspernatur praesentium! Aperiam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas ea et iste odit. Similique
                doloremque iure nesciunt quaerat sit sint perspiciatis
                exercitationem. Sint, eligendi inventore?
            </Paragraph>
              <Button type="primary" style={{ width: "15rem" }}>
                DISCOVER YOUR PERFUME
            </Button>
            </Content>
            <Content>
              <div className="img-wrapper">
                <img
                  src="/assets/index/index-banner.png"
                  alt="women"
                  style={{ width: "55rem", marginLeft: "-15rem" }}
                />
              </div>
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <Content>
              <div className="img-wrapper">
                <img
                  src="/assets/index/index-perfume-01.png"
                  alt="perfume"
                  style={{ width: "35rem" }}
                />
              </div>
            </Content>
            <Content style={{ marginLeft: "5rem" }}>
              <Title>
                Because Scent
              <br /> Define Who You Are
            </Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                architecto fugiat fugit est! Consequatur, expedita. Atque odit
                aspernatur praesentium! Aperiam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas ea et iste odit. Similique
                doloremque iure nesciunt quaerat sit sint perspiciatis
                exercitationem. Sint, eligendi inventore?
            </Paragraph>
              <Button type="primary" style={{ width: "15rem" }}>
                DISCOVER YOUR PERFUME
            </Button>
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <Content style={{ marginLeft: "5rem" }}>
              <Title>
                Because Scent
              <br /> Define Who You Are
            </Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                architecto fugiat fugit est! Consequatur, expedita. Atque odit
                aspernatur praesentium! Aperiam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas ea et iste odit. Similique
                doloremque iure nesciunt quaerat sit sint perspiciatis
                exercitationem. Sint, eligendi inventore?
            </Paragraph>
              <Button type="primary" style={{ width: "15rem" }}>
                DISCOVER YOUR PERFUME
            </Button>
            </Content>
            <Content>
              <div className="img-wrapper">
                <img
                  src="/assets/index/index-bottom-decoration.png"
                  alt="perfume"
                  style={{ width: "35rem" }}
                />
              </div>
            </Content>
          </ContentWrapper>
        </MainSection>
      </InsideMainSection>
    </Fragment>
  );
};

export default LandingPage;
