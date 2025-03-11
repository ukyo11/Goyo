import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserTie, FaUsers, FaCogs, FaChartLine, FaClipboardCheck } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h2`
  color: ${colors.text.primary};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ExecutiveSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const DepartmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
`;

const Card = styled(motion.div)`
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ExecutiveCard = styled(Card)`
  background: ${colors.primary.main};
  color: white;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${colors.primary.main};
  margin-bottom: 1.5rem;

  ${ExecutiveCard} & {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Position = styled.h3`
  color: ${colors.text.primary};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;

  ${ExecutiveCard} & {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const Name = styled.div`
  color: ${colors.text.primary};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  ${ExecutiveCard} & {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const TeamItem = styled.li`
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

  ${ExecutiveCard} & {
    color: white;
    border-bottom-color: rgba(255, 255, 255, 0.2);

    &::before {
      color: white;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 0;
  }
`;

const OrganizationChart = () => {
  return (
    <Container>
      <Title>조직도</Title>
      <ChartContainer>
        <ExecutiveSection>
          <ExecutiveCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <IconWrapper>
              <FaUserTie />
            </IconWrapper>
            <Position>대표이사</Position>
            <Name>홍길동</Name>
            <TeamList>
              <TeamItem>경영 총괄</TeamItem>
              <TeamItem>전략 기획</TeamItem>
            </TeamList>
          </ExecutiveCard>
        </ExecutiveSection>

        <DepartmentGrid>
          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <Position>경영지원본부</Position>
            <TeamList>
              <TeamItem>인사팀</TeamItem>
              <TeamItem>재무팀</TeamItem>
              <TeamItem>총무팀</TeamItem>
            </TeamList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
            <Position>기술연구소</Position>
            <TeamList>
              <TeamItem>R&D팀</TeamItem>
              <TeamItem>설계팀</TeamItem>
              <TeamItem>품질관리팀</TeamItem>
            </TeamList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <Position>영업본부</Position>
            <TeamList>
              <TeamItem>국내영업팀</TeamItem>
              <TeamItem>해외영업팀</TeamItem>
              <TeamItem>마케팅팀</TeamItem>
            </TeamList>
          </Card>

          <Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaClipboardCheck />
            </IconWrapper>
            <Position>생산본부</Position>
            <TeamList>
              <TeamItem>생산관리팀</TeamItem>
              <TeamItem>품질보증팀</TeamItem>
              <TeamItem>구매팀</TeamItem>
            </TeamList>
          </Card>
        </DepartmentGrid>
      </ChartContainer>
    </Container>
  );
};

export default OrganizationChart; 