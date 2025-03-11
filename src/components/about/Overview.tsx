import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { colors } from '../../styles/colors';

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
  color: ${colors.text.primary};;
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
    color: ${colors.primary.main};
    margin-bottom: 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${colors.primary.main};
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
  color: ${colors.primary.main};
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
                  <Td>㈜고요 코퍼레이션</Td>
                </Tr>
                <Tr>
                  <Th>설립일</Th>
                  <Td>2012년 6월</Td>
                </Tr>
                <Tr>
                  <Th>대표이사</Th>
                  <Td>이철봉</Td>
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
                  <Td>경기도 용인시 수지구 포은대로 59번길 37, B410(상현동, 시그니처 광교)</Td>
                </Tr>
                <Tr>
                  <Th>제1공장</Th>
                  <Td>경기도 화성시 팔탄면 향남읍 터넉골로</Td>
                </Tr>
                <Tr>
                  <Th>제2공장</Th>
                  <Td>경기도 안성시 서운면 삼사로</Td>
                </Tr>
              </tbody>
            </Table>
          </InfoCard>

          <InfoCard>
            <h3><FaPhone /> 연락처</h3>
            <Table>
              <tbody>
                <Tr>
                  <Th>TEL</Th>
                  <Td>031-304-2099</Td>
                </Tr>
                <Tr>
                  <Th>HP</Th>
                  <Td>010-9465-2099</Td>
                </Tr>
                <Tr>
                  <Th>E-MAIL</Th>
                  <Td>cblee@higoyo.co.kr</Td>
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