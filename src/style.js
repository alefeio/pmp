import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Content = styled.section`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary};
`;