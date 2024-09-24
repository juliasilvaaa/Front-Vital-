// NavBar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Import das Imagens
import inicioImg from "../../public/img/inicio.png"
import telemedicinaImg from "../../public/img/medico.png"
import agendaImg from "../../public/img/agenda.png"
import historicoImg from "../../public/img/historico.png"
import favoritosImg from "../../public/img/favoritos.png"
import galeriaImg from "../../public/img/galeria.png"



import NavBarCategory from './NavBarCategory';

const NavBar = () => {
    return (
        <div className="bg-principalazul text-white w-64 min-h-screen flex flex-col py-6 px-4">
            {/* Logo Vital+ */}
            <div className="top-0">
                <img className="h-[60px]" src="/img/logo.png" alt="Logo" />
            </div>

            <div className="flex items-center justify-center mt-20">
                {/* Foto de Perfil */}
                <div className="relative h-perfilH w-perfilW">
                    <img src="/img/fundo-azul.png" alt="Fundo" className="absolute w-full object-cover" />
                    <img src="/img/foto-perfil.png" alt="Perfil" className="relative z-10 mx-auto w-perfilW h-perfilH" />
                </div>
            </div>

            <h1 className="flex items-center justify-center font-poppins mt-4"> 
                Olá Júlia, o que <br /> gostaria de fazer hoje?
            </h1>

            <ul className="mt-[8vh]" id="categoria">
                {/* Links da NavBar */}

                <NavBarCategory category={"/home"} images={inicioImg} title={"Início"} />
                <NavBarCategory category={"/telemedicina"} images={telemedicinaImg} title={"Telemedicina"} />
                <NavBarCategory category={"/agenda"} images={agendaImg} title={"Agenda"} />
                <NavBarCategory category={"/historico"} images={historicoImg} title={"Histórico"} />
                <NavBarCategory category={"/favoritos"} images={favoritosImg} title={"Favoritos"} />
                <NavBarCategory category={"/galeria"} images={galeriaImg} title={"Galeria"} />


                {/* <NavBarCategory category={"/telemedicina"} images={telemedicinaImg} title={"Telemedicina"} />
                <NavBarCategory category={"/telemedicina"} images={telemedicinaImg} title={"Telemedicina"} />
                <NavBarCategory category={"/telemedicina"} images={telemedicinaImg} title={"Telemedicina"} />
                <NavBarCategory category={"/telemedicina"} images={telemedicinaImg} title={"Telemedicina"} /> */}

               
            </ul>
        </div>
    );
};

export default NavBar;