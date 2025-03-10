import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendar, FaEye } from 'react-icons/fa';

const Container = styled(motion.div)`
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 1.8rem;
  }
`;

const NoticeList = styled.div`
  display: grid;
  gap: 1rem;
`;

const NoticeItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(79, 172, 254, 0.1);
  cursor: pointer;

  &:hover {
    border-color: #4facfe;
  }
`;

const NoticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const NoticeTitle = styled.h3`
  color: #7dd3fc;
  font-size: 1.2rem;
`;

const NoticeDate = styled.span`
  color: #e0e7ff;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NoticeContent = styled.p`
  color: #e0e7ff;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const NoticeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e0e7ff;
  font-size: 0.9rem;
`;

const ViewCount = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled(motion.button)<{ active?: boolean }>`
  background: ${props => props.active ? '#4facfe' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active ? '#000924' : '#e0e7ff'};
  border: 1px solid ${props => props.active ? '#4facfe' : 'rgba(79, 172, 254, 0.1)'};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.active ? '#4facfe' : 'rgba(79, 172, 254, 0.2)'};
  }
`;

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: "2024년 상반기 신규 설비 도입 안내",
      date: "2024-03-15",
      content: "당사는 생산성 향상을 위해 최신 설비를 도입할 예정입니다. 자세한 내용은 공지사항을 확인해 주시기 바랍니다.",
      views: 245,
      category: "설비"
    },
    {
      id: 2,
      title: "ISO 9001:2015 인증 갱신 완료",
      date: "2024-03-10",
      content: "당사는 품질경영시스템 국제표준 인증을 성공적으로 갱신하였습니다.",
      views: 189,
      category: "인증"
    },
    {
      id: 3,
      title: "2024년 협력업체 상생협력 프로그램 안내",
      date: "2024-03-05",
      content: "협력업체와의 동반성장을 위한 2024년 상생협력 프로그램을 안내드립니다.",
      views: 167,
      category: "협력"
    },
    {
      id: 4,
      title: "신규 클린룸 시설 완공 및 가동 개시",
      date: "2024-02-28",
      content: "최신 클린룸 시설이 완공되어 본격적인 가동을 시작하였습니다.",
      views: 298,
      category: "시설"
    },
    {
      id: 5,
      title: "2024년 정기 고객만족도 조사 실시",
      date: "2024-02-20",
      content: "고객님들의 소중한 의견을 듣고자 정기 고객만족도 조사를 실시합니다.",
      views: 156,
      category: "고객"
    }
  ];

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Title>
          <FaBullhorn />
          공지사항
        </Title>
        <NoticeList>
          {notices.map((notice) => (
            <NoticeItem
              key={notice.id}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NoticeHeader>
                <NoticeTitle>{notice.title}</NoticeTitle>
                <NoticeDate>
                  <FaCalendar />
                  {notice.date}
                </NoticeDate>
              </NoticeHeader>
              <NoticeContent>{notice.content}</NoticeContent>
              <NoticeFooter>
                <span>#{notice.category}</span>
                <ViewCount>
                  <FaEye />
                  {notice.views}
                </ViewCount>
              </NoticeFooter>
            </NoticeItem>
          ))}
        </NoticeList>
        <Pagination>
          {[1, 2, 3].map((page) => (
            <PageButton
              key={page}
              active={page === 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </PageButton>
          ))}
        </Pagination>
      </Section>
    </Container>
  );
};

export default Notice; 