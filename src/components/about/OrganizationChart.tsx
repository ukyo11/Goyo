import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserTie, FaUsers, FaChartLine, FaFlask, FaGlobe } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const ChartContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  p {
    color: ${colors.text.primary};
    font-size: 1.1rem;
    line-height: 1.7;
    font-weight: 500;
  }
`;

const ChartTitle = styled.h2`
  color: ${colors.text.primary};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  text-shadow: 0 2px 4px ${colors.shadow.text};
`;

const ExecutiveSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 2rem;
    background: ${colors.primary.main};
  }
`;

const ExecutiveCard = styled.div`
  background: ${colors.primary.main};
  color: ${colors.text.white};
  padding: 2rem;
  border-radius: 12px;
  display: inline-block;
  min-width: 300px;
  box-shadow: 0 4px 12px ${colors.shadow.dark};
`;

const Position = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${colors.text.white};
  text-shadow: 0 2px 4px ${colors.shadow.text};
`;

const ExecutiveName = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.text.white};
`;

const ChartSection = styled.div`
  margin-bottom: 4rem;
  position: relative;
`;

const DepartmentTitle = styled.h3`
  color: ${colors.primary.main};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  padding: 1.5rem;
  background: ${colors.background.light};
  border-radius: 12px;
  box-shadow: 0 4px 8px ${colors.shadow.light};
  border: 2px solid ${colors.primary.main};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamCard = styled(motion.div)`
  background: ${colors.background.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 2px solid ${colors.border.main};

  p {
    color: ${colors.text.primary};
    font-size: 1.1rem;
    line-height: 1.7;
    font-weight: 500;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${colors.shadow.medium};
    border-color: ${colors.primary.main};
  }
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamName = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
`;

const RoleList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RoleItem = styled.li`
  color: ${colors.text.primary};
  font-size: 1.2rem;
  font-weight: 500;
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

const OrganizationChart = () => {
  return (
    <ChartContainer>
      <ChartTitle>조직도</ChartTitle>
      
      <ExecutiveSection>
        <ExecutiveCard>
          <IconWrapper>
            <FaUserTie size={48} style={{ marginBottom: '1rem' }} />
          </IconWrapper>
          <Position>대표이사</Position>
          <ExecutiveName>홍길동</ExecutiveName>
        </ExecutiveCard>
      </ExecutiveSection>

      <ChartSection>
        <DepartmentTitle>경영지원본부</DepartmentTitle>
        <TeamGrid>
          <TeamCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <TeamHeader>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <TeamName>경영기획팀</TeamName>
            </TeamHeader>
            <RoleList>
              <RoleItem>전략 기획 및 경영 계획 수립</RoleItem>
              <RoleItem>예산 관리 및 재무 분석</RoleItem>
              <RoleItem>신규 사업 개발</RoleItem>
            </RoleList>
          </TeamCard>

          <TeamCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <TeamHeader>
              <IconWrapper>
                <FaUsers />
              </IconWrapper>
              <TeamName>인사총무팀</TeamName>
            </TeamHeader>
            <RoleList>
              <RoleItem>인사 관리 및 채용</RoleItem>
              <RoleItem>교육 훈련 프로그램 운영</RoleItem>
              <RoleItem>복리후생 제도 운영</RoleItem>
            </RoleList>
          </TeamCard>
        </TeamGrid>
      </ChartSection>

      <ChartSection>
        <DepartmentTitle>기술연구소</DepartmentTitle>
        <TeamGrid>
          <TeamCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <TeamHeader>
              <IconWrapper>
                <FaFlask />
              </IconWrapper>
              <TeamName>제품개발팀</TeamName>
            </TeamHeader>
            <RoleList>
              <RoleItem>신제품 연구 개발</RoleItem>
              <RoleItem>제품 성능 개선</RoleItem>
              <RoleItem>기술 특허 관리</RoleItem>
            </RoleList>
          </TeamCard>

          <TeamCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <TeamHeader>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <TeamName>품질관리팀</TeamName>
            </TeamHeader>
            <RoleList>
              <RoleItem>품질 시스템 운영</RoleItem>
              <RoleItem>제품 검사 및 인증</RoleItem>
              <RoleItem>품질 개선 활동</RoleItem>
            </RoleList>
          </TeamCard>
        </TeamGrid>
      </ChartSection>

      <ChartSection>
        <DepartmentTitle>영업본부</DepartmentTitle>
        <TeamGrid>
          <TeamCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <TeamHeader>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <TeamName>국내영업팀</TeamName>
            </TeamHeader>
            <RoleList>
              <RoleItem>국내 시장 영업 전략 수립</RoleItem>
              <RoleItem>거래처 관리 및 신규 개발</RoleItem>
              <RoleItem>고객 서비스 지원</RoleItem>
            </RoleList>
          </TeamCard>

          <TeamCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <TeamHeader>
              <IconWrapper>
                <FaGlobe />
              </IconWrapper>
              <TeamName>해외영업팀</TeamName>
            </TeamHeader>
            <RoleList>
              <RoleItem>해외 시장 개척</RoleItem>
              <RoleItem>수출입 업무 관리</RoleItem>
              <RoleItem>해외 거래처 관리</RoleItem>
            </RoleList>
          </TeamCard>
        </TeamGrid>
      </ChartSection>
    </ChartContainer>
  );
};

export default OrganizationChart; 