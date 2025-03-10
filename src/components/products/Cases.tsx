import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaIndustry, FaMicrochip, FaSearch, FaChartLine } from 'react-icons/fa';

const Container = styled(motion.div)`
  display: grid;
  gap: 2rem;
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(79, 172, 254, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #4facfe;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  color: #e0e7ff;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 3rem;
`;

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CaseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
`;

const CaseImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 3rem;
    color: #4facfe;
  }
`;

const CaseContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: #7dd3fc;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #e0e7ff;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #e0e7ff;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;

    &::before {
      content: '•';
      color: #4facfe;
    }
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(79, 172, 254, 0.1);
  text-align: center;

  svg {
    font-size: 2rem;
    color: #4facfe;
    margin-bottom: 1rem;
  }

  h4 {
    color: #7dd3fc;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #e0e7ff;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  span {
    color: #e0e7ff;
    font-size: 0.9rem;
  }
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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Title>설비 제작 사례</Title>
        <Description>
          고객의 요구사항에 맞춘 최적의 솔루션을 제공합니다.
          다양한 제작 경험을 바탕으로 신뢰성 높은 장비를 제작합니다.
        </Description>

        <CaseGrid>
          {cases.map((item, index) => (
            <CaseCard
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CaseImage>
                <FaIndustry />
              </CaseImage>
              <CaseContent>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <SpecList>
                  {item.specs.map((spec, specIndex) => (
                    <li key={specIndex}>{spec}</li>
                  ))}
                </SpecList>
              </CaseContent>
            </CaseCard>
          ))}
        </CaseGrid>
      </Section>

      <Section>
        <Title>제작 실적</Title>
        <StatGrid>
          <StatCard whileHover={{ scale: 1.05 }}>
            <FaMicrochip />
            <h4>누적 제작 건수</h4>
            <p>500+</p>
            <span>설비</span>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }}>
            <FaSearch />
            <h4>품질 합격률</h4>
            <p>99.9%</p>
            <span>양산 테스트 기준</span>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }}>
            <FaChartLine />
            <h4>생산성 향상</h4>
            <p>30%</p>
            <span>평균 개선율</span>
          </StatCard>
        </StatGrid>
      </Section>
    </Container>
  );
};

export default Cases; 