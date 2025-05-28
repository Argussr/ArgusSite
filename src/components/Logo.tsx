import React from 'react';
import Image from 'next/image'; // Importe o componente Image

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 48 }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="rounded-full bg-accent p-2">
        {/* Substitua 'path/to/your/image' pelo caminho da sua imagem */}
        <Image 
          src="assets/logo.png" // Caminho da imagem
          alt="Logo"
          width={size * 0.6} 
          height={size * 0.6}
          className="text-white"
        />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
    </div>
  );
};

export default Logo;