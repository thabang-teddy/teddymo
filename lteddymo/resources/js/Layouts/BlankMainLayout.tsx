import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function BlankMainLayout({ children }: { children: React.ReactNode }) {
  const { auth } = usePage().props;
  return (
    <div className="d-flex flex-column vh-100 vw-100">
      {children}
    </div>
  );
}

