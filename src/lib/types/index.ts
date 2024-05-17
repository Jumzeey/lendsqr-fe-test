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

export type IViewUserDetailsModalProps = {
  userDetails?: IUserDetailsProps;
  onClose: () => void;
};

export type IUserData = {
  user_count: number;
  active_users_count: number;
  users_loan_count: number;
  users_with_savings_count: number;
}
export type IUserInterfaceData = {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}


export type IFilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export type IUserDetailsProps = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
  user_details: {
      first_name: string;
      last_name: string;
      phone_number: string;
      email: string;
      bvn: number;
      gender: string;
      marital_status: string;
      children: string;
      residence: string;
      education_level: string;
      employment_status: string;
      employment_sector: string;
      employment_duration: string;
      office_email: string;
      monthly_income: string;
      loan_payment: number;
      twitter: string;
      facebook: string;
      instagram: string;
      guarantor?: {
        fullName: string;
        phoneNumber: string;
        emailAddress: string;
        relationship: string;
      }
  };
}

export type IPaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}