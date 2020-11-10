import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';

const Background = styled.div`
  min-height: 150rem;
  height: 100%;
  width: 100vw;
  position: relative;
`;

const TopBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  background: url('/assets/index/bg-top.jpg') center center no-repeat;
  background-size: cover;
  z-index: 1;
  position: fixed;
`;

const BottomBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  bottom: 0;
  background: url('/assets/index/bg-bottom.jpg') center center no-repeat;
  background-size: cover;
  z-index: 1;
`;

const MainSection = styled.div`
  margin-top: 4rem;
  width: 100vw;
  position: absolute;
  top: 5%;
  background: transparent;
  z-index: 2;
`;

const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  width: 90vw;
  height: 100%;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);

  margin: 0 auto;
  padding: 3rem;
  border-radius: 1rem;
`;

const ContentWrapper = styled.div`
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
  font-size: 3rem;
`;

const Paragraph = styled.p`
  padding: 2rem 0;
`;

const LandingPage = () => {
  return (
    <Background>
      <TopBg />
      <MainSection>
        <InsideMainSection>
          <ContentWrapper>
            <Content>
              <Title>
                Because Scent
                <br /> Define Who You Are
              </Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                architecto fugiat fugit est! Consequatur, expedita. Atque odit
                aspernatur praesentium! Aperiam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas ea et iste odit.
                Similique doloremque iure nesciunt quaerat sit sint perspiciatis
                exercitationem. Sint, eligendi inventore?
              </Paragraph>
              <Button type='primary' style={{width: '50%'}}>
                DISCOVER YOUR PERFUME
              </Button>
            </Content>
            <Content>
              <div className='img-wrapper'>
                <img
                  src='/assets/index/index-banner.png'
                  alt='women'
                  style={{width: '55rem', marginLeft: '-15rem'}}
                />
              </div>
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <Content>
              <div className='img-wrapper'>
                <img
                  src='/assets/index/index-perfume-01.png'
                  alt='perfume'
                  style={{width: '35rem'}}
                />
              </div>
            </Content>
            <Content style={{marginLeft: '5rem'}}>
              <Title>
                Because Scent
                <br /> Define Who You Are
              </Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                architecto fugiat fugit est! Consequatur, expedita. Atque odit
                aspernatur praesentium! Aperiam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas ea et iste odit.
                Similique doloremque iure nesciunt quaerat sit sint perspiciatis
                exercitationem. Sint, eligendi inventore?
              </Paragraph>
              <Button type='primary' style={{width: '50%'}}>
                DISCOVER YOUR PERFUME
              </Button>
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <Content style={{marginLeft: '5rem'}}>
              <Title>
                Because Scent
                <br /> Define Who You Are
              </Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                architecto fugiat fugit est! Consequatur, expedita. Atque odit
                aspernatur praesentium! Aperiam? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas ea et iste odit.
                Similique doloremque iure nesciunt quaerat sit sint perspiciatis
                exercitationem. Sint, eligendi inventore?
              </Paragraph>
              <Button type='primary' style={{width: '50%'}}>
                DISCOVER YOUR PERFUME
              </Button>
            </Content>
            <Content>
              <div className='img-wrapper'>
                <img
                  src='/assets/index/index-bottom-decoration.png'
                  alt='perfume'
                  style={{width: '35rem'}}
                />
              </div>
            </Content>
          </ContentWrapper>
        </InsideMainSection>
      </MainSection>
    </Background>
  );
};

export default LandingPage;
