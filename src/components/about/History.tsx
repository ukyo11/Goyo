import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 0.5rem;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${colors.primary.main};

    @media (max-width: 768px) {
      left: 0;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  margin-bottom: 3rem;

  &:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    padding-left: 2rem;

    &:nth-child(even) {
      padding-left: 2rem;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  right: -6px;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${colors.primary.main};
  border: 2px solid white;
  box-shadow: 0 0 0 4px ${colors.primary.main}33;

  ${TimelineItem}:nth-child(even) & {
    right: auto;
    left: -6px;
  }

  @media (max-width: 768px) {
    left: -6px;
    ${TimelineItem}:nth-child(even) & {
      left: -6px;
    }
  }
`;

const TimelineContent = styled.div`
  background: ${colors.background.card};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 2px solid ${colors.border.main};
  width: 90%;
  margin-right: 2rem;

  ${TimelineItem}:nth-child(even) & {
    margin-right: 0;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    ${TimelineItem}:nth-child(even) & {
      margin-left: 0;
    }
  }

  &:hover {
    border-color: ${colors.primary.main};
    box-shadow: 0 8px 24px ${colors.shadow.medium};
  }
`;

const Year = styled.div`
  color: ${colors.primary.main};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Event = styled.li`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  padding: 0.5rem 0;
  display: flex;
  align-items: baseline;
  gap: 1rem;

  &::before {
    content: "•";
    color: ${colors.primary.main};
    font-weight: bold;
  }
`;

const History = () => {
  const historyData = [
    {
      year: '2023',
      events: [
        '글로벌 기술혁신상 수상',
        '베트남 지사 설립',
        '연매출 1000억 달성'
      ]
    },
    {
      year: '2020',
      events: [
        'ISO 14001 인증 획득',
        '중국 현지 법인 설립',
        'R&D 센터 준공'
      ]
    },
    {
      year: '2015',
      events: [
        '기업부설연구소 설립',
        '벤처기업 인증',
        '자본금 증자 (50억원)'
      ]
    },
    {
      year: '2010',
      events: [
        'ISO 9001 인증 획득',
        '본사 이전 (화성시)',
        '제2공장 준공'
      ]
    },
    {
      year: '2005',
      events: [
        '기술혁신형 중소기업 선정',
        '첫 해외 수출',
        '생산설비 확충'
      ]
    },
    {
      year: '2000',
      events: [
        '회사 설립',
        '첫 제품 출시',
        '기업 부설 연구소 설립'
      ]
    }
  ];

  return (
    <Container>
      <Section>
        <Title>연혁</Title>
        <Timeline>
          {historyData.map((item, index) => (
            <TimelineItem
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineDot />
              <TimelineContent>
                <Year>{item.year}</Year>
                <EventList>
                  {item.events.map((event, eventIndex) => (
                    <Event key={eventIndex}>{event}</Event>
                  ))}
                </EventList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </Container>
  );
};

export default History; 