import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCogs, FaTools, FaIndustry, FaTruck, FaSearch, FaHandshake } from 'react-icons/fa';
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

const ServiceSection = styled.div`
  margin-top: 4rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled(motion.div)`
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

const ServiceTitle = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1rem 0;
`;

const ServiceDescription = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
`;

const Parts = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>부품판매사업부</SectionTitle>
        <Description>
          고품질 산업용 부품의 안정적인 공급을 통해 고객사의 생산성과 효율성을 지원합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <CardTitle>기계부품</CardTitle>
            <FeatureList>
              <FeatureItem>베어링 및 동력전달</FeatureItem>
              <FeatureItem>유공압 부품</FeatureItem>
              <FeatureItem>기계요소부품</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <CardTitle>산업용 공구</CardTitle>
            <FeatureList>
              <FeatureItem>절삭공구</FeatureItem>
              <FeatureItem>측정기기</FeatureItem>
              <FeatureItem>전동공구</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>자동화 부품</CardTitle>
            <FeatureList>
              <FeatureItem>센서 및 제어기기</FeatureItem>
              <FeatureItem>모터 및 드라이브</FeatureItem>
              <FeatureItem>자동화 시스템</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <ServiceSection>
        <SectionTitle>서비스 특징</SectionTitle>
        <ServiceGrid>
          <ServiceCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaSearch />
            </IconWrapper>
            <ServiceTitle>부품 상담</ServiceTitle>
            <ServiceDescription>
              전문가의 맞춤형 부품 추천
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaTruck />
            </IconWrapper>
            <ServiceTitle>신속 배송</ServiceTitle>
            <ServiceDescription>
              당일 출고 및 긴급 배송 지원
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaHandshake />
            </IconWrapper>
            <ServiceTitle>품질 보증</ServiceTitle>
            <ServiceDescription>
              정품 인증 및 품질 보증 제공
            </ServiceDescription>
          </ServiceCard>
        </ServiceGrid>
      </ServiceSection>
    </Container>
  );
};

export default Parts; 