import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

// 데이터 타입 정의
interface PartData {
  maker: string;
  logoFile: string;
  products?: string; // 제품 이미지가 없는 경우 products가 없을 수 있음
  imageFiles?: string[];
}

// 데이터를 이미지 유무에 따라 분리
const partsWithImages: PartData[] = [
  { maker: 'CKD', logoFile: 'ckd.png', products: '공기압 제어기기, 유체 제어기기, 정밀 시스템기기, 생력기기', imageFiles: ['ckd_image1.png', 'ckd_image2.png', 'ckd_image3.png'] },
  { maker: 'cobetter', logoFile: 'cobetter.png', products: 'Wet Chemical, Lithography, CMP Slurry', imageFiles: ['cobetter_image1.png', 'cobetter_image2.png'] },
  { maker: 'ATEN', logoFile: 'aten.png', products: 'KVM SWITCH, RACK PDU, USB 컨버터/아답터', imageFiles: ['aten_image1.png', 'aten_image2.png', 'aten_image3.png', 'aten_image4.png', 'aten_image5.png'] },
  { maker: 'Bronkhorst', logoFile: 'bronkhorst.png', products: 'MFC, Pressure meter, Vapor Delivery system', imageFiles: ['bronkhorst_image1.png', 'bronkhorst_image2.png'] },
  { maker: 'TPC', logoFile: 'tpc.png', products: '공기압 기기', imageFiles: ['tpc_image1.png', 'tpc_image2.png', 'tpc_image3.png'] },
  { maker: 'PMI', logoFile: 'pmi.png', products: 'Linear Motion Systems', imageFiles: ['pmi_image1.png', 'pmi_image2.png'] },
  { maker: 'SAMWON ACT(주)', logoFile: 'samwon.png', products: 'IOLINK, QPORT, Ecoflex, FA Harness', imageFiles: ['samwon_image1.png', 'samwon_image2.png'] },
  { maker: 'Parker', logoFile: 'parker.png', products: 'Regulator, Air/Manual Valve, Check Valve', imageFiles: ['parker_image1.png'] },
  { maker: 'DK-LOK', logoFile: 'idk-lok.png', products: 'Fittings, Valve, Regulators, IGS', imageFiles: ['idk-lok_image1.png', 'idk-lok_image2.png'] }, // 파일명 idk-lok 확인
  { maker: 'IKO', logoFile: 'iko.png', products: 'Bearing, Positioning Tables, 직동 시리즈', imageFiles: ['iko_image1.png', 'iko_image2.png', 'iko_image3.png'] },
  { maker: 'SPG', logoFile: 'spg.png', products: 'Robot Reducer, Planetary Gearhead, Motor, Gear Head', imageFiles: ['spg_image1.png', 'spg_image2.png', 'spg_image3.png'] },
];

const partsWithoutImages: PartData[] = [
  { maker: 'GASTRON', logoFile: 'gastron.png' },
  { maker: 'Morgan Advanced Materials', logoFile: 'morgen.png' }, // products 제거
  { maker: 'UE PRECISION SENSORS', logoFile: 'ue.png' }, // products 제거
  { maker: 'GEM-TECH', logoFile: 'gem-tech.png' }, // products 제거
  { maker: 'NIPPON BEARING', logoFile: 'nippon.png' }, // products 제거
  { maker: 'PURERON', logoFile: 'pureron.png' }, // products 제거
];


const Container = styled.div`
  padding: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${colors.text.primary};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 1px solid ${colors.border.main};
`;

const TableHead = styled.thead`
  background-color: ${colors.primary.main};
  color: ${colors.text.white};

  @media (max-width: 768px) {
    display: none; // 작은 화면에서 헤더 숨김
  }
`;

const TableRow = styled.tr`
  &:hover {
    background-color: ${colors.background.highlight};
  }

  @media (max-width: 768px) {
    display: block; // 행을 블록 요소로 변경
    margin-bottom: 1rem;
    border: 1px solid ${colors.border.main};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 6px ${colors.shadow.light};

    &:hover {
      background-color: transparent; // 호버 효과 제거 (카드 스타일)
    }
  }
`;

const TableHeaderCell = styled.th`
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  border: 1px solid ${colors.border.main};

  @media (max-width: 768px) {
    padding: 0.75rem 1rem; // 작은 화면 패딩 조정
  }
`;

