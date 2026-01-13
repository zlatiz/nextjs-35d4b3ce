"use client";

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function Button({ children, href, onClick, className }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <a className={`gradient-btn ${className ?? ''}`}>{children}</a>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`gradient-btn ${className ?? ''}`}>
      {children}
    </button>
  );
}
