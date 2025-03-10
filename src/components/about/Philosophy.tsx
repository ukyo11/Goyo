import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const PhilosophyContainer = styled(motion.div)`
  display: grid;
  gap: 3rem;
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(79, 172, 254, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #4facfe;
  margin-bottom: 2rem;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(79, 172, 254, 0.1);

  svg {
    font-size: 2rem;
    color: #4facfe;
    margin-bottom: 1rem;
  }

  h3 {
    color: #7dd3fc;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: #161616;
    line-height: 1.6;
  }
`;

const PolicyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PolicyItem = styled(motion.li)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 1px solid rgba(79, 172, 254, 0.1);
  color: #2b2b2b;

  h3 {
    color: #7dd3fc;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    line-height: 1.6;
  }
`;

const Philosophy = () => {
  return (
    <PhilosophyContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <SectionTitle>경영이념</SectionTitle>
        <CardGrid>
          <Card whileHover={{ scale: 1.05 }}>
            <FaLightbulb />
            <h3>불굴의 도전정신</h3>
            <p>끊임없는 혁신과 도전을 통해 기술 발전을 선도하며, 
               글로벌 시장에서 경쟁력을 확보합니다.</p>
          </Card>
          <Card whileHover={{ scale: 1.05 }}>
            <FaUsers />
            <h3>미래 개척</h3>
            <p>지속적인 연구개발과 기술 혁신으로 반도체 산업의 
               미래를 개척해 나갑니다.</p>
          </Card>
          <Card whileHover={{ scale: 1.05 }}>
            <FaChartLine />
            <h3>고객가치 증대</h3>
            <p>고객의 성공이 곧 우리의 성공이라는 믿음으로 
               최상의 가치를 제공합니다.</p>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>품질방침</SectionTitle>
        <PolicyList>
          <PolicyItem whileHover={{ scale: 1.02 }}>
            <h3>고객만족 증대</h3>
            <p>고객의 요구사항을 정확히 파악하고, 이를 충족시키기 위한 
               최적의 솔루션을 제공합니다.</p>
          </PolicyItem>
          <PolicyItem whileHover={{ scale: 1.02 }}>
            <h3>자발적 전원참가</h3>
            <p>모든 임직원이 품질 향상에 자발적으로 참여하며, 
               지속적인 교육과 훈련을 통해 전문성을 강화합니다.</p>
          </PolicyItem>
          <PolicyItem whileHover={{ scale: 1.02 }}>
            <h3>지속적 프로세스 개선</h3>
            <p>업무 프로세스를 지속적으로 개선하고 혁신하여 
               효율성과 생산성을 향상시킵니다.</p>
          </PolicyItem>
        </PolicyList>
      </Section>
    </PhilosophyContainer>
  );
};

export default Philosophy; 