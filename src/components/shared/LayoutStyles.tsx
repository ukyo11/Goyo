import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BaseContainer = styled.div`
  min-height: 100vh;
  background: var(--background-light);
  color: var(--text-dark);
`;

interface PageHeaderProps {
  bgImage?: string;
}

export const PageHeader = styled.div<PageHeaderProps>`
  background: linear-gradient(rgba(145, 92, 179, 0.95), rgba(122, 78, 152, 0.98)),
              url('${props => props.bgImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80'}') center/cover;
  padding: 6rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #915cb3, #a76ecc);
  }
`;

export const Title = styled(motion.h1)`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.5px;
`;

export const Subtitle = styled(motion.p)`
  color: #ffffff;
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  margin-top: -2rem;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(to right, #915cb3, #a76ecc);
    border-radius: 2px;
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    color: #000000;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: -0.3px;
  }

  h3 {
    color: #111111;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: #222222;
    font-size: 1.1rem;
    line-height: 1.7;
    font-weight: 500;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-color: #0042a9;
  }

  h3 {
    color: #000000;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: #222222;
    font-size: 1.05rem;
    line-height: 1.6;
  }
`; 