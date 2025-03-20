import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMedal, FaCertificate, FaAward } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const CertificationContainer = styled.div`
  padding: .5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${colors.text.primary};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 2px 4px ${colors.shadow.text};
`;

const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const CertificationCard = styled(motion.div)`
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

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${colors.primary.main};
  margin-bottom: 1.5rem;
`;

const CertificationName = styled.h3`
  color: ${colors.text.primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CertificationDate = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const CertificationDescription = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const CertificationDetails = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const DetailItem = styled.li`
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

const Certification = () => {
  return (
    <CertificationContainer>
      <Title>인증현황</Title>
      <CertificationGrid>
        <CertificationCard
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <IconWrapper>
            <FaMedal />
          </IconWrapper>
          <CertificationName>ISO 9001</CertificationName>
          <CertificationDate>인증일: 준비중</CertificationDate>
          <CertificationDescription>
            국제 품질 경영 시스템 표준 인증
          </CertificationDescription>
          <CertificationDetails>
            <DetailItem>품질 관리 시스템 구축</DetailItem>
            <DetailItem>고객 만족도 향상</DetailItem>
            <DetailItem>지속적인 프로세스 개선</DetailItem>
          </CertificationDetails>
        </CertificationCard>

        <CertificationCard
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <IconWrapper>
            <FaCertificate />
          </IconWrapper>
          <CertificationName>ISO 14001</CertificationName>
          <CertificationDate>인증일: 준비중</CertificationDate>
          <CertificationDescription>
            환경 경영 시스템 국제 표준 인증
          </CertificationDescription>
          <CertificationDetails>
            <DetailItem>환경 영향 최소화</DetailItem>
            <DetailItem>자원 효율성 향상</DetailItem>
            <DetailItem>지속 가능한 발전 추구</DetailItem>
          </CertificationDetails>
        </CertificationCard>

        <CertificationCard
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <IconWrapper>
            <FaAward />
          </IconWrapper>
          <CertificationName>벤쳐인증</CertificationName>
          <CertificationDate>인증일: 준비중</CertificationDate>
          <CertificationDescription>
            기술 혁신 역량 우수 기업 인증
          </CertificationDescription>
          <CertificationDetails>
            <DetailItem>연구개발 투자 우수</DetailItem>
            <DetailItem>기술 경쟁력 인정</DetailItem>
            <DetailItem>혁신 성장 잠재력 보유</DetailItem>
          </CertificationDetails>
        </CertificationCard>
      </CertificationGrid>
    </CertificationContainer>
  );
};

export default Certification; 