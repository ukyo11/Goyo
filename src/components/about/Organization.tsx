import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserTie, FaCogs, FaIndustry, FaClipboardCheck, FaUsers } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const OrganizationContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: .5rem;
  border: 1px solid rgba(79, 172, 254, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${colors.primary.main};
  margin-bottom: 2rem;
  text-align: center;
`;

const OrgChart = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Level = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 1rem;
    background: rgba(79, 172, 254, 0.3);
  }

  &:last-child::after {
    display: none;
  }
`;

const Department = styled(motion.div)`
  background: rgba(255, 255, 255, 0.5);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(71, 72, 73, 0.5);
  text-align: center;
  margin: 0 1rem;
  flex: 1;
  max-width: 300px;

  svg {
    font-size: 2rem;
    color: ${colors.primary.main};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${colors.primary.dark};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #1f1f1f;
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

const SubDepartments = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const SubDepartment = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(29, 29, 29, 0.5);
  color: ${colors.primary.light};
  font-size: 0.9rem;
`;

const Organization = () => {
  return (
    <OrganizationContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title>조직도</Title>
      <OrgChart>
        <Level>
          <Department
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaUserTie />
            <h3>대표이사</h3>
            <p>경영총괄</p>
            <SubDepartments>
              <SubDepartment>품질<br/>품질보증 및 관리</SubDepartment>
            </SubDepartments>
          </Department>
        </Level>

 

        <Level>
          <Department
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCogs />
            <h3>설비사업부</h3>
            <p>설비 설계 및 제작</p>
            <SubDepartments>
              <SubDepartment>Machine design</SubDepartment>
              <SubDepartment>Metal machining</SubDepartment>
              <SubDepartment>Electrical device</SubDepartment>
              <SubDepartment>PLC , S/W</SubDepartment>
              <SubDepartment>Assembly</SubDepartment>
              <SubDepartment>Set-up</SubDepartment>
            </SubDepartments>
          </Department>

          <Department
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaIndustry />
            <h3>세정사업부</h3>
            <p>정밀 부품 세정</p>
            <SubDepartments>
              <SubDepartment>Repair parts</SubDepartment>
              <SubDepartment>Process valve</SubDepartment>
              <SubDepartment>Metal product</SubDepartment>
              <SubDepartment>Ceramic</SubDepartment>
              <SubDepartment>etc.</SubDepartment>
            </SubDepartments>
          </Department>

          <Department
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaIndustry />
            <h3>Parts 사업부</h3>
            <p>부품</p>
            <SubDepartments>
              <SubDepartment>CKD</SubDepartment>
              <SubDepartment>COBETTER</SubDepartment>
              <SubDepartment>ATEN</SubDepartment>
              <SubDepartment>TPC</SubDepartment>
              <SubDepartment>Bronkhorst</SubDepartment>
              <SubDepartment>SPG</SubDepartment>
              <SubDepartment>PMI</SubDepartment>
              <SubDepartment>IKD</SubDepartment>
            </SubDepartments>
          </Department>
        </Level>

      </OrgChart>
    </OrganizationContainer>
  );
};

export default Organization; 