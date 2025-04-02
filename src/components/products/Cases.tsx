import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;


const SectionTitle = styled.h2`
  color: ${colors.text.primary};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;


const Description = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px; /* Reduced gap */
  width: 100%;
  max-width: 800px; /* Reduced max-width */
  height: 600px; /* Adjust as needed */
  padding: 10px; /* Added padding */
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${colors.background.card}; /* Use card background color */
  padding: 10px 0; /* Added vertical padding */
  
  &:nth-child(1), &:nth-child(2) {
    grid-row: 1;
    height: 200px; /* Adjusted height */
  }

  &:nth-child(3), &:nth-child(4) {
    grid-row: 2;
    height: 400px; /* Adjusted height */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed to contain */
  display: block;
`;

const Cases = () => {
  const imagePath = process.env.NODE_ENV === 'production' ? '/goyo-web' : '';
  const images = [
    { src: `${imagePath}/images/cases/cases1.png`, alt: 'Case 1' },
    { src: `${imagePath}/images/cases/cases2.png`, alt: 'Case 2' },
    { src: `${imagePath}/images/cases/cases3.png`, alt: 'Case 3' },
    { src: `${imagePath}/images/cases/cases4.png`, alt: 'Case 4' },
  ];

  return (
    <Container>
      <SectionTitle>설비 조립</SectionTitle>
      <Description>
      고객의 요구사항에 맞춘 최적의 솔루션을 제공합니다. 다양한 제작 경험을 바탕으로 신뢰성 높은 장비를 제작합니다.
        </Description>
      <ImageGrid>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image.src} alt={image.alt} />
          </ImageContainer>
        ))}
      </ImageGrid>
    </Container>
  );
};

export default Cases;
