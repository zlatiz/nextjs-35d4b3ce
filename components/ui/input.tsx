"use client";

import React from 'react';

interface InputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Input({ id, name, placeholder, value, onChange }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className="w-full p-3 rounded-md bg-surface text-foreground border border-borderColor"
    />
  );
}
