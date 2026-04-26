import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uni Saúde | Clínica Médica em Juiz de Fora',
  description: 'Cuidado humanizado e tecnologia de ponta para a sua saúde em Juiz de Fora.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
