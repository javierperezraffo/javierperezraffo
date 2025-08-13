"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Javier Perez Raffo
      <div className="flex justify-center mt-2">
        <a href="https://www.linkedin.com/in/javierperezraffo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
      </div>
    </div>
  );
};
