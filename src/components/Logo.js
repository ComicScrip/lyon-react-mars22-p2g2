import '../index.css';
import React from 'react';

export default function Logo() {
  return (
    <div className="lettre">
      <div className="recG w-1/3 h-16 bg-red-800 text-3xl">gauche</div>
      <div className="recM w-1/3 h-16bg-blue-900">milieu</div>
      <div className="recD w-1/3 h-16 bg-yellow-800">droite</div>
    </div>
  );
}
