import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// 사용하지 않는 아이콘 import 제거
import { colors } from '../../styles/colors';

// 고객사 데이터 정의 (로고 있는 고객사만 포함)
const clientsData = [
  { name: '삼성전자', logo: 'samsung.png', industry: '전자', description: '글로벌 전자기기 제조사', details: ['반도체 장비 공급', '스마트팩토리 솔루션', '기술 혁신 협력'] },
  { name: 'SK하이닉스', logo: 'sk.png', industry: '전자', description: '메모리 반도체 전문기업', details: ['생산설비 공급', '공정 자동화 시스템', '품질 관리 협력'] },
  { name: 'DMS', logo: 'dms.png', industry: '기타', description: '디스플레이/반도체 장비 전문', details: ['장비 공급', '기술 지원'] },
  { name: 'Luken', logo: 'luken.png', industry: '기타', description: '산업용 로봇 시스템', details: ['자동화 솔루션 제공', '유지보수 계약'] },
  { name: 'TES', logo: 'tes.png', industry: '기타', description: '반도체 전공정 장비', details: ['PECVD 장비 공급', '기술 협력'] },
];

// 산업별 그룹화 로직 제거

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

// IndustrySection, IndustryTitle 제거

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

// IconWrapper 제거

// 로고 이미지 스타일 추가
const LogoImage = styled.img`
  height: 50px; // 로고 높이 조절
  width: auto;
  max-width: 150px;
  margin-bottom: 1.5rem;
  object-fit: contain;
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
  const imagePath = process.env.NODE_ENV === 'production' ? '/goyo-web' : '';

  return (
    <ClientsContainer>
      <Title>주요 고객사</Title>

      {/* 단일 ClientGrid로 모든 고객사 표시 */}
      <ClientGrid>
        {clientsData.map((client) => (
          <ClientCard
            key={client.name}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* 로고만 표시 */}
            <LogoImage src={`${imagePath}/images/customers/${client.logo}`} alt={`${client.name} 로고`} />
            <CompanyDescription>{client.description}</CompanyDescription>
            <PartnershipDetails>
              {client.details.map((detail) => (
                <DetailItem key={detail}>{detail}</DetailItem>
              ))}
            </PartnershipDetails>
          </ClientCard>
        ))}
      </ClientGrid>
    </ClientsContainer>
  );
};

export default Clients;
