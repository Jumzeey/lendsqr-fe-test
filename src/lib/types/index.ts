// types.ts
import { InputHTMLAttributes } from 'react';

export type IInputPropType = InputHTMLAttributes<HTMLInputElement> & {
  // Placeholder text for the input field
  placeholder?: string;
  suffix?: React.ReactNode;
};
