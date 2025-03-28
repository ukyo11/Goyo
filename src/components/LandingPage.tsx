import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaIndustry, FaTools, FaMicrochip, FaHandshake, FaCogs, FaAtom } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f0ff 100%);
  padding-top: 64px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)),
              url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab') center/cover;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #915cb3, #a76ecc);
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  font-weight: 800;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-medium);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.8;
  font-weight: 500;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &.primary {
    background: #915cb3;
    color: white;
    border: 2px solid #915cb3;

    &:hover {
      background: #7a4e98;
      border-color: #7a4e98;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: white;
    color: #915cb3;
    border: 2px solid #915cb3;

    &:hover {
      background: #f8f0ff;
      transform: translateY(-2px);
    }
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--primary-color);
  }

  h3 {
    color: var(--text-dark);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    color: var(--text-medium);
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const BusinessAreas = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #f8f0ff 0%, #ffffff 100%);
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-dark);
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 2px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: block;
`;

const BusinessCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-lg);
  }

  h3 {
    color: var(--text-dark);
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    color: var(--text-medium);
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #915cb3;
  margin-bottom: 1.5rem;
  
  svg {
    filter: drop-shadow(0 2px 4px rgba(145, 92, 179, 0.2));
  }
`;

const CoreValues = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8f0ff 100%);
  position: relative;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ValueCard = styled(motion.div)`
  text-align: center;
  padding: 2.5rem;
  background: white;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-lg);
  }

  h3 {
    color: var(--text-dark);
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    color: var(--text-medium);
    line-height: 1.6;
    font-size: 1.1rem;
  }

  ${IconWrapper} {
    margin-bottom: 1rem;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          장비 위탁생산 전문 기업
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          고요는 최고의 기술력과 품질로 반도체 산업의 미래를 선도합니다.
          혁신적인 솔루션과 뛰어난 서비스로 고객의 성공을 함께 만들어갑니다.
        </Subtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button to="/about/greeting" className="primary">
            회사 소개
          </Button>
          <Button to="/support/contact" className="secondary">
            문의하기
          </Button>
        </ButtonGroup>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>첨단 기술력</h3>
            <p>최신 기술과 노하우를 바탕으로 고품질 제품을 제공합니다.</p>
          </FeatureCard>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>맞춤형 솔루션</h3>
            <p>고객의 요구사항에 최적화된 맞춤형 솔루션을 제공합니다.</p>
          </FeatureCard>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>원스톱 서비스</h3>
            <p>가공,구매등 내재화를 통해 원스톱 서비스를 제공합니다.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <BusinessAreas>
        <SectionTitle>사업영역</SectionTitle>
        <CardGrid>
          <LinkWrapper to="/business/equipment">
            <BusinessCard whileHover={{ y: -10 }}>
              <IconWrapper>
                <FaMicrochip />
              </IconWrapper>
              <h3>장비 사업부</h3>
              <p>반도체 & 디스플레이 설비 제작</p>
              <p>Total Solution 제공</p>
            </BusinessCard>
          </LinkWrapper>
          <LinkWrapper to="/business/metal">
            <BusinessCard whileHover={{ y: -10 }}>
              <IconWrapper>
                <FaCogs />
              </IconWrapper>
              <h3>금속가공 사업부</h3>
              <p>설비 부품 정밀 가공</p>
            </BusinessCard>
          </LinkWrapper>
          <LinkWrapper to="/business/cleaning">
            <BusinessCard whileHover={{ y: -10 }}>
              <IconWrapper>
                <FaAtom />
              </IconWrapper>
              <h3>정밀세정 사업부</h3>
              <p>설비부품 및 각종 Valve 표면 처리</p>
            </BusinessCard>
          </LinkWrapper>
          <LinkWrapper to="/business/parts">
            <BusinessCard whileHover={{ y: -10 }}>
              <IconWrapper>
                <FaMicrochip />
              </IconWrapper>
              <h3>파트판매 사업부</h3>
              <p>장비사 대상 구매대행</p>
              <p>글로벌 소싱/해외 사업장 구매대행</p>
            </BusinessCard>
          </LinkWrapper>
        </CardGrid>
      </BusinessAreas>

      <CoreValues>
        <SectionTitle>핵심가치</SectionTitle>
        <ValueGrid>
          <ValueCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconWrapper>
              <FaMicrochip />
            </IconWrapper>
            <h3>기술 혁신</h3>
            <p>최첨단 기술로 미래를 선도합니다</p>
          </ValueCard>
          <ValueCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <h3>품질 신뢰</h3>
            <p>완벽한 품질로 신뢰를 구축합니다</p>
          </ValueCard>
          <ValueCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconWrapper>
              <FaHandshake />
            </IconWrapper>
            <h3>고객 만족</h3>
            <p>고객의 성공이 우리의 목표입니다</p>
          </ValueCard>
        </ValueGrid>
      </CoreValues>
    </Container>
  );
};

export default LandingPage; 