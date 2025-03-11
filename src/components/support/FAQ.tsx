import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: .5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${colors.text.primary};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const CategorySection = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  color: ${colors.text.primary};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${colors.primary.main};
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 2px solid ${colors.border.main};
  border-radius: 12px;
  overflow: hidden;
  background: ${colors.background.card};
  box-shadow: 0 2px 8px ${colors.shadow.light};

  &:hover {
    border-color: ${colors.primary.main};
    box-shadow: 0 4px 12px ${colors.shadow.medium};
  }
`;

const Question = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: ${colors.background.card};
  color: ${colors.text.primary};
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    background: ${colors.background.light};
  }
`;

const QuestionText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
  color: ${colors.primary.main};
  transform: rotate(\${props => (props.isOpen ? '180deg' : '0')});
  transition: transform 0.3s ease;
`;

const Answer = styled(motion.div)`
  padding: 1.5rem;
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  border-top: 1px solid ${colors.border.main};
  background: ${colors.background.light};
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const faqData = {
    general: {
      title: '일반 문의',
      items: [
        {
          id: 'g1',
          question: '영업시간이 어떻게 되나요?',
          answer: '평일 오전 9시부터 오후 6시까지 운영됩니다. 주말 및 공휴일은 휴무입니다.'
        },
        {
          id: 'g2',
          question: '견적 의뢰는 어떻게 하나요?',
          answer: '홈페이지 문의하기 페이지 또는 전화를 통해 견적 의뢰가 가능합니다. 상세한 요구사항을 함께 전달해 주시면 더 정확한 견적 산출이 가능합니다.'
        }
      ]
    },
    technical: {
      title: '기술 문의',
      items: [
        {
          id: 't1',
          question: '품질 보증 기간은 얼마인가요?',
          answer: '제품별로 상이하며, 일반적으로 1년의 품질 보증 기간을 제공합니다. 자세한 사항은 개별 제품의 보증서를 참고해 주세요.'
        },
        {
          id: 't2',
          question: 'A/S 신청은 어떻게 하나요?',
          answer: '전화 또는 홈페이지 문의하기를 통해 A/S 신청이 가능합니다. 제품의 증상과 모델명을 함께 알려주시면 신속한 처리가 가능합니다.'
        }
      ]
    },
    delivery: {
      title: '배송 문의',
      items: [
        {
          id: 'd1',
          question: '배송 소요기간이 얼마나 되나요?',
          answer: '일반 제품의 경우 3-5일, 맞춤 제작 제품의 경우 협의된 제작 기간에 따라 배송이 진행됩니다.'
        },
        {
          id: 'd2',
          question: '해외 배송도 가능한가요?',
          answer: '네, 해외 배송 가능합니다. 국가별로 배송 비용과 소요기간이 다르므로 별도 문의 부탁드립니다.'
        }
      ]
    }
  };

  return (
    <Container>
      <Title>자주 묻는 질문</Title>
      {Object.entries(faqData).map(([category, { title, items }]) => (
        <CategorySection key={category}>
          <CategoryTitle>{title}</CategoryTitle>
          {items.map(item => (
            <FAQItem key={item.id}>
              <Question onClick={() => toggleItem(item.id)}>
                <QuestionText>
                  <FaQuestionCircle color={colors.primary.main} />
                  {item.question}
                </QuestionText>
                <IconWrapper isOpen={openItems[item.id]}>
                  <FaChevronDown />
                </IconWrapper>
              </Question>
              <AnimatePresence>
                {openItems[item.id] && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </CategorySection>
      ))}
    </Container>
  );
};

export default FAQ; 