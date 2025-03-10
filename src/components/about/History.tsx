import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt } from 'react-icons/fa';

const HistoryContainer = styled(motion.div)`
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
    background: rgba(79, 172, 254, 0.3);
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
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
    padding-left: 70px;

    &:nth-child(even) {
      padding-left: 70px;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(79, 172, 254, 0.1);
  width: 80%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: rgba(79, 172, 254, 0.3);
  }

  ${TimelineItem}:nth-child(odd) & {
    &::before {
      right: -20px;
    }
  }

  ${TimelineItem}:nth-child(even) & {
    &::before {
      left: -20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    &::before {
      left: -40px !important;
    }
  }
`;

const Year = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #4facfe;
  color: #000924;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${TimelineItem}:nth-child(odd) & {
    left: calc(100% - 45%);
  }

  ${TimelineItem}:nth-child(even) & {
    right: calc(100% - 45%);
  }

  @media (max-width: 768px) {
    left: 0 !important;
  }
`;

const Event = styled.div`
  color: #e0e7ff;

  h3 {
    color: #7dd3fc;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    line-height: 1.6;
  }
`;

const History = () => {
  const historyData = [
    {
      year: "2023",
      events: [
        { title: "제2공장 준공", description: "화성시 00구 신규 공장 준공" },
        { title: "ISO 14001 인증 획득", description: "환경경영시스템 인증" }
      ]
    },
    {
      year: "2020",
      events: [
        { title: "기업부설연구소 설립", description: "R&D 역량 강화" },
        { title: "매출 100억 달성", description: "연간 매출 신기록 달성" }
      ]
    },
    {
      year: "2018",
      events: [
        { title: "제1공장 확장", description: "생산능력 50% 증대" },
        { title: "ISO 9001 인증 획득", description: "품질경영시스템 인증" }
      ]
    },
    {
      year: "2015",
      events: [
        { title: "첫 해외 수출", description: "대만, 중국 시장 진출" }
      ]
    },
    {
      year: "2012",
      events: [
        { title: "회사 설립", description: "고요엔지니어링 설립" }
      ]
    }
  ];

  return (
    <HistoryContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title>연혁</Title>
      <Timeline>
        {historyData.map((item, index) => (
          <TimelineItem
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Year>
              <FaRegCalendarAlt />
              {item.year}
            </Year>
            <TimelineContent>
              {item.events.map((event, eventIndex) => (
                <Event key={eventIndex}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </Event>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </HistoryContainer>
  );
};

export default History; 