import { ButtonHTMLAttributes } from 'react';

export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={`btn btn-secondary text-uppercase fw-semibold ${disabled ? 'disabled opacity-75' : ''} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
