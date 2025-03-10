import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMicrochip, FaCogs, FaWrench, FaIndustry } from 'react-icons/fa';

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
`;

const Description = styled.p`
  color: #e0e7ff;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 3rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(79, 172, 254, 0.1);
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 2rem;
    color: #4facfe;
  }

  h3 {
    color: #7dd3fc;
    font-size: 1.2rem;
  }
`;

const PartsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PartItem = styled(motion.li)`
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(79, 172, 254, 0.05);

  h4 {
    color: #7dd3fc;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #e0e7ff;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const ImageCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1;
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4facfe;
    font-size: 2rem;
  }
`;

const Parts = () => {
  const categories = [
    {
      icon: <FaMicrochip />,
      title: "Chamber Components",
      parts: [
        {
          name: "Chamber Liner",
          description: "고순도 알루미늄 소재의 챔버 라이너",
          specs: "6061-T6 / 7075-T6"
        },
        {
          name: "Shower Head",
          description: "균일한 가스 분사를 위한 샤워 헤드",
          specs: "SUS316L"
        },
        {
          name: "Focus Ring",
          description: "플라즈마 집중용 포커스 링",
          specs: "Quartz / SiC"
        }
      ]
    },
    {
      icon: <FaCogs />,
      title: "Gas Delivery Parts",
      parts: [
        {
          name: "Mass Flow Controller",
          description: "정밀한 가스 유량 제어",
          specs: "최대 유량: 1000 sccm"
        },
        {
          name: "Gas Filter",
          description: "고순도 가스 필터링",
          specs: "0.003μm 필터링"
        },
        {
          name: "Valve Block",
          description: "통합형 밸브 블록",
          specs: "SUS316L"
        }
      ]
    },
    {
      icon: <FaWrench />,
      title: "Mechanical Parts",
      parts: [
        {
          name: "Robot Arm Parts",
          description: "웨이퍼 이송용 로봇 부품",
          specs: "Al6061 / SUS304"
        },
        {
          name: "Alignment Stage",
          description: "정밀 얼라인먼트 스테이지",
          specs: "정밀도: ±0.01mm"
        },
        {
          name: "Vacuum Parts",
          description: "진공 시스템 부품",
          specs: "ISO-K / CF 플랜지"
        }
      ]
    }
  ];

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Title>취급 부품/파트</Title>
        <Description>
          반도체 및 디스플레이 장비의 핵심 부품을 제작하고 공급합니다.
          최고 품질의 소재와 정밀 가공 기술로 신뢰성 높은 제품을 제공합니다.
        </Description>

        <CategoryGrid>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CategoryHeader>
                {category.icon}
                <h3>{category.title}</h3>
              </CategoryHeader>
              <PartsList>
                {category.parts.map((part, partIndex) => (
                  <PartItem
                    key={partIndex}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4>{part.name}</h4>
                    <p>{part.description}</p>
                    <p>사양: {part.specs}</p>
                  </PartItem>
                ))}
              </PartsList>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </Section>

      <Section>
        <Title>제품 갤러리</Title>
        <ImageGrid>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ImageCard
              key={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="image-placeholder">
                <FaIndustry />
              </div>
            </ImageCard>
          ))}
        </ImageGrid>
      </Section>
    </Container>
  );
};

export default Parts; 