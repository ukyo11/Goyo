// 제품소개 메뉴의 컨테이너 스타일 
const productContainer = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '50px 20px',
}

// 제품 그리드 레이아웃
const productGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  marginTop: '40px'
}

// 제품 카드 스타일
const productCard = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  padding: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}

// 제품 이미지 스타일
const productImage = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '5px',
  marginBottom: '15px'
}

// 제품 타이틀 스타일
const productTitle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#333',
  marginBottom: '10px'
}

// 제품 설명 스타일
const productDescription = {
  fontSize: '0.9rem',
  color: '#666',
  lineHeight: '1.6'
}
