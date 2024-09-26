"use client"; // Adiciona esta linha para tornar o componente um Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Usando next/navigation
import "../../styles/globals.css";
import { poppins } from '@/fonts/fonts';

const Finalizado = () => {
  const router = useRouter(); // Inicializando useRouter

  const handleButtonClick = () => {
    router.push('./home'); // Direciona para a rota da Home
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img src="./img/logo.png" alt="Logo" className="mb-4 w-[210px] h-[180px]" />
  
      <h1 className="text-3xl font-bold mb-4 mt-[20vh] text-[--azulprincipal]">Obrigado por se cadastrar!</h1>

      <div className="w-3/4 mx-auto text-center">
  <h1 className="text-[2vh] font-normal mb-4 text-[--cinza]">
    Estamos felizes em tê-lo conosco. Sua saúde e bem-estar são nossa prioridade, e estamos aqui para oferecer suporte em sua jornada de telemedicina. Fique à vontade para explorar nossos serviços e não hesite em nos contatar caso tenha alguma dúvida.
  </h1>
</div>
  
      <div>
        <button 
          onClick={handleButtonClick} // Adicionando o manipulador de clique
          className="bg-[--azulprincipal] text-white text-xl rounded-full w-[420px] h-[72px] flex items-center justify-center hover:bg-[--azulescuro] mt-16"
        >
          Feito
        </button>
      </div>
    </div>
  );
};

export default Finalizado;