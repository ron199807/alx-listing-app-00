export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  onClick?: () => void;
}