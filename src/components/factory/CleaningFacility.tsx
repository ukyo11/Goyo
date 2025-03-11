import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaIndustry, FaFlask, FaCheckCircle, FaWater } from 'react-icons/fa';
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

const CleaningFacility = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>세정시설</SectionTitle>
        <Description>
          첨단 세정 설비와 엄격한 품질관리를 통해 최고 수준의 세정 서비스를 제공합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaWater />
            </IconWrapper>
            <CardTitle>세정 설비</CardTitle>
            <FeatureList>
              <FeatureItem>초음파 세정기</FeatureItem>
              <FeatureItem>진공 세정기</FeatureItem>
              <FeatureItem>플라즈마 세정기</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaFlask />
            </IconWrapper>
            <CardTitle>분석 장비</CardTitle>
            <FeatureList>
              <FeatureItem>입자 측정기</FeatureItem>
              <FeatureItem>표면 분석기</FeatureItem>
              <FeatureItem>오염도 측정기</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>부대 설비</CardTitle>
            <FeatureList>
              <FeatureItem>순수 제조 설비</FeatureItem>
              <FeatureItem>폐수 처리 시설</FeatureItem>
              <FeatureItem>크린룸 시스템</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <ProcessSection>
        <SectionTitle>세정 공정</SectionTitle>
        <ProcessGrid>
          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <CardTitle>전처리</CardTitle>
            <FeatureList>
              <FeatureItem>오염도 분석</FeatureItem>
              <FeatureItem>세정 방법 선정</FeatureItem>
              <FeatureItem>조건 설정</FeatureItem>
            </FeatureList>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaWater />
            </IconWrapper>
            <CardTitle>세정</CardTitle>
            <FeatureList>
              <FeatureItem>1차 세정</FeatureItem>
              <FeatureItem>정밀 세정</FeatureItem>
              <FeatureItem>건조</FeatureItem>
            </FeatureList>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaFlask />
            </IconWrapper>
            <CardTitle>품질검사</CardTitle>
            <FeatureList>
              <FeatureItem>세정도 검사</FeatureItem>
              <FeatureItem>표면 검사</FeatureItem>
              <FeatureItem>최종 검수</FeatureItem>
            </FeatureList>
          </ProcessCard>
        </ProcessGrid>
      </ProcessSection>
    </Container>
  );
};

export default CleaningFacility; 