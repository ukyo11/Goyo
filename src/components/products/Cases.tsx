import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaIndustry, FaMicrochip, FaSearch, FaChartLine } from 'react-icons/fa';
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

const StatsSection = styled.div`
  margin-top: 4rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatsCard = styled(motion.div)`
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

const StatsTitle = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1rem 0;
`;

const StatsValue = styled.p`
  color: ${colors.primary.main};
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const StatsDescription = styled.span`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  display: block;
`;

const Cases = () => {
  const cases = [
    {
      title: "반도체 식각 장비",
      description: "고성능 플라즈마 식각 장비 제작",
      specs: [
        "처리 크기: 12인치 웨이퍼",
        "처리량: 25 WPH",
        "균일도: ±3%",
        "자동화 시스템 탑재"
      ]
    },
    {
      title: "PECVD 설비",
      description: "플라즈마 화학기상증착 장비 제작",
      specs: [
        "다중 챔버 구조",
        "온도 제어: ±1℃",
        "진공도: 10⁻⁶ Torr",
        "인라인 모니터링 시스템"
      ]
    },
    {
      title: "검사 장비",
      description: "웨이퍼 표면 검사 장비 제작",
      specs: [
        "검출 한계: 0.1μm",
        "처리 속도: 60 WPH",
        "AI 결함 분석",
        "자동 분류 시스템"
      ]
    }
  ];

  return (
    <Container>
      <Section>
        <SectionTitle>설비 제작 사례</SectionTitle>
        <Description>
          고객의 요구사항에 맞춘 최적의 솔루션을 제공합니다.
          다양한 제작 경험을 바탕으로 신뢰성 높은 장비를 제작합니다.
        </Description>

        <Grid>
          {cases.map((item, index) => (
            <Card
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <IconWrapper>
                <FaMicrochip />
              </IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <FeatureList>
                {item.specs.map((spec, specIndex) => (
                  <FeatureItem key={specIndex}>{spec}</FeatureItem>
                ))}
              </FeatureList>
            </Card>
          ))}
        </Grid>
      </Section>

      <StatsSection>
        <SectionTitle>제작 실적</SectionTitle>
        <StatsGrid>
          <StatsCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaMicrochip />
            </IconWrapper>
            <StatsTitle>누적 제작 건수</StatsTitle>
            <StatsValue>500+</StatsValue>
            <StatsDescription>설비</StatsDescription>
          </StatsCard>
          <StatsCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaSearch />
            </IconWrapper>
            <StatsTitle>품질 합격률</StatsTitle>
            <StatsValue>99.9%</StatsValue>
            <StatsDescription>양산 테스트 기준</StatsDescription>
          </StatsCard>
          <StatsCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <StatsTitle>생산성 향상</StatsTitle>
            <StatsValue>30%</StatsValue>
            <StatsDescription>평균 개선율</StatsDescription>
          </StatsCard>
        </StatsGrid>
      </StatsSection>
    </Container>
  );
};

export default Cases; 