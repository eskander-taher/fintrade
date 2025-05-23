import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  containerClassName = '',
  id,
  fullWidth = false
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
};

export default Section;