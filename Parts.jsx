import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Parts = () => {
  const parts = [
    {
      id: 1,
      category: "엔진 부품",
      description: "고품질 자동차 엔진 부품",
      items: ["실린더", "피스톤", "크랭크샤프트", "밸브"],
      image: "/images/engine-parts.jpg"
    },
    {
      id: 2,
      category: "차체 부품",
      description: "차체 관련 각종 부품",
      items: ["범퍼", "도어", "본넷", "트렁크"],
      image: "/images/body-parts.jpg"
    },
    // 추가 부품 데이터...
  ];

  return (
    <PartsWrapper>
      <ContentContainer>
        <TitleSection>
          <MainTitle>취급 부품/파트</MainTitle>
        <SubTitle>Processed Parts</SubTitle>
        </TitleSection>

      <PartsGrid>
          {parts.map((part) => (
            <PartCard
              key={part.id}
              as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
              <ImageContainer>
                <PartImage src={part.image} alt={part.category} />
              </ImageContainer>
              <PartInfo>
                <CategoryTitle>{part.category}</CategoryTitle>
                <Description>{part.description}</Description>
                <ItemListTitle>주요 품목</ItemListTitle>
                <ItemList>
                  {part.items.map((item, index) => (
                    <ItemTag key={index}>{item}</ItemTag>
                  ))}
                </ItemList>
              </PartInfo>
            </PartCard>
        ))}
      </PartsGrid>
      </ContentContainer>
    </PartsWrapper>
  );
};

const PartsWrapper = styled.section`
  width: 100%;
  background-color: #f8f9fa;
  padding: 80px 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const MainTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #025ABF;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #025ABF;
  font-weight: 400;
`;

const PartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const PartCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.3));
  }
`;

const PartImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PartCard}:hover & {
    transform: scale(1.05);
  }
`;

const PartInfo = styled.div`
  padding: 25px;
  background: #fff;
`;

const CategoryTitle = styled.h3`
  font-size: 24px;
  color: #025ABF;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ItemListTitle = styled.h4`
  font-size: 18px;
  color: #025ABF;
  font-weight: 500;
  margin-bottom: 12px;
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ItemTag = styled.span`
  background: #E8F1FD;
  color: #025ABF;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid #D1E3FB;

  &:hover {
    background: #D1E3FB;
    transform: translateY(-2px);
  }
`;

export default Parts;