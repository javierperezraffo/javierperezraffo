import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <main className={`max-w-4xl w-full mx-auto py-20 px-4 md:px-10 ${className}`}>
      {children}
    </main>
  );
};
