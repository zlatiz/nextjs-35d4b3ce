import type { ReactNode } from 'react';

interface CardProps { children: ReactNode }

export default function Card({ children }: CardProps) {
  return (
    <div className="glass p-4 rounded-md shadow-layered">
      {children}
    </div>
  );
}