const TableCell = styled.td`
  padding: 1rem 1.5rem;
  border: 1px solid ${colors.border.main};
  vertical-align: middle;
  font-size: 1rem;
  color: ${colors.text.primary};

  @media (max-width: 768px) {
    display: block; // 셀을 블록 요소로 변경
    width: 100% !important; // 너비 강제 설정
    text-align: right; // 내용을 오른쪽으로 정렬
    padding-left: 50%; // 라벨 공간 확보
    position: relative;
    border-bottom: 1px solid ${colors.border.main};

    &:last-child {
      border-bottom: none; // 마지막 셀 하단 테두리 제거
    }

    // 가상 요소를 사용하여 라벨 추가
    &::before {
      content: attr(data-label); // data-label 속성 값 사용
      position: absolute;
      left: 1rem;
      width: calc(50% - 2rem); // 라벨 너비 계산
      text-align: left;
      font-weight: bold;
      color: ${colors.primary.main};
    }
  }

  &.maker-cell {
    width: 20%;
    text-align: center;
  }
  &.product-cell {
    width: 40%;
  }
  &.image-cell {
    width: 40%;
    text-align: center;

    @media (max-width: 768px) {
      text-align: right; // 작은 화면에서 정렬 통일
    }
  }
`;

// 로고 이미지 스타일
const LogoImage = styled.img`
  max-height: 50px; // 최대 높이 제한
  max-width: 100%;   // 너비는 셀에 맞춤
  object-fit: contain; // 이미지 비율 유지
`;

// 제품 이미지 래퍼 스타일
const ProductImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; // 이미지가 많으면 다음 줄로
  gap: 0.5rem; // 이미지 간격
  justify-content: center; // 가운데 정렬 (기본)

  @media (max-width: 768px) {
    justify-content: flex-end; // 작은 화면에서는 오른쪽 정렬
  }
`;

// 개별 제품 이미지 스타일
const ProductImage = styled.img`
  height: 60px; // 제품 이미지 높이 조절
  width: auto;
  max-width: 80px; // 최대 너비 제한
  object-fit: contain;
  border: 1px solid ${colors.border.main};
  border-radius: 4px;
  background-color: white; // 이미지 배경 흰색으로
`;

// 이미지가 없을 때 표시할 텍스트 (이제 사용 안 함)
/*
const NoImageText = styled.span`
  font-size: 0.9rem;
  color: ${colors.text.secondary};
  font-style: italic;
  display: inline-block;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    text-align: right;
  }
`;
*/

// 셀 안에 로고들을 가로로 배열하기 위한 그리드 스타일
const LogoGridInCell = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const Parts = () => {
  return (
    <Container>
      <Title>부품판매사업부 - 취급 품목</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Maker</TableHeaderCell>
            <TableHeaderCell>품목</TableHeaderCell>
            <TableHeaderCell>Image</TableHeaderCell>
          </TableRow>
        </TableHead>
        <tbody>
          {/* partsWithImages 사용 및 타입 명시 */}
          {partsWithImages.map((part: PartData, index: number) => (
            <TableRow key={index}>
              <TableCell className="maker-cell" data-label="Maker">
                {part.logoFile ? (
                  <LogoImage src={`/goyo-web/images/maker/Logo/${part.logoFile}`} alt={`${part.maker} 로고`} />
                ) : (
                  <span>{part.maker}</span> // 로고 없으면 텍스트 표시
                )}
              </TableCell>
              {/* products가 없을 수 있으므로 옵셔널 체이닝 사용 */}
              <TableCell className="product-cell" data-label="품목">{part.products ?? ''}</TableCell>
              <TableCell className="image-cell" data-label="Image">
                {/* imageFiles가 없을 수 있으므로 옵셔널 체이닝 사용 */}
                {part.imageFiles && part.imageFiles.length > 0 ? (
                  <ProductImageWrapper>
                    {part.imageFiles.map((imgFile: string, imgIndex: number) => (
                      <ProductImage
                        key={imgIndex}
                        src={`/goyo-web/images/maker/images/${imgFile}`}
                        alt={`${part.maker} 제품 이미지 ${imgIndex + 1}`}
                      />
                    ))}
                  </ProductImageWrapper>
                ) : (
                  ""
                  //<NoImageText>이미지 없음</NoImageText> // 이미지 없으면 텍스트 표시
                )}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} className="image-cell" data-label="로고">
              <LogoGridInCell>
                {partsWithoutImages.map((part: PartData) => (
                  <LogoImage
                    key={part.maker}
                    src={`/goyo-web/images/maker/logo/${part.logoFile}`}
                    alt={`${part.maker} 로고`}
                  />
                ))}
              </LogoGridInCell>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

export default Parts;
