import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGlobe, FaSearch, FaHandshake, FaShieldAlt, FaChartLine, FaBalanceScale } from 'react-icons/fa';
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

const Purchasing = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>구매대행서비스</SectionTitle>
        <Description>
          글로벌 네트워크를 통한 최적의 구매 솔루션으로 고객사의 비용 절감과 경쟁력 향상을 지원합니다.
        </Description>
        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaGlobe />
            </IconWrapper>
            <CardTitle>글로벌 소싱</CardTitle>
            <FeatureList>
              <FeatureItem>해외 공급업체 발굴</FeatureItem>
              <FeatureItem>가격 경쟁력 확보</FeatureItem>
              <FeatureItem>품질 보증 시스템</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaBalanceScale />
            </IconWrapper>
            <CardTitle>구매 컨설팅</CardTitle>
            <FeatureList>
              <FeatureItem>구매 전략 수립</FeatureItem>
              <FeatureItem>원가 분석</FeatureItem>
              <FeatureItem>공급망 최적화</FeatureItem>
            </FeatureList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaShieldAlt />
            </IconWrapper>
            <CardTitle>품질 관리</CardTitle>
            <FeatureList>
              <FeatureItem>품질 검사</FeatureItem>
              <FeatureItem>공급업체 실사</FeatureItem>
              <FeatureItem>인증 관리</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <ProcessSection>
        <SectionTitle>서비스 프로세스</SectionTitle>
        <ProcessGrid>
          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaSearch />
            </IconWrapper>
            <ProcessTitle>요구사항 분석</ProcessTitle>
            <ProcessDescription>
              고객 니즈 파악 및 구매 전략 수립
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaGlobe />
            </IconWrapper>
            <ProcessTitle>공급업체 선정</ProcessTitle>
            <ProcessDescription>
              글로벌 소싱 및 업체 평가
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaHandshake />
            </IconWrapper>
            <ProcessTitle>계약 체결</ProcessTitle>
            <ProcessDescription>
              조건 협상 및 계약 관리
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <ProcessTitle>실행 및 관리</ProcessTitle>
            <ProcessDescription>
              납기/품질 관리 및 성과 분석
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>
      </ProcessSection>
    </Container>
  );
};

export default Purchasing; 