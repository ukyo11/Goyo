import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background.main};
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background.card};
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  display: block;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
  
  &:first-child {
    background-color: #f2f2f2;
  }
`;

const Processing = () => {
  const images = [
    { src: '/goyo-web/images/processing/p1.png', alt: 'Processing 1', no: '5호기 (고속)', maker: '현대위아', spec: 'RPM : 40,000', qty: '10 대' },
    { src: '/goyo-web/images/processing/p2.png', alt: 'Processing 2', no: '5.5호기', maker: '현대위아', spec: '1300 x 570', qty: '5 대' },
    { src: '/goyo-web/images/processing/p3.png', alt: 'Processing 3', no: '6.5호기', maker: '현대위아', spec: '1500 x 660', qty: '2 대' },
    { src: '/goyo-web/images/processing/p4.png', alt: 'Processing 4', no: '7.5호기', maker: '현대위아', spec: '1650 x 760', qty: '1 대' },
    { src: '', alt: 'Processing 5', no: '', maker: '', spec: '', qty: '' },
    { src: '', alt: 'Processing 6', no: '범용 선반', maker: '현대위아', spec: '480', qty: '3 대' },
    { src: '', alt: 'Processing 7', no: '범용 선반', maker: '현대위아', spec: '560', qty: '2 대' },
    { src: '', alt: 'Processing 8', no: '레이저 각인기', maker: '쏠레이저', spec: '', qty: '1 대' },
  ];

  const allImages = Array.from({ length: 8 }, (_, i) => images[i] || {});

  return (
    <Container>
      <SectionTitle>가공 설비 현황</SectionTitle>
      <Description>
      최첨단 가공 설비와 전문 기술력으로 고정밀 부품 가공을 실현합니다.
        </Description>
      <ImageGrid>
        {allImages.map((image, index) => (
          <ImageContainer
            key={index}
            {...image}
            style={
              !(image.no || image.maker || image.qty)
                ? { border: 'none', boxShadow: 'none' }
                : {}
            }
          >
            {image.src && <Image src={image.src} alt={image.alt} />}
            <Table>
              <tbody>
                {image.no && image.maker && image.qty &&(
                  <>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      {image.no}
                    </TableCell>
                  </TableRow>
             
                  <TableRow>
                    <TableCell>Maker</TableCell>
                    <TableCell>{image.maker}</TableCell>
                  </TableRow>
            
                  <TableRow>
                    <TableCell>Spec</TableCell>
                    <TableCell>{image.spec}</TableCell>
                  </TableRow>
           
                  <TableRow>
                    <TableCell>Qty</TableCell>
                    <TableCell>{image.qty}</TableCell>
                  </TableRow>
                  </>
                )}
              </tbody>
            </Table>
          </ImageContainer>
        ))}
      </ImageGrid>
    </Container>
  );
};

export default Processing;
