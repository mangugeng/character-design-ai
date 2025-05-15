import React from 'react';

interface ImageButtonProps {
  gambar: string;
  label: string;
  terpilih: boolean;
  onClick: () => void;
}

export const ImageButton: React.FC<ImageButtonProps> = ({
  gambar,
  label,
  terpilih,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center p-2 rounded-lg border-2 ${
        terpilih
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
      }`}
    >
      <img
        src={gambar}
        alt={label}
        className="w-24 h-24 object-cover rounded-md mb-2"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </button>
  );
}; 