import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCog, FaIndustry, FaMicrochip, FaTools } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: ${colors.text.primary};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const Card = styled(motion.div)`
  background: ${colors.background.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 2px solid ${colors.border.main};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${colors.shadow.medium};
    border-color: ${colors.primary.main};
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${colors.primary.main};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: ${colors.text.primary};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${colors.border.main};
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: "•";
    color: ${colors.primary.main};
    font-weight: bold;
    font-size: 1.4rem;
    margin-right: 0.8rem;
  }
`;

const ProcessSection = styled.div`
  margin-top: 3rem;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProcessCard = styled(motion.div)`
  background: ${colors.background.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 2px solid ${colors.border.main};
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${colors.shadow.medium};
    border-color: ${colors.primary.main};
  }
`;

const ProcessTitle = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1rem 0;
`;

const ProcessDescription = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
`;

const Equipment = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>장비사업부</SectionTitle>
        <Description>
          최첨단 산업 장비 및 자동화 솔루션을 제공하여 고객사의 생산성과 효율성을 극대화합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>산업용 장비</CardTitle>
            <FeatureList>
              <FeatureItem>자동화 생산 설비</FeatureItem>
              <FeatureItem>공정 제어 시스템</FeatureItem>
              <FeatureItem>품질 검사 장비</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaMicrochip />
            </IconWrapper>
            <CardTitle>반도체 장비</CardTitle>
            <FeatureList>
              <FeatureItem>웨이퍼 처리 장비</FeatureItem>
              <FeatureItem>검사 및 측정 장비</FeatureItem>
              <FeatureItem>클린룸 설비</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <CardTitle>정밀 가공 장비</CardTitle>
            <FeatureList>
              <FeatureItem>CNC 가공 센터</FeatureItem>
              <FeatureItem>레이저 가공 장비</FeatureItem>
              <FeatureItem>측정 및 검사 장비</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <ProcessSection>
        <SectionTitle>사업 프로세스</SectionTitle>
        <ProcessGrid>
          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCog />
            </IconWrapper>
            <ProcessTitle>컨설팅</ProcessTitle>
            <ProcessDescription>
              고객 요구사항 분석 및 최적 솔루션 제안
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <ProcessTitle>설계 및 제작</ProcessTitle>
            <ProcessDescription>
              맞춤형 설계 및 고품질 제작
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <ProcessTitle>설치 및 시운전</ProcessTitle>
            <ProcessDescription>
              전문가에 의한 설치 및 성능 최적화
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCog />
            </IconWrapper>
            <ProcessTitle>사후관리</ProcessTitle>
            <ProcessDescription>
              지속적인 유지보수 및 기술지원
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>
      </ProcessSection>
    </Container>
  );
};

export default Equipment; 