import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group active:scale-95';
  
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600',
    secondary: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const shimmerClasses = `
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]
    before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
    hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-300
  `;
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${shimmerClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;