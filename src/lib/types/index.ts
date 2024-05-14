// types.ts
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export type IInputPropType = InputHTMLAttributes<HTMLInputElement> & {
  // Placeholder text for the input field
  placeholder?: string;
  suffix?: React.ReactNode;
  eventType?: keyof React.DOMAttributes<HTMLInputElement>;
};

export type IButtonPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'submit' | 'reset' | 'button';
};
