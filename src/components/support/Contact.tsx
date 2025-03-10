import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(79, 172, 254, 0.1);

  svg {
    font-size: 2.5rem;
    color: #4facfe;
    margin-bottom: 1rem;
  }

  h3 {
    color: #7dd3fc;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #e0e7ff;
    line-height: 1.6;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #7dd3fc;
  font-size: 1rem;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.1);
  border-radius: 5px;
  padding: 0.8rem;
  color: #e0e7ff;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #4facfe;
  }
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.1);
  border-radius: 5px;
  padding: 0.8rem;
  color: #e0e7ff;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #4facfe;
  }

  option {
    background: #000924;
  }
`;

const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.1);
  border-radius: 5px;
  padding: 0.8rem;
  color: #e0e7ff;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4facfe;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #4facfe;
  color: #000924;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 200px;
  margin: 2rem auto 0;

  svg {
    font-size: 1.2rem;
  }
`;

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 구현
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Title>
          <FaEnvelope />
          문의하기
        </Title>

        <Grid>
          <ContactCard>
            <FaPhone />
            <h3>전화 문의</h3>
            <p>1588-XXXX</p>
            <p>평일 09:00 - 18:00</p>
          </ContactCard>
          <ContactCard>
            <FaEnvelope />
            <h3>이메일 문의</h3>
            <p>support@goyo.com</p>
            <p>24시간 접수 가능</p>
          </ContactCard>
          <ContactCard>
            <FaMapMarkerAlt />
            <h3>방문 상담</h3>
            <p>경기도 화성시 동탄면</p>
            <p>사전 예약 필수</p>
          </ContactCard>
        </Grid>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>문의 유형</Label>
            <Select required>
              <option value="">선택해주세요</option>
              <option value="product">제품 문의</option>
              <option value="service">서비스 문의</option>
              <option value="technical">기술 지원</option>
              <option value="partnership">제휴 문의</option>
              <option value="other">기타</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>회사명</Label>
            <Input type="text" required placeholder="회사명을 입력해주세요" />
          </FormGroup>

          <FormGroup>
            <Label>담당자명</Label>
            <Input type="text" required placeholder="담당자명을 입력해주세요" />
          </FormGroup>

          <FormGroup>
            <Label>연락처</Label>
            <Input type="tel" required placeholder="연락처를 입력해주세요" />
          </FormGroup>

          <FormGroup>
            <Label>이메일</Label>
            <Input type="email" required placeholder="이메일을 입력해주세요" />
          </FormGroup>

          <FormGroup>
            <Label>문의 내용</Label>
            <Textarea required placeholder="문의하실 내용을 자세히 적어주세요" />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane />
            문의하기
          </SubmitButton>
        </Form>
      </Section>
    </Container>
  );
};

export default Contact; 