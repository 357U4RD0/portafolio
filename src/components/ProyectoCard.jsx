import React from 'react';

const ProyectoCard = ({ imagen, titulo, descripcion, tecnologias, link }) => {
  return (
    <div className="bg-black border-4 border-white shadow-[8px_8px_0px_#00ff00] p-4 w-72 text-white font-press hover:shadow-[4px_4px_0px_#00ff00] transition-all duration-100">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 object-cover mb-4 image-pixel"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#39ff14] text-black text-center py-2 mb-2 border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-md transition"
      >
        {titulo}
      </a>
      <p className="text-sm mb-1">{descripcion}</p>
      <p className="text-xs text-[#39ff14]">{tecnologias}</p>
    </div>
  );
};

export default ProyectoCard;