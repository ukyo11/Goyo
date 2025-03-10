import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHandshake, FaUserTie, FaIndustry } from 'react-icons/fa';

const GreetingContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(79, 172, 254, 0.1);
`;

const GreetingHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #4facfe;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  line-height: 1.8;
  color: #e0e7ff;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const ValueSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(79, 172, 254, 0.1);

  svg {
    font-size: 2rem;
    color: #4facfe;
    margin-bottom: 1rem;
  }

  h3 {
    color: #7dd3fc;
    margin-bottom: 0.5rem;
  }
`;

const Signature = styled.div`
  text-align: right;
  margin-top: 3rem;
  font-size: 1.2rem;
  color: #4facfe;
`;

const Greeting = () => {
  return (
    <GreetingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <GreetingHeader>
        <Title>인사말</Title>
      </GreetingHeader>
      
      <Content>
        <Paragraph>
          안녕하십니까, 고요엔지니어링 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
        </Paragraph>
        
        <Paragraph>
          저희 고요엔지니어링은 반도체와 디스플레이 산업의 핵심 설비 제작 분야에서
          고객사와 함께 성장해 온 기업입니다. 설립 이래로 "고객만족", "신의", "정직"이라는
          핵심가치를 바탕으로 최고의 품질과 서비스를 제공하기 위해 끊임없이 노력해 왔습니다.
        </Paragraph>

        <Paragraph>
          급변하는 글로벌 시장 환경 속에서도 기술 혁신과 품질 향상을 통해
          고객의 신뢰를 쌓아가며, 반도체 산업의 발전에 기여하고 있습니다.
          앞으로도 끊임없는 연구개발과 혁신을 통해 글로벌 경쟁력을 갖춘
          기업으로 성장해 나갈 것을 약속드립니다.
        </Paragraph>

        <ValueSection>
          <ValueCard whileHover={{ scale: 1.05 }}>
            <FaHandshake />
            <h3>고객만족</h3>
            <p>고객의 니즈를 최우선으로 생각하며, 최상의 서비스를 제공합니다.</p>
          </ValueCard>
          <ValueCard whileHover={{ scale: 1.05 }}>
            <FaUserTie />
            <h3>신의</h3>
            <p>약속과 신뢰를 바탕으로 고객과의 관계를 소중히 합니다.</p>
          </ValueCard>
          <ValueCard whileHover={{ scale: 1.05 }}>
            <FaIndustry />
            <h3>정직</h3>
            <p>투명하고 정직한 경영으로 신뢰받는 기업이 되겠습니다.</p>
          </ValueCard>
        </ValueSection>

        <Signature>
          <p>고요엔지니어링</p>
          <p>대표이사 홍길동</p>
        </Signature>
      </Content>
    </GreetingContainer>
  );
};

export default Greeting; 