import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTools, FaIndustry, FaClipboardCheck, FaCogs } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: .5rem;
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

const Description = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
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
  margin-top: 4rem;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

const Assembly = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>조립시설</SectionTitle>
        <Description>
          첨단 조립 설비와 숙련된 기술인력을 통해 고품질 제품 조립을 실현합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>조립 라인</CardTitle>
            <FeatureList>
              <FeatureItem>자동화 조립 라인</FeatureItem>
              <FeatureItem>수동 조립 스테이션</FeatureItem>
              <FeatureItem>모듈 조립 시스템</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <CardTitle>조립 설비</CardTitle>
            <FeatureList>
              <FeatureItem>토크 제어 시스템</FeatureItem>
              <FeatureItem>정밀 체결 장비</FeatureItem>
              <FeatureItem>레이저 마킹기</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaClipboardCheck />
            </IconWrapper>
            <CardTitle>품질 관리</CardTitle>
            <FeatureList>
              <FeatureItem>조립 공정 검사</FeatureItem>
              <FeatureItem>기능 테스트</FeatureItem>
              <FeatureItem>신뢰성 평가</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <ProcessSection>
        <SectionTitle>조립 프로세스</SectionTitle>
        <ProcessGrid>
          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaClipboardCheck />
            </IconWrapper>
            <CardTitle>부품 검수</CardTitle>
            <FeatureList>
              <FeatureItem>입고 검사</FeatureItem>
              <FeatureItem>부품 분류</FeatureItem>
              <FeatureItem>재고 관리</FeatureItem>
            </FeatureList>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <CardTitle>조립 작업</CardTitle>
            <FeatureList>
              <FeatureItem>공정별 조립</FeatureItem>
              <FeatureItem>품질 체크</FeatureItem>
              <FeatureItem>작업 이력 관리</FeatureItem>
            </FeatureList>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <CardTitle>기능 검사</CardTitle>
            <FeatureList>
              <FeatureItem>동작 테스트</FeatureItem>
              <FeatureItem>성능 검증</FeatureItem>
              <FeatureItem>최종 검수</FeatureItem>
            </FeatureList>
          </ProcessCard>
        </ProcessGrid>
      </ProcessSection>
    </Container>
  );
};

export default Assembly; 