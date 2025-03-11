import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMicrochip, FaCogs, FaIndustry, FaTools, FaRobot, FaMemory } from 'react-icons/fa';
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

const SpecSection = styled.div`
  margin-top: 4rem;
`;

const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SpecCard = styled(motion.div)`
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

const ProductParts = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>취급 부품/파트</SectionTitle>
        <Description>
          다양한 산업 분야에 적용되는 고품질 부품과 파트를 제공합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaMicrochip />
            </IconWrapper>
            <CardTitle>반도체 부품</CardTitle>
            <FeatureList>
              <FeatureItem>웨이퍼 처리 부품</FeatureItem>
              <FeatureItem>진공 챔버 부품</FeatureItem>
              <FeatureItem>공정 장비 부품</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <CardTitle>정밀기계 부품</CardTitle>
            <FeatureList>
              <FeatureItem>감속기 부품</FeatureItem>
              <FeatureItem>베어링 하우징</FeatureItem>
              <FeatureItem>커플링 부품</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaRobot />
            </IconWrapper>
            <CardTitle>자동화 부품</CardTitle>
            <FeatureList>
              <FeatureItem>로봇 관절 부품</FeatureItem>
              <FeatureItem>컨베이어 부품</FeatureItem>
              <FeatureItem>그리퍼 부품</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <SpecSection>
        <SectionTitle>산업별 특화 부품</SectionTitle>
        <SpecGrid>
          <SpecCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaMemory />
            </IconWrapper>
            <CardTitle>디스플레이</CardTitle>
            <FeatureList>
              <FeatureItem>패널 이송 부품</FeatureItem>
              <FeatureItem>얼라인먼트 부품</FeatureItem>
              <FeatureItem>검사 장비 부품</FeatureItem>
            </FeatureList>
          </SpecCard>

          <SpecCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>중공업</CardTitle>
            <FeatureList>
              <FeatureItem>대형 기계 부품</FeatureItem>
              <FeatureItem>유압 시스템 부품</FeatureItem>
              <FeatureItem>조선 기자재</FeatureItem>
            </FeatureList>
          </SpecCard>

          <SpecCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <CardTitle>항공우주</CardTitle>
            <FeatureList>
              <FeatureItem>엔진 부품</FeatureItem>
              <FeatureItem>구조물 부품</FeatureItem>
              <FeatureItem>특수 소재 부품</FeatureItem>
            </FeatureList>
          </SpecCard>
        </SpecGrid>
      </SpecSection>
    </Container>
  );
};

export default ProductParts; 