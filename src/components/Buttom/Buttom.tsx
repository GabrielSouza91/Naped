import './ButtomStyles.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
}

export function Button({ label, isLoading, ...rest }: ButtonProps) {
  return (
    <button disabled={isLoading} {...rest}>
      {label}
    </button>
  );
}
