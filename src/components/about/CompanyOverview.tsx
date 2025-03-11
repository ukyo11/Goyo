import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaIndustry, FaGlobe } from 'react-icons/fa';
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const InfoCard = styled(motion.div)`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  background: ${colors.background.card};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${colors.shadow.light};
`;

const Th = styled.th`
  background: ${colors.primary.main};
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${colors.border.main};
  color: ${colors.text.primary};
`;

const Tr = styled.tr`
  &:last-child td {
    border-bottom: none;
  }

  &:hover {
    background: ${colors.background.light};
  }
`;

const CompanyOverview = () => {
  return (
    <Container>
      <Section>
        <Title>회사개요</Title>
        <Grid>
          <InfoCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaBuilding />
            </IconWrapper>
            <CardTitle>기업 정보</CardTitle>
            <DetailList>
              <DetailItem>설립일: 2000년 3월</DetailItem>
              <DetailItem>대표이사: 홍길동</DetailItem>
              <DetailItem>자본금: 50억원</DetailItem>
              <DetailItem>임직원수: 200명</DetailItem>
            </DetailList>
          </InfoCard>

          <InfoCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaIndustry />
            </IconWrapper>
            <CardTitle>주요 사업</CardTitle>
            <DetailList>
              <DetailItem>반도체 장비 제조</DetailItem>
              <DetailItem>디스플레이 장비 제조</DetailItem>
              <DetailItem>정밀 가공</DetailItem>
              <DetailItem>자동화 설비</DetailItem>
            </DetailList>
          </InfoCard>

          <InfoCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <IconWrapper>
              <FaGlobe />
            </IconWrapper>
            <CardTitle>글로벌 네트워크</CardTitle>
            <DetailList>
              <DetailItem>본사: 경기도 화성시</DetailItem>
              <DetailItem>R&D센터: 수원시</DetailItem>
              <DetailItem>해외지사: 중국, 베트남</DetailItem>
              <DetailItem>협력사: 50개사</DetailItem>
            </DetailList>
          </InfoCard>
        </Grid>

        <Table>
          <thead>
            <tr>
              <Th>구분</Th>
              <Th>상세 내용</Th>
            </tr>
          </thead>
          <tbody>
            <Tr>
              <Td>회사명</Td>
              <Td>(주)고요엔지니어링</Td>
            </Tr>
            <Tr>
              <Td>대표이사</Td>
              <Td>홍길동</Td>
            </Tr>
            <Tr>
              <Td>설립일</Td>
              <Td>2000년 3월</Td>
            </Tr>
            <Tr>
              <Td>주요사업</Td>
              <Td>반도체/디스플레이 장비 제조, 정밀가공, 자동화설비</Td>
            </Tr>
            <Tr>
              <Td>본사</Td>
              <Td>경기도 화성시 동탄면 00길 00</Td>
            </Tr>
            <Tr>
              <Td>연락처</Td>
              <Td>Tel: 031-000-0000 / Fax: 031-000-0001</Td>
            </Tr>
          </tbody>
        </Table>
      </Section>
    </Container>
  );
};

export default CompanyOverview; 