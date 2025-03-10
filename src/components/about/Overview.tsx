import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const OverviewContainer = styled(motion.div)`
  display: grid;
  gap: 2rem;
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(79, 172, 254, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #4facfe;
  margin-bottom: 2rem;
  text-align: center;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(79, 172, 254, 0.1);

  h3 {
    color: #7dd3fc;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #4facfe;
    }
  }

  p {
    color: #e0e7ff;
    line-height: 1.6;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #e0e7ff;
  margin-top: 1rem;
`;

const Tr = styled.tr`
  border-bottom: 1px solid rgba(79, 172, 254, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  color: #7dd3fc;
  width: 30%;
  background: rgba(255, 255, 255, 0.02);
`;

const Td = styled.td`
  padding: 1rem;
`;

const Overview = () => {
  return (
    <OverviewContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Title>회사개요</Title>
        <InfoGrid>
          <InfoCard>
            <h3><FaBuilding /> 회사 정보</h3>
            <Table>
              <tbody>
                <Tr>
                  <Th>회사명</Th>
                  <Td>고요엔지니어링</Td>
                </Tr>
                <Tr>
                  <Th>설립일</Th>
                  <Td>2012년 6월</Td>
                </Tr>
                <Tr>
                  <Th>대표이사</Th>
                  <Td>홍길동</Td>
                </Tr>
                <Tr>
                  <Th>사업분야</Th>
                  <Td>반도체 장비 제조, 정밀가공, 부품세정</Td>
                </Tr>
                <Tr>
                  <Th>임직원수</Th>
                  <Td>00명</Td>
                </Tr>
              </tbody>
            </Table>
          </InfoCard>

          <InfoCard>
            <h3><FaGlobe /> 사업장 위치</h3>
            <Table>
              <tbody>
                <Tr>
                  <Th>본사</Th>
                  <Td>경기도 화성시 00구 00로 123</Td>
                </Tr>
                <Tr>
                  <Th>제1공장</Th>
                  <Td>경기도 화성시 00구 00로 456</Td>
                </Tr>
                <Tr>
                  <Th>제2공장</Th>
                  <Td>경기도 화성시 00구 00로 789</Td>
                </Tr>
              </tbody>
            </Table>
          </InfoCard>

          <InfoCard>
            <h3><FaPhone /> 연락처</h3>
            <Table>
              <tbody>
                <Tr>
                  <Th>전화</Th>
                  <Td>031-000-0000</Td>
                </Tr>
                <Tr>
                  <Th>팩스</Th>
                  <Td>031-000-0001</Td>
                </Tr>
                <Tr>
                  <Th>이메일</Th>
                  <Td>info@goyo.com</Td>
                </Tr>
              </tbody>
            </Table>
          </InfoCard>
        </InfoGrid>
      </Section>
    </OverviewContainer>
  );
};

export default Overview; 