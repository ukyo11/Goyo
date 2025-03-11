import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaUsers, FaGlobe } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  color: ${colors.text.primary};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
`;

const VisionSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const VisionTitle = styled.h3`
  color: ${colors.primary.main};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const VisionText = styled.p`
  color: ${colors.text.primary};
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: ${colors.background.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 2px solid ${colors.border.main};
  text-align: center;

  &:hover {
    border-color: ${colors.primary.main};
    box-shadow: 0 8px 24px ${colors.shadow.medium};
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${colors.primary.main};
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
`;

const Philosophy = () => {
  return (
    <Container>
      <Section>
        <Title>경영이념</Title>
        
        <VisionSection>
          <VisionTitle>Vision</VisionTitle>
          <VisionText>
            "글로벌 기술 혁신을 선도하는 신뢰받는 기업"
          </VisionText>
        </VisionSection>

        <ValuesGrid>
          <ValueCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaLightbulb />
            </IconWrapper>
            <ValueTitle>기술 혁신</ValueTitle>
            <ValueDescription>
              지속적인 연구개발과 혁신을 통해 
              최고의 기술력을 확보하고 
              산업 발전에 기여합니다.
            </ValueDescription>
          </ValueCard>

          <ValueCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaHandshake />
            </IconWrapper>
            <ValueTitle>고객 신뢰</ValueTitle>
            <ValueDescription>
              고객과의 신뢰를 최우선 가치로 삼아
              최상의 제품과 서비스를 
              제공합니다.
            </ValueDescription>
          </ValueCard>

          <ValueCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <ValueTitle>인재 육성</ValueTitle>
            <ValueDescription>
              창의적이고 전문성 있는 인재를 
              육성하여 함께 성장하는 
              기업문화를 만듭니다.
            </ValueDescription>
          </ValueCard>

          <ValueCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaGlobe />
            </IconWrapper>
            <ValueTitle>글로벌 경쟁력</ValueTitle>
            <ValueDescription>
              세계 시장에서 인정받는 
              기술력과 품질로 글로벌 
              경쟁력을 강화합니다.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </Section>
    </Container>
  );
};

export default Philosophy; 