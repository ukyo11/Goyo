import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaIndustry, FaCogs, FaChartLine, FaClipboardCheck } from 'react-icons/fa';
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

const CapabilitiesSection = styled.div`
  margin-top: 4rem;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CapabilityCard = styled(motion.div)`
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

const SpecList = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

const SpecItem = styled.div`
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

const MetalProcessing = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>금속가공사업부</SectionTitle>
        <Description>
          최첨단 설비와 전문 기술력을 바탕으로 고정밀 금속가공 서비스를 제공합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>정밀가공</CardTitle>
            <FeatureList>
              <FeatureItem>CNC 밀링/선반 가공</FeatureItem>
              <FeatureItem>와이어컷팅</FeatureItem>
              <FeatureItem>방전가공</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <CardTitle>표면처리</CardTitle>
            <FeatureList>
              <FeatureItem>열처리</FeatureItem>
              <FeatureItem>도금</FeatureItem>
              <FeatureItem>연마</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaClipboardCheck />
            </IconWrapper>
            <CardTitle>품질관리</CardTitle>
            <FeatureList>
              <FeatureItem>3차원 측정</FeatureItem>
              <FeatureItem>비파괴 검사</FeatureItem>
              <FeatureItem>정밀도 검사</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <CapabilitiesSection>
        <SectionTitle>가공 역량</SectionTitle>
        <CapabilitiesGrid>
          <CapabilityCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <CardTitle>가공 정밀도</CardTitle>
            <SpecList>
              <SpecItem>공차: ±0.01mm</SpecItem>
              <SpecItem>표면 조도: Ra 0.4</SpecItem>
              <SpecItem>진원도: 0.005mm</SpecItem>
            </SpecList>
          </CapabilityCard>

          <CapabilityCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>가공 크기</CardTitle>
            <SpecList>
              <SpecItem>최대 직경: 1000mm</SpecItem>
              <SpecItem>최대 길이: 2000mm</SpecItem>
              <SpecItem>최대 중량: 500kg</SpecItem>
            </SpecList>
          </CapabilityCard>

          <CapabilityCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <CardTitle>소재 대응</CardTitle>
            <SpecList>
              <SpecItem>알루미늄/스테인리스</SpecItem>
              <SpecItem>티타늄/인코넬</SpecItem>
              <SpecItem>탄소강/합금강</SpecItem>
            </SpecList>
          </CapabilityCard>
        </CapabilitiesGrid>
      </CapabilitiesSection>
    </Container>
  );
};

export default MetalProcessing; 