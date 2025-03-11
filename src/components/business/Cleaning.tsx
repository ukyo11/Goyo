import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaIndustry, FaFlask, FaCheckCircle, FaRecycle } from 'react-icons/fa';
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

const Cleaning = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>정밀세정사업부</SectionTitle>
        <Description>
          첨단 세정 기술과 엄격한 품질관리를 통해 고객의 요구에 부합하는 최적의 세정 서비스를 제공합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>정밀부품 세정</CardTitle>
            <FeatureList>
              <FeatureItem>반도체 부품</FeatureItem>
              <FeatureItem>디스플레이 부품</FeatureItem>
              <FeatureItem>광학 부품</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaFlask />
            </IconWrapper>
            <CardTitle>특수 세정</CardTitle>
            <FeatureList>
              <FeatureItem>플라즈마 세정</FeatureItem>
              <FeatureItem>초음파 세정</FeatureItem>
              <FeatureItem>진공 세정</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <CardTitle>품질보증</CardTitle>
            <FeatureList>
              <FeatureItem>입자 측정</FeatureItem>
              <FeatureItem>표면 분석</FeatureItem>
              <FeatureItem>세정도 검사</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <ProcessSection>
        <SectionTitle>세정 프로세스</SectionTitle>
        <ProcessGrid>
          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <ProcessTitle>사전 검사</ProcessTitle>
            <ProcessDescription>
              부품 상태 및 오염도 분석
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaFlask />
            </IconWrapper>
            <ProcessTitle>세정 공정</ProcessTitle>
            <ProcessDescription>
              최적화된 세정 방식 적용
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <ProcessTitle>품질 검사</ProcessTitle>
            <ProcessDescription>
              세정도 및 품질 검증
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaRecycle />
            </IconWrapper>
            <ProcessTitle>포장 및 출하</ProcessTitle>
            <ProcessDescription>
              클린룸 포장 및 안전 배송
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>
      </ProcessSection>
    </Container>
  );
};

export default Cleaning; 