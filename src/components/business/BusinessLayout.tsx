import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';

const Container = styled.div`
  min-height: 100vh;
  background: ${colors.background.main};
`;

const PageHeader = styled.div`
  background: linear-gradient(${colors.gradient.primary.start}, ${colors.gradient.primary.end}),
              url('/images/business-header.jpg') center/cover;
  padding: 6rem 2rem 4rem;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 12px ${colors.shadow.dark};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light});
  }
`;

const Title = styled(motion.h1)`
  color: ${colors.text.white};
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px ${colors.shadow.text};
`;

const Subtitle = styled(motion.p)`
  color: ${colors.text.white};
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 500;
  text-shadow: 0 1px 2px ${colors.shadow.text};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  position: relative;
  background: ${colors.background.card};
  border-radius: 12px;
  margin-top: -2rem;
  box-shadow: 0 -4px 16px ${colors.shadow.medium};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light});
    border-radius: 2px;
  }
`;

const BusinessLayout = () => {
  return (
    <Container>
      <PageHeader>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          사업영역
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          최첨단 기술과 혁신적인 솔루션으로 고객의 가치를 창출합니다
        </Subtitle>
      </PageHeader>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default BusinessLayout; 