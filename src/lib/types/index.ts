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

export type IItems = {
  name: string;
  icon: string;
  active?: boolean;
};
export type ICard = {
  title: string;
  icon: string;
  figure: number;
};

export type IUserData = {
  user_count: number;
  active_users_count: number;
  users_loan_count: number;
  users_with_savings_count: number;
}

