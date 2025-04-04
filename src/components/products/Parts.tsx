import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';

// 임시 데이터 (실제 데이터는 API 호출 등으로 가져와야 함)
const brandParts = [
  {
    brand: 'CKD',
    logo: '/images/parts/logo/ckd.png',
    categories: [
      {
        name: '공기압 제어기기',
        products: [
          { name: '공기압 3*5포트 밸브', image: '/images/parts/products/ckd1.png' },
          { name: '직동식 3포트 밸브', image: '/images/parts/products/ckd2.png' },
        ],
      },
      {
        name: '정밀 시스템 기기',
        products: [
          { name: '압력 밸브', image: '/images/parts/products/ckd3.png' },
          { name: '집적화 가스 공급 시스템', image: '/images/parts/products/ckd4.png' },
          { name: '진공 압력 비례 제어 시스템', image: '/images/parts/products/ckd5.png' },
        ],
      },
      {
        name: '유체 제어기기',
        products: [
          { name: '직동식 2*3포트 밸브', image: '/images/parts/products/ckd6.png' },
          { name: '수용 기기', image: '/images/parts/products/ckd7.png' },
          { name: '생명 과학 기기', image: '/images/parts/products/ckd8.png' },
        ],
      },
      {
        name: '생력 기기',
        products: [
          { name: '인덱스 유닛', image: '/images/parts/products/ckd9.png' },
          { name: '다이렉트 드라이브 액추에이터', image: '/images/parts/products/ckd10.png' },
          { name: 'P&P유닛', image: '/images/parts/products/ckd11.png' },
        ],
      },
    ],
  },
  {
    brand: 'COBETTER',
    logo: '/images/parts/logo/cobetter.png',
    categories: [
      {
        name: 'Filtration & Purification For Semiconductor',
        products: [
          { name: 'Wet Chemical', image: '/images/parts/products/cobetter1.png' },
          { name: 'Lithography', image: '/images/parts/products/cobetter2.png' },
          { name: 'CMP Slurry', image: '/images/parts/products/cobetter3.png' },
          { name: 'Gas POU Filtration & Purification & Diffusion Solutions', image: '/images/parts/products/cobetter4.png' },
          { name: 'Plating Solutions', image: '/images/parts/products/cobetter5.png' },
          { name: 'AMC Solutions', image: '/images/parts/products/cobetter6.png' },
        ],
      },
    ],
  },
  {
    brand: 'Bronkhorst',
    logo: '/images/parts/logo/bronkhorst.png',
    categories: [
      {
        name: 'Mass Flow Meters/Controllers',
        products: [
          { name: 'GAS 용 질량유량계 MFC', image: '/images/parts/products/bronkhorst1.png' },
          { name: 'LIQUID 용 질량유량계 MFC', image: '/images/parts/products/bronkhorst2.png' },
          { name: 'PRESSURE METTER', image: '/images/parts/products/bronkhorst3.png' },
          { name: 'Vapor Delivery System', image: '/images/parts/products/bronkhorst4.png' },
          { name: 'Cori meter / Controller', image: '/images/parts/products/bronkhorst5.png' },
          { name: '주변기기', image: '/images/parts/products/bronkhorst6.png' },
        ],
      },
    ],
  },
  {
    brand: 'TPC',
    logo: '/images/parts/logo/tpc.png',
    categories: [
      {
        name: '공기압 기기',
        products: [
          { name: '구동 기기(실린더)', image: '/images/parts/products/tpc1.png' },
          { name: '방향제어기기(밸브류)', image: '/images/parts/products/tpc2.png' },
          { name: '공기압 보조 기기', image: '/images/parts/products/tpc3.png' },
          { name: '진공용 기기', image: '/images/parts/products/tpc4.png' },
        ],
      },
    ],
  },

  {
    brand: 'PMI',
    logo: '/images/parts/logo/pmi.png',
    categories: [
      {
        name: '액츄레이터',
        products: [
          { name: 'KM 시리즈', image: '/images/parts/products/pmi1.png' },
          { name: 'SKM 스틸 볼 체인식', image: '/images/parts/products/pmi2.png' },
          { name: '엑츄에이터 CKM 클린타입 시리즈', image: '/images/parts/products/pmi3.png' },
        ],
      },
       {
        name: '볼스크류',
        products: [
          { name: '내부 순환 시리즈', image: '/images/parts/products/pmi4.png' },
          { name: '엔드 플러그 시리즈', image: '/images/parts/products/pmi5.png' },
          { name: '외부 순환 시리즈', image: '/images/parts/products/pmi6.png' },
          { name: '하이리드 볼스크류', image: '/images/parts/products/pmi7.png' },
          { name: '저소음형', image: '/images/parts/products/pmi8.png' },
          { name: '엔드 캡 시리즈', image: '/images/parts/products/pmi9.png' },
          { name: '고부하 시리즈', image: '/images/parts/products/pmi10.png' },
          { name: '미니 시리즈', image: '/images/parts/products/pmi11.png' },
        ],
      },
    ],
  },
  {
    brand: '삼원액트',
    logo: '/images/parts/logo/samwon.png',
    categories: [
      {
        name: 'IOLINK',
        products: [
          { name: 'IOLINK', image: '/images/parts/products/samwon_image1.png' },
        ],
      },
       {
        name: 'IONET',
        products: [
          { name: 'IONET', image: '/images/parts/products/samwon_image2.png' },
        ],
      },
    ],
  },
   {
    brand: 'Parker',
    logo: '/images/parts/logo/parker.png',
    categories: [
      {
        name: '파카 제품',
        products: [
          { name: 'Regulator', image: '/images/parts/products/parker1.png' },
          { name: 'Air / Manual Valve', image: '/images/parts/products/parker2.png' },
           { name: 'Check Valve', image: '/images/parts/products/parker3.png' },
        ],
      },
    ],
  },
   
    
  
   
  
   {
    brand: 'DK-LOK',
    logo: '/images/parts/logo/idk-lok.png',
    categories: [
      {
        name: '',
        products: [
          { name: 'Fittings', image: '/images/parts/products/dk-lok1.png' },
          { name: 'Valves', image: '/images/parts/products/dk-lok2.png' },
          { name: 'Regulators', image: '/images/parts/products/dk-lok3.png' },
          { name: 'IGS', image: '/images/parts/products/dk-lok4.png' },
        ],
      },       
    ],
  },
  {
    brand: 'IKO',
    logo: '/images/parts/logo/iko.png',
    categories: [
      {
        name: 'BEARINGS',
        products: [
          { name: '', image: '/images/parts/products/iko1.png' },
        ],
      },
      {
        name: 'POSITIONING TABLES',
        products: [
          { name: '', image: '/images/parts/products/iko2.png' },
        ],
      },
      {
        name: '직동시리즈',
        products: [
          { name: '', image: '/images/parts/products/iko3.png' },
          { name: '', image: '/images/parts/products/iko4.png' },
        ],
      },
    ],
  },
  {
    brand: 'SPG',
    logo: '/images/parts/logo/spg.png',
    categories: [
      {
        name: 'ROBOT REDUCER',
        products: [
          { name: '', image: '/images/parts/products/spg1.png' },
          { name: '', image: '/images/parts/products/spg2.png' },          
        ],
      },
      {
        name: 'PLANETARY GEARHEAD',
        products: [
          { name: '', image: '/images/parts/products/spg3.png' },
          { name: '', image: '/images/parts/products/spg4.png' },          
        ],
      },
      {
        name: 'MOTOR',
        products: [
          { name: '', image: '/images/parts/products/spg5.png' },
          { name: '', image: '/images/parts/products/spg6.png' },     
          { name: '', image: '/images/parts/products/spg7.png' },      
        ],
      },
      {
        name: 'GEAR HEAD',
        products: [
          { name: '', image: '/images/parts/products/spg8.png' },
          { name: '', image: '/images/parts/products/spg9.png' },     
          { name: '', image: '/images/parts/products/spg10.png' },      
        ],
      },
    ],
  },
  {
    brand: 'GASTRON',
    logo: '/images/parts/logo/gastron.png',
    categories: [
      {
        name: '가스트론 제품',
        products: [
          { name: '방폭형 유니버설 가스감지기 G-Finder™ Universal B1', image: '/images/parts/products/gastron1.png' },
          { name: '방폭형 유니버설 무선 가스감지기 G-Finder™ Universal W1', image: '/images/parts/products/gastron2.png' },
          { name: '방폭형 흡입식 가스감지기 GTD-5100F', image: '/images/parts/products/gastron3.png' },
          { name: '비방폭형 흡입식 가스감지기 GTD-5000', image: '/images/parts/products/gastron4.png' },
          { name: '방폭형 적외선 가스감지기 GIR-3000', image: '/images/parts/products/gastron5.png' },
          { name: '인텔리전트형 가연성 가스감지기 GTD-3000Ex', image: '/images/parts/products/gastron6.png' },
        ],
      },
    ],
  },
];

