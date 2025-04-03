import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { colors } from '../../styles/colors';
import emailjs from 'emailjs-com'; // EmailJS import 추가

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background: ${colors.background.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 2px solid ${colors.border.main};
`;

const Title = styled.h2`
  color: ${colors.text.primary};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${colors.text.primary};
  font-size: 1.1rem;
  font-weight: 600;

  span {
    color: ${colors.primary.main};
    margin-left: 0.25rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 2px solid ${colors.border.main};
  border-radius: 8px;
  font-size: 1.1rem;
  color: ${colors.text.primary};
  background: ${colors.background.main};

  &:focus {
    outline: none;
    border-color: ${colors.primary.main};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 2px solid ${colors.border.main};
  border-radius: 8px;
  font-size: 1.1rem;
  color: ${colors.text.primary};
  background: ${colors.background.main};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.primary.main};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${colors.primary.main};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${colors.primary.dark};
  }
`;

const InfoSection = styled.div`
  display: grid;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: ${colors.background.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow.light};
  border: 2px solid ${colors.border.main};
`;

const InfoTitle = styled.h3`
  color: ${colors.text.primary};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.5rem;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${colors.text.primary};
  font-size: 1.1rem;

  svg {
    color: ${colors.primary.main};
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS 초기화 (본인의 Public Key로 변경)
    emailjs.init("Ablk9BNc5JgOqmUG_");

    // EmailJS 파라미터 (본인의 Service ID, Template ID로 변경)
    const serviceId = "service_m43l6ac";
    const templateId = "template_yaz0r6s";

    // EmailJS에 보낼 파라미터
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('문의가 성공적으로 접수되었습니다!');
      }, (err) => {
        console.log('Failed to send email:', err);
        alert('문의 접수에 실패했습니다. 다시 시도해주세요.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container>
      <FormSection>
        <Title>문의하기</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>이름 <span>*</span></Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>이메일 <span>*</span></Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>연락처</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>제목 <span>*</span></Label>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>문의내용 <span>*</span></Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            <FaPaperPlane />
            문의하기
          </SubmitButton>
        </Form>
      </FormSection>

      <InfoSection>
        <InfoCard>
          <InfoTitle>연락처 정보</InfoTitle>
          <InfoList>
            <InfoItem>
              <FaPhone />
              전화: 031-304-2099
            </InfoItem>
            <InfoItem>
              <FaEnvelope />
              이메일: cblee@higoyo.co.kr
            </InfoItem>
            <InfoItem>
              <FaMapMarkerAlt />
              주소: 경기도 용인시 수지구 포은대로 59번길 37, B410(상현동, 시그니처 광교)
            </InfoItem>
          </InfoList>
        </InfoCard>

        <InfoCard>
          <InfoTitle>상담 시간</InfoTitle>
          <InfoList>
            <InfoItem>
              평일: 09:00 - 18:00
            </InfoItem>
            <InfoItem>
              점심시간: 12:00 - 13:00
            </InfoItem>
            <InfoItem>
              주말 및 공휴일 휴무
            </InfoItem>
          </InfoList>
        </InfoCard>
      </InfoSection>
    </Container>
  );
};

export default Contact;
