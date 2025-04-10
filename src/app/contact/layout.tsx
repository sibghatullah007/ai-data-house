// app/contact/layout.tsx
import React from 'react';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Header for the Contact Page */}
      <header className="bg-white py-4 px-6 border-b border-gray-300 flex justify-center items-center sticky top-0">
        <h1 className="text-2xl font-bold text-green-700">
          AI <b>Data</b> House
        </h1>
      </header>

      {/* The children will render the specific content of the /contact page */}
      {children}
    </div>
  );
}
