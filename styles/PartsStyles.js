import styled from 'styled-components';

export const PartsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #fff;

  .section-title {
    text-align: center;
    font-size: 2.2rem;
    color: #333;
    color: #1a1a1a;
    font-size: 36px;
    color: #025ABF;
    font-weight: 700;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const PartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

export const PartCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const PartImage = styled.img`
export const PartImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
export const PartTitle = styled.h3`
  font-size: 24px;
  color: #025ABF;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const PartContent = styled.div`
  padding: 20px;
`;

export const PartTitle = styled.h3`
  font-size: 1.4rem;
  color: #1a1a1a;
  margin-bottom: 10px;
`;

export const PartDescription = styled.p`
  font-size: 1rem;
  color: #666;
export const PartDescription = styled.p`
  font-size: 16px;
  color: #025ABF;
  line-height: 1.6;
  margin-bottom: 15px;
  font-weight: 400;
  color: #1a1a1a;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  background: #f0f0f0;
  color: #555;
  background: #E8F1FD;
  color: #025ABF;
  font-size: 1.1rem;
  color: #404040;
  font-size: 0.9rem;
  transition: background 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  font-weight: 400;
`;
    background: #e0e0e0;
    background: #D1E3FB;
export const CategoryTag = styled.span`
  background: #f0f0f0;
  color: #555;
// 반응형 스타일
export const SubTitle = styled.span`
  display: block;
  font-size: 18px;
  color: #025ABF;
  font-weight: 400;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
  border-radius: 20px;
  tablet: '@media (max-width: 768px)',
  mobile: '@media (max-width: 480px)',
};
  font-size: 0.9rem;
  transition: background 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

// 반응형 스타일
export const CategoryTag = styled.span`
  background: #f5f5f5;
  color: #333333;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
    color: #1a1a1a;
  }
`;
export const mediaQueries = {
  tablet: '@media (max-width: 768px)',
  mobile: '@media (max-width: 480px)',
};
