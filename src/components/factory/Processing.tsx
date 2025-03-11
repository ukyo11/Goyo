import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCogs, FaIndustry, FaTools, FaChartLine } from 'react-icons/fa';
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

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SpecItem = styled.li`
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

const CapabilitySection = styled.div`
  margin-top: 4rem;
`;

const CapabilityGrid = styled.div`
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

const Processing = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>가공시설</SectionTitle>
        <Description>
          최첨단 가공 설비와 전문 기술력으로 고정밀 부품 가공을 실현합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <CardTitle>CNC 가공 설비</CardTitle>
            <SpecList>
              <SpecItem>5축 머시닝센터</SpecItem>
              <SpecItem>CNC 선반</SpecItem>
              <SpecItem>와이어컷팅기</SpecItem>
            </SpecList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <CardTitle>정밀 가공 설비</CardTitle>
            <SpecList>
              <SpecItem>연삭기</SpecItem>
              <SpecItem>방전가공기</SpecItem>
              <SpecItem>레이저 가공기</SpecItem>
            </SpecList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>측정 설비</CardTitle>
            <SpecList>
              <SpecItem>3차원 측정기</SpecItem>
              <SpecItem>표면조도 측정기</SpecItem>
              <SpecItem>형상 측정기</SpecItem>
            </SpecList>
          </Card>
        </Grid>
      </Section>

      <CapabilitySection>
        <SectionTitle>가공 역량</SectionTitle>
        <CapabilityGrid>
          <CapabilityCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <CardTitle>정밀도</CardTitle>
            <SpecList>
              <SpecItem>가공 공차: ±0.01mm</SpecItem>
              <SpecItem>표면 조도: Ra 0.4</SpecItem>
              <SpecItem>진원도: 0.005mm</SpecItem>
            </SpecList>
          </CapabilityCard>

          <CapabilityCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>가공 범위</CardTitle>
            <SpecList>
              <SpecItem>최대 크기: 1000×1000mm</SpecItem>
              <SpecItem>최대 중량: 500kg</SpecItem>
              <SpecItem>다품종 소량 생산 가능</SpecItem>
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
              <SpecItem>특수강/초경합금</SpecItem>
            </SpecList>
          </CapabilityCard>
        </CapabilityGrid>
      </CapabilitySection>
    </Container>
  );
};

export default Processing; 