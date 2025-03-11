import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaIndustry, FaMicrochip, FaCar } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const ClientsContainer = styled.div`
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

const IndustrySection = styled.div`
  margin-bottom: 4rem;
`;

const IndustryTitle = styled.h3`
  color: ${colors.primary.main};
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: ${colors.background.light};
  border-radius: 12px;
  box-shadow: 0 4px 8px ${colors.shadow.light};
  border: 2px solid ${colors.primary.main};
`;

const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ClientCard = styled(motion.div)`
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
  font-size: 2.5rem;
  color: ${colors.primary.main};
  margin-bottom: 1.5rem;
`;

const CompanyName = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CompanyDescription = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const PartnershipDetails = styled.ul`
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

const Clients = () => {
  return (
    <ClientsContainer>
      <Title>주요 고객사</Title>

      <IndustrySection>
        <IndustryTitle>제조업</IndustryTitle>
        <ClientGrid>
          <ClientCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CompanyName>현대중공업</CompanyName>
            <CompanyDescription>
              조선해양 분야 글로벌 리더
            </CompanyDescription>
            <PartnershipDetails>
              <DetailItem>주요 설비 공급</DetailItem>
              <DetailItem>기술 협력 파트너십</DetailItem>
              <DetailItem>공동 연구 개발</DetailItem>
            </PartnershipDetails>
          </ClientCard>

          <ClientCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <IconWrapper>
              <FaBuilding />
            </IconWrapper>
            <CompanyName>포스코</CompanyName>
            <CompanyDescription>
              세계적인 철강 기업
            </CompanyDescription>
            <PartnershipDetails>
              <DetailItem>설비 유지보수</DetailItem>
              <DetailItem>품질 관리 시스템</DetailItem>
              <DetailItem>생산성 향상 협력</DetailItem>
            </PartnershipDetails>
          </ClientCard>
        </ClientGrid>
      </IndustrySection>

      <IndustrySection>
        <IndustryTitle>전자</IndustryTitle>
        <ClientGrid>
          <ClientCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <IconWrapper>
              <FaMicrochip />
            </IconWrapper>
            <CompanyName>삼성전자</CompanyName>
            <CompanyDescription>
              글로벌 전자기기 제조사
            </CompanyDescription>
            <PartnershipDetails>
              <DetailItem>반도체 장비 공급</DetailItem>
              <DetailItem>스마트팩토리 솔루션</DetailItem>
              <DetailItem>기술 혁신 협력</DetailItem>
            </PartnershipDetails>
          </ClientCard>

          <ClientCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <IconWrapper>
              <FaMicrochip />
            </IconWrapper>
            <CompanyName>SK하이닉스</CompanyName>
            <CompanyDescription>
              메모리 반도체 전문기업
            </CompanyDescription>
            <PartnershipDetails>
              <DetailItem>생산설비 공급</DetailItem>
              <DetailItem>공정 자동화 시스템</DetailItem>
              <DetailItem>품질 관리 협력</DetailItem>
            </PartnershipDetails>
          </ClientCard>
        </ClientGrid>
      </IndustrySection>

      <IndustrySection>
        <IndustryTitle>자동차</IndustryTitle>
        <ClientGrid>
          <ClientCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <IconWrapper>
              <FaCar />
            </IconWrapper>
            <CompanyName>현대자동차</CompanyName>
            <CompanyDescription>
              글로벌 자동차 제조사
            </CompanyDescription>
            <PartnershipDetails>
              <DetailItem>자동화 설비 공급</DetailItem>
              <DetailItem>생산라인 최적화</DetailItem>
              <DetailItem>스마트팩토리 구축</DetailItem>
            </PartnershipDetails>
          </ClientCard>

          <ClientCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <IconWrapper>
              <FaCar />
            </IconWrapper>
            <CompanyName>기아</CompanyName>
            <CompanyDescription>
              혁신적인 자동차 기업
            </CompanyDescription>
            <PartnershipDetails>
              <DetailItem>생산설비 현대화</DetailItem>
              <DetailItem>품질관리 시스템</DetailItem>
              <DetailItem>기술 협력 강화</DetailItem>
            </PartnershipDetails>
          </ClientCard>
        </ClientGrid>
      </IndustrySection>
    </ClientsContainer>
  );
};

export default Clients; 