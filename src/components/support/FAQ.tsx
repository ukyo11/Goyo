import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaChevronDown, FaSearch } from 'react-icons/fa';

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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(79, 172, 254, 0.1);

  svg {
    color: #4facfe;
    margin-right: 1rem;
  }

  input {
    background: none;
    border: none;
    color: #e0e7ff;
    width: 100%;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: rgba(224, 231, 255, 0.5);
    }
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4facfe;
    border-radius: 2px;
  }
`;

const CategoryTab = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? '#4facfe' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active ? '#000924' : '#e0e7ff'};
  border: 1px solid ${props => props.active ? '#4facfe' : 'rgba(79, 172, 254, 0.1)'};
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#4facfe' : 'rgba(79, 172, 254, 0.2)'};
  }
`;

const FAQList = styled.div`
  display: grid;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(79, 172, 254, 0.1);
  overflow: hidden;
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: none;
  border: none;
  color: #7dd3fc;
  font-size: 1.1rem;
  cursor: pointer;
  text-align: left;

  svg {
    transition: transform 0.3s ease;
    color: #4facfe;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: #e0e7ff;
  line-height: 1.6;
`;

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = ["전체", "제품", "서비스", "기술지원", "납기/배송", "결제"];

  const faqs = [
    {
      id: 1,
      category: "제품",
      question: "제품의 품질 보증 기간은 얼마인가요?",
      answer: "당사의 모든 제품은 납품일로부터 1년간 품질을 보증합니다. 단, 소모성 부품이나 사용자 과실로 인한 손상은 보증에서 제외됩니다."
    },
    {
      id: 2,
      category: "서비스",
      question: "긴급 기술 지원은 어떻게 요청하나요?",
      answer: "24시간 긴급 기술 지원 핫라인(1588-XXXX)으로 연락주시면 즉시 대응해 드립니다. 상황에 따라 현장 방문도 가능합니다."
    },
    {
      id: 3,
      category: "기술지원",
      question: "정기 유지보수 서비스는 어떻게 진행되나요?",
      answer: "연간 계약을 통해 분기별 정기 점검 및 유지보수를 제공합니다. 필요한 소모품 교체 및 성능 최적화를 포함합니다."
    },
    {
      id: 4,
      category: "납기/배송",
      question: "일반적인 납기 기간은 얼마나 되나요?",
      answer: "표준 제품의 경우 주문 후 2-3주, 맞춤 제작 제품의 경우 4-6주가 소요됩니다. 긴급 건의 경우 별도 협의가 가능합니다."
    },
    {
      id: 5,
      category: "결제",
      question: "대금 결제 조건은 어떻게 되나요?",
      answer: "기본적으로 계약금 30%, 중도금 40%, 잔금 30%의 조건으로 진행됩니다. 장기 거래처의 경우 협의를 통해 조정 가능합니다."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === "전체"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Title>
          <FaQuestionCircle />
          자주 묻는 질문
        </Title>

        <SearchBar>
          <FaSearch />
          <input type="text" placeholder="질문 검색하기..." />
        </SearchBar>

        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category}
              active={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <FAQList>
          {filteredFaqs.map((faq) => (
            <FAQItem key={faq.id}>
              <Question
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItems.includes(faq.id)}
              >
                {faq.question}
                <FaChevronDown />
              </Question>
              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </Section>
    </Container>
  );
};

export default FAQ; 