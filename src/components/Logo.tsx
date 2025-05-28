import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 48 }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="rounded-full bg-accent p-2">
        {/* Substitua 'path/to/your/image' pelo caminho da sua imagem */}
        <img 
          src="/src/assets/logo.png" 
          alt="Logo"
          style={{ width: `${size * 0.6}px`, height: `${size * 0.6}px` }}
          className="text-white"
        />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
    </div>
  );
};

export default Logo;