const Container = styled.div`
  padding: 0.5rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
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

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid ${colors.border.main};
  padding-bottom: 2rem;

  &:last-child {
    border-bottom: none;
  }
`;

const Brandlogo = styled.img`
  width: 150px;
  margin-bottom: 1rem;
`;

const CategoryContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${colors.background.card};
  box-shadow: 0 4px 12px ${colors.shadow.light};
  width: 100%;
`;

const CategoryTitle = styled.h3`
  color: ${colors.primary.main};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  /* 모바일 화면에서 한 줄에 하나씩 나오도록 설정 */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductCard = styled(motion.div)`
  /* 모바일 화면에서 width 100%로 변경 */
  width: calc(33.33% - 1rem);
  @media (max-width: 768px) {
    width: 100%;
  }
  background: ${colors.background.card};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 1px solid ${colors.border.main};
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px ${colors.shadow.medium};
    border-color: ${colors.primary.main};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.p`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  text-align: center;
`;

const TopDivider = styled.hr`
  border: 0;
  height: 2px;
  background-color: ${colors.border.main};
  margin: 3rem 0; /* 위아래 여백 추가 */
`;

const ProductParts = () => {
  const imagePath = process.env.NODE_ENV === 'production' ? '/goyo-web' : '';

  return (
    <Container>
      <Section>
        <SectionTitle>취급 부품/파트</SectionTitle>
        <Description>
          다양한 산업 분야에 적용되는 고품질 부품과 파트를 제공합니다.
        </Description>
        <TopDivider /> {/* 구분선 추가 */}
        {brandParts.map((brand, index) => (
          <BrandContainer key={brand.brand}>
            <Brandlogo src={`${imagePath}${brand.logo}`} alt={brand.brand} />
            {brand.categories.map((category) => (
              <CategoryContainer key={category.name}>
                <CategoryTitle>{category.name}</CategoryTitle>
                <ProductGrid>
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductImage src={`${imagePath}${product.image}`} alt={product.name} />
                      <ProductName>{product.name}</ProductName>
                    </ProductCard>
                  ))}
                </ProductGrid>
              </CategoryContainer>
            ))}
          </BrandContainer>
        ))}
      </Section>
    </Container>
  );
};

export default ProductParts;
