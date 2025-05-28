import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 80 }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="rounded-full bg-accent p-0">
        <img
          src="../assets/logo.png" // Caminho relativo para Vite
          alt="Logo"
          width={size * 1}
          height={size * 1}
          className="text-white"
        />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
    </div>
  );
};

export default Logo;
