import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 2rem;
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

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${colors.shadow.medium};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const TextContent = styled.div`
  color: ${colors.text.primary};
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${colors.primary.main};
`;

const Message = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1.5rem;
    color: ${colors.text.primary};
  }
`;

const Signature = styled.div`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 600;
  
  .position {
    font-size: 1rem;
    color: ${colors.text.secondary};
    margin-bottom: 0.5rem;
  }
  
  .name {
    color: ${colors.text.primary};
    font-size: 1.3rem;
  }
`;

const GreetingComponent = () => {
  return (
    <Container>
      <Section>
        <Title>인사말</Title>
        <ContentWrapper>
          <ImageWrapper>
            <img src="/images/ceo.jpg" alt="CEO" />
          </ImageWrapper>
          <TextContent>
            <Greeting>
              "혁신적인 기술과 신뢰로 미래를 창조하는 기업이 되겠습니다"
            </Greeting>
            <Message>
              <p>
                안녕하십니까, 저희 홈페이지를 방문해 주셔서 감사합니다.
              </p>
              <p>
                당사는 설립 이래 고객의 신뢰를 바탕으로 지속적인 기술 혁신과
                품질 향상을 통해 성장해 왔습니다. 첨단 기술력과 풍부한 경험을
                바탕으로 고객의 다양한 요구에 부응하며, 글로벌 시장에서
                경쟁력을 갖춘 기업으로 발전하고 있습니다.
              </p>
              <p>
                앞으로도 끊임없는 연구개발과 품질 혁신을 통해 고객 만족을
                실현하고, 사회적 책임을 다하는 기업이 되도록 최선을
                다하겠습니다.
              </p>
            </Message>
            <Signature>
              <div className="position">대표이사</div>
              <div className="name">홍 길 동</div>
            </Signature>
          </TextContent>
        </ContentWrapper>
      </Section>
    </Container>
  );
};

export default GreetingComponent; 