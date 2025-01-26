import { ButtonHTMLAttributes } from 'react';

export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`btn btn-danger text-uppercase fw-semibold ${disabled ? 'disabled opacity-75' : ''} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
