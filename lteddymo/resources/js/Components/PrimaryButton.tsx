import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`btn btn-primary text-uppercase fw-semibold ${disabled ? 'disabled opacity-75' : ''} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

