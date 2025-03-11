import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMicrochip, FaRobot, FaCogs, FaChartLine, FaCheckCircle } from 'react-icons/fa';
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

const Description = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
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
    border-color: ${colors.primary.main};
    box-shadow: 0 8px 24px ${colors.shadow.medium};
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

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
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

const ResultSection = styled.div`
  margin-top: 4rem;
`;

const ResultGrid = styled(Grid)`
  margin-top: 2rem;
`;

const Equipment = () => {
  return (
    <Container>
      <Section>
        <Title>설비 제작 사례</Title>
        <Description>
          다양한 산업 분야에서 검증된 맞춤형 설비 제작 경험을 보유하고 있습니다.
        </Description>

        <Grid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaMicrochip />
            </IconWrapper>
            <CardTitle>반도체 설비</CardTitle>
            <DetailList>
              <DetailItem>웨이퍼 이송 시스템</DetailItem>
              <DetailItem>진공 챔버 설비</DetailItem>
              <DetailItem>클린룸 설비</DetailItem>
              <DetailItem>검사 장비</DetailItem>
            </DetailList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaRobot />
            </IconWrapper>
            <CardTitle>자동화 설비</CardTitle>
            <DetailList>
              <DetailItem>로봇 자동화 라인</DetailItem>
              <DetailItem>물류 자동화 시스템</DetailItem>
              <DetailItem>검사 자동화 설비</DetailItem>
              <DetailItem>포장 자동화 설비</DetailItem>
            </DetailList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <CardTitle>생산 설비</CardTitle>
            <DetailList>
              <DetailItem>조립 생산 라인</DetailItem>
              <DetailItem>시험 검사 설비</DetailItem>
              <DetailItem>품질 관리 시스템</DetailItem>
              <DetailItem>공정 제어 설비</DetailItem>
            </DetailList>
          </Card>
        </Grid>

        <ResultSection>
          <Title>주요 성과</Title>
          <ResultGrid>
            <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <CardTitle>생산성 향상</CardTitle>
              <DetailList>
                <DetailItem>생산량 30% 증가</DetailItem>
                <DetailItem>불량률 50% 감소</DetailItem>
                <DetailItem>작업시간 40% 단축</DetailItem>
                <DetailItem>원가 절감 실현</DetailItem>
              </DetailList>
            </Card>

            <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <IconWrapper>
                <FaCheckCircle />
              </IconWrapper>
              <CardTitle>품질 개선</CardTitle>
              <DetailList>
                <DetailItem>품질 안정성 향상</DetailItem>
                <DetailItem>공정 신뢰성 확보</DetailItem>
                <DetailItem>고객 만족도 증가</DetailItem>
                <DetailItem>불량률 최소화</DetailItem>
              </DetailList>
            </Card>

            <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <IconWrapper>
                <FaCogs />
              </IconWrapper>
              <CardTitle>설비 혁신</CardTitle>
              <DetailList>
                <DetailItem>스마트팩토리 구현</DetailItem>
                <DetailItem>에너지 효율 개선</DetailItem>
                <DetailItem>유지보수 비용 절감</DetailItem>
                <DetailItem>설비 수명 연장</DetailItem>
              </DetailList>
            </Card>
          </ResultGrid>
        </ResultSection>
      </Section>
    </Container>
  );
};

export default Equipment; 