import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: var(--background-light);
  color: var(--text-dark);
`;

const PageHeader = styled.div`
  background: linear-gradient(rgba(0, 66, 169, 0.9), rgba(0, 53, 132, 0.95)),
              url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab') center/cover;
  padding: 6rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #0042a9, #4facfe);
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #0042a9, #4facfe);
    border-radius: 2px;
  }
`;

const AboutLayout = () => {
  return (
    <AboutContainer>
      <PageHeader>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          회사소개
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          최고의 기술력과 품질로 고객만족을 실현하는 글로벌 기업
        </Subtitle>
      </PageHeader>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutLayout; 