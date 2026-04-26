/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera o site como arquivos estáticos (HTML/CSS/JS puros)
  output: 'export',
  
  // Impede o erro de otimização de imagem no GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;